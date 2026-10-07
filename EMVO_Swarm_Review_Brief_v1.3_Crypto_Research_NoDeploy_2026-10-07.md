# EmberEvo ($EMVO) — Swarm Review Brief v1.3 — Crypto Research + Genesis Burn

Date: 2026-10-07  
Mode: **NON-DEPLOYING POLICY / SPECIFICATION REVIEW — ReviewFix1**
Revision note: Engineering review candidate only. The refined true-burn launch gate is a proposed closure rule, not a new Owner financial approval or a claim about the actual IMD template.  
Companion specification: `IMD_Ember_EmberEvo_v3.3_Crypto_Research_Genesis_Burn_2026-10-07.md`  
Companion SHA-256: `ba57f63ef3d7cc302b8c4b354d242438baf79d9f57aa9d9a37d97e20f3dd5847`  
Supersedes: `EMVO_PreLaunch_Swarm_Review_Brief_v1.2_NoDeploy_2026-10-07.md`  
Historical brief SHA-256: `a1626bdd0afdd7819d17170765d21f44f7b2252cb33d9d4fe5359cea5ca80107`

> This review may identify a route toward launch. It does not authorize a launch, a financial signature, a transaction, a new paid job, or production publication.

## 0. Operator instructions — select the correct job before paying

Use an available **non-deploying Report / research job**, normally `action=job.open`. A `research-report` skill is a documented candidate; verify its availability and actual plan in the live catalog / Check before using it. Do not combine `skill`, `template` and `steps` as if interchangeable.

Do NOT select Token, Launch company, Contracts deployment or workflow release for this review. The platform's code `Audit` template is appropriate only when an existing repository and exact commit containing the code are supplied. A Markdown strategy is not a code audit. `research` panel and `research-report` are different modes; pick one the live system supports and label its output honestly.

For this review's accepted input: omit `onchain`, deployment `chainId`, `pairWith`, launch `economics`, site hosting and deploy permissions. The intended chain/Pair discussed in the **objective are facts to review**, not operational fields granting a deployment. Use `github=false` where the selected route accepts it, and do not enable IPFS/site publication. That is not a confidentiality promise: assume job objectives/results may be public.

The owner can explicitly pay the one selected non-deploying review service. That payment does not authorize reviewers to spend again, run paid schedules, create child launches or handle wallet credentials. Ordinary platform work receipts are not permission to conduct financial transactions.

### 0.1 Package intake — critical

Before substantive conclusions, report:

```text
INPUTS_READ
- filename / role
- exact bytes and SHA-256 computed from received bytes
- actual section range read
- truncated / unavailable / encoding-modified?
- source of access: supported attachment / accepted artifact / repo+commit
```

All FOUR current Markdown documents listed in INPUT_MANIFEST.json must be available: the specification, this brief, the synchronized hackathon addendum and its candidate gap review. File names or a ChatGPT `sandbox:` link alone do not give this system file access. Never invent a file hash, `submissionHash`, repository, attachment capability or API field. If missing or truncated, return `INPUT_MISSING` with the exact problem; do not certify the unseen specification.

The current Docs distinguish template="research" (4,000 objective characters) from general objectives (8,000), with a 16 KiB body limit. The companion English objective deliberately stays below 4,000; verify the selected route at submission. Do not paste the long input documents into the objective. A minimal, owner-approved, public, sanitized review repo with pinned commit is a possible delivery route if supported. Existing accepted job artifacts can also be supplied through the documented `inputs` metadata; arbitrary local files are not automatically accepted inputs. Do not publish private repositories or credentials to solve access.

At submission time the operator must re-check the live limits and effective plan. If it is impossible to prove that the full inputs reach the reviewer, stop before paying rather than silently reviewing a summary.

## 1. Owner decisions — do not redesign these without a demonstrated incompatibility

