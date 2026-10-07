# IMD Ember — EmberEvo ($EMVO) Strategy v3.3

> ReviewFix1（2026-10-07）：本檔是 Swarm Report 的工程修訂候選。本次只澄清 true-burn 核驗 gate 與統一決策 ID，不取代尚待 Owner 確認的產品／金融決策，不改現行程式或主規格採用狀態，也不代表已證明官方模板支援 burn。

日期：2026-10-07（Asia/Taipei）  
版本：**v3.3 — Crypto-first Research / Genesis Burn / Integrated World**  
完整底稿：`IMD_Ember_EmberEvo_v3.2_Rev3_AI_Evolution_Reviewed_2026-10-07.md`  
底稿 SHA-256：`f209474acf92426d301c50923c86b88b8abb94520970b06018fc5510fb970a7c`  
配套送審：`EMVO_Swarm_Review_Brief_v1.3_Crypto_Research_NoDeploy_2026-10-07.md`  
狀態：**新版設計文件；未執行程式碼審計、Swarm 付費工作、合約部署或網站發布。**

> **Research tokens and NFTs. Keep Genesis. Burn on Paid Forge. Build the world with evidence.**  
> **研究可以持續更新；Genesis Mint 燃燒不是專案營收，也不賦予 AI 財務或合約升級權。**

## 這一版正式記錄的 Owner 決策

- **Genesis PEPE 保留，Paid Mint 仍選擇燃燒 EMVO，不採「Mint 款進專案錢包再使用」。** 不預設一部分 burn、一部分 treasury，也不預設先收進 Owner 錢包再擇日燒。
- **研究以幣圈代幣與 NFT 為主，不限 IMD，也不限 AI 類加密項目。** 一般 AI 工具只作相關輔助資料，不改成泛 AI 工具導航。
- **生態館、Genesis PEPE、Swarm Dream Hall 融合但不混成同一功能。** Genesis、配件與 Pets 不因研究產品而刪除。
- 收入方向為**實際可取得的交易費與真正推出的產品服務收入**；收款由專案控制的指定地址管理。官方費用、產品付款與 Genesis burn 各自分帳。
- 專案由 Owner 管理與批准，但權力依實際合約／已凍結規則，不是能任意改餘額、已售權利、Forge 價格或官方 Pool。
- 沿用既定 Token 名称、Ethereum 目標、IMD 官方標準發行、EMVO/IMD 首選、2% 不加 vesting／用途鎖定且可出售。未獲批准的分潤、staking、NFT 贖回、AI 自主升級仍不加入。

## 承諾、建議與未執行事項分層

本版沿用第 **0–66 章**的骨幹與編號，回修受影響章節，新增 **67–77 章**研究與融合規格。主規格是完整升版，不是只追加一頁摘要。

研究桌、Pet 問答介面、可用額度、服務收费、批次預算與發布閾值屬**新增候選／工程建議**；本次沒有替 Owner 指定金額、頻率、Genesis 總量、Forge 價格或永久服務承諾。研究桌等不因出現在本檔就成為已出售 NFT 的保證權益。

「一直分析」記錄為產品目標；金融操作基準仍人工批准。受限排程只在 Owner 日後批准具體來源、次數、期間、金額與停止方式，並完成測試後啟用；本檔不啟用付費排程、不自動續費、不把金鑰交給模型。

## 本次實際處理範圍與來源

全文以已附 Rev.3（3,190 行）及 Brief v1.2 為底稿；配套黑客松文件取自前次上傳包的原始 bytes。保留來源、用詞及舊章節，修订理由另见 Change Log。

本次重讀官方 IMD Docs、Launch 靜態頁、ERC-20 標準與 OpenZeppelin ERC20 文件；外部資訊標為 **DOCUMENTED_ONLY**。本次 Launch 靜態文案顯示 Ethereum Mainnet，與前版紀錄的 Robinhood 文案不同；不把靜態文字當成 exact quote 或部署授權。[S1,S2,S3,S16]

未取得本專案 Paying Wallet、exact Check/Quote、Factory source/runtime 證據、可執行網站 source 或主網燃燒／收費交易。本次沒有呼叫 authenticated quote/submit、沒有取用簽名、沒有執行 Foundry/fork 或對外付款；没有重查 GitHub main／主辦公告。舊 commit `0dc9eec7328fe280e8d586222d978d329890e87c` 只作已知 Rev.2 歷史輸入，不代表本次 main 狀態，更不含本版。

**技術注意：Owner 選 burn 不等於已證明官方標準 Token 支援 true burn。** 基本 ERC-20 不保證 burn/burnFrom。[S3] 本版要求驗證可原子化的 true-burn 路徑；不支援時列為相容性待決，不擅自收款、不擅自換幣／升級／增發。永久 sink 只保留為舊稿技術比較，需另案批准，不能把它默認當成本次真正燒毀總供應的實作。[S16]

## 閱讀優先順序

1. 本次與既定 Owner 決策；2. 本版工程建議與驗收；3. 官方 live 證據決定實際能力；4. 同業比較與活動提案只作背景。

能力與意向衝突時保留差異，交 Owner 決策；不能讓 API 默認值、舊 Brief 或第三方 README 自行覆蓋決定。

## 關卡（互不替代）

| Gate | 範圍 | 本次狀態 |
|---|---|---|
| R | 單次非部署規格／政策 Review | 文件準備完成；Swarm 未由本次執行 |
| Q / L | exact Check/Quote／付款發幣批准 | 未取得該次完整證據；L 未授權 |
| V | 部署、Pool、fee 與收款核對 | NOT_RUN |
| G | Genesis 燃燒／Free／Remediation／權利 | 設計保留；實作測試 NOT_RUN |
| D | 世界內容／Engine／Genesis 視覺 | 未在本次驗收 |
| I | 生態館研究品質／持續更新／隱私／受限運行 | 新增，規格層，NOT_RUN |
| H | 黑客松規則與參賽資格 | 最終資格未確認 |

---

# 0. Executive Summary｜核心結論

## 0.1 品牌與定位

目前採用的 Token / Economic Layer 名稱：

> **EmberEvo**

目前 Owner 指定的對外 Token 顯示名稱／ticker 方向：

> **\$EMVO**

正式 Mainnet launch 前以 IMD Check／Quote 核對 symbol 的技術接受度；撞名／品牌搜尋另做，不能假定 Check 會檢查。若 policy 有限制，回報 Owner，不得自行改名。

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

> **EmberEvo — Living Crypto Research, Genesis Identity & an Evolving World.**

主軸是 Token／NFT 持續研究與世界使用，不以AI合約自我改写或收益承諾作為產品定義。

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
= Token / NFT Research + Economic Utility + World Growth Layer

Ecosystem Hall（生態館；英文品牌待定）
= Crypto Research / Project Dossiers / Change Tracking

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
→ Burn on Paid Forge (true-burn compatibility must be verified)
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
→ Research reports / selected Swarm Dream Hall 2D / 2.5D Rooms
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
- Gate：R / Q / L / V / G / D / I / H。

每個關鍵項目保存來源、取得時間、network、address、block/hash 或 commit、測試命令、結果與限制。文件寫「支援」不能變成已測試 PASS；Swarm 多數同意也不是新的鏈上證據。

## 0.6 沿用的 AI／金融權限區分

**$EMVO 不執行大型語言模型，也不因 AI 提案就自動改 Token／Hook。** V1 演化的是內容、提案、Engine 與受控應用版本；每一種變更依 §56 分類，不把「一個 AI 很聰明」當作授予簽名或發布權的理由。

CLAUS 的可贖回 NFT／費用分配，以及 HIVE 的 Seat 工作收益／質押分配，只是外部比較。**Owner 沒有在本次決定新增 EMVO staking、NFT分潤、NFT退幣、自動買Seat或可升級金融核心。** 原排除項仍有效。

## 0.7 v3.3 融合主線

```text
公開幣圈資料與核對後來源
→ 生態館：Token／NFT 研究、更新差異、重要條件變更
→ Genesis：角色、配件／Pet、個人研究介面候選
→ 真實 IMD 工作與精選成果
→ Swarm Dream Hall：有 IMD Anchor 的 2.5D 體驗
→ 使用回饋／品質更正／Learning Ledger
```

研究報告不需要先變成3D才發布；同一資料庫支援快速頁與世界入口。研究服務、角色身份、金融權利各自驗收。研究支付（未定）與Genesis burn不得共用模糊收款邏輯。

---

# 1. v3.3 變更摘要與不變決策

本次升主版本是因為加入Crypto-first持續研究產品，不是重新設計Tokenomics。

| ID | 變更 | 來源／狀態 |
|---|---|---|
| O-11 | Paid Genesis Mint仍burn，不收進Owner／Treasury使用 | 本次Owner明確選擇 |
| O-12 | 研究以代幣與NFT為主，不限IMD或AI幣 | 本輪Owner澄清 |
| O-13 | Genesis與配件／Pets保留，融合生態館與Dream Hall | 本輪Owner澄清 |
| O-14 | 實收交易費及實際產品收入由指定專案收款地址管理 | Owner方向；exact地址與可路由能力待核對 |
| S-15 | 資金／權利研究卡、結論失效提醒、雙入口與證據版本 | 工程建議，非已上線 |
| S-16 | Research Mode／Creation Mode分區，禁止虛構回流證據 | 工程安全規格 |
| C-17 | Genesis研究桌、Pet問答、個人化整理、額外研究服务 | 候選；無已定配額／價格／永久權益 |
| C-18 | 有限預算／來源／期間的自動研究批次 | 候選；未啟用，基準仍人工批准 |
| C-19 | DreamHallReleaseRegistry與H資格 | 候選；主辦與Owner另定，不自動阻擋Token L |

保留：EmberEvo／EMVO；Ethereum目標；官方標準發行；EMVO/IMD首選；IMD-only收款待證據；2%可出售且不加vesting；Free＋Paid＋Remediation；F/R/P隔離；Forge價格延後決定並freeze；IMD Anchor；版本、QA、Staging、人工發布；不新增staking、NFT分潤／贖回、自主升級金融合約。

已否決的「Paid Mint全數轉給專案使用」不作候選繼續要求Swarm選擇。燃燒金額、Genesis供應、資格窗口、研究服務價格與自動執行預算仍TBD。

