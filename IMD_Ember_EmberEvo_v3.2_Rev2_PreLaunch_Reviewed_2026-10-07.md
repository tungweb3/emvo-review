# IMD Ember — EmberEvo ($EMVO) Strategy v3.2 · Revision 2

日期：2026-10-07（Asia/Taipei）  
文件狀態：**Pre-Launch Reviewed / Evidence-Gated；不是已完成審計或已批准發幣。**  
版本：**v3.2 Rev.2**；保留 v3.2 的產品架構，修正發幣與送審的證據、權限、付款及交付邊界。  
母版：`IMD_Ember_EmberEvo_v3.2_Mainnet_Launch_Ready_2026-10-07.md`  
母版 SHA-256：`f6b8cee5e70115a5c8938ec4175a9a03c16f6535232d6ff8270e1e058acbf70e`  
配套送審：`EMVO_PreLaunch_Swarm_Review_Brief_v1.1_NoDeploy_2026-10-07.md`  
取代範圍：本 Rev.2 為 v3.2 的最新工作母版；舊母版保留歷史，不要與本版並列為有效指令。

> **Launch mechanics follow IMD. Product mechanics belong to EmberEvo.**
> 已定案不重開：EmberEvo / EMVO、Ethereum 主網目標、官方預設 allocation、無額外 vesting、2% 用途不鎖定且可出售、EMVO/IMD 首選、V1 手動預算／付款／發布。

## 閱讀方式與本次實際覆核範圍

本次已全文讀取兩份母文件（v3.2 3,348 行、Brief v1.0 684 行），重新核對官方靜態 Docs、Launch UI 與相關標準。本次**沒有**取得本專案的 Paying Wallet、Check/Quote、Factory source/bytecode、Token 地址或實際交易證據；沒有執行 Foundry/fork 測試、Swarm 付費任務或主網操作。

本次透過瀏覽器工具取得官方頁面；`capabilities` / `openapi.json` 的即時 JSON 未成功取得，容器的公開 API GET 也受 DNS 存取限制。這只表示本次環境讀取受限，**不表示 IMD 服務停止或主網未開放**。相應欄位維持 UNKNOWN，不以靜態頁面填成 LIVE_VERIFIED。

任何「Reviewed」「Ready」舊字樣都不構成付款或部署授權。只有擁有者針對當次確切訂單的明確批准，才可進入發幣付款；本文件本身不發出該批准。

## 五道分開的閘門

| Gate | 目的 | 不得誤當成 |
|---|---|---|
| R — Review | 只讀規格、政策研究及可用來源的覆核 | 正式發幣授權 |
| Q — Check / Quote | 驗證將要做什麼、確切 policy、價格、鏈與權限 | 已付款、已審完未來動態生成的程式 |
| L — Launch authorization | 擁有者批准確切 quote 與金融簽名 | 永久授權或自動接受 policy 改變 |
| V — Post-deploy verification | 驗證真實地址、runtime、Pool、費用和收款 | 自動開放 Genesis |
| G / D — Genesis / Dream content | 各產品自己的合約或發布驗收 | Token 已上線即可省略的程序 |

**目前判斷：可準備 R／Q；L 未批准且缺 live evidence；V／G 尚未執行。**

所有下文未標明外部來源的限制、流程與驗收項目，都是 EmberEvo 的建議實作規格，而不是聲稱官方 API 已提供該功能。來源索引見 Appendix D。

---

# 0. Executive Summary｜核心結論

## 0.1 品牌與定位

目前採用的 Token / Economic Layer 名稱：

> **EmberEvo**

目前 Owner 指定的對外 Token 顯示名稱／ticker 方向：

> **\$EMVO**

正式 Mainnet launch 前仍須以 IMD check / quote 驗證 symbol 格式與
collision；若官方 policy 有技術限制，必須回報 Owner，不得自行改名。

Mainnet 前必須再次確認：

-   ticker collision
-   major token / exchange symbol conflict
-   trademark / brand confusion
-   social handle / searchability

品牌意義：

``` text
Ember
= 火種 / 餘燼 / 尚未熄滅的希望

Evo
= Evolution / 演化 / 更新 / 成長

EmberEvo
= 火種持續演化，世界持續更新
```

建議定位：

> **EmberEvo --- The Living Evolution Economy of IMD Ember World.**

品牌敘事：

> **The fire survives. The world evolves.**

> **From embers, evolution begins.**

------------------------------------------------------------------------

## 0.2 EmberEvo 與 IMD 的關係

EmberEvo **不是要取代 IMD**。

推薦固定架構：

``` text
Identity.md / IMD
= Intelligence + Agent + Seat + Swarm + Job + Review + Proof Layer

EmberEvo
= Native Economic / Utility / World Growth Layer

IMD Ember World
= Product / World / Visible Proof Layer

Genesis PEPE
= Resident / Identity / User Utility Layer

Swarm Dream Hall
= High-frequency 2D / 2.5D IMD Interpretation Layer
```

核心關係：

> **IMD provides the intelligence.**\
> **The Swarm does the work.**\
> **EmberEvo powers the economy.**\
> **IMD Ember World becomes the proof.**

------------------------------------------------------------------------

## 0.3 EmberEvo 不只是 Forge Asset

EmberEvo 的核心價值分成三層：

``` text
Layer 1 — Genesis Forge
EmberEvo
→ Burn / Permanently Consume
→ Forge Genesis PEPE

Layer 2 — World Utility
EmberEvo
→ Wearables
→ World Items
→ Limited Collectibles
→ Event Assets
→ Future Marketplace Utility

Layer 3 — Protocol Utility / World Growth
Economic / Product Activity
→ Real Protocol / Creator Revenue
→ Budget Conversion / Allocation
→ IMD
→ WORLD BUILD VAULT
→ Approved Identity.md Swarm Jobs
→ Design / Review / QA
→ Swarm Dream Hall 2D / 2.5D Rooms
→ Selected Tripo 3D Promotion
→ World Update
```

因此長期敘事不是：

``` text
Buyback
Burn
Price
```

而是：

> **Use EmberEvo. Forge assets. Fund builds. Grow the world.**

## 0.4 已有、設計中與未驗證必須分開

$EMVO ERC-20 不執行 AI。發幣不會自動部署 World Brain、不會自動建立 Dream Engine，也不會自動把交易費花在 Swarm。

對外每個模組標明 PLANNED / IN_DEVELOPMENT / STAGING / LIVE，只有有實際公開版本與證據才標 LIVE。不得把本文完整願景寫成發幣當日已交付功能。

來源優先順序不是「API 大於人類決策」：鏈上／policy 證據決定**實際會發生什麼**；擁有者決定**是否接受並批准**。兩者不一致時停下，不得因官方改規則就靜默換 Pair、allocation、費用或權限。

## 0.5 證據狀態與風險狀態分開

- Evidence：DOCUMENTED_ONLY / SOURCE_VERIFIED / SIMULATED / OBSERVED_ONCHAIN / UNVERIFIED / CONTRADICTED / NOT_APPLICABLE。
- Test：NOT_RUN / PASS / FAIL / BLOCKED。
- Severity：CRITICAL / HIGH / MEDIUM / LOW / INFORMATIONAL。
- Gate：R / Q / L / V / G / D。

每個關鍵項目保存來源、取得時間、network、address、block/hash 或 commit、測試命令、結果與限制。文件寫「支援」不能變成已測試 PASS；Swarm 多數同意也不是新的鏈上證據。

---

# 1. v3.2 Rev.2 修訂重點與不變決策

本版不重設 Tokenomics；它修補從規劃到實際發幣的缺口。

1. 名稱固定為 EmberEvo；symbol 為 EMVO；社群顯示 $EMVO。
2. allocation、供應與 pool 費用採官方預設。現有文件／UI 參考為 1B、88/10/2、1.25%（1% requester＋0.25% network），但不是本專案已核准的 live quote。
3. **EMVO/IMD 是在官方允許選項中的明確偏好，不是「所有欄位都留白」。** 不可默認成 ETH。
4. 2% Paying Wallet allocation 不加鎖倉、不加 vesting、不承諾不出售、不新增協議用途限制；保持擁有者操作彈性。
5. IMD 是期望的費用收款資產；Pair=IMD 不足以證明每筆收入只有 IMD。須在 Gate L 前釐清或明確決策，Gate V 再核對自己的實際交易。
6. 修正 Swarm 付款時間：官方 request 採先授權／付款後 admission；不是自動等到網站驗收才扣款。
7. 本次 Swarm test 必須是非部署 job；文件研究與程式碼 audit 分開。不得因題目提到 launch 就變成 launch.open／workflow.open。
8. 明確分出付款前可取得的 template/source/fork 證據與發幣後才有的 instance evidence；取消先發幣才能證明、又先證明才能發幣的循環。
9. 補完付款簽名、Permit2 allowance、quote 時效、重試 idempotency 及預算上限的人工確認。
10. 補完官方 Pool 身分與全系統權限檢查；Token 沒 owner 不等於 Hook、LP、Fee collector 也無控制權。
11. Free／Paid／Remediation 供給帳本明確；不能只靠『剩下名額』承諾補發。
12. Forge Price 的『Set Once』必須真正只能設定一次；Free Claim 與 Paid Forge 的開關分開定義。
13. Manual World Build 保留，Swarm 報酬規則不由 EmberEvo 私自覆寫；收到費用也不是自動工作指令。
14. Dream Hall／配件／Pets 改為分階段落地，加入 Artifact→驗證→Staging→人工發布；不把完整 Editor 當 Token launch 前置。
15. Manifest 一律從 UNKNOWN／NOT_RUN 開始；附錄不再預填通過狀態。
16. 送審使用短 objective＋真正可讀且固定 hash/commit 的資料；不把 3,000 多行母版塞入單一欄位。
17. 外部送審資料預設可能公開；不含私鑰、助記詞、request bearer、可用付款簽名、GitHub token 或 production credentials。
18. 新增可直接複製的送審文字、輸入鎖定檔與覆核清單。

保留所有產品核心：Genesis Free＋Paid Forge、TokenId 資格、Remediation、Dream Hall IMD Anchor、World Brain、Learning Ledger、人工控制金庫與 production。

---

# 2. 目前正式前提

## 2.1 World 內不設 Gold / Web2 Game Coin

正式維持：

``` text
NO Gold
NO Web2 Game Coin
NO Daily Token Emission
NO Gold ↔ EmberEvo Conversion
```

一般世界操作：

``` text
Web2
Free
No Gas
```

包括：

-   走路
-   探索
-   看 Agent House
-   看 Genesis PEPE
-   Map
-   Search
-   Weather
-   Time
-   Chat
-   一般 UI
-   一般 3D Interaction
-   Dream Hall 一般瀏覽

EmberEvo 只處理真正具有經濟意義的行為。

------------------------------------------------------------------------

## 2.2 最終鏈：Ethereum Mainnet

目前方向：

``` text
IMD NFT         → Ethereum Mainnet
EmberEvo        → Ethereum Mainnet
Genesis PEPE    → Ethereum Mainnet
```

原則：

> **同鏈優先，避免 Genesis Forge 導入 bridge / relayer / cross-chain
> proof。**

測試優先採本地執行／主網只讀fork；官方測試鏈若可用可另測，不預設Sepolia目前可發幣，也不把部署測試Token當本次Swarm review授權。