```text
Name = EmberEvo
Symbol = EMVO
Display = $EMVO
Target chain = Ethereum Mainnet / chainId 1
Launch mechanics = IMD official standard/default
Current documented reference = 1B / 18 decimals / 88% Pool / 10% Swarm / 2% Paying Wallet
No additional vesting or lockup
The 2% remains usable/transferable and may be sold; no project-imposed protocol use restriction
Preferred pair = EMVO / IMD (explicit selection, not a blank/default field)
Desired fee receipt asset = IMD, not yet demonstrated
Financial authority = owner-approved manual payments; bounded research batches require separate approval
No project-added transfer tax, staking/APY, holder yield, custom v4 Hook or buyback V1
Genesis = Free + Paid Forge + eligibility remediation, separately gated
Paid Genesis cost = BURN, not project/Treasury revenue; no redemption
Research = Crypto-first tokens and NFTs, not only IMD or AI tokens
Ecosystem Hall / Genesis identity / Dream Hall remain separate, integrated products
Bounded recurring research = proposed and NOT ENABLED; no quotas or prices invented
Genesis price/capacity/qualification specifics remain TBD until their defined stage
```

Changing the owner intent is not a bug fix. If the platform cannot meet it, explain the exact incompatibility and the decision required. Do not silently select ETH, resurrect vesting, change token name/symbol, or mint a different token.

## 2. Evidence discipline

Separate these dimensions:

| Dimension | Allowed labels |
|---|---|
| Evidence | DOCUMENTED_ONLY, SOURCE_VERIFIED, SIMULATED, OBSERVED_ONCHAIN, UNVERIFIED, CONTRADICTED, NOT_APPLICABLE |
| Test | NOT_RUN, PASS, FAIL, BLOCKED |
| Severity | CRITICAL, HIGH, MEDIUM, LOW, INFORMATIONAL |
| Gate | R, Q, L, V, G, D, I, H |

`VERIFIED` without a method and reproducible evidence is not sufficient. Each load-bearing finding needs its source, retrieval timestamp, chain/address, block number + block hash or code commit, exact relevant behavior, and limitations.

Do not prefill PASS/VERIFIED in a template. Do not treat majority agreement, accepted-work receipts, marketing pages, or the document title as evidence that a contract is safe. Label whether reviewers share an operator/runtime or are independent; multiple seats alone do not establish independence.

### 2.1 Current evidence caveat

The author prepared v3.3 from the supplied complete Rev.3 and Brief v1.2, then synchronized the existing hackathon companions. Current official static IMD Docs, Launch UI, ERC-20 and OpenZeppelin ERC20 documentation were reread. The launch UI now displays Ethereum wording; earlier Robinhood copy was a historical snapshot, not a live chain-selection result.

No project-specific Paying Wallet, authenticated Check/Quote, exact Factory/runtime, production research/World source, verified burn transaction or executed contract test was supplied or created. GitHub main and final hackathon rules were not rechecked in this revision. Neither a document title nor the public static policy certifies the instance or authorizes payment. Read the actual live evidence independently where permitted.

### 2.2 No time-travel evidence

Before launch, evaluate the exact intended Factory/template/source and comparable same-version behavior. Do not require an EMVO transaction receipt that cannot exist before EMVO deploys. Do not approve launch solely on a plan to inspect everything afterwards either.

After deployment, instance verification is a separate gate. If dynamically generated contracts are automatically deployed as part of a paid flow, explain which resulting source cannot be audited in advance and what assurance/owner decision is still missing.

### 2.3 Reviewer execution permissions

Allowed: public GETs, read-only RPC calls/logs/code, and local analysis without broadcasts. An owner-provided Check/Quote can be inspected after secrets are removed. A proposed Check body can be drafted; missing wallet or instance data must not be invented. Do not create authenticated quotes, submit payment payloads or sign anything. Public Check/import evaluation, if needed, must be within separately approved operator scope and cannot grant launch rights.

## 3. Separate decisions, including H