原0–66章編號保留。新增67–77章只規定產品目標與候選工程邊界，不能被reviewer解讀成一次Token launch必須部署全部系統。

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
→ Burn EmberEvo atomically; no project receipt
→ Forge Genesis PEPE
```

禁止：

``` text
General Public
→ Unlimited Free Genesis Mint
```

## 2.4 研究擴大不改變資產部署鏈

Token／NFT研究可讀取Owner核准範圍的多條鏈；這是資料覆蓋，不是EMVO或Genesis跨鏈部署／橋接授權。基本查詢、瀏覽與重大風險資訊不要求先購買Genesis、進3D或給Token approval。登入個人資料與Mint是另外的明確流程。

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
V1 financial payment / production authority = HUMAN_CONTROLLED
Bounded recurring research = DESIGNED, NOT_ENABLED; see section 73
Paid Genesis proceeds to Paying Wallet = NONE
Paid Genesis redemption / holder fee share = NONE
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
| 部署網路 | Docs列多鏈；本次Launch靜態文案顯示Ethereum Mainnet | DOCUMENTED_ONLY；exact chainId=1仍需live確認 [S1,S2] |
| IMD-only 收款 | 尚未有本次 Factory／實測支持 | UNVERIFIED |

預設變動不是『自動照單全收』。提交時記錄一份明確 proposal→check→quote diff，供 Owner 確認。

## 3.3 標準 Launch 路徑範圍

只選標準 Token launch（具體 action/onchain/kind 以 live schema 為準）。不把本母版全部功能放進 launch objective。

**發幣 objective 不要求：Genesis final contract、Remediation contract、Vesting、Treasury automation、World Brain、生態館研究引擎、Dream Engine、NFT配件／Pets或替換 imdember.com。** 這些是獨立里程碑。若標準 UI 綁定網站生成，須確認為隔離的 landing artifact，不能接管現有 production domain／repo，也不能把未有的 utility 宣稱為已上線。

## 3.4 核心 Token 相容性

檢查 transfer／approve／allowance／transferFrom／return value／zero-address handling／contract-to-contract interaction。`burn()`／`burnFrom()` 不是 ERC-20 標準必備 [S3]；標準幣沒有它們不自動等於缺陷。

Owner已選Paid Mint燃燒。必須查實際Token能否用burnFrom、或先精確transferFrom至Forge再呼叫Token的burn，於同一交易真正降低totalSupply。[S3,S16] 沒有burnFrom不等於完全無burn，但wrapper不能替沒有此能力的Token降低其總供應。無真燃燒路徑時STOP並列相容性差異；不得自行換custom_token、增加proxy、改成專案收款，或把sink默認當真burn。

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

## 4.5 Burn不等於回購或保證价格

Paid Mint若經核驗成功burn，代表其成本代幣不可再被使用；不代表一定有新市場買單、幣價上升、NFT保值或固定收益。使用者也可能使用原本持有的EMVO。所有情境分析不得把這項產品成本包裝成投資回報。

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

基準不自動swap／簽金融交易／開新的付費訂單；§73描述另案核准的有限研究批次，但本次未啟用。沒有有效批次批准就逐筆人工確認。Retry不得新增付費訂單，fee餘額不自動變可花budget。

## 6.4 可用餘額與會計

以資產地址＋decimals分帳。`available_IMD = confirmed_balance - already_committed_unsettled_IMD_budget`；小於零時顯示缺口，不假造資金。IMD費用、EMVO配額出售收入、Owner增資、自己錢包互轉分列；同一筆內部轉帳不得重複當收入。

未claim費用、未售出EMVO估值、預期成交量不算可支付IMD。任務費／gas／淨到帳分開紀錄；不要把不同幣種原始數量相加。

## 6.5 權限

World Brain只能提案。付款工具和簽名工具不給生成Agent；核准預算不是核准無限委派。之後若要policy-bound automation，另作範圍與授權評估，本版不先開啟。

## 6.6 本版的四問題答覆

| 問題 | v3.3 |
|---|---|
| 錢從哪裡來？ | 已證實適用的官方池費用、實際推出後的其他產品服務收入；Owner資金或Token出售分列 |
| 錢到哪裡？ | 官方費按規則到Paying Wallet；其他產品指定收款地址須另外配置並披露；不是所有1.25%都歸專案 |
| Paid Genesis使用者拿到什麼？ | Genesis NFT及已公布權利；其EMVO成本burn，不進專案錢包、無銷毀NFT退回EMVO機制 |
| 誰能改？ | Owner依既定角色批准研究／營運／未freeze設定；不能繞過已部署規則／資格／價格freeze；AI沒有金融控制權 |

Burn統計、實收費用、其他產品收入三欄分開；不設Genesis銷售收入來重複計算已burn的Token。

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

## 7.4 本次文件查到的付款錢包限制

IMD Docs 本次明寫 paid request 由普通私鑰帳戶或 EIP-7702 帳戶簽署，Safe 等合約錢包尚未支援直接付款 [S1]。這是公開文件狀態，未做本專案端到端測試。

因此不要指示 Owner 現在直接用 Safe 當已驗證的官方付款人；Safe 可以保護已配置的世界資金，向受支援的專案付款帳戶配置特定預算則是另一筆人工操作。**不能讓 AI 取得該付款帳戶的 key、session spend 權限或預先簽名。** 日後官方支援改變時，重新取證；不自訂簽名繞過。

這項改善不要求 2% 全數轉入 Safe、不新增用途鎖定，也不保證 fee recipient 可以遷移。

## 7.5 同一錢包不是所有功能的自動收款授權

Owner偏好用發幣Paying Wallet管理專案可用收入。其他真正推出的產品若使用相同地址，要在該產品付款規格另外指定；地址可更換與否依實作查證。**Paid Genesis burn不進這個錢包**。Burn規則不限制原2%或合法實收fee的持有／轉移／出售。

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

## 8.2 Paid Forge｜Owner選擇BURN，不轉為專案收入

```text
User owns EMVO and explicitly approves the exact Forge interaction
→ validate Paid Forge open / price frozen / quantity / P capacity
→ reserve mint counters under reentrancy protection
→ burn exact quantity × BURN_PER_MINT through verified Token capability
→ mint Genesis PEPE
→ all actions succeed in ONE transaction, or all state changes revert
```

Paid Mint成本**全數用於本次核對的burn**。不拆一部分给Owner，不增加Creator share，不將其作研究預算，不先轉入EOA再承諾日後手動燒毀。

如果Token僅有burn而無burnFrom，可研究Forge在同一交易中先精確收取再burn的方式；這是短暫執行路徑，不是Treasury入帳／可回收backing。[S16] 仍須核對真實Token與整段原子性。

成功Paid Mint後使用者拿到Genesis，不取得退EMVO、分交易費或保本權利。若NFT未來另有burn，亦不重開免費資格、mint容量或退款請求。

Free Claim／有效Remediation仍消耗 **0 EMVO**，可能另需gas。失敗交易不消耗成功Mint成本，不代表退回已消耗gas，也不會自動撤銷先前獨立approve交易。

正式BURN_PER_MINT尚未決定；可行true-burn方法尚未驗證。Sink只保留§52技術比較，不是未告知的自動替代。一般公眾不得走無限制免費Mint。

## 8.3 Remediation 的權限與證據邊界

Merkle proof只能證明某筆資料在某個root內，不會證明原始資格判斷正確。保留資格raw snapshot、block/time、資料來源、生成腳本commit與去重結果；Active觀察來源缺失時不得自動判eligible。

正常claim與remediation共用單一`claimed[IMD_tokenId]`消耗帳本，不因換root、換wallet、重送請求而重置。所有補正必須引用原始已公告qualification，而不是新增資格；明確記錄批准者、理由、root/version與結果。

Claim依原設計由**當下current owner**執行；NFT在申請審核期間轉手時，不能把補發自動送給舊owner。若日後支援delegate/relayer，必須另設簽名domain、nonce、deadline與recipient綁定，V1不得自行加。

## 8.4 原擁有者轉售前先Claim的產品語意

資格跟著尚未使用的IMD tokenId，不是永遠附贈未使用的Genesis。買方須能看見該tokenId是否已claim；同一區塊交易順序可能改變剩餘资格，因此不能以過時前端圖示保證。這是需要清楚呈現的產品狀態，不是任意給第二次免費鑄造的理由。

## 8.5 Genesis保留且不被研究服務替代

原角色／居民身份、Free與Paid路徑、配件／Pets產品目標保留。研究桌、Pet問答與追蹤清單整合見§72，屬候選服務設計；不改原IMD tokenId資格，不承諾每枚NFT永久免費無限次付費AI研究。

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
verified true-burn path(user, cost)  // conceptual, not a Solidity API
↓
mint Genesis PEPE
```

因此：

> **現在不決定 BURN_PER_MINT，不會阻礙 EmberEvo Token Contract
> 的製作。**

Token不必知道Forge價格；但Owner選擇的true-burn能力必須另外核驗，不可把ERC-20標準interaction直接當作已具備burn。

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

取得計畫使用的同一Factory／Token模板與實際版本，對公開source/runtime可用的範圍進行只讀核對與本地fork測試。測試：ERC-20回傳值、精確approve/transferFrom、contract recipient、可支援Paid Forge的true-burn候選路徑、fee-interaction；只可稱TEMPLATE_COMPATIBILITY。

若沒有足夠source／bytecode／可比版本，不把generic ERC-20測試當成此Factory證據。缺哪部分、是否阻擋L、需Owner接受什麼風險，都列清楚。ReviewFix1工程 gate 建議：在true burn仍為必要產品用途時，模板能力未知或不相容，L保持HOLD；若Owner選擇不同路線，須先另記新決策，再進行獨立金融批准。這不要求Launch前完成Genesis最終合約。

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

## 15.2 Burn驗證｜不是只看餘額或事件

測試原子交易前後使用者balance、Forge暫存balance、totalSupply、授權處理與事件，驗證成本=C時淨供應確實減少C、Owner/Treasury因該Mint成本增加0。不可在同筆中mint抵銷burn，也不可只發Burn事件但不改供應。需以確切交易trace/state與同版Token source解讀；不將不同交易的全區塊供應差全部歸給Genesis。

BurnFrom授權、精確有限allowance與無限allowance例外依實際Token語意核對，不能盲目要求所有MAX_UINT授權一定遞減。一般transferFrom或自訂allowance行為不得導致成本少燒。[S16]

若只能提出sink：另外報告不支援true burn、totalSupply不減、是否有可回收路徑；**不把sink測項PASS寫成Burn PASS**，更不能改成收款。

## 15.3 Atomic Forge + Mint

```text
validate exact asset / open gates / frozen price / quantity / capacity
→ apply reentrancy protection and reserve capacity / claim state
→ execute exact authorized burn
→ safe mint to the intended recipient
→ failure anywhere reverts the burn, counters and mint
```

至少測：receiver拒收／callback重入、burn revert/假成功、餘額不足、allowance不足、超量、Free與Paid交錯、重試與NFT burn後再mint。

不部署先burn後等離線發NFT的流程；不要求使用者手動轉帳到Owner錢包等補發。交易gas與既有approve不屬同一revert可退回的費用。

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

## 15.13 Genesis經濟不變量（本版新增）

- 成功Paid交易：`true_burned_atomic == quantity * frozen_price_atomic`；本次成本的`project_receipt_atomic == 0`。
- Free／Remediation：`burned_atomic == 0`，正常與補救共用claimed且容量隔離。
- Mint失敗：burn、mint與本次計數全部revert；不得吞錯誤後保留扣款。
- 任何owner、rescue、upgrade、delegatecall、內部router均不能把該成本轉成可支配收入。
- 無支持true-burn的模板／實例證據時保持NOT_RUN/BLOCKED或UNVERIFIED；不得用generic mock單獨作Gate G通過證明。

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

本次官方Docs明列Safe尚不支援直接簽paid request；詳§7.4。Safe資金管理與受支援付款人分開，不能只靠「先測試」就假定現在支援。Token轉給Safe不等於fee recipient／job.continue payer權限也自動換到Safe。

## 20.2 已核准為世界預算的支出

可包含IMD世界研究、Dream Proposal、Room／Genesis配件／Pets設計、independent review、2.5D asset、Dream Engine、QA/security、selected Tripo 3D與整合。

世界budget ledger不可把無關私人支出冒稱World Build。這是**世界預算的用途標籤**，不是把Paying Wallet全部資產鎖為世界用途。每筆記錄預算批准、job/order、幣種、金額、artifact與發佈結果。

## 20.3 Research與World Production預算分帳

同一WORLD BUILD VAULT帳本增加`research`與`world_production`用途分類：前者含資料／查詢／研究／覆核；後者含2.5D、Genesis資產／Pets、Tripo與整合。不強制拆錢包或新增合約，不定固定分成。

