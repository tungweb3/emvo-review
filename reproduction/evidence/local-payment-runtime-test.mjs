import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {ethers,ganache,runtimeEvidence} from '../tools/runtime.mjs';
import {compile} from '../tools/compile.mjs';
const root=new URL('./',import.meta.url),code=JSON.parse(readFileSync(new URL('chain-token.json',root))).deployed_bytecode;
const wallet='0x1c651928150daddda9c2c040a9d4901d862f8ec4';
const rpc=ganache.provider({logging:{quiet:true},chain:{hardfork:'shanghai',chainId:31337},wallet:{deterministic:true,totalAccounts:2}});
const provider=new ethers.BrowserProvider(rpc);provider.pollingInterval=10;
const receipt={scope:'Exact Launch 884 runtime, synthetic local storage; selected issuing-wallet recipient, fixture cost only; not actual EMVO or final Genesis',asOfUtc:new Date().toISOString(),tokenRuntimeSha256:createHash('sha256').update(Buffer.from(code.slice(2),'hex')).digest('hex'),recipient:wallet,runtime:runtimeEvidence,checks:[],chainBroadcast:false};
const ok=(name,details={})=>receipt.checks.push({name,status:'PASS',details});
try{
 const user=await provider.getSigner(0),u=await user.getAddress(),addr='0x0000000000000000000000000000000000000e71',supply=ethers.parseEther('1000000000'),funds=ethers.parseEther('100'),cost=ethers.parseEther('10');
 await rpc.request({method:'evm_setAccountCode',params:[addr,code]});await rpc.request({method:'evm_setAccountStorageAt',params:[addr,ethers.keccak256(ethers.AbiCoder.defaultAbiCoder().encode(['address','uint256'],[u,0])),ethers.toBeHex(funds,32)]});await rpc.request({method:'evm_setAccountStorageAt',params:[addr,ethers.toBeHex(2,32),ethers.toBeHex(supply,32)]});
 const token=new ethers.Contract(addr,JSON.parse(readFileSync(new URL('LaunchToken.abi.json',root))),user);assert.equal(await token.totalSupply(),supply);assert.equal(await token.balanceOf(u),funds);ok('runtime fixture storage validated');
 const {artifacts}=compile(),a=artifacts['contracts/test/GenesisTreasuryPaymentProbe.sol:GenesisTreasuryPaymentProbe'];
 const forge=await new ethers.ContractFactory(a.abi,a.bytecode,user).deploy(addr,wallet,cost,100);await forge.waitForDeployment();assert.equal((await forge.paymentRecipient()).toLowerCase(),wallet);ok('payment recipient is the user-specified issuing wallet');
 await assert.rejects(async()=>{const tx=await forge.mintWithEmber(1,{gasLimit:1000000});await tx.wait();},e=>{assert.equal(e.code,'CALL_EXCEPTION');assert.equal(e.receipt?.status,0);return true;});assert.equal(await forge.totalMinted(),0n);assert.equal(await token.balanceOf(wallet),0n);assert.equal(await token.balanceOf(u),funds);ok('no allowance means mined revert with no payment or NFT');
 await(await token.approve(await forge.getAddress(),cost)).wait();await(await forge.mintWithEmber(1)).wait();assert.equal(await token.balanceOf(wallet),cost);assert.equal(await token.balanceOf(u),funds-cost);assert.equal(await token.allowance(u,await forge.getAddress()),0n);assert.equal(await token.balanceOf(await forge.getAddress()),0n);assert.equal(await token.totalSupply(),supply);assert.equal(await forge.totalMinted(),1n);assert.equal((await forge.ownerOf(0)).toLowerCase(),u.toLowerCase());ok('exact payment, NFT, finite allowance and unchanged supply');
 const raw=JSON.stringify(a);receipt.probeArtifactSha256=createHash('sha256').update(raw).digest('hex');receipt.status='PASS_PAYMENT_COMPATIBLE_FOR_THIS_STANDARD_RUNTIME';
}catch(e){receipt.status='ERROR';receipt.error=e.message;process.exitCode=1;}finally{await rpc.disconnect();writeFileSync(new URL('local-payment-runtime-test.receipt.json',root),JSON.stringify(receipt,null,2));console.log(JSON.stringify({status:receipt.status,recipient:wallet,checks:receipt.checks,error:receipt.error},null,2));}