------------------------------------------------------------------------

## 2.3 Genesis PEPE 採 Free + EmberEvo Forge 雙軌

### Route A --- Qualified Active IMD Seat

``` text
Eligible IMD tokenId
→ One lifetime Free Genesis Entitlement
→ Current owner claims
→ Genesis PEPE
```

### Route B --- Paid Forge

``` text
General / additional mint
→ Consume / Burn EmberEvo
→ Forge Genesis PEPE
```

禁止：

``` text
General Public
→ Unlimited Free Genesis Mint
```

---

# 3. Token / Launch Policy｜意向、公開文件與實際訂單分層

## 3.1 擁有者已定案

```text
Token Name = EmberEvo
Symbol = EMVO
Display = $EMVO
Target deployment chain = Ethereum Mainnet (chainId 1)
Launch = IMD official standard token launch
Allocation / supply / fee mechanics = official default
Preferred pairWith = imd
Preferred fee receipt asset = IMD (outcome not yet verified)
Project-added vesting = NONE
Project-added transfer tax = NONE
2% use restriction imposed by this project = NONE
V1 budget / payment / production publication = MANUAL
Genesis Forge Price = TBD before Paid Forge opens
```

此處名稱是已選定，不代表已完成全球撞名／商標檢查，也不代表 Check 會替你做這類搜尋。以 `chainId + token contract address` 識別真幣，不能僅以 EMVO ticker 識別。

## 3.2 2026-10-07 公開來源參考，不是 live execution evidence

| 參數 | 參考內容 | 證據等級 |
|---|---|---|
| 供應量／decimals | 1,000,000,000／18；標準轉帳 | DOCUMENTED_ONLY [S1] |
| 配額 | 88% Pool、10% Swarm、2% Paying Wallet | DOCUMENTED_ONLY [S2] |
| 官方池費用 | 1.25%，其中1.00%給 paying wallet、0.25%給 network | DOCUMENTED_ONLY [S1] |
| 任務／launch 申請價格 | 目前文件列 0.5 IMD／request | DOCUMENTED_ONLY [S1] |
| 部署網路 | UI 說 Ethereum Mainnet；靜態 Docs 某段仍有 Sepolia 字樣 | CONFLICTING_STATIC_COPY；live待取證 [S1,S2] |
| IMD-only 收款 | 尚未有本次 Factory／實測支持 | UNVERIFIED |

預設變動不是『自動照單全收』。提交時記錄一份明確 proposal→check→quote diff，供 Owner 確認。

## 3.3 標準 Launch 路徑範圍

只選標準 Token launch（具體 action/onchain/kind 以 live schema 為準）。不把本母版全部功能放進 launch objective。

**發幣 objective 不要求：Genesis final contract、Remediation contract、Vesting、Treasury automation、World Brain、Dream Engine、NFT配件／Pets或替換 imdember.com。** 這些是獨立里程碑。若標準 UI 綁定網站生成，須確認為隔離的 landing artifact，不能接管現有 production domain／repo，也不能把未有的 utility 宣稱為已上線。

## 3.4 核心 Token 相容性

檢查 transfer／approve／allowance／transferFrom／return value／zero-address handling／contract-to-contract interaction。`burn()`／`burnFrom()` 不是 ERC-20 標準必備 [S3]；標準幣沒有它們不自動等於缺陷。

正式選定 true burn 或不可回收 consume adapter 前，不可以寫『已完成燃燒相容性』。不要為了增加 burnFrom 就自行換 custom_token。安全可接受的 consume 替代案另行驗證與 Owner批准。

## 3.5 不因Follow Official撤銷的安全期望

標準Token預期固定／嚴格封頂供應、無任意後續mint、無blacklist／confiscation／anti-sell、無隱藏max-wallet／轉移限制、無任意改寫餘額、無rebase／reflection。若真實模板不符，標示差異並停在Gate L前，不以『官方』兩字自動接受。

Token／Hook／LP／Factory須分別檢查；這些是安全驗收期望，不是聲稱本次已驗證所有權限。

---

# 4. 經濟機制｜預設不等於零風險或零成本

## 4.1 配額

以現有 1B 與 88/10/2 參考值推算：880M進官方池、100M給Swarm分配、20M進Paying Wallet。此算式是規劃，不是已發行餘額。

2% 沒有額外 vesting／lockup，擁有者可以持有、轉帳、出售或作其他用途；文件不承諾固定用途或不出售。對外不能同時宣稱 Team allocation=0 或所有專案Token皆被鎖定。

10% Swarm 配額屬於獨立網路分配，不是專案可操作錢包；Owner自己的Seat即使可能符合資格，也不能預算化為必定收回的收入。

## 4.2 Single-sided 與流動性

文件描述 launch token 單邊供給池子 [S1]；這不表示有等值IMD現金儲備、固定退出價格、或足夠深度讓2%立即賣出。

送審至少說明：opening price/cap的計價幣、tick/range、初始可交易方向、Pool資產流入方式、可執行買賣所需條件、第三方套利／首單價格衝擊、誰可移除或遷移流動性。

**88%是代幣數量配置，不是88%的現金價值、深度或locked liquidity。** 不自行改ratio解決無證據的問題。

## 4.3 成本帳本

分開記：研究job費／launch request費／後續continue或重跑費／審查費／外部3D費／RPC hosting／部署或操作gas。

官方支付文件提到server支付gas，不代表使用者任何時候都不需要ETH [S1]。首次ERC-20→Permit2 allowance、另行swap、distribution呼叫、Genesis mint等是否需要自付gas，須按具體操作核對；只可將已證實的那段標為sponsored。

不宣稱0成本、不把0.5 IMD當總開發費、不承諾任務失敗必退款；失敗／refused／pending／重試處理需核對訂單狀態。

## 4.4 交易費的涵蓋範圍

1.25%是現行文件對指定官方池的說法，不是全鏈每筆EMVO轉移皆收費。其他Pool／OTC／路由可能不產生相同creator收入；不為保證收入加入transfer tax或限制自由轉移。

如用相同計價基礎作例子：100單位成交額，文件模型中1單位屬paying wallet，0.25單位屬network；不是1.25單位費用的1%。實際扣費基礎、幣種及取整依合約證據。

---

# 5. EMVO / IMD Pair 與費用資產｜先取證，不猜測

## 5.1 明確的Pair偏好

`pairWith=imd`必須明確出現在實際被接受／固定的launch input中。『照官方預設』只指供應、allocation與費率機制，不能把Pair偏好默默變回ETH。

核對部署chainId=1、IMD資產地址／decimals、currency0/1、Factory與其版本。不能把支付IMD所用網路當成Token部署網路。

如果當時Mainnet不支援IMD Pair：STOP，提出事實與替代案，不能自動改ETH或自己發另一顆幣。

## 5.2 IMD-only費用是期望，不是已驗證

需要回答買入、賣出各自：費用記在何種currency、誰欠誰、在哪個collector／Hook／LP帳本、如何release/distribute、誰可觸發、誰付gas、最終錢包收到何資產、是否經內部conversion。

若官方自身有換幣行為，須核對路徑、價格保護、成本與控制權；『V1不做自動swap』禁止的是**專案AI自動交易金庫**，不能因此假稱已驗證官方永不轉換。

**不得只因為Pair=IMD就承諾只收IMD，也不得因Uniswap一般會累積兩資產就斷言此Factory一定兩種皆收。**

## 5.3 解除先發幣才能取證的循環

Gate L前：以同一Factory／版本的公開原始碼、runtime、可重現local-fork測試，或可比同版本既有池的觀察，確立合理依據；清楚標成template evidence，不冒充EMVO instance結果。

Gate V後：核對EMVO自己的runtime／Pool設定，讀取實際交易與費用分配。任何小額真實測試由Owner另外批准目的、資產與gas預算；審查Agent不得自己broadcast。

IMD-only無法在Gate L前證明時：記錄**待Owner選擇**，預設停在L之前。Owner可另行接受混合幣種並手動處理，但本文件未替Owner作該選擇。

## 5.4 Fallback

自有ERC-20只可列為遇到不可接受官方限制時的研究替代案；沒有Owner新決策，不實作、不quote、不部署，也不引入custom hook／transfer tax。

---

# 6. Fee Accounting｜從累積到到帳，再到人工預算

## 6.1 分開四件事

```text
官方池產生費用
→ accrued（合約帳本累積，不一定在錢包）
→ claimable／distributable（可提領，不代表已收到）
→ received（實際錢包已到帳）
→ Owner-approved World Budget（只有批准部分成為世界預算）
```

1%是現行文件的paying-wallet分配參考，0.25%是network分配參考 [S1]；實際單位與收款方式尚待取證。Anyone-can-distribute不等於會自動到帳，也不等於calling wallet就是recipient。

## 6.2 Token transfer與gas

不加EMVO transfer tax；普通轉移、Genesis精確consume不能因專案自訂稅少收。但0% transfer tax不代表0 gas；若某動作路徑內含swap，swap部分仍依池規則計費。

## 6.3 V1人工循環

```text
Owner檢查已到帳資產／pending fees
→ 必要時人工觸發合法distribution
→ Owner自行決定是否把非IMD轉成IMD
→ 為本輪核准IMD預算（不是全額fee自動劃撥）
→ 核對job action、目標、價格與inputs
→ Owner批准該筆request付款
→ admission／Swarm執行
→ 下載artifact、獨立驗證、Staging
→ Owner另行批准production發布
```

不自動swap、不自動付款、不開付費schedule、不因retry新增付費訂單、不將每日fee餘額當自動可花budget。

## 6.4 可用餘額與會計

以資產地址＋decimals分帳。`available_IMD = confirmed_balance - already_committed_unsettled_IMD_budget`；小於零時顯示缺口，不假造資金。IMD費用、EMVO配額出售收入、Owner增資、自己錢包互轉分列；同一筆內部轉帳不得重複當收入。

未claim費用、未售出EMVO估值、預期成交量不算可支付IMD。任務費／gas／淨到帳分開紀錄；不要把不同幣種原始數量相加。

## 6.5 權限

World Brain只能提案。付款工具和簽名工具不給生成Agent；核准預算不是核准無限委派。之後若要policy-bound automation，另作範圍與授權評估，本版不先開啟。

---

# 7. Paying Wallet 與 World Build Vault｜操作權不混淆

## 7.1 Paying Wallet

這是launch付款與政策決定收款的地址。2%代幣與後續fee可能關聯此地址；實際recipient是否可更換必須取證。

2%保持無額外鎖倉、無協議用途限制，包含出售彈性。把Token轉進另一錢包不保證fee recipient也一起轉移；不能用後續Safe管理掩蓋舊單簽地址持續收費的風險。

## 7.2 World Build Vault

V1首先是一個Owner核准的世界工作預算與可查帳本；中期可採Safe 2-of-3管理已分配的世界資金。**它不是本版額外部署的自訂金庫合約，也不強制全部2%／全部fee自動進去。**

Paying Wallet與World Build Vault可先有不同操作角色：Owner依需要劃撥已到帳IMD，逐job批准付款。保留Safe作為世界資金的優先管理目標，但在未實測付款簽名相容性前，不把Safe直接填成必然可用的Paying Wallet。

## 7.3 最小安全作法