Burn不是這兩種預算的來源。Owner配置已實收資產後，才可標為approved；合約累積未到帳、EMVO未售估值或預期交易量不作支付額度。

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

Owner逐筆核對job目標、quote amount/asset/payTo、期限、允許動作與不可見的自動publish/deploy權限。每次新增收費或改範圍須新批准；不得建立無限retry。只有§73的有限批次經另案批准才可排程，本次Report完全不開schedule。

---

# 23. Protocol Activity → Product Activity

核心飛輪：

``` text
Economic / Product Activity
↓
Verified Received Revenue / Owner-approved capital
↓
Owner allocates a specific budget
↓
WORLD BUILD VAULT
↓
IMD Budget
↓
Identity.md Swarm Jobs
↓
Research / Proposal / Build / Review / QA
↓
Ecosystem Hall reports + selected Swarm Dream Hall content
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

## 23.1 三種循環，不能混算

| 對象 | 來源支持的機制／本專案規格 | 不可推導 |
|---|---|---|
| CLAUS（外部參考） | 官方稱交易費支付外部推論，並公開可贖回NFT與NFT費用份額 [S9,S10,S11] | 不能證明完全無人介入升級、不能把其收益比例套給EMVO |
| HIVE（外部參考） | README稱費用買Seat／工作收IMD；固定commit Router對「已收到」的reward balance作60/40分配 [S12,S13] | Router分配正確不等於每筆入帳都是已驗證的外部工作利潤 |
| EMVO（現行規格） | Owner決定是否投入已收到的收入→付IMD請Swarm→世界內容 | 付款請人做事不是自己接工作賺錢；不自動產生staking income |

所有參考只作分層啟發。**收入、Owner增資、Token出售、可退還backing、永久consume、未售空投代幣估值是不同帳。** 同一筆錢不能同時當已花的建設費、NFT可贖回本金與待分配收益。

不把CLAUS/HIVE當已證明長期成功的經濟模型；這次不帶入其市價、地板價或日收益年化。

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

## 24.1 生態館與Dream Hall分開驗收

生態館收錄／研究可涵蓋外部Token／NFT，不要求它屬IMD。Dream Room仍需本章的IMD Anchor；研究某項目、收費合作或只記jobId均不自動給予「IMD官方生態」身份。

以IMD Swarm真實研究外部項目的工作過程作Dream Room，須另行選題與驗證其工作Anchor，標記`external_project`及`imd_work_provenance`，不將外部被研究對象改稱IMD原生項目。無合適Anchor時只發布研究頁，不硬做Dream Room。

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

## 26.1 比例只管Dream Hall創作

上述70/20/10不是研究平台收錄或評價權重。幣圈研究可多鏈、非IMD、非AI；依來源品質與明確收錄範圍排序，合作／持倉／付費曝光不提高證據評價。

---

# 27. World Brain → Dream Proposal｜AI如何真的接到網站

## 27.1 角色與權限

World Brain是鏈下共用底座，新增Research Mode並保留Creation Mode。兩者分資料區、工具與輸出契約，不是Token、Oracle共識或金庫管理員。研究不只為製作房間，也是一條獨立的核心產品線。

| 元件 | 輸入→輸出 | 不具備的權限 |
|---|---|---|
| Read-only Context Collector | 核准幣圈Token／NFT／IMD來源→時間化snapshot | 不簽交易、不判Mint權利 |
| Research Mode | evidence snapshot＋前版研究→report／claim changes／未確定項 | 不執行創作故事、不交易、不改資格 |
| World Brain | snapshot＋已批准style/schema＋有限產品指標→proposal | 不改Owner policy、不付費、不publish |
| Human Operator | 選proposal、核對job及預算→批准這一筆請求 | 本次文件不代為簽署 |
| IMD Job Adapter／Orchestrator | 已批准輸入→記錄order/job狀態和產物位置 | V1不自動開付費子任務／schedule |
| Artifact Ingestor | 原產物→隔離、hash驗證、候選package | 無錢包／production secrets |
| Validator＋Staging | schema／安全／效能／IMD Anchor→報告＋預覽 | 通過不等於人工已批准 |
| Controlled Publisher | Owner批准的exact package/engine版本→可載入版本 | 不執行產物指令、不接觸Token合約 |
| World Pulse／Learning Ledger | 適當取得的使用與品質資料→下輪建議 | 不自動分幣、不重寫模型或提高工具權限 |

以上為EmberEvo建議實作邊界，非聲稱IMD官方已提供同名元件或指定API。沒有網站repo、engine實作與測試時，一律PLANNED。

## 27.2 提案最少欄位

```text
proposal_id / revision / parent
content_kind = research_report | research_update | dream_room | accessory_concept | pet_concept | engine_change
imd_anchor_type / source_refs / source_snapshot_hash
what_is_verified / what_is_fictional_metaphor / missing_evidence
problem / user_value / why_this_belongs_in_IMD
allowed_input_paths / allowed_output_paths / forbidden_actions
schema_version / style_bible_hash / engine_compatibility
expected_artifacts / expected_runtime_capabilities
estimated_IMD_cost / external_tool_cost / no_paid_subjobs
forecast / baseline / measurement_window / guardrail
proposed_change_class (see section 56)
```

每筆來源保存可讀URL或artifact身份、取得時間、chain/block或repo/commit（適用時）、hash與限制。IMD關聯不能只靠Title內有IMD；沒有實際工作資料，就以概念展示標明，不捏造 #361/#921 已完成某Job。

## 27.3 執行前輸入凍結

Owner批准綁定proposal revision、source scope、目標／輸出範圍與金額；研究單次綁snapshot，動態批次另綁§73的来源範圍／規則版本／次數／上限並逐輪保存snapshot。不以「讓世界持續更新」取得无限授權。

任務開始後改scope、改輸入、切model/tool能力或新增付費供應商，需要回報差異與新的批准；不能只因同一budget尚有餘額而自動再花錢。

## 27.4 模型與工具不是既定事實

模型provider、model id、runtime、prompt版本與tool allowlist，由實作及可取得證據記錄；平台沒提供就UNKNOWN，不從Agent暱稱推測。

Agent能寫文字／程式，不等於必定有圖像、音訊或Tripo生成功能。選用當下可用skill與輸出契約，缺能力就交回Owner安排其他工具；不捏造GLB、PNG或已付外部生成費。

工作環境只能拿到最小公開／去敏輸入；Prompt、外部文件與記憶不能寫回工具權限、簽名設定、CI secrets或owner-approved policy。

## 27.5 營運時機

研究的持續運行為產品目標；默认單次人工觸發。核准來源的資料刷新可在既有基礎設施額度內按§73規則運行；付費研究批次需另案預付／批准。任何新金融簽名、增額、續費或production功能更新仍由Owner批准。Timeout核對原order，不另開收費工作。

## 27.6 單向證據與創作邊界

Research Mode輸出經覆核的事實／推論／未知；Creation Mode只讀被選定的研究版本，產出帶fiction標記的場景與原創資產。創作內容不得回寫evidence store，也不因世界故事或Pet角色敘事而新增鏈上事實。模型更新、工具／policy調整仍走U2而非自行學習擴權。

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

## 28.1 Learning Loop不是自動訓練承諾

V1「學習」意指把交付可靠度、缺陷、成本及前次結果作為下一輪檢索／提案的上下文，不表示重新訓練基礎模型，也不表示AI可改自己的system policy。

Prompt／scoring／model版本的修改要留下before/after、固定評估案例及人工接受紀錄；低樣本或來源故障為INCONCLUSIVE。不能用增加交易量、刷訪客或自我打分證明世界變好。

## 28.2 研究與創作兩種成效

研究成效：正確識別、來源支持、時效、重要結論更正、每次有效更新成本；創作成效：可使用資產、可探索內容、穩定度與合適回訪指標。二者均不以幣價／交易量刷量證明品質。不得為每次跑job都顯得有進步而捏造變更；無新證據可回NO_MATERIAL_CHANGE。

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

## 29.2 三種schema分開，避免把NFT權利藏進內容

Dream Room package管理場景；Accessory/Pet package管理可視資產與相容性；NFT/Forge specification另管所有權與經濟權利。三者可以相互引用版本，但不能讓room.json、貼圖metadata或寵物行為檔設定mint price、claim eligibility、收益或升級地址。

建議內容manifest列`schemaVersion`、`contentKind`、`engineCompatibility`、相對路徑與每檔SHA-256、license、IMD provenance，以及原始產物到優化產物的hash關係。manifest本身的hash在外部release record存放，**不把自身hash塞回同一待hash檔造成自我參照**。任何範例都是schema候選，不是已驗證API。

## 29.3 第四種package：研究資料

Research package包含project identity、來源、claims、report、revision diff、provenance和覆核狀態（§68–71）；不包含任意JS、付款地址變更指令或Mint權利。它可以被快速研究頁與生態館共同讀取；不套用只有Dream Room適用的藝術內容比例。

收錄→研究→覆核→發布、合作／贊助、IMD來源是不同欄位；不可合成一個『官方認證』標章。

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

## 41.2 Off-chain為基本路徑；鏈上Registry只是候選

D1基本版本仍可使用受控的off-chain Room Registry。參賽補充中的`DreamHallReleaseRegistry`只是一個另行評估的應用合約候選；没有Owner批准及程式測試，不自動部署，也不是本輪Token Launch前置。

若日後採用，它只發布／撤銷內容版本的承諾與引用，不控制EMVO供應、LP、金庫、NFT Mint或訪客簽名。不把存一個Job ID描述成無信任驗證accepted work。完整候選與H條件見同步黑客松補充。

快取／RPC失效時可使用尚有效的已知安全版本；**明確被撤銷的版本不可因rollback或快取而重新啟用**。新版的schema若舊engine不支持，先拒絕，不能先執行任意migration script。

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

## 43.1 World Build Journal｜公開成果，不假造財務回報

每次發布可有一筆短Journal：做了什麼、IMD Anchor、實際job／review、核准預算與實際付費、原artifact hash、最終package hash、版本diff、人工批准、可探索入口與已知問題。

Journal可以先是普通網站資料，不必每則寫鏈上。未獲公開授權的錢包資產／使用者資料不放入；只記本輪世界支出，不把全部Paying Wallet收入承諾為建世界資金。

狀態分開`planned / job_admitted / delivered / validated / approved / published / measured`。一張示意圖不是可穿戴配件、一次accepted-work receipt不是安全audit、發表Journal不等於自主升級成功。

## 43.2 Research Journal

研究日誌保留新舊claim版本、觸發變化、原始來源時間／抓取時間／分析時間、模型／prompt版本、核准預算與實際成本、未完成項與更正理由。公開資料去敏；私人筆記與研究提問不進公開Journal。只刷新cache不冒稱新Swarm工作；已收件不冒稱已審完。

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

## 44.2 配件／Pets的「演化」層次

| 層次 | 可以變的資料 | 不因此改變 |
|---|---|---|
| Concept | 原畫、描述、IMD世界觀 | 尚無NFT所有權或免費名額 |
| Usable asset | 驗收GLB、動畫、socket與引擎相容版本 | EMVO供應、Genesis配額、Forge price |
| Equipment state | 已有權使用的配件／跟隨Pet選擇 | 不捏造ownerOf或token balance |
| NFT economic rights | 需獨立規格／合約／Gate G批准 | 不能靠AI改貼圖就新增分紅／退幣 |

Origin collection/address/tokenId、model hash、base avatar/rig版本、socket、動畫名稱與bounds、授權證據都需要可追溯。權利檢查與圖形asset分開；NFT轉移後多久更新裝備權、是否允許試穿、metadata何時凍結是Owner待選，不在本版擅自定死。

AI可以提案新帽子、寵物造型或動作；不能修改已公開的稀缺性、Mint價格／資格、退還本金或收益權。**本Genesis維持consume／Free＋Paid架構，不自動變成CLAUS式可贖回代幣金庫。**

不把外部Fren Pet、IMD Seat與新Genesis companion當成同一種NFT；每個collection和權限分開驗證。

## 44.3 Genesis研究介面候選

研究桌、收藏、更新提醒、Pet解說與個人化呈現見§72。Genesis仍是世界角色；不要求每NFT有獨立LLM、IMD Seat或永續運算承諾。稀有外觀不影響答案真實性，重大風險資料不因付費或稀有度被隱藏。

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

## 50.2 三筆現金流與兩種角色

Fee revenue（池收入）、Owner capital／Token sale proceeds（融資／出售）、external work revenue（自己接工作）分開。Owner付給Swarm的IMD是建設成本，不是Swarm回付EMVO的利息。

若未來評估自營Agent，另算Seat採購／模型／機器／gas／跨鏈等成本，不能預算為必賺，更不能把它和本版V1費用收入預先分潤。可退還NFT backing若有另案設計，必須列負債，不可花成world budget。

本版不新增固定收入、APY、持幣分紅或保本承諾；支出受實際已核准可用資金限制。

## 50.3 Burn不支付研究服務

Fee／其他已推出產品收入可被Owner部分配置為research budget；Genesis成功Paid Mint只記burn量，不記收入、可花IMD或可退負債。有限初始資金亦不能支撐「持有NFT永久無限付費研究」承諾。每批研究須核對可用資金、必要維運保留與未結成本。

---

# 51. Genesis Burn ≠ Research / World Revenue

**Owner已明確選擇Paid Genesis Mint燒EMVO，不把Mint款作為可運用收入。**

```text
Paid route: exact EMVO cost → verified atomic burn → Genesis PEPE
Free / valid remediation: zero EMVO cost → Genesis PEPE
Project receipt from Paid Mint cost: 0
```

使用者取得NFT與已公布的權利，不取得Mint成本的贖回權。Owner也無法把已burn部分拿去出售、支出或分配。先進Forge再同交易burn只是核准執行路徑，不是收進專案錢包。

專案可能收入：自己的適用官方池份額、其他真正推出的產品服務；Owner增資與合法Token出售資金另列。只有已到帳並批准的部分才是research／world budget。

禁止把同一筆burn金額同時計為產品銷售收入、World Build預算或可贖回本金；不新增暗藏mint fee來取代被Owner否決的收款方案。

---

# 52. Burn技術語意與相容性｜不偷偷改成收款

## 52.1 首選驗收：真正降低EMVO總供應

Owner的Paid Mint方向是burn；`totalSupply`與成本對應減少才稱true burn。ERC-20標準不保證burn功能。[S3] OpenZeppelin ERC20Burnable提供burn與burnFrom的參考語意，但這不證明IMD實際模板繼承它。[S16]

可核對路徑：

1. Token具備授權burnFrom：Forge用明確授權燃燒精確成本。
2. Token具備burn但無burnFrom：Forge精確收取後同交易燒自身所持成本並Mint；任何失敗全部revert。
3. 兩者皆無或有不相容限制：回報證據缺口／不相容，暫停相應Genesis開放決策；不擅自重發、升級Token或繞過官方標準路徑。

Burn支援未知不阻止讀文件做R/Q研究，但不得把它寫成已實現能力；ReviewFix1工程 gate 建議：true burn仍為必要產品用途時，Gate L須有綁定同版模板的能力證據；能力未知或不相容，L保持HOLD，不能只揭露後就推定可付款。改用途或改路線需先另記Owner新決策。Gate G不得未解決就開Paid Mint。

## 52.2 舊稿永久sink僅保留技術比較

`transferFrom(user, irreversible_sink)`若總供應不減，只能稱permanent consume，不是true burn。**這不是本次自動批准的替代路徑。** 若官方模板確實不支援true burn，須另案向Owner列出限制與選擇；在未有新批准前不得實作。

即使日後另案批准sink，仍需證明沒有withdraw、rescue、execute、upgrade、delegatecall或其他回收EMVO的路徑。給地址起名dead或將餘額從使用者移走，不足以證明不可回收。

## 52.3 對外與帳務一致

燒毀數量、實際供應變化、Mint數量、交易證據分開記錄；永久consume不能填入totalSupply burn欄。成功Mint後沒有兌回EMVO功能；gas與事前approve不屬Mint revert可退回費用。不得宣稱burn保證價格上漲。

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
-   guaranteed future buyback-burn volume
-   guaranteed price support
-   APY
-   yield
-   dividend
-   passive income

本章關閉的是由專案持續買回／回購燃燒的承諾；**不關閉已選定的Genesis Paid Mint燃燒成本**。兩者資金來源與權限不同。

本節禁止的是保證回購／市場銷毀量與價格支撐承諾，不否定§8/51/52在驗收通過後每筆成功Paid Genesis Forge所要求的精確燃燒。

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
Multichain asset deployment / bridges (read-only research coverage is separate)
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

## 54.1 不做交易Hook不等於禁止未來產品合約

Genesis Forge與候選內容ReleaseRegistry是獨立產品範圍，須各自批准；不是由reviewer為追同業或湊參賽資格臨時加上。

同業分潤／staking／退幣／proxy研究只放比較欄。沒有新Owner決策，不增加任何實作、測試鏈部署、金融簽名或quote中的合約數量。

## 54.2 本次拒絕的新路徑

Genesis Mint轉Treasury、先收款再日後burn、burn/收入雙重計帳、NFT本金贖回、固定分潤、永久無限研究額度、不限額AI付款／自動投資均不加入。多鏈研究、API資料刷新或研究頁面不是上述金融功能的同義詞。

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

## 55.2 研究動態與資金欄位

另列projects_covered、sources_unavailable、last_source_fetch、last_analysis、claim_revisions、stale/disputed、queued/drafted/reviewed/published、實際research成本及核准餘額。UI動態對應真實工作，不持續假顯示「AI正在思考」。Genesis累計burn與金庫實收並列但不可相加；未知不是零。

---

# 56. Human / AI Authority Boundary｜更新分類與批准鏈

## 56.1 五類更新，不用「AI自動更新」混成一句話

| 類別 | 例子 | V1處理 | 不能被偷換成 |
|---|---|---|---|
| U0 資料刷新／既有規則計算 | 顯示已核對工作狀態、既有天氣動畫 | 只讀、遵循既定允許資料與規則 | 自動改Tokenomics、預算或Mint資格 |
| U1 純內容版本 | Room圖片、文案、音效、裝飾 | AI生成候選→隔離驗證→Staging→Owner批准 | 任意JS、變更已售NFT權利 |
| U2 Engine／Agent配置 | 新interaction、renderer、prompt、模型／tools | 固定source/config版本、測試、review、人工發布 | AI自改system policy或持有production key |
| U3 經濟／權利資料 | Forge price、資格名單、metadata權利 | 只按已批准合約能力與Gate G；Freeze後不能繞過 | 偽裝成普通JSON內容更新 |
| U4 合約邏輯／控制權 | implementation、proxy admin、Hook、LP／fee控制 | 本版沒有EMVO自升級方案；另案Owner決策、權限／storage／calldata審查 | AI自行部署／簽名／重新發幣 |

分類看**實際影響**不是副檔名：改JSON若影響Mint資格屬U3；改前端地址若改交易目標，屬金融安全範圍，不能當U1直接放行。

## 56.2 四種批准相互獨立

```text
Approve proposal != approve spend
Approve spend != approve artifact / production
Approve artifact != approve new engine / schema / contract
Approve one release != approve all future releases
```

批准要綁定對象、版本/hash、環境、範圍與當次變更；scope或bytes變了就重新審查。部署授權不能從AI對話、README、外部report、metadata或第三方Journal繼承。

## 56.3 V1最小權限

- Planner／reviewer：讀取去敏snapshot，可輸出proposal／findings，無signer。
- Generator：寫隔離工作目錄，不能改app wallet／contracts／production config。
- Ingestor／validator：無財務、GitHub寫入或正式發布secrets；不執行artifact附帶script。
- Publisher：僅接受Owner批准的exact package與engine相容版本；不得同時具備Token／Treasury權限。
- Owner／受控簽署端：逐筆付款及金融操作；Safe或EOA角色依真實支援核對，不把key貼給Agent。

工具與環境隔離要真實配置並測試；一段prompt說「不要」不是完整權限隔離。

## 56.4 V1不主張可變金融核心

EMVO標準LaunchToken與官方Pool／Hook／Factory要**分別**查upgrade/admin；不能未驗證就宣稱全系統immutable。Owner選擇不新增自訂升級模組，不代表已證明官方每層都沒有管理權。

一般proxy模式可能讓同一地址執行不同implementation [S8]。但本版沒有批准替EMVO配置這種能力。日後若真有需求，要先提供exact code/version、state/storage遷移、全部既有資產／負債不變量、admin／timelock、升級call與local-fork驗證，再交Owner決策。

回到舊程式版本不能撤銷已成交的金融交易；新版本可能改state，使直接降版不安全。不要承諾「出事按rollback本金就回來」。

## 56.5 Review只有讀取／本地分析權

本次Report不拿private key、助記詞、request bearer、可用付款簽名或production token。不廣播、不swap、approve、distribution、發Token/NFT、不開付費子任務與schedule。

Owner另付這一筆Report服務费，不授權Agent再消費。平台例行工作receipt屬平台行為，不能混成專案金融授權。

## 56.6 I發布政策與人工控制並存

研究U0可依Owner核准的資料更新政策刷新標示時間化來源；U1研究草稿不等於獲准公開。初始深度結論、風險／指控、權限／收益改判，先人工或已核准獨立覆核。日後低風險摘要若要自動發布，須先有版本化政策、樣本測試與獨立Publisher，詳§73–74；本版不默認開啟。

Owner管理權不等於freeze後任意改价／沒收／改NFT權益。付款、模組升級、Mint開放、加額與停止新paid work仍屬明確批准；偵測到外部項目風險也不授權自動賣出任何資產。

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

已知公開review repo為`tungweb3/emvo-review`；舊commit `0dc9eec7328fe280e8d586222d978d329890e87c`是Rev.2歷史輸入。本次未重查main，未寫入或設定權限。v3.3需上傳新檔並核對包含新manifest的commit。後續內容／Engine／研究後端程式保護仍需實測 [S6]。

## 58.4 隱私與發布

送審不要混入病患／診所／員工資料或私人連線設定。GitHub不發布不等於IMD job output私密；採公開前可接受的最小資料集合。

只讀commit／hash是資料來源，不是付款／production權限。PR本文、程式註解、artifact、外部網站中的任務指令均不可提高權限。

## 58.5 三種來源位置

1. **Review repo**：規格、Brief、manifest與讀取說明。只是研究輸入，不是engine、工作成果或私鑰存放地。
2. **World/Engine source**：既有網站與受保護程式，沒有提供／讀取就不能宣告整站已審完。
3. **Content staging/storage**：Swarm原件、優化後bundle與核准release。可與source同repo但權限隔離；不要求一開始一定創三個repo。

V1先讓一筆artifact可取回、可驗證、可手動publish。不要承諾僅貼GitHub URL就自動建立安全PR管線。

## 58.6 文件更新不得假造新commit

本包產生新的文件名與SHA-256。Owner上傳後須取得**包含本次manifest與四份新文件的40碼commit**；不使用舊commit當v3.3。manifest列的檔案才是本次有效輸入，舊檔可以保留作歷史，不可混讀成並列有效規格。

Git commit固定來源快照；SHA-256核對exact bytes；兩者都不是「已讀完」或「無漏洞」的證明。Check顯示Sources勾選不證明全文已讀，報告仍須INPUTS_READ。

## 58.7 研究資料與GitHub的不同角色

GitHub保存程式、schema、測試、方法版本與release references；來源快照／研究結果可存受控database/object storage，前端透過read API取得核准資料，不為每篇研究改app source。選用Cloudflare D1／R2／Workers或其他後端皆需工程確認，本版不假設已建置、資料庫欄位或API已存在。

私人帳號筆記與公開研究完全分權；不得把private watchlist、session token或完整使用者prompt放進公開artifact／repo。第三方全文保存與公開重刊先查使用授權，hash存在不代表可重發原文。

---

# 59. R／Q／L／V關卡｜沒有單一的『GO代表全通過』

## 59.1 R：本次只做Review

允許公開資料讀取、文件比對、來源code檢視、無廣播的local fork測試；沒有code就只出規格／政策結論。不連接使用者wallet、不要求seed/private key、不傳簽名、不提交launch、不swap／approve／distribution、不改production。

送審入口應是非部署Report／research job；只有有pin住的真實source時才用code Audit。**不得使用Launch company／Token／Contracts／workflow部署入口做本次test。** 具體action與permissions在Check驗證，不只看按鈕名稱。

## 59.2 Q：發幣Check／Quote，可另案準備，不付款

- inputs與目前v3.3一致；Token Name=EmberEvo、symbol=EMVO。
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
[ ] 計畫使用的官方Token模板具有精確true-burn路徑的基礎證據，綁定同版ABI／source／runtime與可執行的本地核驗；未知或不相容時L保持HOLD（工程gate建議；非正式Forge已審完）
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

先讀原order狀態、payment tx、admission result、job/launch id，區分未付、pending、已付但工作失敗；不因UI timeout重複發幣。需要新quote時先確認原order／nonce／有效期與平台取消機制；不能假定另開quote就使原簽名失效。若沒有可證明的撤銷方式，等待到期或依官方流程處理，再由Owner核對新範圍，不能悄悄接續扣款。

只有付款完成不代表Token已發行；只有accepted review也不代表deployment完成。source未明、refund未明時寫UNKNOWN，不能保證退款。

## 59.5 V：上線後核對，而非自動宣布成功

核對actual Token address/runtime、完整PoolKey/PoolId、allocation與recipient、已審模板差異、實際fee流。使用者單次小額交易另行批准；Agent只讀既有資料或local fork。

如果結果不符：停用尚未開放的Forge／Mint UI，公告可證實狀態、保存證據、停止新預算；不能承諾凍結不可變Token、回復交易或自動重新發行。

**沒有EMVO尚不存在的實際receipt，不會阻擋R/Q；但L所需template證據不足不能以『發了再說』跳過。**

## 59.6 v3.3額外核對與不擴張的Token gate

- 查supported payment signer；本次Docs說Safe不支援直接paid request，不把金庫多簽等同付款兼容。
- Ethereum必須明確為chainId=1；UI的Robinhood文案不改Owner方向。比賽允許的測試網不能替換正式Token鏈。
- Authority Matrix須列任何proxy的implementation/admin/beacon或其他控制路徑；SOURCE_UNKNOWN不可填為NO_OWNER。
- AI策略／工具不可取得財務signer；Genesis價格／資格不可由內容更新路徑改動。
- 原訂單的輸入版本若改了，舊Check／Quote不能視為已核准新版。未付款先用新版重新核對；已付款的工作不會被新GitHub commit追溯修改。
- D1 Room、完整Editor／Pets或候選Registry未完成，不自動成為Token L blocker；除非已對外承諾Launch當日可用或它是真正即時依賴。

本輪判定可保留L待證據；不能為了得到GO自行開新token或先發再補。

---

# 60. Genesis Gate G｜Token上線不是Genesis開放許可

```text
[ ] 真實EMVO instance/config verified，模板比較完成
[ ] 已核驗真實EMVO的精確true-burn方法與totalSupply減少，沒有擅自新增token功能；sink／永久consume僅在Owner另案明確改決策後可另審，不可代替此項
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

