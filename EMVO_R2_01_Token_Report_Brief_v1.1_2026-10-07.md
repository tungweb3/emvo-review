# EmberEvo ($EMVO) — Token Pre-Launch Report, Round 2
## Focused delta and evidence-closure brief v1.1

Date: 2026-10-07 (Asia/Taipei)
Package: `emvo-token-review-r2/2026-10-07/v1.1`
Mode: **One non-deploying Report. No token launch, no website build, no financial action.**
Baseline: v3.3 ReviewFix1 reviewed in Round 1 at `902075d1dfb772738a074f06f56f7aeea9240fd8`.
Latest changes: **86% pool / 10% swarm / 4% owner-selected Paying Wallet**, no added vesting/use restriction; Paid Genesis is **EMVO payment to this wallet**, not burn. File 05 adds scoped new Check, runtime and fixture evidence.

> Prepare an evidence-linked second report, not a predetermined GO. The first report remains historical evidence; the owner's later decision changes one requirement, not historical test results.

## 0. What is different about this round?

The first report read the specification and public policies but did not inspect contract source/runtime or run RPC/fork tests. It left important launch mechanics unresolved. This job must seek the missing evidence rather than repeat the entire world strategy or demand a burn feature the owner no longer requires.

Priority order:
1. Establish the exact eligible standard launch kind/policy and the relationship between input, defaults, allocation and recipients.
2. Establish Token/Factory/Hook/fee collector/LP/distributor authority and actual fee accounting/distribution.
3. Assess standard ERC-20 payment compatibility for the future Genesis contract, without building or deploying Genesis.
4. Reconcile every original F-01...F-09 finding; give minimal next actions and clearly bounded Q/L/V/G conclusions.

Exclude new ecosystem-hall Website work, dashboard styling, full-market research, competitor redesigns and renewed hackathon research. Genesis and world features remain part of the project, but their complete implementation is not this token report's deliverable.

## 1. Required inputs and precedence

Fetch `EMVO_R2_INPUT_MANIFEST.json` at the NEW submission commit named in the objective. Read all five Markdown files in its `sources` array in full. Use exact bytes and UTF-8; chunk long files when necessary.

| Role | File |
|---|---|
| This task brief | EMVO_R2_01_Token_Report_Brief_v1.1_2026-10-07.md |
| Current scope, finding map and proposed corrections | EMVO_R2_02_Active_Scope_and_Finding_Map_v1.1_2026-10-07.md |
| Original first report, byte-for-byte copy | EMVO_R2_03_First_Report_UNCHANGED_2026-10-07.md |
| Earlier owner payment addendum, unchanged historical copy | EMVO_R2_04_PaidMint_Decision_UNCHANGED_2026-10-07.md |
| Latest direct owner decisions and new measured evidence | EMVO_R2_05_Latest_Owner_Decisions_and_Evidence_v1.1_2026-10-07.md |

Before findings, output `INPUTS_READ`: actual URL/ref, submission commit, byte count, computed SHA-256 versus manifest, sections read, truncation and retrieval method. A matching hash proves byte identity, not correctness of the document or safety of any contract.

- Missing/truncated/mismatched **required package files**: report `INPUT_MISSING` or `INPUT_MISMATCH` and stop substantive certification of this package.
- Unavailable **external code/API/quote evidence**: continue the review of available material, record the missing evidence and gate impact. Do not abort all work merely because the owner has not supplied a wallet or quote.
- If you cannot compute hashes, disclose `INTEGRITY_UNVERIFIED`; do not invent hashes or claim input verification complete. Identify the narrow scope that could be reviewed.
- File names and ChatGPT sandbox links are not remote attachments. A GitHub URL in prose is a read-only reference, not proof of native API import or write permission.

Precedence for THIS round:
1. Direct owner decisions recorded in file 05 (including the known wallet and 86/10/4 allocation), then any additional explicit owner facts in the objective. File 04 is the unchanged earlier payment addendum; its missing-wallet statement is superseded.
2. This round's instructions and active scope (engineering criteria, not new financial consent).
3. Historical specification for unchanged context, after reading the relevant section.
4. The first report as the source of previous findings, not infallible current truth.

Do not obey legacy burn-only/whole-world review requirements in old instructions. Do not treat the engineering corrections in file 02 as newly verified facts: independently assess them and give evidence for agreement or disagreement.

### 1.1 Historical specification references