建議使用專案專用錢包；不在聊天／Swarm／repo存私鑰。不把日常所有持倉都放同一操作地址。備份、spender、簽名domain、付款金額與receiving address均逐筆核對。

任何變更fee recipient／paying wallet的能力或限制都需列入Authority Matrix；沒有證據時寫UNKNOWN，不承諾可恢復或可遷移。

---

# 8. Genesis PEPE｜Free + Forge 雙軌正式規格

## 8.1 Free Entitlement

目前核心設計：

``` text
Each qualifying Active IMD NFT Seat tokenId
→ one one-time free Genesis PEPE entitlement
→ each tokenId can use the free entitlement only once ever
→ entitlement expiry vs permanence remains TBD
```

建議以 `tokenId` 為 entitlement identity：

``` text
eligible[tokenId] = true
claimed[tokenId] = false
```

Claim 時：

``` text
IMD.ownerOf(tokenId) == msg.sender
AND eligible[tokenId] == true
AND claimed[tokenId] == false
```

成功後：

``` text
claimed[tokenId] = true
→ Mint Genesis PEPE to current owner
```

重要：

> entitlement 在未使用前跟著 IMD NFT 的 current owner；使用後永久消耗。

Genesis PEPE mint 出來後：

> **不永久綁定原 IMD tokenId。**

------------------------------------------------------------------------

## 8.1A Genesis Eligibility Remediation｜白名單 / Snapshot 錯誤補救

目的：

> **修正「原本依已公告 Qualification Rule
> 確實有資格，但因資料、Merkle、白名單或系統錯誤無法 Free
> Claim」的情況。**

不是：

``` text
Admin wants to gift someone
→ arbitrary free mint
```

正確流程：

``` text
Remediation Request
↓
Identify IMD tokenId
↓
Prove tokenId met frozen Qualification Rule
↓
Verify entitlement was not previously consumed
↓
Verify current owner / transfer state
↓
Independent review / evidence
↓
Safe / authorized remediation approval
↓
Correct entitlement / remediation allowlist
↓
Free Claim
↓
claimed[tokenId] = true
↓
Public remediation record
```

原則：

-   優先修正 entitlement，讓使用者走 **Free Claim**。
-   不用 Treasury 發 EmberEvo 給對方再走 Paid Forge，避免扭曲 free
    entitlement accounting。
-   不得超出原本 Qualification Rule 可證明的範圍。
-   不得讓同一 IMD tokenId claim 兩次。
-   必須保留 remediation provenance / reason / approver / tx / tokenId。
-   Genesis capacity 設計必須能容納有效 remediation；不可在 Paid Mint
    後才發現沒有 free capacity。
-   若是 Owner 主動贈送的 NFT，應使用另外的「Promotional / Ecosystem
    NFT」規則，不得冒充 Genesis eligibility correction。

## 8.2 Paid Forge

``` text
Anyone eligible for paid route
→ approve Genesis Forge Contract
→ consume / burn EmberEvo
→ mint Genesis PEPE
```

General Public：

``` text
NO free mint
```

## 8.3 Remediation 的權限與證據邊界

Merkle proof只能證明某筆資料在某個root內，不會證明原始資格判斷正確。保留資格raw snapshot、block/time、資料來源、生成腳本commit與去重結果；Active觀察來源缺失時不得自動判eligible。

正常claim與remediation共用單一`claimed[IMD_tokenId]`消耗帳本，不因換root、換wallet、重送請求而重置。所有補正必須引用原始已公告qualification，而不是新增資格；明確記錄批准者、理由、root/version與結果。

Claim依原設計由**當下current owner**執行；NFT在申請審核期間轉手時，不能把補發自動送給舊owner。若日後支援delegate/relayer，必須另設簽名domain、nonce、deadline與recipient綁定，V1不得自行加。

## 8.4 原擁有者轉售前先Claim的產品語意

資格跟著尚未使用的IMD tokenId，不是永遠附贈未使用的Genesis。買方須能看見該tokenId是否已claim；同一區塊交易順序可能改變剩餘资格，因此不能以過時前端圖示保證。這是需要清楚呈現的產品狀態，不是任意給第二次免費鑄造的理由。

---

# 9. Free / Remediation / Paid 容量帳本

## 9.1 原缺口

只保留『原白名單裡的FREE_CAP』，無法保證後來證明被漏列的tokenId仍有名額。事後再加MAX_SUPPLY會改變已公告供給；任意admin mint會破壞資格制度。

## 9.2 建議模型，數字仍由Owner在Genesis開放前決定

```text
F = initial verified free capacity
R = explicitly reserved remediation capacity (can be zero, if approved)
P = paid capacity
MAX_SUPPLY = F + R + P

regular_free_minted <= F
remediation_minted <= R
paid_minted <= P
total_ever_minted = regular_free_minted + remediation_minted + paid_minted
total_ever_minted <= MAX_SUPPLY
```

三個計數以本次系列**歷次mint累計**為基準。若NFT可burn，不能因current totalSupply下降就擅自重開免費資格或Paid容量。

R未選定前不自創比例；預留R不是授權管理員任意發NFT，每一次仍需資格證據＋共用claimed帳本。R未用完怎麼處理、是否釋放／何時釋放，必須事前公告並freeze；本版不預設釋放。

## 9.3 可選替代與限制

優先在開放前公布可驗證名單、設異議處理流程，降低漏列。若Owner選R=0，必須誠實揭露沒有超出F的鏈上補mint餘裕；售罄後不能保證補鑄。轉贈既有、合法取得的Genesis屬另一種人工補救，不能讓原tokenId之後再claim一次。

不論採哪種模式，**Paid不得先吃掉F或R**。若發現有效漏列超過可用R，停止新增補mint並提出Owner決策，不能增加MAX_SUPPLY或偷用Paid名額。

## 9.4 有效期

永久或deadline仍TBD。若採deadline，timezone、區塊／時間判斷、到期後容量處理、技術錯誤申訴窗口須先公告。不能用Remediation任意復活已合法到期且未有故障證據的資格。

此整套屬Gate G，不是要求Token發行前決定Genesis數量；但在宣傳免費名額時不能超出已確認機制。

---

# 10. EmberEvo Token Contract 不需要知道 Genesis Forge Price

這是本版非常重要的架構結論。

## 10.1 Token Contract 只負責 Token 行為

EmberEvo Contract 應該只知道：

``` text
balance
transfer
approve
allowance
transferFrom
burn / burnFrom（若支援）
```

它不需要知道：

``` text
Genesis PEPE 是什麼
Genesis Mint 什麼時候開
一隻 Genesis 要多少 EmberEvo
Genesis MAX_SUPPLY
Free entitlement
```

------------------------------------------------------------------------

## 10.2 Forge Price 屬於 Genesis / Forge Contract

例如：

``` text
forgePrice = X EmberEvo
```

Paid Mint：

``` text
mintWithEmber(quantity)

cost = quantity × forgePrice
↓
consume / burnFrom(user, cost)
↓
mint Genesis PEPE
```

因此：

> **現在不決定 BURN_PER_MINT，不會阻礙 EmberEvo Token Contract
> 的製作。**

只要 EmberEvo 提供 Genesis 所需的標準 interaction 即可。

---

# 11. Genesis Forge Price 何時決定？

原則：

> **不是現在，也不是 Mint 開始後臨時改。**

最佳時點：

``` text
EmberEvo Mainnet
↓
Mainnet Verification
↓
Observation Period
↓
Genesis Qualification / Snapshot
↓
Genesis MAX_SUPPLY known
↓
Free entitlement count known
↓
Paid mint capacity known
↓
Market / liquidity data available
↓
BURN_PER_MINT decision
↓
Freeze
↓
Genesis Final Security Review
↓
Public Mint Open
```

---

# 12. Compatibility 測試｜明確分成 Launch 前與 Genesis 前

## 12.1 Gate L之前：模板相容性

取得計畫使用的同一Factory／Token模板與實際版本，對公開source/runtime可用的範圍進行只讀核對與本地fork測試。測試：ERC-20回傳值、精確approve/transferFrom、contract recipient、consume候選、fee-interaction；只可稱TEMPLATE_COMPATIBILITY。

若沒有足夠source／bytecode／可比版本，不把generic ERC-20測試當成此Factory證據。缺哪部分、是否阻擋L、需Owner接受什麼風險，都列清楚。

## 12.2 Gate V / G之前：真實EMVO instance

Launch後核對自己的contract code/config與審查模板一致，再以只讀資訊＋本地fork重現；小額主網測試需獨立人工批准，不能由本次review自動執行。

Forge harness可在本地使用`TEST_FORGE_PRICE`（例如100 test EMVO）；測試值不是正式mint價格，不部署成開放的Mainnet Forge。

## 12.3 必要測項

餘額／allowance不足全部revert、quantity=0拒絕、exact amount、整數界線、Free/Paid/R容量、receiver callback重入、atomic rollback、相同tokenId跨root不得重claim。

狀態必須分開：TEMPLATE_COMPATIBILITY / INSTANCE_COMPATIBILITY / GENESIS_CONTRACT_TESTS，各自NOT_RUN/PASS/FAIL與證據。不再把『Compatibility plan exists』寫成已通過。

---

# 13. Forge Price Freeze｜允許晚決定，不允許暗中改價

## 13.1 最簡方案

在部署Genesis Final Contract前決定price，constructor設定immutable。這是優先可比較的最小權限方案，不需要先為彈性加admin設定函式。

## 13.2 若需要先部署再定價：真正Set Once

```text
priceSet initially false
forgePrice initially unset
priceFrozen initially false
paidForgeOpen initially false

setFinalPrice(p):
  authorized caller
  require !priceSet
  require !paidForgeOpen
  require p > 0
  priceSet = true
  forgePrice = p

freezePrice():
  require priceSet
  require !priceFrozen
  priceFrozen = true

openPaidForge():
  require priceFrozen
  require all Gate G conditions
```

這是**概念規格，不是已審核Solidity**。具體access control、事件、整數邊界、重入及部署順序由實作與測試確認。Price設错不能留reset/upgrade後門；採此方案就需接受修正部署／重新審查的操作代價。

Freeze永久、無改價、無owner提早開Paid路徑。不使用即時spot/oracle動態改價。

## 13.3 Free與Paid開關分開

`freeClaimOpen`與`paidForgeOpen`分開定義，避免Paid價格尚未決定就意外阻止已成熟的Free Claim。是否同日開放由Owner決定；不是本版擅自提前開Free。

免費資格不消耗EMVO但可能需要gas；Paid只扣明確Forge數量，不附加專案transfer tax。價格屬Forge，不必為改價重發EMVO。

---

# 14. Forge Price 應如何評估

正式數字仍 TBD，但決策時至少看：

``` text
Token reference price over a meaningful window
Liquidity depth
Slippage
Circulating supply
Total supply
Genesis MAX_SUPPLY
Free entitlement count
Paid mint capacity
Expected demand
Max potential token consumption
```

避免：

``` text
用 launch day 一根 K 線決定
用瞬間 pump price 決定
用單一交易價決定
```

可做 off-chain simulation：

``` text
PAID_MINT_CAPACITY
= GENESIS_MAX_SUPPLY - INITIAL_FREE_CAPACITY - REMEDIATION_CAPACITY

MAX_POTENTIAL_CONSUMPTION
= PAID_MINT_CAPACITY × BURN_PER_MINT

CONSUMPTION_SHARE
= MAX_POTENTIAL_CONSUMPTION / reference circulating supply
```