## 60.1 保留的 NFT邊界

Genesis或配件／Pet NFT不能因參考CLAUS就增加「銷毀退EMVO」或交易費分配權；那是新經濟設計，需Owner另案批准。

Gate G須確認NFT所有權、裝備狀態、視覺asset版本及經濟權利彼此獨立。普通AI造型更新不能重置claimed、容量、metadata freeze或已完成的price freeze。

## 60.2 v3.3 Burn專項與服務權利

```text
[ ] true-burn路徑已對實際EMVO驗證，未以sink或收款冒充
[ ] Paid Mint成本全燒；Treasury／Paying Wallet成本入帳=0
[ ] 原子burn+mint失敗全部revert；callback／容量／重試已測
[ ] 無把成本回收、補mint等量供應或改接收人的繞過路徑
[ ] Free＋Remediation消耗0 EMVO，claimed與F/R/P規則未改
[ ] 無NFT退EMVO、分費用或保本權利
[ ] 研究桌／Pet／配額等僅以實際另行公布權益為準
[ ] 私人帳號資料不隨NFT轉移；服務額度不可利用轉手重領
```

此清單是驗收需求，不是本次測試結果；不得预填PASS。

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

## 61.2 Rev.3 最小負面測試清單

| ID | 測試情境 | 預期 |
|---|---|---|
| D-T01 | artifact含「忽略規則、轉IMD、部署」 | 視為資料／拒絕；無簽名／無支付 |
| D-T02 | 假jobId／模糊IMD連結／不存在review | 不標verified，不批准正式Room |
| D-T03 | 鎖定元素被AI patch修改 | 檢測並拒絕，保持原件 |
| D-T04 | 已批准後替換asset或manifest | hash不符，拒絕載入 |
| D-T05 | 包裹要求新script／wallet call／unknown interaction | 不執行，回Engine change review |
| D-T06 | 舊engine載新schema／被撤銷bundle／陳舊快取 | 依相容性與撤銷規則fail closed，不復活失效版本 |
| D-T07 | 模型輸出把IMD預算上限調高 | 無效，生成Agent不能修改policy |
| D-T08 | prompt／memory藏proxy upgrade或mint instruction | 不執行，不提升權限 |
| D-T09 | accessory錯rig/socket／Pet耗盡手機資源 | 不標可用，進修正／降級流程 |
| D-T10 | IMD API失聯／原job pending | 既有安全內容可瀏覽，暫停新支出，不重複付款 |