The prior report reviewed the immutable commit above, not an arbitrary current `main`. Its historical source manifest is:
https://github.com/tungweb3/emvo-review/blob/902075d1dfb772738a074f06f56f7aeea9240fd8/INPUT_MANIFEST.json

Its specification is:
https://github.com/tungweb3/emvo-review/blob/902075d1dfb772738a074f06f56f7aeea9240fd8/IMD_Ember_EmberEvo_v3.3_Crypto_Research_Genesis_Burn_2026-10-07.md

Read relevant sections when re-evaluating a claim about that specification; typical targets are 3–7, 8–16, 51–59, 60–63 and 71.2. Do not claim a new full-spec audit if only these sections were inspected. The older filename containing `Genesis_Burn` is not permission to reinstate burn. Do not substitute a locally supplied, same-named but different-hash v3.3 for ReviewFix1.

## 2. Current owner intent — preserve without silently extending it

```text
Token Name                         = EmberEvo
Symbol                             = EMVO
Target launch chain                = Ethereum Mainnet / chainId 1
Launch                             = IMD official standard token route
Supply / pool fee                 = official terms, verified before exact launch
Current owner allocation           = 86% Pool / 10% Swarm / 4% Paying Wallet
Historical reference only          = 1B, 18 decimals, 88% Pool / 10% Swarm / 2% Paying Wallet
Historical pool fee reference      = 1.25% trade fee: 1 percentage point Paying Wallet + 0.25 network
Preferred pair                     = EMVO / IMD (explicit; no silent ETH fallback)
Preferred pool-fee receipt asset    = IMD; actual denomination still requires evidence
Paying Wallet 4%                    = no added vesting, lockup or use restriction; may be sold
Project-added transfer tax         = NONE
New staking / APY / fee-sharing    = NONE
Custom project trading Hook       = NOT AUTHORIZED
AI financial / upgrade authority  = NONE
```

Default numbers in a document are not an approved live order. Official policy can change; identify differences and seek owner decisions rather than silently changing the chain, pair, allocation, fee or control model. Existing official Hooks are not the same as authorizing a custom EMVO trading Hook.

### 2.1 Definitive Genesis change

```text
Paid Mint payment asset            = EMVO
Paid Mint price                    = MINT_PRICE_EMVO, still TBD/frozen before opening
Payment recipient                  = owner's explicitly confirmed EMVO launch Paying Wallet
Required burn                      = NO
Automatic later burn               = NO
Recipient's use                    = owner-managed; may hold, transfer, use or sell
Automatic NFT-to-EMVO redemption    = NO
Normal Paid Mint                   = exact payment + NFT mint, same atomic transaction
Free / valid remediation EMVO cost = ZERO
```

The mint payment does not automatically convert to IMD. It is not token backing, staking principal or a burn. Do not add a partial burn, mandatory revenue split or mandatory reinvestment. The owner can later make other choices, but this brief does not make them.

Keep the original tokenId-based free entitlement, current-owner check, shared `claimed[tokenId]`, F/R/P capacity isolation, historical minted counters and price freeze. Amounts, qualification window and supply are not determined in this round. All Genesis code/deployment/opening remains a separate Gate G.

### 2.2 Known intended wallet; missing final instance and quote

Owner-selected intended launch payer and 4% remainder recipient: `0x1C651928150DADDDA9C2C040a9D4901d862f8eC4`. The same address is intended for later Genesis payment receipts. EIP-55 formatting was checked locally; control, actual quote payer and final deployment recipient are not proven. No EMVO deployment address, exact quote or final Genesis is supplied. TEST-ONLY probes, scripts and bounded public sample evidence are in `reproduction/` and `evidence/`; these are not production contracts or an independent audit.

Never substitute the IMD API fee `payTo`, the official launch operator, a policy owner, a fee collector, or the wallet that merely paid an earlier report. Payment-wallet identity, deployment sender, allocation recipient, fee beneficiary, contract admin and LP owner are separate questions.

## 3. Evidence acquisition — the main value of Round 2

Use public read-only retrieval. Begin with current official Docs, Launch UI, capabilities, policy list, version and OpenAPI; discover source/verification endpoints from those records or verified deployments. Primary starting URLs appear in section 12.

Produce an `ACQUISITION_LOG` with:
- question / exact URL or read-only RPC method;
- retrieval time in UTC, status or error, response digest when available;
- chain, address, block number AND block hash, or repository commit;
- what the response actually supports and what it cannot support;
- selected policy kind/version and why it applies to this route.

