# EmberEvo ($EMVO) × IdentityMD Hackathon
## 參賽差距評估與 v3.2 補充建議 v1.0

日期：2026-10-07（Asia/Taipei）  
狀態：**依活動提案進行的準備評估；不是正式規則、參賽資格核准、合約審計或部署授權。**  
專案母版：`IMD_Ember_EmberEvo_v3.2_Rev2_PreLaunch_Reviewed_2026-10-07.md`  
既有送審：`EMVO_PreLaunch_Swarm_Review_Brief_v1.1_NoDeploy_2026-10-07.md`  
本檔不覆寫母版，也不把新增合約方案當作 Owner 已批准的實作。

## 0. 結論

**值得以 Swarm Dream Hall 為核心準備參賽，但不能把「標準發幣完成」當成「符合黑客松資格」。**

建議保留官方標準 Token / Pool，不恢復自訂交易稅、Vesting、Buyback 或 custom v4 Hook。參賽工作的重點是：一條能展示、可重現、具有 IMD 依賴與實際功能的內容生產／發布流程。

最小候選成果：

```text
Owner 人工批准並支付 IMD 工作預算
→ Identity.md Swarm 真實工作
→ 可取回且可驗證的 Dream Room package
→ 獨立 Review + schema / 安全 / 效能檢查
→ Staging
→ Owner 批准確切內容版本
→ 候選自訂發布合約的真實交易（須另行批准）
→ Dream Hall 根據批准版本載入一間可探索的 2.5D Room
→ 展示 Job / Review / Artifact / Release TX / 實際成果證據
```

**候選發布合約是否符合活動要求，必須由主辦確認，不能由本評估自行授予資格。**

---

## 1. 原始來源到底是什麼？【來源內容】

使用者提供的 `report.md` 標題是 **IdentityMD hackathon proposal**。開頭明確說明，內容是 proposed rules，不是已公告活動。[S1]

因此它不是：

- EmberEvo 的 Swarm 審查結果。
- EMVO Mainnet 的 GO / NO-GO。
- 正式報名成功或資格核准。
- 主辦已承諾的獎金／NFT 支付證明。

提案提出兩週建設期、15 個獲獎專案、總計價值 USD 10,000 的 IMD 與冠軍額外一枚 IMD NFT，但獎金籌備、換算來源、評審、網路與正式規則均仍待確認。[S1]

### 1.1 日期必須確認

提案時程：[S1]

| 階段 | 提案文字 |
|---|---|
| 建設與提交 | October 5 00:00 UTC → October 19 00:00 UTC |
| 審查與決定 | October 19–22 |
| 公布結果 | October 23 |

報告明說原始 assignment 沒有提供年份，且若指 2026 年，提案撰寫時 10 月 5 日已過。

**只有主辦確認採 2026 年這個時段時**，台北時間才是：2026-10-05 08:00 → 2026-10-19 08:00。這是時區換算，不是本評估確認的正式截止日。

本次公開查找未取得足以確認正式開賽、報名入口、最終規則與網路的主辦公告；這不代表它們不存在。請取得主辦確認後再排正式 Launch。

---

## 2. 參賽條件與 EmberEvo 差距【提案內容＋文件對照】

下列條件來自 S1 的 Entry requirements，仍屬提案。

| 提案條件 | v3.2 Rev.2／本次可證明狀態 | 需要做什麼 |
|---|---|---|
| 建設期內，透過 IMD protocol 在主辦允許的網路推出可運作 Token 專案 | 母版規劃 Ethereum Mainnet 官方 Launch；本次未取得 EMVO 實際部署或參賽核准 | 確認年份／起訖／網路／launch 路徑；留時間與 TX 證據 |
| active v4 Hook **或**有超出 plain token 功能的 custom contract | 母版刻意不做自訂交易 Hook；Genesis 合約另階段驗收 | 選擇有真實產品功能的獨立合約候選，或已安全完成的 Genesis 功能；不可只發 Token |
| 展示呼叫 hook/custom logic 的 working transaction | 本次未提供相應已測試程式與交易 | 合約、測試、許可網路部署、真實交易與可見產品效果需一致 |
| 至少一項可運作的 IMD-dependent feature | 手動 IMD 預算／Swarm／Dream Hall 在母版中有規劃 | 實際跑一筆工作並用產物完成網站成果；只寫 IMD 名稱或貼連結不足 |
| 專案 X 與主開發者個人 X | 本次未核對帳號 | 準備可核驗的兩個帳號與專案關係 |
| 公開 repo、重現說明、地址、Demo、風險、收獎錢包 | 尚未取得本專案 repo/commit/部署證據供查核 | 建立可讀、可測、去除秘密的 submission repo |
| 揭露重用程式與比賽期間工作 | 已有 World 與設計基準 | 固定 baseline commit，列出本次新寫內容；不可把舊世界全部算成新作品 |