- **R:** Is this non-deploying review sufficiently scoped and supplied to run?
- **Q:** Can the owner prepare/check an exact Mainnet launch request without payment?
- **L:** Is the particular launch quote ready for explicit owner payment/deployment approval?
- **V:** Is the actual deployed token/pool/fee behavior consistent with the reviewed intent?
- **G / D:** Are Genesis minting and website content independently ready to open/publish?
- **I:** Is the crypto research pipeline, data quality, privacy and bounded operation ready? This is distinct from a one-time report.
- **H:** Are final event rules and the entry requirements established? A candidate architecture is not organizer acceptance.

A Q-ready result is not an L-GO. If wallet, live quote, Factory or evidence are missing, say `L: NOT AUTHORIZED / EVIDENCE INCOMPLETE`. Do not transform that into a finding that the project itself is impossible.

Unbuilt Dream Editor/Pets are product backlog, not automatic Token L blockers, unless a launch claim or immediate contract dependency makes them necessary.

## 4. Scope priority

Primary work: preserve Owner decisions and review launch/payment/pool/fee/permission plus true-burn compatibility. A missing template capability must not be silently replaced by Treasury payment.

Second core track: evaluate v3.3 sections 67-77, the crypto research platform, ecosystem hall, Genesis interface and bounded automation. Separate launch blockers from I/G/D gaps. H and peers remain bounded secondary checks; do not run a new whole-market survey, redesign the economy or open child jobs. Read all mandatory inputs, then prioritize evidence gaps and actionable changes.

Read all required inputs. Prioritize actionable launch risks; do not bury them below a long wish-list for the distant game. Explicitly distinguish a design requirement, an observed implementation, a proposed test and a test actually executed.

Code testing is allowed only locally when actual pinned source/bytecode is available. Never broadcast to a public EVM network. If no source is accessible, report source gaps and specific test requirements rather than inventing test results.

## 5. A — Launch request and payment safety

Verify the actual chain, standard launch kind, name/symbol parsing, default allocation, supply, decimals, mint/admin powers, policy version, supported Pair and quote expiry. The token-launch objective should contain only launch requirements, not the whole future World/Genesis system.

Review the full effective plan: website/IPFS publication, code changes and contract deployments must not be silently added. Full v3.3 being a reference is not permission to implement every section.

Distinguish three identifiers: payment asset/network; deployment chain; fee recipient. Payment made in Mainnet IMD does not itself prove the token deploys to Mainnet.

Payment review must cover:

```text
exact action + input hash + policy/factory
owner/paying wallet and real recipient
payment asset, amount in atomic units, decimals, payTo
Permit2 spender, nonce, deadline, permitted amount
QuoteApproval domain/chain/action/quoteHash/paymentHash/scope
expiry and rejection of stale signatures
idempotent retry of the same order rather than duplicate paid launch
pending payment/admission vs actual deployment
any initial ERC-20 allowance or separate gas requirement
supported signer type (Docs currently exclude Safe for paid requests)
old quote/input hash invalidation when the review package changes
```

Do not request or accept private keys, seed phrases, live payment signatures, request Bearer tokens or production credentials. The operator alone performs payment in the official trusted flow. No refund or free retry promise without specific evidence.

## 6. B — Pair, pool identity and initial liquidity

Check `pairWith=imd` for the exact chain/policy. Resolve the actual IMD token address, not a ticker search result. No silent ETH fallback.

Record v4 pool identity as `chainId + PoolManager + PoolKey + PoolId`. Include both currencies, fee, tick spacing and hook. A v4 pool is not necessarily its own contract address.

Inspect opening cap/price denomination, token ordering, decimals, tick/range, initial accessible trade directions and single-sided liquidity mechanics. Explain initial buy/sell limits without equating 88% token allocation to 88% cash backing.

Audit who owns/removes/migrates liquidity, whether positions are actually locked and how that is proven. Include early Swarm allocation sales, router support, slippage/MEV, thin IMD liquidity and zero-volume operating risk. Do not fabricate liquidity values or change policy percentages to improve optics.