If an HTTP source fails, make a bounded attempt through another independent legitimate public read path. Do not scrape indefinitely, pay for access, bypass access controls, install unaudited software with secrets or replace the evidence with memory. List the minimal evidence to request from IMD when retrieval is blocked.

Distinguish:
`PROJECT_DOCUMENT` / `OBSERVED_HTTP` / `SOURCE_INSPECTED` / `RUNTIME_MATCHED` / `OBSERVED_ONCHAIN` / `SIMULATED` / `UNVERIFIED`.

An ABI, explorer label or published policy is not proof of deployed runtime behavior. A source match is not a security audit. A same-template test is not an EMVO-instance test. Preserve nulls when no block, address or output exists.

## 4. Standard route and effective allocation — F-02 / F-05 / F-06 / F-07

Determine which standard route actually meets this request. Compare relevant live kinds without automatically selecting the numerically highest policy or `custom_token`. Record policy selection rules, chainId, pairWith, expected token template and any custom-contract/site work bundled by that route.

The first report observed policy fields resembling 80/10/10 and UI copy 88/10/2, but did not establish whether those fields describe the same effective allocation. Reconcile, do not assume either:
- denominator of `poolBps` (total supply or a remaining share);
- when UI or input overrides apply;
- effective default for the selected kind and policy;
- mapping of Pool, Swarm distributor and remaining allocation to actual recipients;
- semantic scope of `treasuryBps`, `contributor*`, caps and locks;
- whether the selected 4% remainder is immediately transferable and separate from any Swarm lock.

Explicit `poolBps=8600` and `remainderTo=0x1c651928150daddda9c2c040a9d4901d862f8ec4` express the owner-selected 86/10/4 allocation. The free Check accepts this request; its planned result is not a deployed allocation or exact Quote. Historical 88/10/2 is a UI default, no longer this project's selection. Present default-resolved and explicit-input alternatives, their effects and evidence. Do not submit either request. Do not reinstate 88/10/2, adopt 80/10/10, or switch to a bespoke token without a new direct owner decision.

Give a NON-EXECUTABLE proposed launch input/field checklist, with unresolved public wallet and kind fields visibly marked. Do not return a fabricated valid quote or force an unsupported API field. The current REPORT input itself must not contain operational `onchain`, launch `chainId`, `pairWith` or launch `economics` parameters.

## 5. Full authority matrix — F-03

For each relevant Token, Factory/policy, Proxy/implementation/ProxyAdmin, Hook, collector, LP/position controller and Swarm distributor, record:

```text
selected route + chain + contract address + role
function/signature/selector + reachable capability
role holder + how established + can it change?
upgrade/pause/mint/confiscation/tax/fee-recipient/rescue/LP migration powers
source commit / runtime hash / read-only call / block
limitations + owner acceptance still required
```

The Round-1 observation of equal `owners.*` values is a historical HTTP observation, not proof that those roles are deployed, powerful in the same way, or different from the absent owner's wallet. Preserve its observed values as attributed history, then verify applicability and capabilities.

Never ask the owner to accept “all control is elsewhere” as an established premise without evidence. Likewise, never promise the owner can edit fixed supply, frozen Genesis rights, or official LP/Hook behavior merely because this is their project.

## 6. Fee origin, accounting and actual receipt — F-04

Highest-priority unanswered practical question: **does EMVO/IMD deliver the paying-wallet share in IMD only?** Do not assume yes from the pair or assume mixed assets from generic AMM knowledge.

For IMD->EMVO and EMVO->IMD separately, map:

| Case | Fee basis/rate | Accrued asset/location | Claim/distribution call | Conversion | Recipient and actual asset | Trigger/gas | Evidence |
|---|---|---|---|---|---|---|---|
| Buy EMVO | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | required |
| Sell EMVO | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | UNVERIFIED | required |
| Plain transfer | template-dependent | n/a | transfer | not assumed | exact receipt to verify | separate | required |
| Future Paid Genesis | quantity x frozen price | no required burn | transferFrom in mint flow | none requested | EMVO to confirmed Paying Wallet | separate | template/spec vs G |

Inspect rounding, zero-fee cases, repeated distribution, failed transfers, permissionless triggering versus immutable recipient, recipient mutation, internal conversion, and minimums. If internal swaps exist, explain price protection and control. Distinguish the project ban on AI auto-swaps from any verified protocol-internal conversion.

Do not call distribution, approve or swap on a public network. Local fork simulation is permitted only in an isolated environment without signer secrets or broadcast capability. Tag any comparison pool as same-version evidence only after demonstrating comparability.