目的：

-   避免 Forge 理論上吞掉不合理比例的流通量
-   避免價格低到 utility 沒意義
-   避免價格高到 Mint 幾乎不可用

具體 guardrail %：

``` text
TBD after simulation
```

不要提前套用通用百分比。

---

# 15. Genesis Compatibility Test｜完整 Gate

> **GENESIS_COMPATIBILITY != PASS → Genesis Final Contract 不部署 / 不開
> Public Mint。**

至少測以下。

## 15.1 ERC-20 Core

``` text
transfer
approve
allowance
transferFrom
```

------------------------------------------------------------------------

## 15.2 Burn / Consume

若 `burnFrom()`：

核對：

-   user balance ↓
-   allowance ↓
-   totalSupply ↓
-   Transfer/Burn event 正確
-   exact amount consumed

若只能 sink：

核對：

-   user balance ↓
-   sink balance ↑
-   totalSupply 不變
-   wording 不可稱 true burn

------------------------------------------------------------------------

## 15.3 Atomic Forge + Mint

``` text
mintWithEmber(quantity)
  ├─ validate mint open
  ├─ validate paid supply capacity
  ├─ calculate exact cost
  ├─ consume EmberEvo
  ├─ update state
  └─ mint Genesis
```

全部必須同一 transaction 原子完成。

任一失敗：

``` text
revert everything
```

------------------------------------------------------------------------

## 15.4 Insufficient Balance

必須 fail closed。

不得：

-   partial consume
-   partial mint

------------------------------------------------------------------------

## 15.5 Insufficient Allowance

必須 fail closed。

------------------------------------------------------------------------

## 15.6 Multiple Mint

``` text
cost = quantity × forgePrice
```

必須：

-   exact
-   supply cap respected
-   per-tx cap if introduced
-   no rounding surprise

------------------------------------------------------------------------

## 15.7 Fee / Hook Interaction

若 Launch Path 有任何 fee / hook：

確認：

-   Genesis contract consume 是否被課稅
-   exact burn amount 是否仍等於 cost
-   是否需要 exemption
-   exemption 誰控制
-   hook 是否把 contract transfer 誤判成 buy/sell
-   是否有額外 accounting

若無法乾淨處理：

> **Launch Path 應重新評估。**

------------------------------------------------------------------------

## 15.8 Free Claim

測：

-   eligible tokenId succeeds
-   non-eligible tokenId fails
-   current owner can claim
-   previous owner after transfer cannot claim
-   new current owner can claim if unused
-   same tokenId cannot claim twice
-   free mint consumes zero EmberEvo
-   free claim only pays gas

------------------------------------------------------------------------

## 15.9 Free / Paid Supply Isolation

測：

``` text
Paid mint cannot consume reserved free capacity
```

以及：

``` text
Free claim remains available even after paid cap is full
```

------------------------------------------------------------------------

## 15.10 Reentrancy / Receiver Safety

若使用 `_safeMint()`，接收方可能是 contract。

必須測：

-   state update ordering
-   double claim attempt during callback
-   nested paid mint attempt
-   supply bypass attempt

採：

-   Checks-Effects-Interactions
-   或必要的 nonReentrant protection

具體實作交由 final audit 決定。

------------------------------------------------------------------------

## 15.11 Event / Explorer Verification

確保可從 chain evidence 還原：

-   Forge quantity
-   token amount consumed
-   Genesis tokenIds minted
-   free claim source IMD tokenId
-   paid / free mint route

## 15.12 新增一致性測試

- 相同tokenId正常claim與remediation互斥，任何root/version變動皆不重置。
- IMD轉手前／中／後的申請、批准、claim recipient一致性。
- F、R、P分別耗盡邊界；NFT burn不能重開容量或資格。
- 價格只能set一次，無未設定或未freeze時的Paid入口。
- Free及Paid各開關權限；emergency pause不得變成Token凍結／沒收權。
- consume adapter對false/no-return ERC-20行為明確處理；不能忽略失敗return value。
- 對receiver callback與mint重入嘗試，先更新消耗狀態或適當reentrancy防護，任何失敗全部回滾。
- 所有proof／signature範圍綁定正確chain、IMD collection、Genesis／epoch，避免跨系統重播；格式採review過的標準編碼。
- 未見source與未run的tests保持NOT_RUN，不以清單存在代替執行。

---

# 16. Mainnet Verification｜先建空Manifest，再填證據

Appendix E是唯一正式模板。所有observed值起始為null／UNKNOWN；所有測試起始NOT_RUN。Expected值另列，不能預先把VERIFIED寫進實測欄。

每個結論至少綁定chainId、address、block number＋block hash／tx hash，或source commit＋compiler＋runtime hash。若涉及proxy，列implementation與admin；contract沒有owner也不能推論Factory／Hook沒有控制權。

## Uniswap v4池識別

v4使用PoolManager singleton，不是每一池都有自己的pool合約 [S4]。保存：chainId、PoolManager address、完整PoolKey（currency0、currency1、fee、tickSpacing、hooks）與PoolId。

不接受只有『Pool address』或某個token address的模糊欄位。Native ETH與WETH也不得混用；本案IMD address需以當次官方來源核對。

## 兩個Manifest用途

PRELAUNCH：已意向設定＋template/source/quote證據。
POSTLAUNCH：實際EMVO地址＋runtime＋allocation event／balance＋fee evidence。

後者不是新的產品決策權限；若實際與預期不符，停用相關前端經濟入口、標示異常、保留原鏈上事實，不自動重發Token。

---

# 17. Mainnet Observation Period

不建議：

``` text
EmberEvo Launch
→ 幾分鐘後 Genesis Public Forge
```

先觀察：

-   Pool
-   Swap
-   Liquidity depth
-   Slippage
-   Fee behavior
-   Treasury routing
-   Token admin
-   Burn / consume
-   allowance
-   contract-to-contract interaction
-   Explorer indexing
-   events
-   abnormal transfer behavior

再決定：

``` text
Genesis Snapshot
Genesis MAX_SUPPLY
Paid Capacity
BURN_PER_MINT
```

Observation 具體天數：

``` text
TBD
```

應由實際穩定度決定，不預設幾分鐘或幾小時。

## 17.1 觀察不是固定等幾天就通過

以足夠的真實資料／可重現fork案例覆蓋買入、賣出、fee accrual、distribution、收款、transferFrom與consume。不刷量、不自買自賣製造數據；若沒有自然交易，就如實保留未觀察狀態。

主網測試預算與交易授權另行確認。『先少量測試』不是任意broadcast許可，也不是安全保證。

官方fee可能只有通過特定池才產生；前端的volume與fee dashboard需以真實PoolId統計，不能把全市場成交量乘1%當作實收。

---

# 18. Genesis Qualification / Snapshot

Snapshot 必須先決定 qualification 規則。

目前架構方向：

``` text
Active IMD Seat
→ eligible tokenId set
→ Merkle Root / equivalent verifiable allowlist
```

需要 Freeze：

``` text
Qualification Window
Active Observation Rule
Minimum observations
Observation spacing
Snapshot block / time
Eligible tokenId list
Root generation procedure
Public verification artifact
```

過去提議的：

``` text
7 days
>= 2 active observations
>= 6h apart
```

仍只能視為 candidate，除非 owner final approval。

## 18.1 Snapshot資料完整性

在活動開始前公布規則版本，保留同一觀察基準的原始資料與資料中斷紀錄；收集active資料不能等到窗口結束才發現歷史不可讀。區分資格觀察窗口與最終ownership check。

名單公布與異議核對先於Freeze；Merkle root只代表固定名單，不替代資料正確性。根據原始規則修正的tokenId與remediation容量一併凍結；未知數留TBD。

---

# 19. Genesis MAX_SUPPLY

原則：

> **Supply follows Snapshot, not the other way around.**

先知道：

``` text
Eligible free tokenIds
```

再決定：

``` text
FREE_CAP
PAID_CAP
GENESIS_MAX_SUPPLY
```

不要先公告一個 MAX_SUPPLY，再回頭發現不夠容納已承諾的 free entitlement。

本節的容量計算以§9最新模型為準：`MAX_SUPPLY = F + R + P`。FREE_CAP不能含糊地同時表示原名單數量、補救buffer與總免費上限；部署前為每個欄位定義確切語意。

---

# 20. World Build Vault｜手動優先，Safe是管理層

名稱維持WORLD BUILD VAULT。V1不新增自訂Vault smart contract、不自動把fee路由進去。

## 20.1 分階段資金管理

先採人工budget ledger與逐job付款。當世界專用資金需要多簽保護時，優先採經核對的Safe 2-of-3；這不強迫Paying Wallet必為Safe，也不限制Owner的2%用途。

把Safe直接拿來簽官方request前須測實際EIP-712／付款流程及合約錢包支援。Token轉給Safe不等於fee recipient／job.continue payer權限也自動換到Safe。

## 20.2 已核准為世界預算的支出

可包含IMD世界研究、Dream Proposal、Room／Genesis配件／Pets設計、independent review、2.5D asset、Dream Engine、QA/security、selected Tripo 3D與整合。

世界budget ledger不可把無關私人支出冒稱World Build。這是**世界預算的用途標籤**，不是把Paying Wallet全部資產鎖為世界用途。每筆記錄預算批准、job/order、幣種、金額、artifact與發佈結果。

---

# 21. Build Vault Spending Controls

至少保留：

``` text
MAX_IMD_PER_JOB
MAX_IMD_PER_DAY
MAX_IMD_PER_BUILD
MAX_CONCURRENT_BUILDS
Category Allowlist
Duplicate Detection
Cooldown
Burst Lock
Budget Check
Emergency Pause
Audit Trail
```

注意：

> Emergency Pause 主要用於 operational / publishing / spend
> workflow，不代表 Token Core 必須有能任意凍結使用者的全域 pause。

---

# 22. Swarm費用與驗收｜先付款入場，不保證成功或退款

## 22.1 官方request成本

現行官方流程先Check／Quote，再由付款人授權指定request，平台處理payment/admission後才執行 [S1]。因此不能把API費寫成『QA通過、Publish approval後才支付』。

```text
提案／預算／輸入可讀性確認
→ 非部署Check＋Quote
→ Owner批准這筆review/build request費
→ admission與工作
→ 結果／獨立QA
→ Owner決定接受或補修
→ Owner決定是否另付新的修補job
```

不能假設失敗可退費；payment_pending／admission_pending／blocked各有不同原因，先讀原order，不要直接新增付款。

## 22.2 Agents如何拿網路報酬

官方Swarm的worker報酬由其平台機制處理，不由EmberEvo任意控制。Launch時的10%分配也不是我們每個普通job都另給10%。

如果另有外部合作約定base payment，才適用該合作約定；不要混在API admission fee裡。V1不加入績效holdback／clawback合約，也不以事後流量不佳自行扣已依約應付的報酬。

## 22.3 支付上限

Owner逐筆核對job目標、quote amount/asset/payTo、期限、允許動作與不可見的自動publish/deploy權限。每次重跑都是新決策，不建立無限retry或paid schedule。

---

# 23. Protocol Activity → Product Activity

核心飛輪：