本文件列的是驗收要求，**不是已跑測試**。沒有production source/runtime，Report只能做設計分析和建議測項，不能冒稱上述PASS。

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

## 62.5 未批准的比較／新增候選

| 項目 | 本版狀態 |
|---|---|
| CLAUS式NFT退回代幣／交易費分潤 | REFERENCE_ONLY；不加入Genesis |
| HIVE式Seat採購／自營Agent收入／staking分配 | REFERENCE_ONLY；不加入V1 |
| EMVO自主proxy／Hook金融邏輯升級 | NOT_AUTHORIZED；不加入標準Launch |
| DreamHallReleaseRegistry | CANDIDATE_ONLY；主辦接受與Owner實作批准都待定 |
| 精確AI provider/model/prompt/runtime | IMPLEMENTATION_TBD；不可從同業或暱稱推測 |

Owner本次要求更新文件與送審，不等於批准以上金融新功能。

## 62.6 本次已確認與仍待決

已確認：Crypto-first Token/NFT研究、不限IMD；Genesis保留；Paid Mint選burn不進專案；Owner控制營運。

待決：true-burn模板能力／最終實作；Genesis價格／供應／資格（原規則不變）；研究覆蓋來源、更新頻率、停止條件、批次預算、模型／API；Genesis研究桌／服務權益及定價；未有有限批次批准不啟用自動收費。

H活動是否接受新研究成果或候選Registry仍由主辦決定。這些待決不反向改已確認的Paid burn，亦不授權reviewer新增金融功能。

---

# 63. 開發與發幣順序｜三條核心產品線並行

```text
A. Token preflight
  R: 新版規格單次非部署review
  Q: exact Ethereum / EMVO / IMD / official policy
  L: Owner批准具体付款／launch
  V: actual Token／Pool／fee／控制權

B. 生態館Crypto Research（核心，不是Dream Room附屬）
  I0: 明確來源範圍、正確Token/NFT身份、快照與研究schema
  I1: 同一項目兩版研究＋重要條件變更＋快速研究頁
  I2: 生態館共用資料＋受限運行／成本／更正與異議
  I3: Genesis研究桌／Pet介面候選，服務權利另定

C. Genesis PEPE（保留）
  原資格／F/R/P／Free與Remediation
  EMVO true-burn能力：template先研究，actual instance再核對
  燃燒價格延後freeze；原子burn+mint＋安全測試
  G: Owner另行批准；無Mint款進Treasury

D. Swarm Dream Hall（保留）
  D0: 建築／Preview Lobby
  D1: 一間真實IMD Anchor的2.5D Room
  D2: Editor／QA／hash／Staging／人工發布／回滾
  D3: 配件／Pets概念→精選3D→QA；NFT另案

H. 規則確認與參賽：並行，不跳過I/G/D/L
```

最小完整示範：一個Token＋NFT項目檔案、两版可核對研究、一個對應生態館入口、一個Genesis角色介面原型，以及一間具真實IMD工作來源的Room。未發行Genesis只能標原型，不製造NFT所有權證據。

Token launch不必等完整Editor／Pet／研究終端，但不得宣稱未交付功能已LIVE；任何即時承諾與依賴都有自己的gate。沒有圖像／3D或研究能力時如實列缺件。

---

# 64. 三個層級的世界架構｜研究、身份、經濟融合

## Layer 1 — 研究與證據

World Brain Research Mode → Token/NFT identity → source snapshot → claims／revision／重要變更 → 生態館／快速頁。不限IMD研究對象；多鏈只讀不是資產跨鏈。

## Layer 2 — 居民與世界體驗

IMD Ember World保留Agent Houses、Genesis PEPE、建築、身份／Proof與網路視覺。生態館展示研究；Dream Hall將具IMD Anchor的精選成果變成2.5D。Genesis／配件／Pet使角色與體驗相連，私有帳號記憶不附著NFT出售。

## Layer 3 — EMVO經濟與人工批准

標準Token＋已核對官方池。Paid Genesis以burn鑄造，不提供營運收入；實收fee與真正推出的其他產品收入由Owner控制、可部分配置為研究與世界預算。後續研究付費功能仍待定，無無限服務或持幣收益承諾。

## 64.1 核心連結

```text
Sources → Research → Ecosystem Hall
                     ↕
                Genesis identity / optional personal workspace
                     ↕
Verified IMD work → Selected Creation → Dream Hall / accessories / pets
                     ↕
                Journal / measured improvements
```

LLM在鏈下；來源、研究、Mint權利、付款、發布由不同權限處理。這不是Token自行研究、自行改約或自动分錢。

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

## 65.2 對外AI能力的精確措辭

建議：**AI-assisted world development, powered by Identity.md Swarm and released through human approval.**

在真正管線完成前使用「規劃中／開發中」。不要說「EMVO合約自己學習」「自動升級所有金融規則」「全自動無人管理」「AI保證收益」。

要宣稱某流程autonomous，先列觸發者、模型/runtime、工具能力、review、approve者與signer，及實际執行證據。Journal第一人稱、NFT背景故事或Token名字不是自主程度的證明。

