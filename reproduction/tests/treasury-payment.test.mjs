import test from 'node:test';
import assert from 'node:assert/strict';
import {compile} from '../tools/compile.mjs';
import {ethers,ganache} from '../tools/runtime.mjs';

// Synthetic units only: not a production mint price, cap or token allocation.
test('TEST ONLY: issuing-wallet payment plus NFT mint is atomic',async t=>{
 const {artifacts}=compile();
 const rpc=ganache.provider({chain:{chainId:31337,hardfork:'shanghai'},wallet:{deterministic:true,totalAccounts:3},logging:{quiet:true}});
 const provider=new ethers.BrowserProvider(rpc);provider.pollingInterval=10;
 const user=await provider.getSigner(0),treasury=await provider.getSigner(1);
 const u=await user.getAddress(),recipient=await treasury.getAddress(),TX={gasLimit:6000000n};
 async function mined(p){const tx=await p;return await tx.wait();}
 async function deploy(key,args){const a=artifacts[key];const c=await new ethers.ContractFactory(a.abi,a.bytecode,user).deploy(...args,TX);await c.waitForDeployment();return c;}
 async function fixture(type='NoBurnToken'){
  const token=await deploy('contracts/test/FixtureTokens.sol:'+type,type==='NoBurnToken'?[10000n,u]:[6,10000n,u]);
  const probe=await deploy('contracts/test/GenesisTreasuryPaymentProbe.sol:GenesisTreasuryPaymentProbe',[await token.getAddress(),recipient,100n,10n]);return {token,probe};
 }
 async function state(f,account=u){const p=await f.probe.getAddress();return await Promise.all([f.token.balanceOf(account),f.token.balanceOf(recipient),f.token.balanceOf(p),f.token.totalSupply(),f.token.allowance(account,p),f.probe.totalMinted(),f.probe.balanceOf(account)]);}
 async function unchanged(f,operation,account=u){const before=await state(f,account);await assert.rejects(async()=>mined(operation()),e=>{assert.equal(e.code,'CALL_EXCEPTION');assert.equal(e.receipt?.status,0);assert.equal(e.receipt.logs.length,0);return true;});assert.deepEqual(await state(f,account),before);}
 try{
  await t.test('ordinary no-burn ERC20 pays treasury and mints, with supply unchanged',async()=>{const f=await fixture();await mined(f.token.approve(await f.probe.getAddress(),200n,TX));await mined(f.probe.mintWithEmber(2,TX));assert.deepEqual(await state(f),[9800n,200n,0n,10000n,0n,2n,2n]);assert.equal((await f.probe.ownerOf(0)).toLowerCase(),u.toLowerCase());});
  await t.test('missing or insufficient allowance reverts payment and mint',async()=>{const f=await fixture();await unchanged(f,()=>f.probe.mintWithEmber(1,TX));await mined(f.token.approve(await f.probe.getAddress(),99n,TX));await unchanged(f,()=>f.probe.mintWithEmber(1,TX));});
  await t.test('insufficient balance and invalid quantity preserve state',async()=>{const f=await fixture();await mined(f.token.approve(await f.probe.getAddress(),1000n,TX));await mined(f.token.transfer(recipient,9950n,TX));for(const q of [1n,0n,11n])await unchanged(f,()=>f.probe.mintWithEmber(q,TX));});
  await t.test('fee-on-transfer is rejected rather than underpaying the owner',async()=>{const f=await fixture('FixtureToken');await mined(f.token.setFees(1000,0,await provider.getSigner(2).then(x=>x.getAddress()),TX));await mined(f.token.approve(await f.probe.getAddress(),100n,TX));await unchanged(f,()=>f.probe.mintWithEmber(1,TX));});
  await t.test('false and fake-success token returns cannot mint for free',async()=>{for(const type of ['FalseReturnToken','FakeTransferToken']){const f=await fixture(type);await mined(f.token.approve(await f.probe.getAddress(),100n,TX));await unchanged(f,()=>f.probe.mintWithEmber(1,TX));}});
  await t.test('second NFT callback rejection rolls back the whole batch payment',async()=>{const f=await fixture();const wallet=await deploy('contracts/test/GenesisCompatibilityProbe.sol:ProbeWallet',[await f.token.getAddress(),await f.probe.getAddress()]);const w=await wallet.getAddress();await mined(f.token.transfer(w,1000n,TX));await mined(wallet.approve(1000n,TX));await mined(wallet.configureRejectAt(2,TX));await unchanged(f,()=>wallet.mint(2,TX),w);assert.equal(await wallet.receivedCount(),0n);});
  await t.test('ERC721 callback reentry fails while the outer paid mint completes once',async()=>{const f=await fixture();const wallet=await deploy('contracts/test/GenesisCompatibilityProbe.sol:ProbeWallet',[await f.token.getAddress(),await f.probe.getAddress()]);const w=await wallet.getAddress();await mined(f.token.transfer(w,1000n,TX));await mined(wallet.approve(1000n,TX));await mined(wallet.configure(false,true,TX));await mined(wallet.mint(1,TX));assert.equal(await wallet.reentrySucceeded(),false);assert.equal(await f.probe.totalMinted(),1n);assert.equal(await f.token.balanceOf(recipient),100n);assert.equal(await f.token.totalSupply(),10000n);});
  await t.test('standard maximum allowance retains its ERC20 semantics',async()=>{const f=await fixture();await mined(f.token.approve(await f.probe.getAddress(),ethers.MaxUint256,TX));await mined(f.probe.mintWithEmber(1,TX));assert.equal(await f.token.allowance(u,await f.probe.getAddress()),ethers.MaxUint256);assert.equal(await f.token.balanceOf(recipient),100n);});
  await t.test('no-return token works only when exact payment succeeds',async()=>{const f=await fixture('NoReturnToken');await mined(f.token.approve(await f.probe.getAddress(),100n,TX));await mined(f.probe.mintWithEmber(1,TX));assert.equal(await f.token.balanceOf(recipient),100n);assert.equal(await f.probe.totalMinted(),1n);});
 }finally{await rpc.disconnect();}
});
