# EMBEO Swarm 延續工作草稿

本機準備完成後供使用者檢視。未送出 paid quote、未付費、未建立 continuation job，亦未授權發布官網。API payload 是草稿，提交前須再核對 project.head、running 與官方免費 Check 的 blockers／prepared scope。

**目前免費 Check 已通過。** 使用者明確同意不含信箱版本後，官方回傳 HTTP 200、blockers=[]、suggestions=[]，owner 與既有正式部署相符；plan 為文件、頁面實作、獨立審查。judged=false，不代表已審核或完成實作。[完整預檢結果](CHECK_RESULT.md)

以下兩段保留預檢前的授權與資料最小化歷史，現況以上方及結果文件為準。

免費 Check 的執行被自動核准審查拒絕，原因是目前只授權本機準備，未明確授權將包含專案、聯絡信箱與代幣資料的 payload 傳給外部端點。因此伺服器尚未核對這份草稿，不能寫成 blocker-free 或已取得 quote。需要使用者另行同意外部傳送後，才呼叫免費 Check。

後續修正：聯絡信箱不是免費 Check 的必填欄位，已從此次 payload 移除；Check runner 亦會拒絕含 email 的草稿。官網 Token 頁保留使用者先前指定的公開聯絡資料。這項最小化修改不等於取得外部傳送授權，尚未呼叫端點。

## 已讀取的母專案

2026-10-09 公開 job 回應：state=completed，project.head=1d8ba181-fdc0-4f4b-83ab-bd5bc40f5515，running=null，paidBy=0x1c651928150daddda9c2c040a9d4901d862f8ec4。交付 commit=cecf25b92d44568f8a0f81c34f4b634df905d1e5，Launch #944 live。

官方 job.continue 僅延續最新母工作，交付到其 repository；不重新部署或替換 Token。不可混入 onchain、launch、economics、repoUrl 或 baseCommit。付款須使用該專案原付款錢包。這些條件必須在真正送件前重新讀取，不因本次草稿預先保證允許。

[官方延續文件](https://imd.fun/docs/#continuing-a-project) · [母工作公開資料](https://api.imd.fun/jobs/1d8ba181-fdc0-4f4b-83ab-bd5bc40f5515)

## 工作目標

1. 在公開 README 增加正式部署後現況，保留原發幣前文件及固定 source commit。
2. 增加輕量正式 Token 頁：正確 CA、原版 Logo、Ethereum／ETH 配對、來源、官網／X、歷史測試 EMVO 提示；不公開個人聯絡信箱。
3. 實作只讀費用查詢：同一最終確認區塊的 token／pool／beneficiary 驗證，固定 launch 944 的 eth_call 模擬、owed 查詢、帶範圍及失敗保護的 FeesPaid／FeesClaimed 歷史掃描。
4. 使用獨立正負控制與桌面／手機／鍵盤驗收，檢查錯誤金額不補零，合約地址與費率不串錯。

若 Swarm 使用本機原型，必須先由使用者批准公開 allowlist 檔案並提供可讀的固定來源／accepted artifacts。本機路徑不等於 Swarm 已收到；不能把 .rd/ 私有原始證據或整站 3D 模型一併上傳。若只使用自包含需求草稿，工作者須重新從公開來源取得並核實數值，不宣稱讀過未提供的本機檔案。

## 必須維持的邊界

- 不改 src/LaunchToken.sol、既有已部署合約、admission manifest 的歷史欄位或發行配置。
- 不重新發幣、不替換正式 CA、不增加 burn、管理權限、會員、Genesis 或分期解鎖。
- 不做付款、簽名、交易、approve、swap、領費、錢包登入、外部聯絡或排程。
- 頁面無錢包交易控制，不要求私鑰／助記詞／API key。
- 不自動發布網站，ipfs=false。GitHub 交付只有使用者確認範圍後才授權。
- 不替 IMD 官方 UI 宣稱已修正 0.3% 顯示，不把補 README 當成 Logo／Token Info 核准。
- 使用者已要求整份更新包移除個人信箱。公開頁面、設定與新文件只放官網及 X，不得從舊 README 或母工作輸入回填信箱。

## 驗收與失敗規則

正式 CA、name、symbol、chain、decimals、供應量、PoolKey、PoolId、收款人逐項相符；有效 fee=12500，不能以 admission 的 3000 代替。

ETH 與 EMBEO 分開，以整數最小單位計算，80% 份額取整，網路取得其餘。已付款需有成功收據及對應事件，必要時核對 ETH trace／ERC20 Transfer；不得由餘額增加猜費用來源。

錯鏈、錯幣、錯池、錯收款人、非只讀 RPC 方法、缺少完整掃描、失敗收據、模擬錯誤，都有負控制。缺資料使用 null／「未確認」，保留區塊與時間。共有欠款／付款事件不可誤說成單池專屬。

實作、測試與 review 明確指定，不留空而重跑原本發幣 builder。工作範圍過大或平台不接受路徑／step 時，先回 blocker，不能自行改成發幣或部署工作。