**「需要揭露重用程式」不等於「已明確允許所有既有專案」；既有 World 加新模組、Token 和功能合約分次部署是否可接受，均要主辦回答。**

---

## 3. 哪些決策不用重開？【既有 Owner 決策】

依母版／送審需求：[S4][S5]

- Token Name = EmberEvo；Symbol = EMVO。
- Ethereum Mainnet 是正式 Token 目標；比賽允許網路另確認。
- Token launch 採官方標準／預設；具體政策仍走原 Q/L/V 證據關卡。
- 不新增 Token transfer tax、staking/APY、holder yield、buyback 或 custom v4 Hook。
- 2% Paying Wallet 不加 vesting／lockup／用途限制，保留出售彈性。
- EMVO/IMD 是首選；不能默默改 ETH；費用是否 IMD-only 仍待驗證。
- V1 預算、換幣、付費工作與發布都人工批准。
- Genesis Free + Paid Forge + Remediation 保留；不可為比賽擅定價格／資格／MAX_SUPPLY。
- 保留凍結 World 基準與不受信任 artifact 隔離。

原母版的「不做 custom v4 Hook」不是「永遠不做產品合約」；但新增的參賽產品合約仍屬額外範圍，不能暗中塞進已審查的 Token Launch。

---

## 4. 我建議的候選路線【新增設計建議，非既定規格】

### 4.1 首選候選：DreamHallReleaseRegistry

定位：**記錄並約束 Dream Hall 官方入口所載入的已批准內容版本。**

這不是：新 Token、交易 Hook、金庫、NFT 鑄造器、收益分配器或 AI 學習帳本。

其可見產品作用應是：

```text
未批准的 Room version → 不出現在正式 Dream Hall
已批准且 hash 相符的 version → 可載入並顯示來源證據
資料被替換／hash 不符 → 拒絕載入
撤銷的 version → 依既定刷新／確認策略停用
歷史合法版本 → 經人工新交易選回，保留完整歷史
```

這只是控制本專案官方入口的版本選擇；不能阻止別人在其他網站複製或展示公開資產。

### 4.2 建議最小資料模型

概念欄位，尚非 final ABI：

```text
project identifier / schema version
room identifier / version
manifestHash
IMD job reference
review evidence hash / reference
publisher
publication state / timestamp
active version selection
revocation record
```

工程確認：

- 明定 hash 演算法與 exact bytes，manifest 另含各 asset hash。
- 統一 IMD job identifier 編碼；不把外部字串當 executable instruction。
- 同一 job 可以有多個合法輸出；去重依 room/version + artifact identity 設計，不能粗暴禁止 jobId 重用。
- 同一 room/version 的 manifest 不得原地覆寫；更新要新版本。
- 只有明確 publisher 權限可以批准／選版／撤銷；AI 無此私鑰。
- 不持有或移動 EMVO／IMD，不要求訪客 approve，不鑄造 Genesis。
- 不以一個任意 URL 為可信內容；hash、路徑、允許來源及 MIME 等仍需驗證。
- 瀏覽維持 read-only；只有發布者批准的管理交易需要 gas。

### 4.3 信任限制必須公開

**把 jobId 寫上鏈不等於鏈上驗證它真的是 IMD accepted work。**

若未實作且驗證官方 IMD receipt/attestation 的鏈上驗證方法，本方案只能宣稱：