## 7. C — Fee denomination and distribution (highest priority)

Current public-reference fee is 1.25% of a pool trade, with 1.00 percentage point for the paying wallet and 0.25 for the network. Verify the exact calculation and the actual version; do not confuse this with 1% of the fee pot.

For both directions, produce a matrix:

| Case | Fee basis | Asset accrued | Accounting location | Distribution action | Actual recipient asset | Evidence |
|---|---|---|---|---|---|---|
| IMD → EMVO | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | required |
| EMVO → IMD | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | required |
| Wallet transfer | expected no custom tax | verify | n/a | n/a | verify exact receipt | required |
| Paid Genesis burn | exact frozen price x quantity | true-burn verification | zero cost proceeds to Owner | atomic with mint | no redemption | template/instance split |

Check whether fees are accumulated, immediately transferred, externally distributable or claimable. If anyone can trigger distribution, verify that they cannot redirect another recipient's fees. Determine gas payer, function/contract, minimums, rounding, repeated calls, recipient mutability and failed-transfer handling.

If the protocol converts EMVO fees to IMD, inspect the actual conversion, slippage/MEV and admin controls. The project forbids its own AI auto-swap; this does not prove the official protocol has no internal conversion.

Do not infer IMD-only revenue from the Pair. Do not infer mixed revenue solely from generic AMM knowledge. Use the exact implementation/evidence.

If denomination is not established prelaunch, the default L result remains pending owner decision. An explicit later owner acceptance of mixed revenue would be a new recorded decision, not the reviewer's automatic fallback.

Fee revenue applies to the observed official pool, not necessarily all EMVO trades across unrelated venues. No transfer tax or trading restriction should be added to force routing.

## 8. D — Authority and allocation

Produce separate rows for Token, Factory/policy, Hook, fee collector, LP/position controller, Swarm distributor, Paying Wallet and future Genesis admin. List owner/roles, upgrade paths, pause, drain/rescue, fee change, root change and liquidity migration permissions.

The 2% owner-controlled allocation intentionally has no project lockup. Do not call it locked, non-sale, zero team allocation or mandatory World funding. It may be sold. Explain actual risk without prescribing a rejected vesting feature.

Moving those tokens to a Safe does not migrate fee entitlement or paid-job ownership. Current Docs exclude Safe for paid-request signing; retain that documented limitation until fresh explicit evidence supports a change. A small owner-managed paying wallet and a Treasury Safe are distinct roles, not compulsory transfers of the owner's entire 2% allocation.

List proxy/implementation/admin/beacon and equivalent custom control paths separately where applicable. Neither unchanged addresses nor an ownerless ERC-20 proves an immutable whole system.

## 9. E — Genesis template compatibility before launch

The Owner explicitly reaffirmed burning the exact Paid Genesis cost and rejected routing it to the project wallet. Treat BURN_NOT_TREASURY as a locked product decision, not an unresolved revenue-model choice.

ERC-20 does not require burn/burnFrom. Inspect the exact template for either burnFrom or a transferFrom-to-Forge then burn path, atomic with mint. An external wrapper cannot reduce another ERC-20's totalSupply if that token has no supported path. No burnFrom alone does not prove no true burn. If no true burn exists, document the incompatibility and keep affected approvals pending; do not change the token, add a financial proxy, send the cost to the Owner or silently substitute a sink.

The previous permanent-consume/sink discussion is technical comparison ONLY, requiring separate explicit Owner acceptance and accurate wording. This review cannot approve that fallback. No partial creator cut, delayed Owner-burn promise or redeemable NFT backing is authorized.

Test locally against actual pinned source/template if available:

```text
transfer/approve/allowance/transferFrom and return-value handling
contract recipient behavior and no custom transfer tax
exact true-burn cost and totalSupply effect
zero project/Treasury receipt from that cost
no reclaim/upgrade/rescue or same-transaction remint bypass
insufficient balance/allowance fully reverting
zero quantity / arithmetic bounds
receiver callback and reentrancy attempts
atomic burn+mint rollback; no burn retained when mint/callback fails
```

ReviewFix1 proposed gate: while true burn remains a required product use, lack of version-bound evidence that the intended official template supports an exact, atomic true-burn route keeps L HOLD. If incompatible, a different route requires a separately recorded Owner decision before any financial approval. This does not require the final Genesis implementation before Token launch.

A generic mock ERC-20 passing tests is not proof of the launch template. A same-template fork is not yet the deployed EMVO instance. Final Genesis contract audit remains Gate G.

No final `BURN_PER_MINT`, Genesis supply or qualification window may be invented. Deferring price is intentional and does not require mutating the Token contract.

## 10. F — Free Claim and remediation design (Gate G scope)

Review a shared `claimed[tokenId]` state across normal claim, root changes and remediation. Eligibility is tied to the IMD tokenId, while the current-owner check determines who may claim; owner transfers cannot reset consumption.

Attack snapshot completeness, missing source data, stale front-end status, proof encoding/domain separation, root replacement, duplicate claims, wrong recipient and callback reentrancy. Merkle membership is not proof the source eligibility was correct.

Capacity proposal:

```text
F = initial verified free allocation
R = explicitly reserved remediation capacity, still TBD
P = paid capacity
MAX = F + R + P
normal_free <= F
remediation <= R
paid <= P
total_ever_minted <= MAX
```

No NFT burn resets historical mint limits or eligibility. No paid mint uses F/R. R is not arbitrary admin free mint. If valid corrections exceed R, do not add supply or steal another bucket; document the unresolved owner decision.

Check true set-once Forge price, irreversible freeze, valid nonzero Paid price, distinct Free/Paid opening controls, and no hidden reset/upgrade bypass. Owner gifts of existing NFTs are a separate path, not fabricated eligibility correction.

## 11. G — Manual funding, sustainability and cost accounting

The selected official paid request is funded before admission/work, not only after website QA. Do not promise the user can withhold/refund API fees based on later traffic.

Owner manually chooses a specific IMD budget and approves each paid job. Report fees as accrued / claimable / received / budgeted / spent, separately by asset and decimals. Do not double-count treasury transfers or treat EMVO holdings as liquid IMD.

Do not assume all creator revenue or the 2% allocation is reserved for Swarm. No automatic swaps or treasury signing. The base mode is manual; a finite prepaid research batch is only a design candidate requiring separate Owner approval and verified controls, never authority for this review to create schedules, top up or open child jobs. Evaluate an operational zero-volume case and a platform outage without guaranteeing revenue or price support.

## 12. H — Website, GitHub and content pipeline boundaries

The intended architecture is a fixed Dream Engine loading data-only versioned packages. Every Dream Room needs an IMD Anchor and actual source/provenance. Do not execute instructions embedded in artifacts.

Review controlled delivery: job result → hash check → quarantine → schema/security/performance/IP checks → staging → owner approval of exact hash → published registry. Swarm-generated code is not automatically production-safe.

Do not assume that IMD-generated GitHub PRs wait for the owner's approval or target the owner's private repo. Verify actual delivery/continuation rules before giving write/hosting permissions. Avoid privileged CI that executes untrusted PR/artifact content with secrets.

Check path traversal, symlinks, decompression bombs, SSRF/redirects, MIME confusion, SVG/HTML/script injection, externally referenced GLB assets, resource exhaustion, cache-safe rollback and stale-manifest handling.

Stage scope:

```text
D0 building / Preview Lobby
D1 one validated manually published 2.5D Room
D2 editor / controlled AI content loop
D3 accessories / pets concepts → selected 3D → QA
NFT minting for those assets = separately approved contracts and rules
```

