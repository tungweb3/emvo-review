# EmberEvo ($EMVO) — Genesis Paid Mint 收款決策補充

日期：2026-10-07  
類型：Owner 新決策／局部規格變更；不是完整母版升版。  
基準：v3.3 ReviewFix1 與其單次非部署 Swarm 審查報告。  
執行狀態：只建立本地補充文件；未修改主規格、GitHub、已提交的工作、網站或合約，未付款、未轉帳、未部署。

## 1. 最新 Owner 決策

Owner 最新指示：

> 不burn也可以，就先打到我的發幣錢包裡。

本次將未來 **Paid Genesis Mint** 的預定經濟路徑改為：

```text
Payment asset = EMVO
Paid Mint cost = quantity × final published / frozen mint price
Payment recipient = Owner 實際發行 EMVO 時使用並明確確認的 Paying Wallet
Required burn = NO
Automatic later burn = NO
User receives = Genesis PEPE
Automatic NFT-to-EMVO redemption = NO（沿用原本沒有自動贖回的方向）
```

這是改變產品要求，不是已證明官方 Token 不支援 burn，也不是宣布 Token／Genesis 合約已經通過測試。即使後來發現 Token 有 burn 能力，也不自動改回燃燒；再次改變需另記 Owner 決策。

## 2. 支付與資產管理

- 用戶支付的是 EMVO；Paying Wallet 預期收到 EMVO，不因這項決策就自動兌換成 IMD。
- 收到的 Mint 付款由 Owner 管理；可持有、轉移、使用或出售。本補充不新增 vesting、鎖倉、必須建世界的比例或出售時間表。
- 本路徑不是 burn、永久 consume、替用戶保管的 backing，或使用者可隨時贖回的本金。
- 正常標準付款轉移不以降低 Token totalSupply 為目標；不能再把這批 Mint 付款統計成供應燃燒量。
- Mint 收款、官方池交易費、Launch 的 2% 配額、Owner 另行投入及內部錢包轉移分開記帳。
- 同一個錢包接收不同收入，不代表它们自動採相同合約路徑。Mint 收款地址需在 Genesis 實作中明確指定與驗證。
- 本次未提供實際 Paying Wallet 地址。不可猜測，也不可把 API payTo、官方 Factory 的 launch wallet、Hook admin、LP owner 等地址代入。

## 3. 不變的 Genesis 與產品設計

- Free Claim 與有效的資格補救仍不收 EMVO；一般鏈上操作的 gas 是另一回事。
- 原本 tokenId-based entitlement、current-owner check、共用 claimed[tokenId]、F/R/P 容量隔離及累計鑄造上限保留。
- Mint 價格、資格窗口、F/R/P 及總量仍待原階段決定；不因改為付款就擅自填值或允許 Freeze 後改價。
- 不新增 staking、holder fee share、NFT backing／自動贖回、Token transfer tax 或 AI 金融簽名權。
- Token 名稱／symbol、Ethereum 目標、官方標準發行、EMVO/IMD 首選及原 2% 配額彈性不變。
- 生態館、研究平台、Dream Hall、Genesis 角色、配件與 Pets 的既有分期不變。
- 這項 Mint 付款決策不替代「官方池費用是否 IMD-only」的另案取證與 Owner 決策。

## 4. 工程要求：付款與 Mint 原子完成

以下是待實作與驗收的要求，不是已部署程式或已完成測試：

```text
核對 Mint 開放、數量、Paid 容量與價格
→ 核對確切 EMVO Token 與明確收款地址
→ 按經審查的狀態更新／重入防護順序執行
→ 授權範圍內 transferFrom(user, paymentRecipient, exactCost)
→ 鑄造指定數量 Genesis
→ 同一筆交易全部成功，否則全部 revert
```

不採「使用者先手動轉帳，管理員之後再補 NFT」作為正常 Paid Mint 流程。

收款地址不是由任意訪客或未受信任資料指定。是否允許日後更改地址、由誰更改及如何公布，是需要明確設計和審查的控制權；本補充不新增任意改向能力。