``` text
Economic / Product Activity
↓
Verified Revenue
↓
WORLD BUILD VAULT
↓
IMD Budget
↓
Identity.md Swarm Jobs
↓
Proposal / Build / Review / QA
↓
Swarm Dream Hall
↓
Selected Main World Growth
↓
Users see a world that actually changes
↓
More useful activity
↺
```

目標：

> **The Swarm Builds the World.**

---

# 24. Swarm Dream Hall｜不是隨機 AI Fantasy，而是 IMD 的 2.5D 夢境映射

Swarm Dream Hall 是 IMD Ember World 主世界內的一棟公共建築。

館內：

> **由 Identity.md Swarm 持續建造的 2D / 2.5D 世界。**

但 v3.0 加入最重要限制：

## IMD Anchor Rule

每個 Dream Room 必須回答：

> **What does this represent in the Identity.md ecosystem?**

沒有有效 IMD Anchor：

``` text
VALIDATION FAIL
```

---

# 25. Dream Hall Content Pillars

每個 Dream Room 至少連到一個，最好 2--3 個：

``` text
IMD Agent / Seat
Identity
Swarm
Job
Review / Verification
Proof / Explorer
Agent Activity
World Build
Community Project
Genesis PEPE
EmberEvo World Economy
```

推薦 5 個主題柱：

## 25.1 Agent Stories

-   Agent identity
-   Seat
-   activity
-   house
-   work history

## 25.2 Swarm Stories

``` text
Proposal
→ Multiple Agents
→ Build
→ Review
→ Correction
→ Result
```

## 25.3 Proof Stories

展示：

-   who built
-   who reviewed
-   which job
-   what changed
-   what entered the world

## 25.4 Ecosystem Stories

將 IMD 生態內的 project / experiment / protocol activity 轉成世界敘事。

不是無條件廣告，而是回答：

> **What did this contribute to the IMD ecosystem?**

## 25.5 World Growth Stories

將每次重要：

-   bug fix
-   new room
-   new Agent House feature
-   Genesis concept
-   world feature

轉成 Build Memory。

---

# 26. Dream Hall 內容比例建議（非硬性 Tokenomics）

工作建議：

``` text
70%
Direct IMD ecosystem / Agent / Swarm / Build / Proof

20%
IMD Ember World / Genesis / EmberEvo extension stories

10%
Experimental / artistic content
```

這是 Creative Direction，不是不可變 protocol rule。

即使是 10% 實驗內容，也應盡量能放回 IMD Ember World 的 lore。

---

# 27. World Brain → Dream Proposal

不要：

``` text
World Brain
→ randomly create pirate island
```

應該：

``` text
IMD ecosystem signal
↓
World Brain identifies interesting event / need
↓
Dream Proposal
↓
Review
↓
Build
```

Dream Proposal 至少包含：

``` text
Title
IMD Source
IMD Anchor
Real Event / Concept
Agents involved
Jobs involved
What it represents
Why it belongs in IMD Ember World
Visual metaphor
Interactive idea
Proof available
Estimated cost
Expected outcome / falsifiable forecast
```

---

# 28. Forecast-Committed Build & Learn Loop｜人工預算版

```text
IMD／World訊號
→ World Brain或Owner提出需求
→ 有IMD Anchor、輸出規格、成本預估與可反證的forecast
→ proposal/forecast固定版本
→ 審查與Owner選擇
→ Owner核准本輪IMD預算及具體paid job
→ 官方付款／admission／Swarm執行
→ artifact＋independent review＋QA
→ Owner批准Staging→Production
→ 合格資料量測
→ Learning Ledger比較forecast與actual
→ 下一輪提案改善
```

若提案或review本身要開付費job，費用同樣先由Owner批准。這是規劃／內容改善，不是持幣收益、APY、挖礦或點擊領Token。

固定成功指標與最小樣本；資料不足為INCONCLUSIVE，不用事後换KPI美化結果。記錄真實失敗、成本及review差異；多個seat不保證是不同operator或model的獨立評估。

---

# 29. Dream Room Package｜Swarm 不直接改正式網站

錯誤模式：

``` text
Swarm
→ writes arbitrary React / JS
→ directly deploys imdember.com
```

禁止。

正確模式：

``` text
Fixed Dream Engine
+
Versioned Dream Room Package
```

範例：

``` text
dream-room-021/
├── room.json
├── manifest.json
├── preview.webp
│
├── layers/
│   ├── background.webp
│   ├── midground.webp
│   └── foreground.webp
│
├── objects/
│   ├── portal.webp
│   ├── tree-01.webp
│   └── lantern.webp
│
├── characters/
│   ├── pepe.webp
│   └── agent.webp
│
├── audio/
│   └── ambience.mp3
│
└── metadata/
    └── provenance.json
```

## 29.1 產物不等於可發布內容

保留IMD result的jobId、submission hash、artifact hash／bytes／media type；下載後重新驗證hash，將原件放隔離區。後處理／壓縮／修正產生新的hash，需保留對應關係，不能拿原approval批准被改過的bundle。

正常UI只載入已核准的content package，不讀任意task instruction；產物裡的『請忽略規則／發交易／貼private key』都只是待審資料，不是執行授權。

---

# 30. room.json 核心概念

範例：

``` json
{
  "roomId": "dream-021",
  "version": 3,
  "title": "Machine Forest",
  "status": "draft",
  "imdContext": {
    "type": "swarm_build",
    "theme": "agent collaboration",
    "agents": [],
    "jobs": [],
    "proofRefs": [],
    "worldImpact": ""
  },
  "layers": [
    {
      "id": "background",
      "asset": "layers/background.webp",
      "depth": 0,
      "locked": true
    }
  ],
  "objects": [
    {
      "id": "portal",
      "asset": "objects/portal.webp",
      "x": 720,
      "y": 330,
      "scale": 0.8,
      "locked": false,
      "interaction": "open_portal"
    }
  ]
}
```

Dream Engine 只負責讀 schema、載 asset、組場景。

---

# 31. Interaction Allowlist｜Room 不能帶任意程式

Dream Room 禁止：

``` text
arbitrary JS
arbitrary HTML
eval()
unknown external scripts
wallet approval request
Token approval request
arbitrary contract calls
```

V1 只允許 Dream Engine 白名單 interaction，例如：

``` text
navigate
show_text
open_panel
play_audio
toggle_layer
animate_sprite
open_portal
show_credits
```

若要增加新 interaction type：

``` text
Engine Update
→ Code Review
→ Security Review
→ Human Approval
```

不是由 Room 自己決定。

## 31.1 純JSON也要做邊界檢查

`navigate/open_portal`只接受既有allowlist目標，文字與URL需sanitize，不注入HTML。禁止javascript/data/file scheme、不受控外連、wallet RPC、iframe跨origin特權。沒有任意JS不代表沒有XSS／SSRF或惡意asset風險。

---

# 32. Dream Room Pipeline

完整：

``` text
IMD Ecosystem Signal
↓
World Brain / Swarm Dream Proposal
↓
IMD Anchor Check
↓
Independent Review
↓
Budget / Duplicate / Category Check
↓
Human / Safe Approval
↓
Identity.md Swarm Job
↓
Dream Room Package
↓
Automated Validation
↓
Independent Review
↓
STAGING
↓
Human Preview
↓
APPROVE or REVISE
↓
PUBLISH
↓
Swarm Dream Hall
↓
World Pulse
↓
Learning Ledger
↓
Next Proposal
↺
```

---

# 33. Automated Validation

至少檢查：

-   JSON schema
-   manifest completeness
-   asset integrity
-   broken paths
-   MIME / file type
-   file size
-   image dimensions
-   audio size / duration
-   performance budget
-   forbidden script / HTML
-   external URL policy
-   interaction allowlist
-   duplicate asset
-   style consistency
-   provenance fields
-   IMD Anchor presence
-   basic IP / content policy checks

## 33.1 Ingestor防護

下載僅接受允許origin或受控artifact route，拒絕內網／metadata host／重導到未核准目的地；處理DNS／redirect政策。解壓拒絕absolute path、`..` traversal、symlink、覆蓋既有檔與zip bomb；限制壓縮比、檔數、總bytes。

驗證extension＋MIME＋實際decode，不信任檔名。SVG/HTML預設禁用；GLB如含外部buffer／texture引用，需轉為受控本地資產或拒絕。隔離加工進程無錢包／Github／production secrets。

CI不能執行package附帶的任意script。未信任PR不能觸及帶secrets的privileged workflow；artifact亦視為untrusted [S6]。

---

# 34. Performance Budget

不可讓 Swarm 自由產生：

``` text
20 張 8K
10 個大型 audio
大量 particle
無限制 animation
```

Dream Engine 必須定：

``` text
MAX_ROOM_TOTAL_MB
MAX_IMAGE_DIMENSION
MAX_LAYERS
MAX_OBJECTS
MAX_AUDIO_LENGTH
MAX_ANIMATED_OBJECTS
MAX_PARTICLES
MAX_INTERACTIONS
```

具體數值由前端 benchmark 後 Freeze。

---

# 35. Style Bible｜機器可讀

Style 不只寫在人類 prompt。

建議建立：

``` text
style-bible.json
```

目前網站視覺方向：

-   stylized / lightweight low-poly
-   dark / night blue-gray town
-   cream / gray architecture
-   warm yellow windows / lanterns
-   maroon / red banners with restrained gold motifs
-   dark teal water
-   warm gold light
-   elegant, restrained fantasy-tech
-   IMD green / teal effects restrained
-   avoid generic photoreal cinematic fantasy poster
-   avoid neon cyberpunk overload unless specific room concept requires

Reviewer 檢查：

``` text
Visual consistency
Lore consistency
Originality
Asset quality
Performance
Technical validity
IMD relevance
```

---

# 36. Dream Room Editor｜Dream Hall D2里程碑，非Token Launch前置

目的：

> Swarm 做完不喜歡時，不需要叫 Codex 改原始碼，也不必整間重做。

規劃中的完整Editor功能：

-   Select object
-   Drag
-   Scale
-   Rotate
-   Hide / Show
-   Delete
-   Change layer
-   Replace asset
-   Edit text
-   Replace audio
-   Lock / Unlock
-   AI Revision
-   Regenerate selected asset
-   Version History
-   Rollback

## 36.1 分期驗收

D0：建築＋Preview Lobby。D1：一個手動匯入的schema合格Room＋Staging／人工publish／rollback。D2：完整Editor、選取重生、Branch/Diff等功能。D3：受控AI提案與配件／Pets展示。

保留Editor產品目標，不把『Editor未完成』列為Token L阻擋；但不能宣傳它已LIVE。Artifact驗證與人工發布防護在任何可公開內容的里程碑都不能延後。

---

# 37. Lock / Unlock

例如：

``` text
🔒 Genesis PEPE
🔒 Main Building
🔒 Portal Position
🔒 Layout

🔓 Background
🔓 Lighting
🔓 Fog
```

AI Revision：

> 「天空亮一點，Portal 小一點，Pepe 不要動。」

系統只允許改 unlocked elements。

如自然語言要求修改locked元素，Editor必須回報衝突並保持原狀，不能用AI推測擁有者已解除鎖定。顯式Unlock與新版本批准後才可修改。

---

# 38. AI Revision Modes

建議三種：