> 人工核對 IMD 工作與審查證據後，授權發布者把指定 artifact 的 hash 與發布狀態記錄上鏈。

不能宣稱 trustless proof-of-build、合約自動判斷 AI 成果品質、或任意 hash 本身就是 IMD 證明。

主辦還必須確認：**這種真正影響網站版本發布的合約，加上真實 IMD-paid Swarm 工作流程，是否符合 meaningful custom contract / IMD integration？** 若不接受，不要僅改名字、加空事件或硬說已合格。

### 4.4 為何不是立刻做 Genesis Forge？

Genesis Forge 是更直接的 Token/NFT utility 候選，但母版仍保留 qualification、F/R/P、MAX_SUPPLY、價格與 Remediation 等待定事項。[S4]

因此：

- 若 Genesis 實際已完成測試與必要決策，可另列候選，由證據判斷。
- 未完成時，不為比賽趕工開正式 Genesis mint。
- 可在主辦允許的網路展示隔離 prototype，但要標 TEST ONLY，不能借此宣稱正式 Genesis 權利。
- 正式 Token / Genesis 的鏈、價格與資格不得因報名而默默改動。

### 4.5 為何不新增交易 Hook？

報告是 Hook **或** meaningful custom contract，不要求兩者同時存在。[S1]

保留標準 Token/Pool，在產品層實作功能，比為取得資格去改交易費／LP／轉帳行為更符合本專案既有範圍。Uniswap 官方文件將 Hook 說明為掛接 Pool 操作的外部合約，並不提供本比賽資格保證。[S3]

---

## 5. 最小 Demo：一間房＋一條可驗證工作鏈【建議】

參賽定位可用：

> EmberEvo — Swarm-built worlds with traceable IMD work.

中文：**把可核對的 IMD Swarm 工作，變成能走進去的世界。**

### 5.1 最小可見成果

1. 現有 3D 主世界內可辨識且可進入的 Swarm Dream Hall。
2. 一間有移動／點擊／分層互動的 2.5D Room，而不是只有來訪介紹。
3. 一筆真實、人工批准的 IMD 工作，及其實際產物。
4. 可追溯 Review 與人工批准；作者、Reviewer 身分不捏造。
5. 候選自訂合約的一筆合法管理交易，對網站可見狀態產生真實作用。
6. Evidence panel：Job、Review、manifest、合約、release transaction、版本。
7. 一個拒絕載入篡改資產／未批准版本的示範。

Room 題材必須取自**已能查證**的 IMD Agent／Swarm／生態事件。未有證據時，不把 #361/#921 虛構成已完成某個工作，也不捏造未來 EMVO 發行紀錄。

可先做「一份真實 IMD 建設工作的奇幻化展示」。就算只有一間完整 Room，仍可證明生產、審查、發布與探索流程。

### 5.2 不列為最小參賽硬需求

完整 Editor、全自動 World Brain、數十間 Room、正式 Genesis Paid Forge、大量配件／Pets、另一套 Token、複雜財務自動化。

配件／Pets 可做一個真實概念展示作加分項，標清 Concept / Prototype；不承諾發行、交易、持有收益或免費 entitlement。

---

## 6. 參考評分表的準備重點【原提案分數＋本評估對應】

| 提案評分 | 分數 | 建議提交證據 |
|---|---:|---|
| 可運作功能與可重現部署 | 20 | Clone/Install/Test/Run；正確地址；可操作 Demo；發布 TX |
| 技術品質、安全檢查與風險揭露 | 15 | 權限、邊界、負面測試、已知限制；不冒稱完成獨立審計 |
| 有意義的 IMD 整合 | 20 | 真實 IMD 付款／Job／輸出／Review 與網站成果對照 |
| 原創性與 IMD 創意使用 | 20 | 把工作與 Proof 轉成可探索場景，而非 generic token dashboard |
| 使用者價值、採用潛力、生態利益 | 25 | 讓使用者理解誰做了什麼、世界增加什麼；真實測試回饋 |

分數為提案，不是現行正式評分規則或預估得分。提案也說 followers、market cap、token price 本身不直接得分。[S1]

