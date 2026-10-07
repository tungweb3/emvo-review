import {createRequire} from 'node:module';
import {readFileSync,existsSync,realpathSync} from 'node:fs';
import {resolve,dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const localConfig = join(root, '.rd/runtime.config.private.json');
// Prefer locally installed locked packages. For this private initial workbench,
// explicitly recorded existing packages are read without changing their repo.
const dependencyRoot = realpathSync(process.env.EMBER_TEST_RUNTIME_ROOT ||
    (existsSync(join(root,'node_modules/solc')) ? root :
      JSON.parse(readFileSync(localConfig,'utf8')).dependencyRoot));
const requirePackage = createRequire(join(dependencyRoot, 'package.json'));
const expected = {solc:'0.8.30',ethers:'6.15.0',ganache:'7.9.2','@openzeppelin/contracts':'5.4.0'};
const hash = data => createHash('sha256').update(data).digest('hex');
const packages = {};
for (const [name,version] of Object.entries(expected)) {
  const packagePath = join(dependencyRoot,'node_modules',name,'package.json');
  const bytes = readFileSync(packagePath);
  const actual = JSON.parse(bytes);
  if (actual.version !== version) throw new Error(`Runtime version mismatch: ${name}`);
  packages[name] = {version:actual.version,packageSha256:hash(bytes)};
}
const nodeMajor = Number(process.versions.node.split('.')[0]);
if (nodeMajor !== 24) throw new Error('This measured harness requires Node 24.x');
export const solc = requirePackage('solc');
export const ethers = requirePackage('ethers');
export const ganache = requirePackage('ganache');
export const openzeppelinRoot = join(dependencyRoot,'node_modules/@openzeppelin/contracts');
const entries = {};
for (const name of ['solc','ethers','ganache']) {
  const entry = realpathSync(requirePackage.resolve(name));
  entries[name] = {path:entry,sha256:hash(readFileSync(entry))};
}
const soljson = join(dependencyRoot,'node_modules/solc/soljson.js');
export const runtimeEvidence = Object.freeze({
  node:process.version, executable:realpathSync(process.execPath),
  executableSha256:hash(readFileSync(process.execPath)),dependencyRoot,packages,entries,
  compiler:solc.version(),compilerPayloadSha256:hash(readFileSync(soljson)),
  dependencyLockSha256:hash(readFileSync(join(dependencyRoot,'package-lock.json'))),
  evmVersion:'shanghai',localOnly:true,
  limitations:['Ganache Shanghai EVM; no latest-mainnet EVM, RPC, fork, Safe or DEX measurement',
    'Existing package lock provenance is recorded; no new dependency installation or security endorsement']
});
