# EmberEvo ($EMVO) — Pre-Launch Swarm Review Brief v1.1

Date: 2026-10-07  
Mode: **NON-DEPLOYING POLICY / SPECIFICATION REVIEW**  
Companion specification: `IMD_Ember_EmberEvo_v3.2_Rev2_PreLaunch_Reviewed_2026-10-07.md`  
Companion SHA-256: `1d3c44f91ae88b7962d94e26bdb0bc073455b3a40782f474be228d708ae1178a`  
Supersedes: `EMVO_Final_PreLaunch_Swarm_Adversarial_Review_Brief_v1.0_2026-10-07.md`  
Historical brief SHA-256: `d58c0029cf2f61ec14d7d635361f49589a5681247064d7eea316be058b87ecda`

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

The full specification and this brief must be available. File names or a ChatGPT `sandbox:` link alone do not give this system file access. Never invent a file hash, `submissionHash`, repository, attachment capability or API field. If missing or truncated, return `INPUT_MISSING` with the exact problem; do not certify the unseen specification.

Current public Docs describe objective/body limits (research objective 4,000 characters, general objective 8,000, request body 16 KiB). Do not paste both long documents into the objective. A minimal, owner-approved, public, sanitized review repo with pinned commit is a possible delivery route if supported. Existing accepted job artifacts can also be supplied through the documented `inputs` metadata; arbitrary local files are not automatically accepted inputs. Do not publish private repositories or credentials to solve access.

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
World funding V1 = owner-approved manual budgeting and job payment
No project-added transfer tax, staking/APY, holder yield, custom v4 Hook or buyback V1
Genesis = Free + Paid Forge + eligibility remediation, separately gated
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
| Gate | R, Q, L, V, G, D |

`VERIFIED` without a method and reproducible evidence is not sufficient. Each load-bearing finding needs its source, retrieval timestamp, chain/address, block number + block hash or code commit, exact relevant behavior, and limitations.

Do not prefill PASS/VERIFIED in a template. Do not treat majority agreement, accepted-work receipts, marketing pages, or the document title as evidence that a contract is safe. Label whether reviewers share an operator/runtime or are independent; multiple seats alone do not establish independence.

### 2.1 Current evidence caveat

This package's author retrieved official static Docs and Launch UI but did NOT retrieve live capabilities/OpenAPI JSON or a project-specific Check/Quote. No EMVO deployment address, owner Paying Wallet, source tree or Foundry test run is supplied. Network fetch failure in the author's environment does not prove the official service is down.

Static Docs/UI have contained inconsistent deployment-chain wording. Resolve with fresh capabilities, effective plan, pinned policy and verified chain evidence, not by choosing whichever sentence supports a preferred answer. Neither official documentation nor a successful Check substitutes for a code audit.

### 2.2 No time-travel evidence

Before launch, evaluate the exact intended Factory/template/source and comparable same-version behavior. Do not require an EMVO transaction receipt that cannot exist before EMVO deploys. Do not approve launch solely on a plan to inspect everything afterwards either.

After deployment, instance verification is a separate gate. If dynamically generated contracts are automatically deployed as part of a paid flow, explain which resulting source cannot be audited in advance and what assurance/owner decision is still missing.

### 2.3 Reviewer execution permissions

Allowed: public GETs, read-only RPC calls/logs/code, and local analysis without broadcasts. An owner-provided Check/Quote can be inspected after secrets are removed. A proposed Check body can be drafted; missing wallet or instance data must not be invented. Do not create authenticated quotes, submit payment payloads or sign anything. Public Check/import evaluation, if needed, must be within separately approved operator scope and cannot grant launch rights.

## 3. Five separate decisions

- **R:** Is this non-deploying review sufficiently scoped and supplied to run?
- **Q:** Can the owner prepare/check an exact Mainnet launch request without payment?
- **L:** Is the particular launch quote ready for explicit owner payment/deployment approval?
- **V:** Is the actual deployed token/pool/fee behavior consistent with the reviewed intent?
- **G / D:** Are Genesis minting and website content independently ready to open/publish?

A Q-ready result is not an L-GO. If wallet, live quote, Factory or evidence are missing, say `L: NOT AUTHORIZED / EVIDENCE INCOMPLETE`. Do not transform that into a finding that the project itself is impossible.

Unbuilt Dream Editor/Pets are product backlog, not automatic Token L blockers, unless a launch claim or immediate contract dependency makes them necessary.

## 4. Scope priority

Primary work: launch/payment/pool/fee/permission/Genesis-template compatibility risks.

Secondary work: check the website/AI architecture boundaries, input delivery, and future Genesis design for contradictions. Do not design a new economy or implement a full game.

Code testing is allowed only locally when actual pinned source/bytecode is available. Never broadcast to a public EVM network. If no source is accessible, report source gaps and specific test requirements rather than inventing test results.