---

## 7. v3.2 與 Swarm Brief 要怎麼修？【建議，不直接覆寫】

| 文件位置 | 建議補充 |
|---|---|
| v3.2 開頭／決策表 | 加 Hackathon preparation = proposal-based，未確認資格；不影響既有 Owner 決策 |
| §36 / §63 Dream Hall 分期 | 將 D1 真實 Room + IMD artifact 流程列為參賽候選里程碑，仍非所有 Token Launch 的通用 blocker |
| §41 Room Registry | 保留既有受控內容機制；候選 onchain release registry 需獨立批准、測試與部署 |
| §54 V1 exclusions | 不撤回 no custom v4 Hook；明確區別內容發布合約與被排除的 onchain Learning/World Pulse |
| §58 GitHub／交付 | 補公開 submission repo、baseline commit、reused code、evidence manifest、demo 說明 |
| §59／Gate 系統 | 新增 H: 比賽規則／提交資格驗收，與 L付款發幣、V部署驗證、G Genesis、D內容發布分開 |
| Swarm Brief v1.1 | 增補 Hackathon alignment section；仍為只審不發、不付款、不幫忙報名 |

**新增 H 不代表只有普通標準 Token 就能參賽；也不代表為了 H 可以跳過 L/G/D。**

### 7.1 合約部署路徑另案確認

IMD Docs 區分 `job.open` 非部署工作、`launch.open`、`evm_contracts` 合約專用發佈；並明確指出 `job.continue` 不會重新部署。[S2]

因此不能假設：

```text
先發標準 EMVO
→ job.continue 一次
→ 就一定部署新的 Registry
```

若採 Token 與 Registry 分次發佈，要同時確認：

- 技術上的正確 API／chain capabilities／quote。
- 主辦是否接受同一專案分次部署、是否要求同一 launch job。
- 不重發、不替換原 EMVO，不把其他 action 的授權混入審查。

---

## 8. Submission repo 最小內容【建議】

```text
README.md
SUBMISSION.md
BASELINE.md
HACKATHON_CHANGELOG.md
SECURITY.md
THIRD_PARTY_NOTICES.md
contracts/              # only if a real implementation exists
script/
test/
web/ or demo/
schemas/
content/ or content references
evidence/manifest.json
evidence/job-and-review-refs.md
demo/walkthrough.md
```

- README：問題、使用流程、架構、明確前置條件與測試命令。
- BASELINE：活動前既有 World/source commit；未確認活動起點時先標 provisional。
- CHANGELOG：比賽期間新增哪些 module/asset/test，而不是整個舊專案都算新作。
- EVIDENCE：actual network、合約／TX／block、repo commit、job refs、artifact hashes、測試結果。
- SECURITY：發佈者權限、人工信任點、可撤銷性、無資金／無收益承諾、known limits。
- LICENSE／素材授權：只公開擁有公開權限的源碼與素材；私人repo不因想參賽就直接全開。
- 不放 .env、私鑰、助記詞、API key、付費request bearer、付款簽名、敏感使用者資料。
- 沒有執行的測試標 NOT_RUN；沒有地址或交易標 UNKNOWN，不填 placeholder 當真。

可重現性不等於要求評審花เงินจริง：盡量提供本地 fixture/local test；真正 IMD 工作與交易用可核對證據展示，明確區分 live/test/recorded。

---

## 9. 最少要向主辦確認的問題

1. 這份 proposal 是否已正式採用？正式規則、年份、開放與截止時間、報名入口在哪？
2. 既有 IMD Ember World 在活動期間新增 Dream Hall／合約，是否可參賽？baseline 如何切分？
3. 官方標準 EMVO Token + 獨立 meaningful product contract 是否合格？能否分次部署，還是必須同一 IMD launch job？
4. DreamHallReleaseRegistry 真正控制網站已批准版本，加上實際 IMD-paid Swarm job／review／artifact，是否符合 meaningful custom contract 與 IMD-dependent feature？
5. Token、產品合約與 Demo 各允許哪些網路？正式主網尚未開啟的 Genesis 是否能保留在 roadmap？
6. 是否有 X、repo、影片、錢包、截止後修改、重用程式與素材授權等正式提交限制？