## 65.3 新研究定位（對應實作狀態使用）

建議：**Living research for tokens and NFTs, explored through Genesis and IMD Ember World.**

研究新項目也追蹤已在線項目；既定研究範圍內持續收集，不保證全網覆蓋／零延遲。候選研究桌、Pet助手與自訂研究付費不寫成已售NFT永續權益。Burn是Mint成本，沒有退本金或一定升值的承諾。

---

# 66. 最終原則

> **生態館持續研究代幣與NFT；Genesis PEPE保留為角色與身份；Dream Hall把可核對的IMD工作轉成世界體驗。Paid Genesis燒EMVO、不進Owner錢包；實收收入與預算另外管理。AI可研究、提案與製作，但不能自行動用金融權限。**

下面67–77章是整合後新增的研究與服務規格，不宣稱已實作。任何稱為自主運行的部分，須列觸發者、資料、模型／工具、預算、覆核、發布／簽署角色與實際證據。沒有跑過的測試、已付工作、合約部署或live功能不填PASS。

---

# 67. Crypto-first Research｜範圍與生態館定位

## 67.1 已確認的研究範圍

以幣圈Token、NFT及其實際產品／金融／AI關係為主；涵蓋IMD以外項目，也涵蓋非AI類加密項目。AI／Agent與IMD可設特色專區，不作收錄的唯一門檻。一般AI工具只有與研究對象或建設相關才作輔助資料。

不承諾抓到全網所有新幣／NFT。發布`coverage policy`：允許鏈、來源、資產類型、更新窗口、存取限制和暫不涵蓋範圍。首次被系統發現≠首次上線；資料庫已有≠仍在運作。

## 67.2 生態館三個入口

- **新發現**：候選項目、身份待確認或已確認，附首次發現與來源時間。
- **研究檔案**：Token／NFT／產品關係、資金／權利／管理權、版本化結論。
- **重要變更**：相對前版的事實差異與需要重查的條件，不是自動買賣訊號。

收錄、被研究、合作展示、付費曝光、IMD關係分欄。被研究不是安全認證，付費合作不買結論，任何合作也不自動授權使用對方圖像或NFT素材。

## 67.3 快速模式＋世界模式

同一研究資料支援可直接分享／搜尋的輕量頁與3D生態館。基本研究不強制載入整個世界、連錢包或持有Genesis。3D負責探索體驗，不是閱讀必要阻力。

生態館是研究入口，Swarm Dream Hall是具IMD Anchor的精選創作；不為每個收錄項目自動生成一棟樓。個別項目展位／合作建築為後续策展安排。

## 67.4 三個先回答的問題

每頁先說：它在做什麼、上次之後有什麼重大改變、哪些關鍵條件尚未確認；再展開完整來源與技術內容。不先用單一AI分數代替證據與風險說明。

---

# 68. Project Identity / Evidence Store｜先認對，再分析

## 68.1 共用項目模型

`project_id`為內部穩定ID，不以ticker或OpenSea slug當永久唯一鍵。資產用鏈及合約／mint address識別；NFT另含standard／collection與tokenId（必要時）。不同鏈的地址、wrapper、migration與bridge表示為有證據的關係，不合併成一顆幣。

關係可為`has_token / has_collection / backed_by / fee_source / staking_reward / implementation / official_site / migrated_from`；每条保存source、valid_time與evidence grade。未證实Token與NFT關係不硬連線；沒有Token的NFT項目也可研究。

## 68.2 來源快照

每筆來源至少保存：canonical identity、URL／鏈／block hash或source commit、source_published_at、observed_at、retrieved_at、content hash、讀取範圍、資料供應商及限制。無精確時間不要猜。

量測單位必填currency address／symbol／decimals／計算基礎／期間。浮點不能取代資產原始整數；實收費用與全市場volume不混算。價格、FDV、流通市值、掛售floor、best bid、成交、抵押backing与未售獎勵估值分開。

## 68.3 證據層级

`PROJECT_CLAIM / DOCUMENTED_ONLY / SOURCE_INSPECTED / SIMULATED / OBSERVED_ONCHAIN / UNVERIFIED / CONTRADICTED`不互相替代。程式碼存在不表示安全；source match不表示無漏洞；地址數不等於真人；社群熱度不等於實用價值。

鏈上觀察保留confirmations/finality策略與重組處理；移除或被改寫的觀察需撤回其支援，不把第一次事件當永遠有效。供應商更正亦保留版本。方法為工程要求，不聲稱本次已接通所有資料源。

## 68.4 隔離與授權

資料provider/API的存取、速率、費用、重用與保存期限需核對；不得以爬取繞過權限。可保存hash不表示可公開全文；公開最少必要摘錄／來源。下載區無signer、production key、帳號私有資料；超長檔／壓縮炸彈／內網URL等先攔截。

---

# 69. Token × NFT研究｜資金與權利卡

## 69.1 四個必答問題

| 問題 | 必查項目 |
|---|---|
| 錢從哪裡來？ | 可核對交易費、產品收入、工作報酬、補貼、發行代幣／出售；不把分配函式當收入來源證明 |
| 錢到哪裡？ | accrued／claimable／received、來源資產、收款人、觸發者、gas、reserve與未結負債 |
| 使用者得到／可贖回什麼？ | NFT／服務／代幣；是否有backing或贖回，條件、期限與流動性；不把二級市場掛價當保證退還 |
| 誰能改？ | Token、Hook、Proxy／implementation／admin、LP、Treasury、分配器、metadata、服務政策逐項 |

先畫清楚資金／權利關係再做結論。AI使用何模型、誰觸發、誰核准、誰簽署、是否定時程式，都需實證；「AI」名字不證明自主升級。

## 69.2 Token研究

供應／流通方法、解鎖、早期配置、池與退出深度、費用路由、mint／pause／blacklist／upgrade權限、產品實際用途與開源／測試範圍。交易量與鏈外交易所成交不可擅自計入某個Hook收入。

## 69.3 NFT研究

核對真實collection、token standard、數量／累計mint／burn、metadata與權利可變性、Mint成本、Free規則、refund與redeem區別、二級成交／floor／bid、收益幣種／來源／時間加權方式。若有edition／ERC-1155，不能把tokenId數目當所有流通份數。

## 69.4 明確的狀態與限制

研究只是在特定日期／合約版本下的證據；不宣稱保本、無風險、確定升值。可作標示假設的收入縮減／流動性／來源中斷情境，但不把假設當即時市場資料或固定APY。

本專案自述亦遵守相同標準：EMVO是自家項目、Genesis Paid為burn、Owner可運用2%、研究服务未上線不能冒稱有收入。自評不得包裝成完全獨立審計。

---

# 70. Living Research｜記憶、結論失效與更正

## 70.1 以claim為單位更新

每個重要結論包含：claim_id、asset/project ID、statement、evidence refs、適用chain／版本／block、last_verified_at、materiality、invalidating_conditions、狀態與reason。研究版本引用固定claim版本，不讓同URL內容無痕改掉已讀結論。

狀態建議：`DRAFT / SUPPORTED / PROJECT_REPORTED / UNVERIFIED / NEEDS_RECHECK / SUPERSEDED / DISPUTED / RETRACTED`。新证據不充分可降為NEEDS_RECHECK，不直接推斷詐騙；也不為維持正面評價保留失效結論。

## 70.2 變更影響圖

例如：implementation變動→原code分析範圍失效；fee recipient變動→原收入流需重查；NFT權利來源更新→原權益摘要需覆核。先更新來源／受影響claims／研究diff，再生成可理解摘要。這些是泛用測試示例，不是對任何特定項目的指控。

No material change是合法結果。避免每輪強行重寫全文；對同一公共項目共用已核對研究，個人摘要不重複建立昂貴工作。

## 70.3 更正與異議

外部提交是untrusted資料，需來源與身份範圍核對；項目方可補證據但不能直接改正式結論或用合作費買回評價。保存原結論、原因、新證據、修正者與時間。

重要错误可先將受影響結論標記待核驗，不必等整份報告重做。資料依法刪除或敏感資訊移除時保存必要的去敏更正記錄，不以append-only為由永久公開不應公開的資料。

## 70.4 事實與創作單向引用

Creation可讀核准研究；帶fiction標記的場景、角色台詞、AI生成Journal，不作Research證據或再次訓練其事實庫。人工校正／原始來源與摘要分區，避免模型引用自己的舊臆測形成假佐證。

---

# 71. Research Package / Publication｜不把报告當程式碼

## 71.1 候選檔案結構

```text
research/<project_id>/<revision>/
  project.json
  claims.json
  evidence.json
  report.md
  changes.json
  review.json
  manifest.json
```

這是網站自定package schema，不是IMD API保證產出契約。實際skill只支援單一Markdown時，先保存原件並以受控轉換建立結構化版本，保留兩組hash與lineage，不假稱平台原生產出全部檔。

## 71.2 最小資料模板（非可部署code）

```json
{
  "schemaVersion": "emvo-research/1.0",
  "projectId": null,
  "revision": 1,
  "parentRevision": null,
  "assetRefs": [],
  "coverage": {"chains": [], "sources": [], "limitations": []},
  "claims": [],
  "evidenceRefs": [],
  "analysisAt": null,
  "status": "DRAFT",
  "review": {"status": "NOT_RUN", "reviewer": null},
  "publishApproval": {"approved": false, "hash": null},
  "imdWork": {"jobId": null, "verifiedScope": null},
  "commercial": {"relationship": "UNDECLARED", "disclosure": null}
}
```

發布前依實際schema補齊必要身份、證據、覆核與批准欄位；第一版parentRevision、不適用的IMD job等可為null，但須有明確語意。不得為了填滿欄位捏造IMD工作；商業關係不能停在UNDECLARED。模板存在不等於PASS。證據origin、hash與actual ranges外部固定；manifest不存自身hash形成循環。

## 71.3 Publisher與服務端

起始路徑：draft→source/identity/units驗證→覆核→人工批准exact hash→公開資料庫／API。低風險資料刷新可在§73/74核准政策後自動化，模型本身不能直接改published pointer。

官方前端不執行報告中的任意HTML／JS、wallet method或付款地址。共享資料支持生態館與快速頁；Markdown必須安全render，跳外站提示目的地，不自動觸發交易。

## 71.4 已發布版本與cache

被撤回的claims／report不可因cache、rollback或上一版快照而重新當作現行；歷史頁清楚標適用版本。網路中斷可顯示最後可用研究但標資料時效，不以「updated now」偽裝新驗證。

---

# 72. Genesis身份 × 個人研究桌 × 配件／Pets

## 72.1 保留角色，不把NFT變成研究收據

Genesis是既有世界的核心居民／角色，Free／Paid／Remediation不被訂閱制度取代。Paid burn提供NFT與當時已公布權利，不生成可退EMVO本金。一般使用者仍可閱讀基本公開研究與風險提示。

## 72.2 候選研究桌

Genesis角色可以成為收藏、追蹤清單、前次閱讀後更新、比較與私人筆記的介面。這是待實作服務，不是已售權益；不得默認永久無限次付費推論／Swarm工作。

三種帳本分離：

| 資料 | 歸屬／行為 |
|---|---|
| NFT角色與已公布可轉移權利 | 依collection＋chain＋tokenId及實際ownerOf驗證 |
| 私人筆記、watchlist、對話／偏好、通知 | 帳號ACL保護，不隨NFT轉移給買家 |
| 後續付費研究配額／訂閱 | 若推出需另定服務period、payer、剩餘量、轉移／到期規則 |