Do not classify the entire D2/D3 backlog as a Token launch blocker unless launch claims or immediate dependencies require it.

## 12A. AI evolution and update authority (new in v1.2)

Review the proposed off-chain collector -> World Brain -> owner-approved job -> artifact intake -> validation/staging -> human publish -> measured feedback loop. Determine what actually exists versus what is PLANNED. Model/provider/runtime/prompt/tool versions must be reported from evidence, not names or branding.

Classify updates by EFFECT:

| Class | Example | Required boundary |
|---|---|---|
| U0 | Refresh verified data / execute an existing fixed visual rule | No spend or economic rule changes |
| U1 | Versioned room/image/audio/visual accessory | Quarantine, validation and human release approval |
| U2 | Engine, interactions, model/prompt/tool config | Pinned code/config, tests, review and owner release |
| U3 | Price, eligibility or economic metadata | Only existing approved mechanisms; Gate G; never bypass freezes |
| U4 | Token/Hook implementation or financial control changes | Not authorized here; separate owner decision, code/state/control analysis |

A JSON edit that changes mint eligibility is not U1. A front-end edit that changes the transaction target is not harmless content. AI drafting code is not permission to approve, sign or broadcast it. Existing deterministic automation does not prove autonomous AI contract upgrades.

Verify that no planner/generator has a financial signer, session spending authorization or production secret; prompts alone are not enforcement. Review the paths by which untrusted source text, artifacts, agent memory, CI or a proposed tool-config update could bypass these limits. Report SPEC_ONLY if no deployment/configuration evidence exists.

Approval of a proposal, an exact paid job, a content hash and a contract deployment are separate approvals. Processing/compression changes hashes and needs lineage plus reapproval. Learning Ledger updates guide future proposals; they do not train a base model or rewrite safety policy by default.

Required negative cases, tested locally ONLY if the actual implementation is supplied:
- prompt/artifact injection asks for a transfer or proxy upgrade;
- fake IMD job/reviewer references;
- edits to locked elements;
- asset replacement after approval;
- unsupported schema/interaction or embedded script;
- revoked bundle reactivated by rollback/cache;
- malicious memory changes spending policy or tools;
- API outage/pending job causes duplicate paid work;
- wrong avatar/rig/socket or excessive Pet resources;
- cosmetic metadata changes economic or ownership rights.

For each: threat, current design defense, evidence, NOT_RUN or executed test, minimal fix, D/G/L relevance. No production source means no claims of an executed end-to-end World test.

## 12B. Peer patterns and funding sources (comparison, NOT adoption)

Use v3.3 inherited S8-S13 and fresh primary evidence only as needed. CLAUS documents external inference, operator assistance, a HookProxy and a redeemable NFT/reward mechanism. Do not conclude fully autonomous upgrades without signer/control evidence. HIVE's pinned Router divides an existing reward balance; it does not establish that every inflow was external earned profit or guarantee APY.

Do not import CLAUS fees, redeemable backing, HIVE splits/staking, self-operated Seat purchases, or financial proxy capabilities into EMVO. Owner has NOT adopted them. Token sale proceeds, Owner capital, fees, external job earnings, redeemable collateral, token burns and illiquid reward-token marks must remain separate.

EMVO's manual payment to builders is an expense, not its own worker revenue. Recommend a traceable World Build Journal and one useful 2.5D deliverable without requiring revenue promises, an on-chain journal or a new financial contract. Current Genesis has no token-redemption or fee-share entitlement. Its Paid Mint cost is burned, not income; approved research/world budgets exclude burnt tokens.

## 12C. Hackathon, input versions and already-running jobs

Apply the synchronized Addendum v1.2 and Gap Review v1.2. H eligibility is separate from L/D/G; DreamHallReleaseRegistry remains CANDIDATE_ONLY. An actual publisher/revocation test would need actual source; an arbitrary hash is not proof of IMD work. Do not register the project or deploy anything.