Do not replace the owner's IMD-only preference with an automatic acceptance of mixed assets. If the result is mixed/other/unknown, identify the exact owner decision needed. The new decision to receive EMVO from Genesis does not answer this separate pool-fee question.

## 7. New required payment compatibility — F-01 disposition and Gate G boundary

Set the OLD burn-specific launch dependency to **SUPERSEDED_BY_OWNER_DECISION**, not PASS. Preserve R1's historical NOT_RUN/BLOCKED results; distinguish the later local measurements in file 05 rather than overwriting them. Presence or absence of `burn` is no longer the acceptance criterion for this mint design.

Assess the real selected Token template, if available, for `approve`, `allowance`, `transferFrom`, exact transfers, contract recipients, failure return values and transfer restrictions. ERC-20 defines an interface, not proof that this deployment behaves correctly.

Proposed future paid-mint checks (only execute against supplied/verified code; otherwise TEST_PLAN):
1. Exact EMVO payment to the explicitly configured recipient plus quantity NFT mint.
2. Insufficient balance/allowance or false/failed token transfer reverts all mint effects.
3. ERC721 receiver failure or reentrancy reverts same-transaction payment and counters.
4. No owner-configured recipient can be supplied by an untrusted user/artifact.
5. Free/valid remediation charge zero EMVO and share the consumed-entitlement ledger.
6. F/R/P and historical minted counts remain isolated; NFT burns do not replenish slots.
7. No required burn, retained backing, automatic redemption or hidden swap.
8. Payment != burn in events/UI/accounting; same-wallet payer/recipient and donated Forge balances need explicitly defined treatment before asserting simple balance deltas.

Do not produce a deployment-ready Genesis contract in this report. A local harness may test a real template but must not be reported as an audit of the future final Forge. Price, supply, deadline, metadata and recipient mutability remain separate product decisions; no new timelock/vesting/redemption is adopted by this brief.

## 8. Payment safety and candidate Q input — F-08

Keep three operations separate:
- this single Report request;
- a future non-paying Check of a proposed TOKEN launch;
- a later exact launch quote and owner-signed payment.

Review documented action, inputHash, policyVersion, quote terms/expiry, asset/network/atomic amount/decimals/payTo, spender, nonce and signature scope. A policy gas ceiling is not evidence that the owner pays that amount; determine who actually funds each action. Never fabricate quote output or suggest bypassing official validation.

Check does not hold a price; a stored input/policy is not forever current. Inspect how actual quotes are pinned and expired. A change to an unrelated catalog entry is not automatically proof that a still-valid pinned quote changed, but unexplained changes to the intended order/authority require fresh owner review.

Retries must inspect the original order and use the official idempotent flow; do not create a second token or charge for a new review without approval. This report never requests bearer tokens, signatures, private keys or seed phrases. Redacted quotes may be inspected only if actually supplied.

## 9. Other first-report issues: retain, correct or defer explicitly

Use file 02 to track original F-01...F-09 and G-/I-/D- items. Do not silently rewrite the original report.

Required distinctions:
- `plain transfers` does not prove burn absence; now historical/context only.
- remediation must be provably within the original frozen qualification rule/window, but may correct a genuinely omitted tokenId. Membership in the erroneous output list cannot be required as the only proof. Publisher/root authority still needs specification and Gate G tests.
- a requirement already written in specification text can still lack implemented validator/tests; distinguish a document omission from missing implementation.
- paying-wallet fee rights and contract admin powers are separate.
- the research budget, peer comparisons and hackathon prototype are not mandatory deliverables for this round.

An apparent resolution must say whether it is requirement supersession, better evidence, an actual test fix, or reassignment to the correct gate.

## 10. Required single report output

Use the live task's accepted output contract. Preferred documented report path: `artifacts/report.md`; do not demand a different path if the selected Report skill pins another one. Do not invent multi-file output metadata. Tables/code snippets may be included within the one report.