應驗證實際 Token 的 approve／allowance／transferFrom 與回傳值處理。付款人與收款人相同等特殊情況需明確定義，不能在未定義的情況下套用一般淨餘額增減斷言。

必要測項：

| 測項 | 期望 | 當前狀態 |
|---|---|---|
| 標準 Paid Mint | 精確 EMVO 付款與指定 NFT 數量一致 | NOT_RUN |
| 收款目的地 | 實際 recipient 等於經確認的 Paying Wallet | NOT_RUN |
| 餘額／allowance 不足或 Token 回傳失敗 | 不留部分付款或部分 Mint | NOT_RUN |
| Mint／receiver callback 失敗 | 同筆付款、鑄造與計數回滾 | NOT_RUN |
| Reentrancy／重複 Claim | 不超額 Mint、不重領資格、不重複收款 | NOT_RUN |
| Free／Remediation | EMVO 收取為零，保留原資格／容量規則 | NOT_RUN |
| 收款與 Mint 成本帳目 | 付款不被標記為 burned／backing | NOT_RUN |
| 權限與地址改向 | 未授權者不能修改 recipient 或 Mint 權利 | NOT_RUN |

交易 revert 不等於補償 gas，也不撤銷先前已成功的獨立 approve 交易。成功 Mint 後的法定或另定退款責任不在本補充中判定；沒有自動 NFT 贖回機制，不等於法律上免除所有義務。

## 5. 對原 Swarm 發現的影響

原報告 F-01 的必要前提是 Owner 堅持 true burn，並明確允許 Owner 另記新決策改變路徑。

```text
Required true-burn compatibility as a launch prerequisite
→ SUPERSEDED_BY_OWNER_DECISION
→ NOT a technical PASS
```

原報告與其測試狀態保留為歷史，不改寫成「原本已通過」。標準 ERC-20 付款相容性仍須驗證，Genesis 本身仍須獨立 Gate G 審查。

以下不因本次變更自動解決：

- 實際 88/10/2 與 live policy／effective plan 的對照。
- Token／Factory／Hook／LP／collector 的實際角色與能力。
- 官方池買賣費用的記帳幣種、分配行為與最終收款資產。
- exact quote、實際 Paying Wallet、價格／供應與 Genesis code／測試。

因此本次不給 Launch GO，不授權付款或部署。

## 6. 下一次主規格／Brief 同步範圍

需同步更新有效規則，而不是對整份文件盲目替換文字：

- Paid Mint 章節：BURN_NOT_TREASURY → PAYMENT_TO_PAYING_WALLET。
- 將可誤導的 BURN_PER_MINT 參數命名改為 MINT_PRICE_EMVO（最終名稱由工程統一）；價格待定及 Freeze 規則不變。
- Fee／Mint receipt matrix、成本與資金流、Genesis 測項、Launch checklist、Gate G、Manifest 與對外 Mint 文案。
- 刪除「true burn 未證明必然阻擋 Launch」這項現行依賴；保留歷史決策與原報告。
- 將「Paid Mint 不能成為任何專案收款」改為最新付款規則；實際 EMVO 收款不直接等於可支付的 IMD 或法幣。
- 更新四份送審文件、README／INPUT_MANIFEST 並固定新 commit 後，再用於新的審查。
- 若原工作已付款／執行中，不追溯更改其輸入、不立即重付；先保存原結果，再決定最小差異覆核。

## 7. 來源與邊界

1. Owner 本輪明確指示是本補充變更依據。
2. `EmberEvo_Swarm_Report_原文_2026-10-07.md`：§4 F-01、§4.1、§5、§7、§14。報告為 SPEC_ONLY，不是實作審計；以原字義保留其來源限制。
3. ERC-20 標準：https://eips.ethereum.org/EIPS/eip-20 （2026-10-07讀取）：approve／allowance／transferFrom，及不得忽略 false 回傳值。只用於解釋标准介面，不證明本專案 Token 實例相容。

本次沒有修改完整主規格、GitHub、既有 Swarm 工作或鏈上狀態。本檔僅記錄最新決策與下一次同步需求。