提案獎金不得當作 World Build 保證收入，也不應成為趕工上線未審查合約的理由。

---

## 10. 執行順序與目前判定

### P0：先做

- 確認正式活動規則、年份／截止／網路、既有專案與分次部署。
- 保留原 EMVO prelaunch review；本份活動 proposal 不能替代它。
- 確認主辦接受選定的產品合約方向，再決定是否實作。
- 固定活動前 baseline、source hashes、提交文件的證據結構。

### P1：主辦接受方向後

- 一間真實 IMD Anchor 的可互動 2.5D Room。
- 至少一個真實工作包→驗證→Review→Staging→人工publish案例。
- 選定合約的程式、測試、安全審查、許可網路部署及真實呼叫。
- 公開重現 repo、Demo、風險與重用內容揭露。

### P2：不為參賽強行趕工

- 完整 Editor、自動規劃、Pets/配件系列、Genesis正式定價與正式公開 mint。

目前：

```text
Event final rules = UNCONFIRMED
Hackathon entry eligibility = NOT ESTABLISHED
Project source / deployment audit in this review = NOT PERFORMED
Contract proposal = CANDIDATE / NOT OWNER-APPROVED
Additional deployment / spend authority = NONE
Existing v3.2 launch gates = UNCHANGED
```

---

## 11. 原活動提案本身值得澄清的地方

以下是對提案的建議，不是擅自改寫主辦規則：

- 補正式年份、開賽／截止／修正窗口的時區與精確時間。
- 列出 accepted networks、Token與功能合約是否必須同次發佈。
- 明訂既有專案、活動前程式與新功能的資格界線。
- 定義 meaningful functionality 的驗收範例；單純存一個hash/發一個事件是否不足。
- 十位finalists如何由AI篩選：原創性／使用者價值由人類主評，但第一輪shortlist如何涵蓋這些面向未說清。
- 區分評審 agent檢查與安全審計；公佈利益衝突、事實更正與appeal做法。
- 先確認獎金資金與NFT、換算價格來源、timestamp與收款條件，再對外承諾。

---

## 來源與覆核邊界

[S1] 使用者指定活動提案（完整讀取；非正式規則）：
https://github.com/Identity-md/research/blob/9f7d4a0878b605b37b3f8927019ff7ab7cfe2713/jobs/e9efec16-56f3-40d3-9243-52c453effc7d/files/artifacts/report.md
Git commit: `9f7d4a0878b605b37b3f8927019ff7ab7cfe2713`  
Git blob SHA-1: `1b3aeac9463a15b4332afd7562e7f7921897ea62`  
該路徑最近取得的提交時間：2026-10-06T07:54:06Z。Git儲存紀錄不代表活動正式公告或主辦核准。

[S2] 官方 IMD API Docs（2026-10-07公開靜態頁）：https://imd.fun/docs/  
只用於核對研究／發佈／續作模式區別；不當成活動資格來源，不把靜態描述當EMVO即時quote結果。

[S3] Uniswap 官方 Hook 概念：https://developers.uniswap.org/docs/protocols/v4/concepts/hooks  
用於區分Pool Hook與一般產品合約；不提供IMD hackathon資格。

[S4] `IMD_Ember_EmberEvo_v3.2_Rev2_PreLaunch_Reviewed_2026-10-07.md`  
SHA-256: `1d3c44f91ae88b7962d94e26bdb0bc073455b3a40782f474be228d708ae1178a`

[S5] `EMVO_PreLaunch_Swarm_Review_Brief_v1.1_NoDeploy_2026-10-07.md`  
SHA-256: `7d173b4768a8228fa7a7f8ac1928638f25e5e3678e6ea11e252b4ada66247495`

本次比對 S4/S5 的 Owner decisions、Gate、Dream Hall分期、Registry、Genesis與Artifact交付相關內容，未重新審計3D網站程式／Token或任意產品合約。未提交報名、quote、付款、Swarm工作或部署。未取得主辦正式資格回覆。