Required sections:
1. **Executive delta**: what changed since Round 1; top launch-relevant unknowns now.
2. **INPUTS_READ and acquisition log**: current four files, historical sections inspected, public sources and blocked attempts.
3. **F-01...F-09 disposition table**, all rows preserved: R1 statement/source; current owner requirement; new evidence; status; gate; minimal closure; responsible party.
4. **Effective allocation and recipient map**, including policy-kind/version applicability and draft non-executing Q field plan.
5. **Authority matrix** with source/block/function evidence and explicit unknowns.
6. **Fee matrix**, plus separate statement of IMD-only receipt: supported, contradicted, or not established with evidence.
7. **Payment compatibility and tests**: real code tested, exact environment/commands/results; TEST_PLAN/NOT_RUN otherwise.
8. **Minimal specification edits**, including no-burn->payment migration, not a full world rewrite; do not mutate the repo.
9. **Separate gate conclusions** R/Q/L/V/G. Mark D/I/H **NOT_REVIEWED_THIS_ROUND** and retain prior limitations rather than promoting them to passed.
10. **Operator next steps**: what can be prepared without money, what specific data the owner must supply, and what exact questions/code/transactions should be requested from IMD.
11. **Limits and independence**: what was NOT performed; number and provenance of actually evidenced reviewers, not assumed from the word Swarm.

Suggested finding status vocabulary:
`OPEN_EVIDENCE_GAP`, `CONFIRMED_ISSUE`, `RESOLVED_BY_EVIDENCE`, `SUPERSEDED_BY_OWNER_DECISION`, `PARTLY_CORRECTED`, `DEFERRED_TO_G`, `NOT_REVIEWED_THIS_ROUND`.

Evidence grade, Test (`NOT_RUN/PASS/FAIL/BLOCKED`), Severity and Gate are separate columns. Do not call an unknown a reproduced exploit or a requirement change a test PASS.

### 10.1 Gate meanings

- **R:** Are the mandatory inputs read and the scope reviewable?
- **Q:** Which draft fields can be prepared now without payment, and what remains unresolved? A missing final wallet need not prevent source research or a field-level draft; it does prevent pretending the draft is an executable exact order.
- **L:** Is enough evidence available to recommend a later exact owner approval? The reviewer cannot grant approval. With no exact quote or confirmed recipient, explicitly say **NOT AUTHORIZED / EVIDENCE INCOMPLETE** even if other findings are resolved.
- **V:** Actual deployment verification is **NOT_RUN / INSTANCE NOT SUPPLIED**. Do not infer that no deployment exists anywhere solely from this package's missing address.
- **G:** Future Genesis contract readiness is separate; no completed Forge is supplied here.

A useful result is not necessarily GO: obtaining the exact factory source and resolving the fee path, or giving a precise reproducible evidence request, is meaningful progress. A second generic “no wallet, cannot review anything” response is not adequate use of available sources.

## 11. Permissions and boundaries

Allowed: public GETs, read-only RPC/log/code, safe local analysis and bounded non-broadcast fork tests with verifiable code. Scratch files for reproductions are local only and not production implementation. No secrets are present or requested.

Forbidden: mainnet/testnet broadcasts, financial signatures, swap/approve/distribution, deploying Token/NFT/Hook/Registry, paid subjobs/schedules, website implementation, input-repository mutation, production publication and event registration. The operator may separately approve payment for this ONE Report service only. Routine platform work receipts are not authorization to operate project assets.

Report delivery may be public under the selected skill; no private input or signature should be included. Public output in a platform-controlled report repository does not mean the input `tungweb3/emvo-review` repository may be altered. No website/IPFS deployment is requested.

## 12. Primary source starting points and preparation limits

- IMD Docs: https://imd.fun/docs/
- Launch UI (observe, do not submit): https://explorer.imd.fun/launch
- https://api.imd.fun/requests/capabilities
- https://api.imd.fun/launch/policies
- https://api.imd.fun/version
- https://api.imd.fun/openapi.json
- ERC-20: https://eips.ethereum.org/EIPS/eip-20
- Standard token implementations/extensions: https://docs.openzeppelin.com/contracts/5.x/api/token/erc20
- Proxy reference, only where actually applicable: https://docs.openzeppelin.com/upgrades-plugins/proxies

The original GPT v1.0 preparation read static Docs/UI and had failed direct API reads. File 05 now provides separately attributed later public GET/RPC/free Check and local experiment evidence; independently assess its scope and reproducibility. The first report's v29/08:05 UTC observations remain its attributed historical findings, not this package's fresh chain verification.

The original v1.0 preparation did not run contract tests. The local team measurements supplied in file 05 are test-only evidence; no Quote, payment, deployment, public GitHub write or R2 Swarm run has occurred in this v1.1 preparation. This R2 package does not claim the entire v3.3 mother specification was rewritten; it expressly overlays the latest owner payment decision for this bounded review.