## A. Modify Selected

只改選中的 element。

## B. Modify Unlocked

只修改目前 unlocked elements。

## C. Full Revision

整體重新提案，但仍需新版本，不覆蓋舊版。

---

# 39. Version History / Branch / Diff / Rollback

不得覆蓋歷史。

例如：

``` text
v1 Original Swarm Output
v2 Brighter Background
v3 Smaller Portal
v4 New Character Asset
v5 Lighting Adjustment
```

支援：

``` text
Restore v2
```

A/B：

``` text
v3-A Green Forest
v3-B Purple Forest
```

AI Revision 完成後顯示：

``` text
Changed:
- background.webp
- fog.opacity
- portal.scale

Unchanged:
- pepe.webp
- main-building.webp
- audio
```

---

# 40. Staging → Production

狀態：

``` text
DRAFT
↓
IN_REVIEW
↓
STAGING
↓
APPROVED
↓
PUBLISHED
↓
ARCHIVED
```

早期原則：

``` text
Swarm = Design / Build / Review
Human/Admin = Publish
```

禁止：

``` text
Swarm job completes
→ direct production publish
```

---

# 41. Room Registry｜Publish 不需要重新 Deploy 整個網站

建議：

``` json
{
  "roomId": "dream-021",
  "publishedVersion": 4,
  "status": "published",
  "manifestHash": "..."
}
```

Dream Hall 讀：

``` text
Room Registry
→ publishedVersion
→ Dream Engine loads package
```

若 v5 有問題：

``` text
publishedVersion: 5 → 4
```

即可 rollback。

## 41.1 Published指標與hash一起凍結

發布記錄需包含package hash、schema version、asset hashes、reviewed commit、批准人與批准時間；不是只改publishedVersion。發布後的檔案不能被同名覆寫；內容變動必須新版本重新review。

Rollback只能指向已核准、可取回的immutable bundle；同步處理cache／CDN invalidation。拿不到新版本時保留已知良好版本或安全fallback，不動用舊產物中的權限指令。

---

# 42. Asset Hash / Deduplication

同一資產不要重複保存。

``` text
asset hash
→ existing asset?
→ reuse
```

優點：

-   storage ↓
-   loading time ↓
-   duplicate generation ↓
-   style consistency ↑

---

# 43. Provenance｜每個 Room 都要知道誰做的

每個 Published Room 保存：

``` text
Room ID
Version
Title
IMD Anchor
Creator Agent
Reviewer Agent
Identity.md Job IDs
Build Cost
Published Time
Proof / Explorer Links
World Impact
```

可進：

-   Dream Room Credits
-   Agent House
-   Proof Wall
-   Transparency Dashboard

IMD accepted/review receipt只能支持『該工作／評核被記錄』，不能自動證明無漏洞、IP授權完整或已發布到本網站。Dashboard分開accepted、validated、Owner-approved、published，不把它們合成一個綠色PASS。

---

# 44. Selected 2.5D → Tripo 3D Promotion

不是每個 Dream Room 都轉 3D。

流程：

``` text
Dream Room
↓
User / reviewer / World Brain signal
↓
Human selects
↓
Tripo
↓
3D asset
↓
Optimization
↓
Texture / Rig / Animation if needed
↓
QA
↓
Main World
```

Tripo 保留給：

-   Genesis PEPE
-   Selected Hero Assets
-   Premium Main-World 3D Content

Dream Hall = high-frequency experimental / narrative layer。\
Main World = selected persistent 3D layer。

## 44.1 Genesis配件與Pets整合規格（後續產品）

Concept→2D展示→人工選擇→精選3D→fitting/rig/QA→是否NFT化另案。Avatar base model hash、骨架／socket版本、尺寸／pivot、wearable slot、clipping測試、手機triangle/texture/animation預算與授權記錄均需明確。

Pet第一版可只做伴隨視覺／互動，不自動引入餵食死亡、戰鬥、token emission或智能合約。連結外部Fren Pet等系列仍以原有read-only邊界為準，不因本功能新增跨app授權或轉移。

後續NFT系列的供應、Mint/Forge、metadata freeze、配件所有權／裝備規則各自開Gate G；Token launch不等於它們已部署或免費贈送。

---

# 45. World Pulse

使用者進 Room 後，可量測：

-   visits
-   unique visits
-   time spent
-   return visits
-   interaction usage
-   portal usage
-   completion / exit

但：

> **這些是產品訊號，不直接變成 EmberEvo reward。**

禁止：

``` text
X likes
Room views
clicks
→ automatic Token payout
```

避免 farming / manipulation。

---

# 46. Metric Catalogue

AI 不可自己臨時發明 KPI 來證明自己成功。

每個正式 metric 應有：

``` text
Metric ID
Definition
Source
Query / calculation version
Primary metric
Guardrail metric
Minimum sample
Measurement horizon
Noise handling
Outage handling
Invalid / missing data rule
```

若：

-   sample 太小
-   data source outage
-   query broken
-   unverifiable

則：

``` text
Outcome = INCONCLUSIVE
```

Learning Ledger：

``` text
neutral impact
```

---

# 47. Learning Ledger

V1 建議：

``` text
Off-chain
Append-only
Public / inspectable
Hash-anchored optional
```

記錄：

-   delivery reliability
-   cost accuracy
-   QA defects
-   forecast calibration
-   reviewer calibration
-   provenance
-   actual outcome

影響：

-   future proposal opportunity
-   review visibility
-   planning confidence

不直接影響：

-   user token balance
-   staking yield
-   holder reward
-   already-earned base work payment

---

# 48. Proposal Rights 防止 Rich-get-richer

若 Learning Ledger 影響 future proposal opportunities，必須有：

-   score decay
-   per-agent cap
-   exploration slots
-   open slots
-   minimum conclusive data before calibration counts

不能：

``` text
早期分數最高 Agent
→ 永久壟斷所有工作
```

---

# 49. Adaptive Review Depth

可依 build risk 動態調整：

``` text
Small / low-risk
→ 1–2 proposers
→ 1 reviewer

Standard
→ ~3 proposers
→ 2 reviewers

High-impact
→ 3–5 proposers
→ 3+ reviewers
→ human / security review
```

這些是 candidate operating values，非 Mainnet immutable protocol
number。

---

# 50. World Runway / Self-Sustaining 原則

目標是：

> **Designed to progressively become self-sustaining.**

不是：

> guaranteed self-sustaining / guaranteed revenue / guaranteed price
> support。

應追蹤：

``` text
build_runway
time_runway
cash / stable operating reserve
verified revenue
actual IMD spend
```

注意：

-   future predicted revenue ≠ cash
-   volatile EmberEvo treasury 應折價計算
-   Genesis burn ≠ revenue
-   token price appreciation ≠ operating revenue

## 50.1 無交易量時也能安全運作

在未有穩定實收前，World Build只用已核准預算／Owner另行投入；不能以預期1%費用保證每週會產生房間。IMD價格與深度、平台服務與Token成交量有共同風險，直接收IMD減少換幣步驟，但不是穩定幣現金流。

Budget不足時縮減或暫停新paid jobs，既有靜態Dream Room仍可瀏覽；保留artifact備份與手動維護能力，不讓IMD API故障拖垮整站。

---

# 51. Genesis Burn ≠ World Revenue

必須明確：

## Genesis Utility Burn

``` text
User demand
→ Consume EmberEvo
→ Forge Genesis
```

這是：

-   token utility
-   demand / supply effect

不是：

-   World Build Vault cash revenue

除非設計是 transfer-to-treasury 而不是 true burn，但那時也不能再稱
burn。

---

# 52. true burn vs permanent consume

若：

``` text
burnFrom()
AND totalSupply decreases
```

可以說：

> **Burn**

若：

``` text
transferFrom(user, immutable sink)
```

應說：

> **Permanently consume**\
> **Permanently remove from circulation**

不可假稱 totalSupply burn。

## 52.1 Consume方案選擇，不急著多部署一份合約

若模板本身不支援真正burn，先審核既有可用consume方法。若另案採不可回收sink，檢查無withdraw／execute／delegatecall／upgrade／rescue能移走目標Token；單純命名為dead address不等於完整安全論證。

Sink方案與其地址在Genesis實作時審查，不能偷放進標準Token launch任務。本版不自動新增Mainnet合約；任何額外合約需Owner批准與測試。

---

# 53. Buyback & Burn｜V1 明確 OFF

v2.1 把 Buyback & Burn 視為 optional module。

v3.0 進一步收斂：

``` text
V1 BUYBACK = OFF
V1 CUSTOM BUYBACK CONTRACT = NO
V1 CUSTOM V4 HOOK = NO
```

未來只有在：

-   真實 revenue 足夠
-   accounting 清楚
-   security surface 可控
-   gas / MEV 可控
-   不犧牲產品建設 runway

才重新評估。

不得對外承諾：

-   guaranteed buyback
-   guaranteed burn
-   guaranteed price support
-   APY
-   yield
-   dividend
-   passive income

---

# 54. V1 不做的東西

``` text
Custom Uniswap v4 Hook
Build-to-Burn
BurnReserve
Buyback-and-Burn automation
Staking
APY / Yield
Reflection
Rebase
LP Mining
Holder Dividend
Holder Fee Sharing
Daily Emission
Complex DAO
Multichain
Independent EmberEvo Agent Marketplace
Automated AI Treasury Spend
On-chain Learning Ledger
On-chain World Pulse
ModeRegistry Contract
RevenueRouter Contract
Outcome Escrow / Holdback / Clawback
Dynamic Oracle Forge Price
```

原則：

> **先讓核心世界、Genesis、IMD Swarm、Dream Hall 的真正 utility 成立。**

---

# 55. Transparency Dashboard

建議顯示：

``` text
EmberEvo Total Supply
EmberEvo Circulating
Genesis EmberEvo Burned / Consumed
Genesis Free Claims
Genesis Paid Forges
Remaining Free Capacity
Remaining Paid Capacity

World Build Vault Balance
Total IMD Build Spend
Jobs Funded
Builds Proposed
Builds Accepted
Builds Rejected
Active Builds
Dream Rooms Published
Latest World Build
Selected 3D Promotions
```

若某模組未開：

``` text
BUYBACK MODULE = OFF
```

不要顯示假數據或 placeholder 當真實資料。

每個 Build 盡量連到：

-   Identity.md Explorer Job ID
-   agent proof
-   review proof
-   transaction / spend proof
-   published Room

## 55.1 分帳欄位

顯示官方Pool範圍的volume（含期間／資產／來源）、accrued fees、claimable、received、distribution tx／block、approved IMD budget、committed未完成job、actual paid、gas與已發布成果。

配額轉入、Owner增資、EMVO出售及純內部轉帳分列。不存在的資料显示UNKNOWN／NOT_AVAILABLE；pending與已到帳不能相加假充總收入。

---

# 56. Human / AI Authority Boundary

V1：

``` text
AI / Swarm
= Observe
= Propose
= Design
= Build
= Review
= QA

Human / Safe
= Final spend approval
= Final high-risk parameter freeze
= Production publish
= Treasury action
= Mainnet deploy approval
```

高風險永遠需要 Human / Safe：

-   token launch
-   contract address announcement
-   tokenomics final numbers
-   snapshot / claim rules
-   Genesis forge price freeze
-   treasury conversion
-   smart contract upgrade（若存在）
-   security incident