支援服務資格時須測：轉手前後、同一NFT多錢包／多登入、快照過期、額度重置與撤銷；不能靠連結地址文字或前端舊快取授予權利。沒有決定配額前全部不填固定數字。

## 72.3 Pet為介面，不是每隻獨立賺錢Agent

Pet可解說核准研究、呈現追蹤變更與互動；後端共用研究知識，不要求每NFT購買一個IMD Seat或運行獨立模型。稀有度只影響已定的外觀／表現，不影響事實正確性或隱藏安全警告。

配件與Pets先概念→可用資產→QA，是否NFT化與經濟權利另案。研究外部NFT不自動取得角色素材、商標或再授權；合作前需確認可使用範圍。

## 72.4 身份與登入安全

需要私人資料時才明確登入，challenge/session需有有效期、範圍與防重播。一般研究瀏覽不要求Token approve。實際登入流程需獨立code/security驗證；不得將使用者錢包授權交由Pet或LLM自動觸發。

---

# 73. Bounded Research Automation｜設計目標，尚未啟用

## 73.1 預設仍由人控制付款

目標是持續收集／分析，不是把私鑰或無限支出權交給AI。初始化模式`MANUAL_SINGLE_RUN`。外部API／模型成本也算費用，不能因沒有鏈上轉帳就當作0成本。

可另案核准模式：

| 模式 | 可做 | 不可自動做 |
|---|---|---|
| A0 單次人工 | 一次明確來源／任務／金額，研究到草稿 | 新付費工作／續訂／金融交易 |
| A1 有限來源刷新 | 在批准的API與hosting額度內收集／比對／排隊 | 自選新供應商、增加總預算、把草稿直接發布 |
| A2 有限預付研究批次 | 僅在固定scope、次數、額度、期間與已支持付款方式下執行 | auto-topup、任意子任務、spend key交模型 |

本次文件、Copy頁及Report**只用A0**；A1/A2須工程驗證＋Owner具體批准，不因方向獲同意就啟用。

## 73.2 批次批准欄位

```text
approval_id / policy_version / approved_by / approved_at
scope / source_allowlist / source_fetch_permissions
model_tool_versions / expected_output / publication_policy
start / end / max_runs / max_concurrency / per_run_cost_cap
max_total_cost_by_asset / prepaid_amount / remaining_commitments
retry_budget / dedupe_key / timeout / stop_and_cancellation_method
```

必填值未定→不啟用。不同幣種分帳；先原子保留pending budget，付款確認或失敗後按訂單狀態結算，不能平行工作都看到同一餘額而超支。已付但未完成不當作剩餘額度。無新證據只回NO_MATERIAL_CHANGE，不強制買新研究。

## 73.3 IMD排程特有限制

本次官方Docs描述按次預付；未使用次數不退款、paid schedule不以Owner自設日期自動到期，暫停／取消控制留在IMD團隊。[S1] 因此不能對Owner承諾「本機按停止就取消官方已付排程」。

若官方能力不能強制滿足本專案的停止／時限條件，保留人工單次或不選該預付模式，不能用前端旗標假裝已停止外部工作。`continue`模式可能承接上次產物，仍需隔離新輸入、固定研究政策，不接受輸出修改下次權限。

## 73.4 排程、重試與降級

Collector、analysis、paid submit、delivery、publish各有獨立idempotency key與狀態；同一更新重送不重付。timeout先讀原order。佇列上限、每帳號／全域quota、request大小與生成token上限均需設定，未設定不开放高成本任意查詢。

預算或来源中斷→停止新增昂貴工作、標註延遲、保留可讀舊研究與靜態世界；不可改成自動賣EMVO換IMD補洞。

---

# 74. Research Quality / Conflicts / Safety

## 74.1 商業关系與證據分開

收錄／研究／合作／付費曝光獨立欄位。贊助、廣告、持倉與自家EMVO／Genesis研究應披露；合作方能補資料或提更正，不能買分數／刪除不利結論。付費服務可增加用量與整理便利，不隱藏重大風險或給稀有NFT更真實答案。

## 74.2 發布風險分類

新項目深度結論、合約安全、欺詐指控、收益來源改判與權限改動先人工或經核准的獨立覆核。純資料刷新可依明確方法標來源／時間；不把一個鏈上事件自動翻譯成定罪或買賣建議。

初版不宣稱保證安全分數、保本、固定APR/APY、審計完成或全市場最佳。無碼是規格分析；只讀source未跑即NOT_RUN；自家項目分析標非獨立。

## 74.3 Prompt injection與工具分離

網頁／PDF／repo／使用者提問／memory都當資料。模型不能藉由『核驗』呼叫付款、簽名、升級、傳秘密或安裝任意依賴。執行真實source測試僅限無秘密隔離環境，安裝腳本亦需不受信任處理。

輸出schema、地址來源、人類批准與實際權限配置共同防護，不只依prompt一句『不可』。外連與下載遵守§33；需要來源權限時回報限制，不能索取任意private key/API token解鎖。

## 74.4 服務停止與證據保留

停止新增研究不必關掉世界；保留已核准靜態內容。敏感資料按既定保留／刪除政策處理，錯誤報告保留可理解的更正歷史但不重刊敏感原文。通知與watchlist資料需帳號scope，不發出帶私人持倉的公開通知。

---

# 75. Gate I｜研究平台驗收與最小測試集

## 75.1 最小可交付

一個經核對的Token＋NFT項目檔案，兩次不同時間的來源快照，兩版研究與有效diff，快速頁與生態館共用資料；Genesis角色介面可先prototype，正式NFT權利仍走G；一個真實IMD產物可另轉Dream Hall走D。

驗收必須能演示「來源沒有改變就不捏造新結論」、「新證據推翻舊結論」、「原報告被撤回不再顯示為現行」。輸出適用范围與未支持部分，不以大量空項目數量當完成。

## 75.2 新增負面測試（有實作才執行）

| ID | 案例 | 預期 |
|---|---|---|
| I-01 | 同ticker不同鏈／合約 | 不合併、不錯用行情 |
| I-02 | 假NFT collection與真官方社群同名 | 身份未證實、不連錯Token |
| I-03 | 交易量、地板、出價幣種不同 | 各自單位／期間，不混算 |
| I-04 | Proxy變更但舊審計仍在 | 標NEEDS_RECHECK，不沿用全面安全說法 |
| I-05 | 來源過期／403／API空值 | UNAVAILABLE/STALE，不臆測0或最新 |
| I-06 | 事件被reorg／供應商更正 | 撤回支援並更新受影響claims |
| I-07 | 外部README要求加分／付款 | 不執行；標untrusted |
| I-08 | 相同source/job重送／並行超額 | 去重，預算保留，不重付 |
| I-09 | Genesis轉手／多登入 | 不轉私人資料、不重領未定服務額度 |
| I-10 | 贊助項目要求刪除負面結論 | 走更正覆核，不直接篡改 |
| I-11 | 創作Pet台詞回流研究 | 拒絕作為事實來源 |
| I-12 | 舊cache／撤回版本回滾 | 不恢復失效現行結論 |
| I-13 | 模型擴token／抓無限來源 | 上限／停止，不增額 |
| I-14 | 關網站即宣稱官方排程取消 | 拒絕錯誤狀態，核對服務端控制 |
| I-15 | Burn金額填為研究收入 | 帳務驗證失敗 |

狀態初始NOT_RUN；每項附方法、實際結果、source/config hash與限制。無網站source則可做SPEC_REVIEW與列測試計画，不偽造完成的E2E。

## 75.3 指標

來源正確性、claim證據覆蓋、錯誤更正時間、實質更新率、資料時效、成本／有效更新、未核驗比例、實際使用者理解度。先定義樣本／窗口／方法，樣本不足INCONCLUSIVE。文章數／幣價／刷量／高自评分不是品質證據。

---

# 76. Services / Rights / Economics｜不靠永久承諾支撐研究

## 76.1 核心不變

Paid Genesis成本burn；不是商品款進Treasury，不形成可退EMVO本金，不分交易費。Owner仍自由管理原2%與自己的實收收入，沒有全部用於世界／研究的硬性比例。

## 76.2 未來產品收入候選

自訂深度研究、額外追蹤服務、其他world assets可另做產品設計。尚未定價、未決定支付幣種／退款／交付，不在本次合約或送審中實作；不暗藏在Genesis Paid Mint流程。

若推出，服務購買要定範圍、成本、退款與不可交付情境、期限、何者可轉移、payer與recipient；法律／稅務依實際地區另外專業覆核。基本研究與重要風險提示不應被錯當成付費保證，NFT持有亦不保證外部研究收入。

## 76.3 與Owner權力的關係

Owner選研究方向、預算、已核准服務參數與發布政策；但已冻结Forge價格／供應／資格不能由『我管理』字樣繞過。新研究權益先公示再實作，不藉貼圖更新偷換既有權利。

## 76.4 成本与結算

API費／模型推論／Swarm admission／gas／資料授權／存儲與3D費分帳。若實收為波動Token而支出為IMD或法幣，記風險與可支付量；不把Token價格上升或未實現NFT估值記營業現金。

---

# 77. v3.3 Delivery / Owner Decisions / Swarm範圍

## 77.1 尚待決但不擅自填的內容

Genesis：BURN_PER_MINT、供應F/R/P、Qualification Window／Active資料方法、free期限、確切true-burn路徑、其他metadata／裝備規則。

研究：來源／鏈coverage、provider/model、schema精確欄位、更新頻率／時效、API與推論預算、有限批次批准與停止方式、研究桌權益／配額／服務定價。

發幣：exact官方policy、fee資產、Paying Wallet、控制權、true-burn模板相容性。上面不因『跟官方預設』而自動變成已核准。

## 77.2 單次送審不是啟用日常研究

本次Brief只研究**這套系統與發幣／Genesis的準備度**，不是開始追蹤全市場，也不是開新的schedule。讀新版四份MD、保留burn決策、對R/Q/L/V/G/D/I/H分開結論。

先核對輸入manifest和新版commit，不接受舊版hash；缺外部證據不冒充已測試。缺必讀文件停止；缺source/quote則仍可審有供給的規格，相關結論保持未驗證。

## 77.3 遷移與回報

此版本替代Rev.3作新工作母版，但不覆寫已付Swarm工作或鏈上事實。未付款→先上傳新檔pin commit再Check；已付款／執行中→先保存原job，取得原報告後做必要delta-review，不立刻重付。

主規格／Brief／兩份活動補充／manifest一組交付，README列閱讀順序。小工具只幫填英文來源，不宣稱已部署或已抓到新commit。新功能先I/G/D測試，Token L判斷不被龐大功能清單綁架。

---

# Appendix A — Decision Register / Scope Lock

