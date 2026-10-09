import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {TOKEN,SELECTOR,TOPIC} from '../web/token-config.mjs';
import {word,amount,assertReadRequest,createRpc,readSnapshot,validateSnapshot} from '../web/fee-reader.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const cases=[];
const test=async(name,fn)=>{await fn();cases.push({name,status:'PASS'});};
const text=s=>'0x'+word(32)+word(s.length)+Buffer.from(s).toString('hex').padEnd(64,'0');
function mock(options={}) {
  return async(method,params)=>{
    assertReadRequest(method,params);
    if(method==='eth_chainId')return options.wrongChain?'0x2':'0x1';
    if(method==='eth_getBlockByNumber')return {number:'0x'+TOKEN.deploymentBlock.toString(16),hash:'0x'+'1'.repeat(64),timestamp:'0x68e5f5af'};
    if(method==='eth_getLogs'){if(options.logError)throw Error('provider unavailable');return [];}
    if(method!=='eth_call')throw Error('unexpected read');
    const data=params[0].data;
    if(data===SELECTOR.name)return text(TOKEN.name);
    if(data===SELECTOR.symbol)return text(TOKEN.symbol);
    if(data===SELECTOR.decimals)return '0x'+word(18);
    if(data===SELECTOR.supply)return '0x'+word(TOKEN.totalSupplyAtomic);
    if(data.startsWith(SELECTOR.position))return '0x'+[TOKEN.currency0,options.wrongToken?'0x'+'2'.repeat(40):TOKEN.address,12500,60,TOKEN.hook,0,1,TOKEN.issuer].map(word).join('');
    if(data===SELECTOR.requesterBps)return '0x'+word(8000);
    if(data.startsWith(SELECTOR.slot0))return '0x'+[1,1,0,options.wrongFee?3000:12500].map(word).join('');
    if(data.startsWith(SELECTOR.owed))return '0x'+word(0);
    if(data.startsWith(SELECTOR.simulation)){if(options.simulationError)throw Error('simulation unavailable');return '0x'+word(10001)+word(10002);}
    throw Error('unexpected selector');
  };
}
await test('healthy public read preserves separate assets and floor rounding',async()=>{
  const value=await readSnapshot(mock());assert.equal(value.assets.ETH.estimatedRequesterAtomic,'8000');assert.equal(value.assets.EMBEO.estimatedRequesterAtomic,'8001');assert.equal(value.assets.ETH.paidEventAtomic,'0');
});
await test('wrong chain stops fee display',()=>assert.rejects(()=>readSnapshot(mock({wrongChain:true})),/wrong chain/));
await test('wrong token in actual pool stops display',()=>assert.rejects(()=>readSnapshot(mock({wrongToken:true})),/pool key/));
await test('manifest 3000 cannot masquerade as effective fee',()=>assert.rejects(()=>readSnapshot(mock({wrongFee:true})),/effective fee/));
await test('failed history stays unknown, never zero',async()=>{const v=await readSnapshot(mock({logError:true}));assert.equal(v.history.complete,false);assert.equal(v.assets.ETH.paidEventAtomic,null);assert.equal(v.assets.EMBEO.poolCollectedAtomic,null);});
await test('failed simulation preserves owed while unknown amounts stay null',async()=>{const v=await readSnapshot(mock({simulationError:true}));assert.equal(v.assets.ETH.estimatedRequesterAtomic,null);assert.equal(v.assets.ETH.owedAtomic,'0');});
for(const method of ['eth_sendTransaction','eth_sendRawTransaction','personal_sign','eth_signTypedData_v4','wallet_switchEthereumChain'])await test('reject '+method,()=>assert.throws(()=>assertReadRequest(method,[])));
await test('unapproved RPC is refused before any HTTP request',()=>assert.throws(()=>createRpc('https://untrusted.example')));
await test('claim and withdraw cannot be executed by transport',()=>assert.throws(()=>assertReadRequest('eth_call',[{to:TOKEN.factory,data:'0xdeadbeef',value:'0x1'},'0x1'])));
await test('scope mutation invalidates cached snapshot',async()=>{const v=await readSnapshot(mock());v.membershipEnabled=true;assert.throws(()=>validateSnapshot(v));});
await test('wrong cached pool invalidates saved data',async()=>{const v=await readSnapshot(mock());v.poolId='0x'+'0'.repeat(64);assert.throws(()=>validateSnapshot(v));});
await test('partial data incorrectly filled with zero is rejected',async()=>{const v=await readSnapshot(mock({logError:true}));v.assets.ETH.paidEventAtomic='0';assert.throws(()=>validateSnapshot(v));});
await test('atomic amounts never pass through floating point',()=>{assert.equal(amount('1000000000000000000000000000'),'1,000,000,000');assert.equal(amount(null),'未確認');assert.equal(amount('1'),'< 0.00000001');assert.throws(()=>amount('-1'));});
await test('duplicate or failed log responses cannot promote amounts',()=>assert.throws(()=>assertReadRequest('eth_getLogs',[{address:TOKEN.factory,fromBlock:'0x1',toBlock:'0x2',topics:[TOPIC.paid,'0x'+word(TOKEN.issuer)]}])));
await test('saved live snapshot follows the same validation contract',async()=>validateSnapshot(JSON.parse(await fs.readFile(path.join(root,'web/data/latest.json'),'utf8'))));
await test('page uses approved logo and token, with no wallet or inline script',async()=>{
  const html=await fs.readFile(path.join(root,'web/index.html'),'utf8');
  assert(html.includes(TOKEN.address));assert(html.includes('emberevo-flame-256.png'));assert(!/<script(?![^>]*src=)[^>]*>/i.test(html));
  assert(!/ethereum\.request|connectWallet|sendTransaction|approve\(/.test(await fs.readFile(path.join(root,'web/app.mjs'),'utf8')));
});
const report={at:new Date().toISOString(),cases,total:cases.length,failures:0,scope:'Behavioral positive and task-shaped negative controls; not a blockchain security audit.'};
await fs.mkdir(path.join(root,'.rd'),{recursive:true});
await fs.writeFile(path.join(root,'.rd','test-results.json'),JSON.stringify(report,null,2));
console.log('PASS '+cases.length+' meaningful read-only and interpretation checks');