## 56.1 本次Review不是金融授權

R階段reviewer只能讀公開來源／被授權資料與本地測試。不要提供private key、助記詞、可用Permit2/QuoteApproval簽名、request bearer或production deployment token。

Owner若透過官方UI付了**這一筆非部署review job**，只批准該項服務費。Reviewer不能據此再開付費job／schedule、發Token、swap或呼叫distribution。平台自行記錄工作receipt不等於授權金融操作。

---

# 57. Security Boundary｜Dream Hall 不碰 Token Approvals

Dream Hall / Main World 一般瀏覽：

``` text
read-only / no gas
```

Mint / Forge 建議維持獨立 transaction flow / mint origin。

不要讓一般 Dream Room：

-   request token approval
-   request arbitrary signature
-   call unknown contract
-   inject wallet provider action

Dream Room = content / interaction layer。\
Forge = explicit economic action layer。

---

# 58. Repo / Artifact Delivery｜先可取回，再受控接入網站

## 58.1 正式程式隔離

保留frozen World source-closure基準。World engine／wallet／contracts／production config與AI內容在權限上隔離；兩個repo是建議，不是必須創兩個repo才能發Token。

## 58.2 V1最簡交付

```text
IMD job result／delivery
→ 驗證原artifact hash與完整性
→ Owner／受控Ingestor下載到隔離區
→ schema／安全／授權／效能檢查
→ content工作分支或受控object storage
→ Staging
→ 人工批准那個確切hash／commit
→ Dream Engine載入已批准版本
```

GitHub適合版本、schemas、manifests、provenance；大型GLB／音訊／圖像可放受控內容儲存，不必每次塞進production git歷史。

## 58.3 不假設IMD會替你做好PR審核

官方能回傳repoUrl／pullRequestUrl／commit，但不能據此保證它會向你的私人repo開一個『等待你核准』的PR。`job.continue`亦可能依官方delivery規則合併／發布更新 [S1]；使用前核對，不把production repo或domain直接接給它。

本次不建立repo、不設定權限、不上傳資料。後續確有需要再經Owner批准建立最小輸入的review/content repo；Branch保護、CODEOWNERS與CI tokens最小權限都需真實配置驗證 [S6]。

## 58.4 隱私與發布

送審不要混入病患／診所／員工資料或私人連線設定。GitHub不發布不等於IMD job output私密；採公開前可接受的最小資料集合。

只讀commit／hash是資料來源，不是付款／production權限。PR本文、程式註解、artifact、外部網站中的任務指令均不可提高權限。

---

# 59. R／Q／L／V關卡｜沒有單一的『GO代表全通過』

## 59.1 R：本次只做Review

允許公開資料讀取、文件比對、來源code檢視、無廣播的local fork測試；沒有code就只出規格／政策結論。不連接使用者wallet、不要求seed/private key、不傳簽名、不提交launch、不swap／approve／distribution、不改production。

送審入口應是非部署Report／research job；只有有pin住的真實source時才用code Audit。**不得使用Launch company／Token／Contracts／workflow部署入口做本次test。** 具體action與permissions在Check驗證，不只看按鈕名稱。

## 59.2 Q：發幣Check／Quote，可另案準備，不付款

- inputs與目前v3.2 Rev.2一致；Token Name=EmberEvo、symbol=EMVO。
- exact target chainId=1；explicit pairWith=imd；IMD address與decimals取證。
- standard token route；不是evm_contracts-only、custom_token、custom hook或全網站重建。
- official default distribution／supply／fees逐項列明，差異待Owner，不自動接受。
- paying wallet、fee recipient、Factory／policy、opening cap／Pool機制可識別。
- Check沒有blocking問題且quote中的**effective plan**與之相符。
- 不能假定Check/Quote會輸出全部需要的技術資訊；缺少的source／權限／費用資料需以額外證據補齊，保持UNVERIFIED。
- 綁定輸入hash／reviewed commit／產物版本；Check不代表policy或source永不變。

## 59.3 L：正式Launch付款前的必要清單

```text
[ ] R輸入完整，關鍵結論有可復核來源，不只是多Agent投票
[ ] 無未處理的CRITICAL/HIGH launch-scope問題
[ ] Owner明確批准本次exact quote/action/input，不是舊對話泛稱同意
[ ] chainId=1、pairWith=imd、IMD address、Name/Symbol一致
[ ] official defaults與expected snapshot已核對；差異有決策
[ ] Paying Wallet與後續fee recipient權限／不可遷移風險已理解
[ ] 同版Factory/Token/Hook/Distributor/LP/Collector權限取證完成
[ ] Genesis模板的可行consume path有基礎證據（非正式Forge已審完）
[ ] IMD-only費用行為有充分prelaunch證據；否則Owner另行決策
[ ] opening cap／單邊池／withdraw/migration權限／早期深度風險已理解
[ ] request費、額外操作gas與服務費分開，預算已批准
[ ] payment asset、amount、payTo、spender、chain、nonce、deadline已核對
[ ] Permit2 payment及QuoteApproval的domain/action/quoteHash範圍一致
[ ] quote未過期；沒有重用舊簽名、沒有silent re-quote後自行付款
[ ] retry使用同一order／原封有效payload；不因timeout新增付費launch
[ ] 標準launch若自動部署新生成source，已清楚揭露可預審範圍限制
[ ] Postlaunch verification／incident plan與空Manifest已備妥
```

**對本次文件作者／Swarm reviewer：上述勾選不是要求你付款，付款只能由Owner另外執行。**

交易簽名完整流程依當下官方client/typed data核對 [S1,S5]；不要自行重作canonical JSON或廣播SDK。Request bearer與可用簽名不放報告；公開證據要去敏。

## 59.4 付款失敗／timeout處理

先讀原order狀態、payment tx、admission result、job/launch id，區分未付、pending、已付但工作失敗；不因UI timeout重複發幣。需要新quote時使原簽名失效／確認狀態，重新給Owner核對，不能悄悄接續扣款。

只有付款完成不代表Token已發行；只有accepted review也不代表deployment完成。source未明、refund未明時寫UNKNOWN，不能保證退款。

## 59.5 V：上線後核對，而非自動宣布成功

核對actual Token address/runtime、完整PoolKey/PoolId、allocation與recipient、已審模板差異、實際fee流。使用者單次小額交易另行批准；Agent只讀既有資料或local fork。

如果結果不符：停用尚未開放的Forge／Mint UI，公告可證實狀態、保存證據、停止新預算；不能承諾凍結不可變Token、回復交易或自動重新發行。

**沒有EMVO尚不存在的實際receipt，不會阻擋R/Q；但L所需template證據不足不能以『發了再說』跳過。**

---

# 60. Genesis Gate G｜Token上線不是Genesis開放許可

```text
[ ] 真實EMVO instance/config verified，模板比較完成
[ ] 已選定並審核burn／consume方法，沒有擅自新增token功能
[ ] 初始資格規則／觀察窗口／snapshot方法與公開資料凍結
[ ] F / R / P / MAX_SUPPLY明確且互不挪用
[ ] root生成、proof編碼、collection/chain/epoch範圍經測試
[ ] claimed[tokenId]跨root與remediation共用且不可reset
[ ] current owner轉移邏輯／recipient清楚
[ ] Remediation不能任意admin mint，超額如何處理已公告
[ ] Free有效期／deadline／故障申訴規則已決定
[ ] BURN_PER_MINT／quantity上限／精確成本已決定
[ ] Price set-once或immutable，freeze後不可改
[ ] freeClaimOpen／paidForgeOpen語意及角色明確
[ ] balance/allowance不足、回傳值、overflow、callback重入測試PASS
[ ] NFT burn不重開mint容量或資格
[ ] formal code review與critical/high findings已關閉
[ ] UI區分Free Claim / Paid Forge / Remediation與gas
[ ] metadata、外部asset、所有權／裝備規則與合約地址已核對
[ ] Owner針對這次Genesis發布另行批准
```

沒有足夠資料就留TBD/NOT_RUN。不能因Token R/Q通過就把Genesis G勾成PASS，也不因遠期Pets未做完就阻擋Token研究。

---

# 61. World Build / Dream Hall Publish Gates

每個 Room：

``` text
[ ] IMD Anchor exists
[ ] Proposal approved
[ ] Budget approved
[ ] Package schema valid
[ ] Assets valid
[ ] Performance budget PASS
[ ] Interaction allowlist PASS
[ ] No arbitrary scripts
[ ] Independent review PASS
[ ] Staging preview PASS
[ ] Human approval PASS
[ ] Provenance complete
[ ] Version registered
```

才可 `PUBLISH`。

## 61.1 D里程碑附加Gate

Artifact下載hash、schema、安全隔離、性能、授權與IMD Anchor都過關後，才在Staging打開。人工批准要綁定明確package hash，發布只能引用該版本。

建築MVP不是完整Dream Engine；2D配件概念不是已可穿戴GLB；寵物展示不是已mint NFT。測試與公示按這些不同狀態分開。

---

# 62. 決策表｜不把Owner待選事項冒充Live可查欄位

## 62.1 已選的方向

```text
EmberEvo / EMVO / $EMVO
Ethereum Mainnet target
Official standard launch mechanics and defaults
EMVO / IMD preferred (explicit selection)
IMD-only fee receipt desired, subject to proof
2% Paying Wallet unlocked / transferable / may be sold
No additional vesting or protocol-level use restriction
V1 World Build budget / payments / production publish = MANUAL
```

## 62.2 Live證據待補

Exact policy/version/factory、supported pair/IMD address、Paying Wallet、費用每側計價／distribution、權限、LP歸屬／範圍、order/check/quote與真正source／runtime。

## 62.3 Owner／Genesis階段待選

Qualification Window、active規則、free expiry、F/R/P與MAX_SUPPLY、Forge價格、remediation權限與容量處理、每筆Mint上限、metadata可變性。

這些不能從capabilities『查出答案』；它們是Owner產品決策，需在Gate G前決定。

## 62.4 World階段待定

獨立World budget量／帳本、Paying Wallet到Safe的操作流程、D1最小Room schema、性能實測上限、contents儲存、review repo可讀方式。未有網站repo／code／source access時，不宣稱已檢驗整站。

---

# 63. 開發與發幣順序｜分支並行，互不冒充完成

```text
現在
├─ A. Token Preflight
│  ├─ 準備固定hash的v3.2 Rev.2＋Swarm Brief v1.1
│  ├─ R：非部署研究／審查（本次）
│  ├─ template/source／local-fork evidence（有code才做）
│  ├─ Q：exact Mainnet Check／Quote（另案、未付款）
│  ├─ 關閉launch blockers／Owner處理偏好與policy差異
│  ├─ L：Owner批准金融簽名、付款及launch
│  └─ V：actual deployment／fee／Pool verification
│
├─ B. Dream Hall
│  ├─ D0：Codex＋Tripo建築／地圖／Preview Lobby
│  ├─ D1：Fixed Dream Engine＋一個手動Room＋人工publish
│  ├─ 收回Swarm artifact→安全驗證→Staging
│  ├─ D2：Editor／版本／rollback／受控AI提案
│  └─ D3：配件／Pets概念→精選3D／QA（NFT另案）
│
└─ C. Genesis
   ├─ 概念／3D可以平行
   ├─ EMVO相容方法先研究，正式instance後核對
   ├─ observation＋qualification／snapshot
   ├─ F/R/P與price freeze
   ├─ 合約／測試／獨立review／Remediation
   └─ G：Owner另行批准Free／Paid開放

每輪World Build：Owner批准具體IMD預算→手動付款job→結果→QA→Staging→人工發布。
```