## 5. A — Launch request and payment safety

Verify the actual chain, standard launch kind, name/symbol parsing, default allocation, supply, decimals, mint/admin powers, policy version, supported Pair and quote expiry. The token-launch objective should contain only launch requirements, not the whole future World/Genesis system.

Review the full effective plan: website/IPFS publication, code changes and contract deployments must not be silently added. Full v3.2 being a reference is not permission to implement every section.

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
| Forge consume | expected exact amount | verify | n/a | n/a | verify | template/instance split |

Check whether fees are accumulated, immediately transferred, externally distributable or claimable. If anyone can trigger distribution, verify that they cannot redirect another recipient's fees. Determine gas payer, function/contract, minimums, rounding, repeated calls, recipient mutability and failed-transfer handling.

If the protocol converts EMVO fees to IMD, inspect the actual conversion, slippage/MEV and admin controls. The project forbids its own AI auto-swap; this does not prove the official protocol has no internal conversion.

Do not infer IMD-only revenue from the Pair. Do not infer mixed revenue solely from generic AMM knowledge. Use the exact implementation/evidence.

If denomination is not established prelaunch, the default L result remains pending owner decision. An explicit later owner acceptance of mixed revenue would be a new recorded decision, not the reviewer's automatic fallback.

Fee revenue applies to the observed official pool, not necessarily all EMVO trades across unrelated venues. No transfer tax or trading restriction should be added to force routing.

## 8. D — Authority and allocation

Produce separate rows for Token, Factory/policy, Hook, fee collector, LP/position controller, Swarm distributor, Paying Wallet and future Genesis admin. List owner/roles, upgrade paths, pause, drain/rescue, fee change, root change and liquidity migration permissions.

The 2% owner-controlled allocation intentionally has no project lockup. Do not call it locked, non-sale, zero team allocation or mandatory World funding. It may be sold. Explain actual risk without prescribing a rejected vesting feature.

Moving those tokens to a Safe does not automatically migrate fee entitlement or the authority to continue paid jobs. Verify this separately, including actual contract-wallet signature support rather than assuming it.

## 9. E — Genesis template compatibility before launch

ERC-20 does not require `burnFrom`. Verify whether the chosen launch template has true burn; otherwise assess a well-defined irreversible-consume design without silently switching to a custom token.

Test locally against actual pinned source/template if available:

```text
transfer/approve/allowance/transferFrom and return-value handling
contract recipient behavior and no custom transfer tax
exact burn/consume cost
insufficient balance/allowance fully reverting
zero quantity / arithmetic bounds
receiver callback and reentrancy attempts
atomic consume+mint rollback
```

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

Do not assume all creator revenue or the 2% allocation is reserved for Swarm. No automatic swaps, paid schedules, child jobs or treasury signing in V1. Evaluate an operational zero-volume case and a platform outage without guaranteeing revenue or price support.

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

Unavailable sources must remain unavailable in the report. Do not use an old Sepolia example as proof of current Mainnet configuration, or cite another token's symbol as if it were the same code/policy.

## 14. Required single report

Preferred output file: `artifacts/emvo-prelaunch-review.md`. If the selected skill requires another output contract, confirm it at Check; never silently promise unsupported multi-file outputs.

Use these sections:

1. INPUTS_READ, missing inputs, and exact review scope.
2. Executive verdict separately for R / Q / L / V / G / D.
3. Evidence table with source/time/chain/block/commit and evidence grade.
4. Launch-scoped blockers only, with severity, reproduction/evidence, minimal fix, gate and closure test.
5. Fee direction/receipt matrix and Authority Matrix.
6. Local tests actually run, commands/version/results, plus tests NOT_RUN and why.
7. Proposed minimal spec diffs; owner decisions that remain unchanged.
8. Exact Q/L checklist, pending owner inputs and payment risks.
9. Postlaunch V checklist; any real transactions require separate owner authorization.
10. Genesis and Dream content backlog clearly separated from L blockers.
11. Evidence-linked conclusion and all material limitations.

Each finding must identify whether it is a real contradiction, missing evidence, optional improvement or future feature. Do not call an unknown fact a proven exploit, and do not call a source-only argument an executed test.

## 15. Completion conditions

This job is complete only as a review artifact, not as a launch. A good result can be 'Q can proceed once inputs are supplied; L remains NOT AUTHORIZED pending exact quote and fee evidence.'

Do not add functionality just to make a long report. Do not erase a finding because several agents voted against it without counter-evidence. Do not return unconditional GO because the token uses an official factory.

### 中文操作提醒

這次是『只審、不發』：先確認Report／研究模式、action=job.open、兩份文件確實可讀，再由你決定是否支付這筆審查服務費。它不會也不應替你直接Launch $EMVO。不要把送審文字貼進Token／公司部署模式後直接付款。