The old review commit 0dc9eec7328fe280e8d586222d978d329890e87c does not contain v3.3. This package must be uploaded and pinned to a NEW verified commit. Read only the four current files in the new manifest; old root files may remain historical. Compute bytes and SHA-256, not just compare filenames.

Changing GitHub after a paid job starts does not retroactively update that job. If the owner supplies an earlier report, record its exact scope and revision, map old findings to open/closed/still-unverified, and avoid claiming new tests were part of the old review. Do not resubmit, cancel or pay another job without explicit approval.

## 12D. Crypto Research and Gate I (new in v1.3)

Research subjects are crypto tokens and NFTs broadly, not only IMD or AI tokens. General AI tools are supporting context. Ecosystem Hall publishes research; Dream Hall creates selected experiences with an IMD Anchor; Genesis Free/Paid/Remediation and accessories/Pets remain core. Do not delete Genesis or require all research subjects to be IMD members.

Review project identity by chain and asset/collection address, with tokenId/standard where appropriate. Symbols, social handles and slugs are not sufficient. Validate claimed token/NFT relationships, migration/wrapper distinctions, source time/fetch time/analysis time, raw units, market-cap/FDV/volume/floor/bid/collateral boundaries, and lack of evidence. Multi-chain read coverage is not multi-chain EMVO deployment authority.

Assess claim-level evidence dependencies: upgrade/recipient/rights/source changes should mark impacted conclusions NEEDS_RECHECK. No material change is a valid result. Handle reorgs and provider corrections; do not leave a retired or disputed claim current. Facts, project claims, inferences, simulations and unknowns remain separate.

The Research Mode may feed verified versions to Creation Mode; fictional rooms/Pet speech must never flow back as evidence. Data and artifact validation are necessary even without executable JS. Shared public project research may support fast pages and the 3D hall, but private notes/watchlists/conversations require account ACLs and must not be transferred with the NFT or written to public jobs.

Genesis research desks, Pet assistants, paid custom research and service quotas are candidate services only. No permanent unlimited inference, guaranteed financial return, token redemption or fee sharing. No quality/safety concealment based on rarity or payment. Any later per-period entitlement needs anti-replay across NFT transfers and multiple sessions; do not invent its terms now.

Assess cooperation/sponsorship versus research independence, explicit labeling of self-projects, source corrections and an evidence-backed dispute flow. Coverage/placement is not endorsement. Avoid a single opaque AI safety score or instructions to trade automatically.

## 12E. Bounded operation is not new signing authority

The base remains one manually approved run. Proposed A1/A2 requires a concrete owner-approved source scope, provider/model policy, period, max runs, cost by asset, prepaid allowance, concurrency, idempotency, and actual cancellation/stop capabilities. All amounts are TBD here. No dynamic model tool can expand limits or hold a financial signer/session key.

Verify actual IMD schedule controls, input freezing, continuation, refunds and stop ownership. The currently documented team-controlled pause/cancel and non-refunded unused runs must not be described as a payer-controlled kill switch. If an off-chain stop cannot stop prepaid remote work, state that clearly; do not create a schedule to test it. A future product desire is not present spending permission.

Check dedupe, atomic budget reservation under parallel jobs, timeouts against the original order, no automatic topups, source/inference/hosting charges, query caps and graceful use of stale labeled reports. Genesis burn cannot replenish research budget. A trial may be modeled locally; no real transactions, paid jobs or schedules are allowed.

## 12F. Additional minimum test plan

Use v3.3 Gate I cases I-01 to I-15. Add G-burn assertions: success burns exact cost, no Treasury receipt, failure restores transaction state, Free/Remediation burns zero, same tokenId/capacity rules survive, and no redemption/reissue path is fabricated. Do not imply transaction gas or an earlier approval is refunded.