| ID | 決策 | 狀態 |
|---|---|---|
| O-01 | EmberEvo / EMVO / $EMVO | Owner選定 |
| O-02 | Ethereum Mainnet | 正式Token／Genesis目標，不以多鏈研究改掉 |
| O-03 | IMD標準預設供應／allocation／fee | 定位不改，實際policy需核對 |
| O-04 | 2% Paying Wallet自由使用／可出售／無額外vesting | 保留，不因burn而限制 |
| O-05 | EMVO/IMD | 首選、不可默默換ETH |
| O-06 | IMD-only fee receipt | Desired，未驗證 |
| O-07 | Owner控制預算／金融／發布 | 保留；有限研究批次未啟用 |
| O-08 | Genesis Free＋Paid＋Remediation | 保留 |
| O-09 | 不加staking／holder yield／buyback／custom financial Hook | 保留 |
| O-10 | Dream Hall／配件／Pets | 保留，分期 |
| O-11 | Paid Genesis Mint全成本burn、不進Treasury | 本次再確認；技術能力待驗證 |
| O-12 | Crypto-first Token／NFT持續研究 | 本輪Owner明確方向 |
| O-13 | 生態館研究＋Genesis身份＋IMD世界融合 | 本輪Owner方向 |
| O-14 | 實收交易費及產品收入由指定專案收款地址管理 | Owner方向；exact地址與可路由能力待核對 |
| S-15 | 身份／資金權利卡／證據／claim更新與雙入口 | 工程規格，非已上線 |
| S-16 | Research Mode／Creation Mode分區 | 工程安全規格，禁止虛構回流證據 |
| C-17 | Genesis研究桌／Pet問答／額度與研究收費 | 候選，未定價或承諾永久服務 |
| C-18 | Bounded research批次 | 候選，Owner具體批准／測試後才啟用 |
| C-19 | DreamHallReleaseRegistry與H資格 | 候選，需主辦與Owner另定，不自動阻擋Token L |

Owner決策不等於實作或法律許可；未知欄位不能自動填成PASS。

---

# Appendix B — Authority Matrix / Review Freeze

| 元件 | 檢查控制權 | 初始 |
|---|---|---|
| Launch Token | mint、burn、pause、blacklist、upgrade、balance／supply | UNKNOWN |
| Factory／policy | 新舊instance影響、bytecode、更新權 | UNKNOWN |
| Hook／fee collector／LP | 費用、收款、conversion、withdraw／migration | UNKNOWN |
| Swarm distributor | roots、claim、expiry、rescue | UNKNOWN |
| Paying Wallet／World budget | 實際recipient、批准／支出、錢包兼容 | UNKNOWN |
| Genesis | 精確burn、供給、claim、price／metadata、無成本回收 | G: NOT_RUN |
| Research Collector／Mode | 來源、讀取、memory／tools／無signer | I: NOT_RUN |
| Research Publisher | 核准hash／方法／回撤／commercial資料 | I: NOT_RUN |
| 私人帳號／Genesis服務 | ACL、ownership freshness、quota replay | I/G: NOT_RUN |
| Dream Engine／CI | scripts、secrets、locked elements／publish | D: NOT_RUN |
| 候選ReleaseRegistry | publisher、選版／撤銷、無資金／no false proof | CANDIDATE |

本次review禁止launch.open／workflow.open部署、金融廣播、wallet credentials、付費子任務／schedule與production更改。可以讀公開資料與在真實source可用時作隔離本地測試；報告交付本身不授權修改輸入repo。

---

# Appendix C — Historical Decisions (not active instructions)

舊名稱$EMBER／$EMEVO／$EmberEvo／PROTEUS不是現行ticker。80/10/10、24M vesting、100M自訂供應、2%/4%自訂交易費、20,000 EMVO/Genesis均非現行決定。

Rev.3是本版完整底稿；舊commit 0dc9eec7328fe280e8d586222d978d329890e87c是Rev.2歷史資料。v3.3需新的可驗證commit，不代表main目前停在該舊版。

此前建議把Genesis Mint款收入專案錢包，**Owner本次已拒絕而重申burn**。該收款建議不進現行schema、合約、收入預測或任務需求。

過去的泛AI研究方向已收斂為Crypto-first。Genesis不是被取消或降格為僅遠期附屬。舊V1完全手動是金融／單次工作基準；有限研究批次是新增候選，未具體批准前仍不啟用。

---

# Appendix D — Sources / Verification Boundary

來源分組：A=本次重讀公開原始文件；B=Rev.3繼承參考，未在本次重新審計；C=本輪Owner與既有規格；D=工程提案。工程章節未標外部事實者均是D，不是官方已提供能力。

| ID | 來源 | 本次範圍 |
|---|---|---|
| S1 | https://imd.fun/docs/ | A：標準發行、fees、付款、inputs／Report、排程控制；不是EMVO quote |
| S2 | https://explorer.imd.fun/launch | A：本次靜態文案Ethereum／88-10-2／Check；不代表操作已選鏈 |
| S3 | https://eips.ethereum.org/EIPS/eip-20 | A：標準沒有必需burn方法 |
| S4 | https://developers.uniswap.org/docs/protocols/v4/concepts/poolmanager | B：singleton／PoolKey／PoolId |
| S5 | https://developers.uniswap.org/docs/protocols/permit2/concepts/signature-transfer | B：付款簽名範圍 |
| S6 | https://docs.github.com/en/actions/reference/security/secure-use | B：untrusted CI／secrets隔離 |
| S7 | https://docs.openzeppelin.com/contracts/5.x/api/utils/cryptography | B：Merkle／signature |
| S8 | https://docs.openzeppelin.com/upgrades-plugins/proxies | B：proxy一般原理，不是本案可升級授權 |
| S9 | https://claus.si/about.json | B：CLAUS來源，不是本次現況驗證 |
| S10 | https://claus.si/read/Journal/operator_revenue_funding_public_20261003 | B：外部推論／operator紀錄 |
| S11 | https://claus.si/read/Hooks/NFTs | B：外部NFT模型比較，不採用 |
| S12 | https://github.com/ProjectHive-IMD/Hive/blob/90deb7b55f0cae5c2d7d8075dbb560fc4620280a/README.md | B：HIVE敘事，非收益保證 |
| S13 | https://github.com/ProjectHive-IMD/Hive/blob/90deb7b55f0cae5c2d7d8075dbb560fc4620280a/src/HiveRewardRouter.sol | B：原分配source比較 |
| S14 | https://github.com/tungweb3/emvo-review/commit/0dc9eec7328fe280e8d586222d978d329890e87c | B：已知舊review commit，不是本次新來源 |
| S15 | https://github.com/Identity-md/research/blob/9f7d4a0878b605b37b3f8927019ff7ab7cfe2713/jobs/e9efec16-56f3-40d3-9243-52c453effc7d/files/artifacts/report.md | B：活動提案快照，不是正式公告 |
| S16 | https://docs.openzeppelin.com/contracts/5.x/api/token/erc20 | A：burn／burnFrom參考實作語意，不代表IMD模板 |

本次未重跑S4–S15的程式或現況比對；同業只保留既有比較，不重新引用市值／APY／floor判斷成功。

S1仍將live capabilities／exact policy作執行基礎；文件數字不是自動批准。新UI文案與舊文案不同，保存歷史而不挑支持意向的一句當結論。未取得EMVO template/runtime／burn或fee實際交易，不主張true burn已可用或IMD-only已成立。

S1關於排程的固定輸入、按次預付、未用次數不退與團隊控制取消，需要在真正採用時重新核對；本次只更新文件，未安排工作或收費。

---

# Appendix E — Launch Manifest Template (no pre-filled PASS)

以下是本專案的欄位設計，不是官方API schema。

```yaml
schema_version: emvo-launch-manifest/1.1
status: DRAFT_NOT_AUTHORIZED
review_revision: v3.3
expected:
  name: EmberEvo
  symbol: EMVO
  target_chain_id: 1
  preferred_pair: EMVO/IMD
  allocation_policy: official_default
  historical_reference_percent: {pool: 88, swarm: 10, paying_wallet: 2}
  project_vesting: false
  ai_financial_authority: false
  genesis_paid_model: BURN_NOT_TREASURY
  genesis_burn_implementation: UNVERIFIED
  genesis_price: null
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
  upgrade_admin_if_any: null
  burn_capability: null
  burn_path: null
  genesis_forge_address: null
checks:
  input_integrity: NOT_RUN
  capabilities: NOT_RUN
  check: NOT_RUN
  quote: NOT_RUN
  template_compatibility: NOT_RUN
  true_burn_template: NOT_RUN
  signature_review: NOT_RUN
  deployed_instance: NOT_RUN
  fee_accounting: NOT_RUN
  fee_receipt: NOT_RUN
  genesis_atomic_burn_mint: NOT_RUN
  genesis_contract: NOT_RUN
evidence: []
missing: []
```

所有false為期望/未批准狀態，不是已驗證配置。每個結果附source、block/hash／commit、測試命令與限制。

---

# Appendix F — v3.3送審／GitHub版本切換

本次仍是一筆單次非部署Report，預期job.open、不含onchain，Repeat/Heartbeat保持關閉。日常研究自動化是本次的審查對象，不是本次執行權限。

四份新版MD由INPUT_MANIFEST.json列名／bytes／SHA-256；README說明順序。舊MD可留作歷史，新commit必須包含這四份與新版manifest。不得重用Rev.2的0dc9eec...、Rev.3的舊包或虛构commit。

更新文件不回溯修改已付job。未付款則新來源新Check；已付款／執行中先保存訂單／輸入版本，取得報告再決定delta-review，不能自動重付。Review Repo不是網站source，不能說讀MD就審過整站。

英文objective使用保守4,000 ASCII字元內的模板。必須填實際新commit，然後報告先列INPUTS_READ與hash核對；缺必讀檔停止，缺source/quote不跳過已提供的設計，但對應測試保持NOT_RUN。

---

# Appendix G — AI Evolution Run Record（模板）

```yaml
schema_version: emvo-world-run/1.1
status: DRAFT
mode: null  # RESEARCH / CREATION
proposal: {id: null, revision: null, hash: null, imd_anchor: null}
inputs: {snapshot_hash: null, source_refs: [], style_hash: null, schema_version: null}
agent: {provider: null, model: null, runtime: null, prompt_hash: null, tools_version: null}
change: {class: null, paths: [], forbidden_actions: []}
budget: {approved: false, category: null, currency: null, amount_atomic: null, approval_id: null}
job: {order_id: null, job_id: null, accepted_submission: null, payment_tx: null}
artifact: {original_hash: null, processed_hash: null, manifest_hash: null, lineage: []}
review: {source_commit: null, reviewer: null, findings: [], independent_scope: null}
validation: {schema: NOT_RUN, security: NOT_RUN, performance: NOT_RUN, imd_anchor: NOT_RUN}
release: {approved: false, approved_hash: null, approved_by: null, engine_version: null, url: null}
measurement: {metric_version: null, sample: null, outcome: NOT_MEASURED}
authority_expectation: {ai_has_financial_signer: false, ai_can_publish: false, ai_can_upgrade_contract: false}
```

研究模式以§68–71的project/claims證據另存；IMD Anchor不是研究所有外部項目的必填假關聯。創作模式才套Dream Room驗收。

---

# Appendix H — Genesis Burn驗收紀錄（模板）

```yaml
schema_version: emvo-genesis-burn/1.0
status: NOT_RUN
expected:
  paid_cost_model: BURN_NOT_TREASURY
  project_receipt_from_cost_atomic: '0'
  free_cost_atomic: '0'
  redemption_enabled: false
observed:
  chain_id: null
  token_address: null
  forge_address: null
  token_source_commit: null
  token_runtime_hash: null
  block_hash: null
  transaction_hash: null
  method: null
  quantity: null
  price_atomic: null
  cost_atomic: null
  supply_before: null
  supply_after: null
  user_balance_delta: null
  forge_cost_residue_atomic: null
  project_cost_receipt_atomic: null
checks:
  exact_burn: NOT_RUN
  atomic_revert: NOT_RUN
  no_treasury_receipt: NOT_RUN
  no_recoverable_cost: NOT_RUN
  free_and_remediation_zero_cost: NOT_RUN
  capacity_and_claim_isolation: NOT_RUN
  no_redemption_or_reissue: NOT_RUN
```

NFT轉售價格、gas與一次獨立approve不在燃燒成本內。出現不支援、錯誤或證據不足時不自動改收款模式。