Token launch不必等全部世界功能做完，但不得宣稱未完成Utility已存在。Review scope控制在眼前Gate，不把長期功能提案擴張成必須同一次發幣部署。

---

# 64. 三個層級的世界架構

## Layer 1 --- IMD Ember World

真正的 3D 主世界：

-   Agent Houses
-   Genesis PEPE
-   Buildings
-   Identity / Proof
-   Network visualization

## Layer 2 --- Swarm Dream Hall

> **由 IMD 生態事件與 Identity.md Swarm 工作持續產生的 2D / 2.5D
> interpretation layer。**

它可以奇幻，但不能脫離 IMD。

## Layer 3 --- EmberEvo Economy

負責：

-   Genesis Forge
-   future world utility
-   selected product revenue paths
-   support World Growth budgets

## 64.1 經濟關係不是自動金融權限

EMVO是經濟資產；World Brain是off-chain提案；IMD是實際Swarm工作系統；Dream Engine是網站顯示層。它們由明確budget、job artifact與release manifest串聯，不是Token本身自動執行AI。

---

# 65. Branding / Messaging

核心：

> **EmberEvo powers the economy of IMD Ember World.**

Genesis：

> **Use EmberEvo. Forge a Genesis PEPE.**

World Growth：

> **The Swarm Builds the World.**

Dream Hall：

> **Walk through the ecosystem.**

完整敘事：

> **The fire survives. The world evolves.**\
> **IMD provides the intelligence.**\
> **The Swarm does the work.**\
> **EmberEvo powers the economy.**\
> **The Dream Hall imagines the ecosystem.**\
> **IMD Ember World becomes the proof.**

## 65.1 Launch期的真實揭露

建議用『正在建置／計画透過核准預算支持』描述未完成功能，不宣稱已自動產生房間／NFT／收益。未鎖2%需如實說明可轉移並可能出售；這是資訊揭露，不是新增出售限制。

不宣稱全球symbol唯一、不宣稱法律豁免、不宣稱安全無風險；涉及公開發行、銷售、稅務或授權需按實際司法區另行專業覆核。本文件不替代法律或合約安全意見。

---

# 66. 最終原則

> **EMVO發行機制盡量沿用官方；資金由Owner逐筆決定；AI只在受控資料與權限內提案／製作；真正證據決定是否放行，不能讓文件標題、Swarm投票或漂亮願景替代測試。**

本版完成的是需求與安全邊界的修正。尚未執行的Swarm、Check、Quote、合約測試、部署、fee receipt、Genesis及World發布，一律保留NOT_RUN／UNVERIFIED。

---

# Appendix A — Decision Register / Scope Lock

| ID | 決策 | 狀態／範圍 |
|---|---|---|
| O-01 | EmberEvo / EMVO / $EMVO | Owner選定；技術格式與撞名仍核對 |
| O-02 | Ethereum Mainnet | 目標；exact chain由quote確認 |
| O-03 | IMD官方標準預設供應／allocation／fee | 現有參考1B／88-10-2／1.25%，非自動接受未來變動 |
| O-04 | 2% Paying Wallet直接接收 | 無額外鎖倉，可持有／轉移／出售，不加協議用途限制 |
| O-05 | EMVO/IMD | 明確偏好，不默默回ETH |
| O-06 | IMD直接收費 | desired outcome；未驗證，不擅自接受非IMD替代 |
| O-07 | V1手動 | 預算、支付、換幣、發布均Owner逐筆確認 |
| O-08 | Free + Paid + Remediation | 保留；容量、價格等在Gate G定案 |
| O-09 | 不加staking/yield/custom hook/buyback/vesting | 不因review擴張功能 |
| O-10 | 2.5D圍繞IMD、Genesis配件/Pets | 分期產品目標，不是Token L必完成 |

本表記錄Owner意向；技術上是否支持要靠證據，法律上可否銷售不由本表決定。

---

# Appendix B — Authority Matrix / Review Freeze

| 元件 | 本次要查的控制權 | 未查到時 |
|---|---|---|
| Launch Token | mint、pause、blacklist、upgrade、tax、balance rewrite | UNKNOWN |
| Factory / policy | 更新authority、新舊instance影響、部署目標／bytecode | UNKNOWN |
| Hook / fee collector | fee上限／變更／recipient／withdraw／conversion | UNKNOWN |
| LP / positions | owner、withdraw、migration、range控制與證明 | UNKNOWN |
| Swarm distributor | root、claim、到期、rescue、受益人規則 | UNKNOWN |
| Paying Wallet | 收款控制、遷移可能、backup、授權spender | Owner address未提供 |
| World budget | 誰批准／支付／記帳；是否真的部署Safe | 規劃與實際分開 |
| Genesis | root、price、mint／remediation、metadata、pause | Gate G才定案 |
| Dream Engine / CI | scripts、repo write、secrets、publish | Gate D真實測試 |

Token core owner=none不代表整體trustless。不能以token一個欄位消去其他元件風險。

本次review禁止：launch.open、workflow.open、evm_contracts部署、production push、EVM交易廣播、私鑰／簽名索取、付費子任務／schedule、自動swap、Token/NFT重發。技術source若缺失，提供缺件表，不自行補想像合約。

---

# Appendix C — Historical Decisions (not active instructions)

舊名稱 `$EMBER` / `$EMEVO` / `$EmberEvo` / PROTEUS 均非最終ticker。最終EmberEvo ($EMVO)。

原80/10/10與24個月vesting已被Owner撤回；不以『更安全』名義自行恢復。100M供應、自訂2%/4%交易稅與20,000 Token/Genesis也不再是有效數值。

WORLD BUILD VAULT、IMD Ember World、Genesis PEPE、Swarm Dream Hall保留名稱。舊稿`Mainnet Launch Ready`僅歷史檔名，不是通過安全審查的證據。

---

# Appendix D — Sources / Verification Boundary

核對日期：2026-10-07。下列為公開primary source；外部規則可能變動，實作前重新取證。

| ID | 來源 | 用途 |
|---|---|---|
| S1 | https://imd.fun/docs/ | Job/Launch/Workflow差異、支付與input limits、plain token、fee、artifact、delivery |
| S2 | https://explorer.imd.fun/launch | UI的預設allocation、Mainnet文字及Check/Pay區分 |
| S3 | https://eips.ethereum.org/EIPS/eip-20 | ERC-20介面；不把burnFrom假設成必備 |
| S4 | https://developers.uniswap.org/docs/protocols/v4/concepts/poolmanager | v4 singleton／PoolKey／PoolId與Hook範圍 |
| S5 | https://developers.uniswap.org/docs/protocols/permit2/concepts/signature-transfer | Permit2金額、nonce、deadline、caller／spender安全 |
| S6 | https://docs.github.com/en/actions/reference/security/secure-use | 最小權限、untrusted PR／artifact與privileged workflow風險 |
| S7 | https://docs.openzeppelin.com/contracts/5.x/api/utils/cryptography | MerkleProof相關實作注意事項；需選定確切版本 |

[S1]中的合約／policy敘述只作DOCUMENTED_ONLY。本次沒有live capabilities／policy JSON、check或quote，也沒有驗證特定Factory source。原稿舉ZTO／MADE作先例，本次未對其完整runtime與policy進行可比性審查，因此**不把它們當Gate L證據**。

官方文件中的『只開Sepolia』與Launch UI的Mainnet文字存在差異；不能挑其中一段就宣告可用性。須用實際capabilities／effective plan／pinned policy和鏈上結果交叉核對。

Paying Wallet 1%分配記載與IMD-only實收是兩項不同命題；本次僅確認公開文件有分配敘述，未確定收款資產。

費用數字不代表財務預測。本文件並未測試使用者repo、操作資產或代為付款。

---

# Appendix E — Launch Manifest Template (no pre-filled PASS)

以下是欄位設計，不是官方API response schema。正式紀錄以JSON或YAML保存，公開版本移除秘密／有效簽名。

```yaml
schema_version: "emvo-launch-manifest/1.0"
status: DRAFT_NOT_AUTHORIZED
review_revision: "v3.2-Rev2"
expected:
  name: EmberEvo
  symbol: EMVO
  target_chain_id: 1
  preferred_pair: EMVO/IMD
  allocation_policy: official_default
  current_reference_percent: {pool: 88, swarm: 10, paying_wallet: 2}
  project_vesting: false
  manual_world_funding: true
approval:
  owner_approved: false
  approved_at: null
  approved_quote_id: null
  approved_input_hash: null
observed:
  retrieved_at: null
  chain_id: null
  block_number: null
  block_hash: null
  factory_address: null
  policy_version: null
  token_address: null
  token_runtime_hash: null
  deployment_tx: null
  supply_atomic: null
  decimals: null
  paying_wallet: null
  fee_recipient: null
  imd_address: null
  pool_manager: null
  pool_key: {currency0: null, currency1: null, fee: null, tickSpacing: null, hooks: null}
  pool_id: null
  lp_control_evidence: null
  allocation_events: []
  actual_fee_assets: []
  distribution_contract: null
  distribution_function: null
  distribution_tx: null
  source_commit: null
  compiler_settings: null
  implementation_if_proxy: null
checks:
  input_integrity: NOT_RUN
  capabilities: NOT_RUN
  check: NOT_RUN
  quote: NOT_RUN
  template_compatibility: NOT_RUN
  signature_review: NOT_RUN
  deployed_instance: NOT_RUN
  fee_accounting: NOT_RUN
  fee_receipt: NOT_RUN
  genesis_contract: NOT_RUN
evidence: []
missing: []
```

每一個evidence項目至少含id、claim、source、取得時間、method、network/block/commit、result、限制。PASS須有實際證據；UNKNOWN不能自動變NOT_APPLICABLE；不可只填一句『verified by AI』。

---

# Appendix F — 快速送審與回報要求

送審入口：優先純Report／research、實際action=job.open，不含onchain。Code Audit只用在已提供且pin住的source。具體skill/template取當下catalog，無法確認就停。

短objective放問題；完整母版／Brief透過真正被支援的inputs／公開去敏review repo＋commit交付。**ChatGPT sandbox連結、附件檔名或任意GitHub URL不等於已傳到Swarm。** 必須在Check/plan或可核對上下文中確認兩份文件可讀且未截斷。

官方Docs目前限制research objective 4,000字元、一般objective 8,000、request body 16KiB [S1]；兩份全文不能硬塞。`inputs`需官方accepted artifact的metadata；不可自造submissionHash。私人repo若不被官方import支援，不要暴露repo token換取通行。

Reviewer輸出先列INPUTS_READ（name/hash/bytes/section coverage），未讀齊先報INPUT_MISSING。回報同時分Evidence／Severity／Gate，對R、Q、L、G、D分開結論，不給籠統全系統GO。

最後需列『本次真的做了什麼／沒有做什麼』。沒有Foundry／RPC／source就不能說合約測試PASS；沒有Paying Wallet就不能說recipient已驗證。