For each case, distinguish SPEC_REVIEW from executable tests with the actual pinned code. Record threats, methods, input fixtures, observed output, PASS/FAIL/NOT_RUN, relevant gate and minimal fix. If code is absent, do not emit a completed E2E verdict.

## 13. Primary sources and source strategy

Begin with these sources, then follow the exact live Factory/version evidence where available:

- https://imd.fun/docs/
- https://explorer.imd.fun/launch
- https://api.imd.fun/requests/capabilities
- https://api.imd.fun/openapi.json
- https://api.imd.fun/launch/policies
- https://api.imd.fun/version
- https://eips.ethereum.org/EIPS/eip-20
- https://developers.uniswap.org/docs/protocols/v4/concepts/poolmanager
- https://developers.uniswap.org/docs/protocols/permit2/concepts/signature-transfer
- https://docs.github.com/en/actions/reference/security/secure-use
- https://docs.openzeppelin.com/upgrades-plugins/proxies
- v3.3 inherited S9-S13 for bounded peer comparison; exact source commits where supplied.
- https://docs.openzeppelin.com/contracts/5.x/api/token/erc20 (burn is not the basic ERC-20 standard)
- The pinned proposal cited by the synchronized hackathon addendum, not an assumed final event.

Unavailable sources must remain unavailable in the report. Do not use an old Sepolia example as proof of current Mainnet configuration, or cite another token's symbol as if it were the same code/policy.

## 14. Required single report

Preferred output file: `artifacts/emvo-prelaunch-review.md`. If the selected skill requires another output contract, confirm it at Check; never silently promise unsupported multi-file outputs.

Use these sections:

1. INPUTS_READ, source access/hash checks, scope and missing inputs.
2. Executive verdicts separately for R / Q / L / V / G / D / I / H.
3. Evidence table with source/time/chain/block/commit and limitations.
4. Launch-scoped blockers with minimal fixes and closure evidence.
5. Fee-direction/receipt and whole-system Authority Matrix.
6. BURN_NOT_TREASURY compatibility, invariants and G-specific risks.
7. Gate I project identity, Token/NFT money-rights, claim freshness/corrections, privacy and bounded-operation matrix.
8. Actual code tests and commands; tests NOT_RUN and SPEC_ONLY conclusions.
9. Genesis/World/Crypto Research integration and candidate services, separate from L blockers.
10. U0-U4 updates, data-versus-fiction boundary and minimal I/D acceptance plan.
11. Optional bounded peer comparison; preserve the rejected revenue route and no staking/redemption decision.
12. H final-rule status, entry gaps and organizer questions from Addendum v1.2.
13. PATCH_PLAN: source section, change, reason, Owner decision versus engineering recommendation, gate and closure test.
14. Next Owner inputs, exact Q/L checklist, postlaunch checks and all remaining limitations.

Each finding must identify whether it is a real contradiction, missing evidence, optional improvement or future feature. Do not call an unknown fact a proven exploit, and do not call a source-only argument an executed test.

## 15. Completion conditions

This job is complete only as a review artifact, not as a launch. A good result can identify a specific route toward Q while L remains pending exact quote and evidence. It must still review all supplied specifications and produce actionable findings; missing a paying wallet is not a reason to skip the rest of the review.

Do not add functionality just to make a long report. Do not erase a finding because several agents voted against it without counter-evidence. Do not return unconditional GO because the token uses an official factory.

### 中文操作提醒

這次是『只審、不發』：先確認Report／研究模式、action=job.open、四份文件確實可讀，再由你決定是否支付這筆審查服務費。它不會也不應替你直接Launch $EMVO。不要把送審文字貼進Token／公司部署模式後直接付款。

## Delivery scope clarification

The selected Report may be delivered by the platform at its disclosed output destination as approved before payment. This is not authority to modify the input repository, production code/site, or create additional publication jobs. Do not assume report delivery is private. A new quote does not automatically invalidate an older usable payment signature; inspect order/nonce/expiry and documented cancellation behavior rather than promising unilateral revocation.
