# 貼給 World 對話框的接入交接

本輪只接正式 EMBEO 資訊與只讀費用查詢。會員、Genesis paid mint、分期解鎖均暫不做，會員門禁維持停用。這是本機審閱包，不是已發布網站。

## 可直接複製的交接文字

請接入本次 EMBEO Token 資訊與只讀費用查詢頁。

來源資料夾：EMBEO_Continuation_Update_2026-10-09。先閱讀 README.md、POSTDEPLOY.md、FEES.md、VALIDATION.md 及 public-manifest.json。頁面在 web/。

正式地址 0x2b82CDEb8477415D541799abB0Cc48044C8ea5f3，Ethereum mainnet，EmberEVO / EMBEO，原生 ETH 配對。使用原版火焰 PNG；不重畫、不改色。

使用者要求更新包不含個人信箱。正式頁面、設定、新文件只保留官網及 X 聯絡入口，不得從歷史 Token 頁、README 或母工作輸入重新補入個人 email。

用目前 World 的網站分支／staging 流程接入 /token/embeo/，並提供可見的 Token 資訊入口，保留現有世界及 3D 模型。web/ 是獨立靜態原型；先確認正式網站的 routing、CSP、模組 MIME、RPC CORS 及資產路徑，必要時拆成既有前端元件，不覆蓋整站。

費用頁只有讀取、地址複製與來源連結。不可加入錢包連接、簽名、approve、swap、claimFees/withdraw 交易或付款按鈕。claimFees 只可在 eth_call 裡作唯讀模擬。

ETH 與 EMBEO 分帳，模擬額、Factory 待補付與已付款事件分開；錯誤保持未知，不能補零。公開 RPC 失敗時保留舊快照及時間。

頁面必須保留舊 EMVO 歷史測試發行提示：主網測試發行，請勿購買，不適用正式會員資格；不能寫成 testnet、合約失效或交易已停用，沒有自動換幣承諾。

本輪不啟用會員，不填門檻 T 或 Genesis 地址，不部署任何合約，不新增 burn／鎖倉。只接網站資料與只讀查詢。

公開 GitHub 候選只使用 public-candidate/ 的明列檔案；不把 .rd/、整個 workspace、網站 3D 模型、音樂、憑證或私有檔案放入公開資料夾。

完成 staging 桌面、手機、鍵盤操作與失敗狀態檢查，核對 manifest，提供改動與部署預覽讓使用者確認後再發布；不要沿用過期網站發佈計畫。

## 接入前核對

- HTML/CSS/ES modules 全部使用相對路徑，適合複製至靜態 /token/embeo/；實際網站若有 SPA fallback，要確認此頁仍回傳正確檔案。
- app.mjs 初始僅讀本地 data/latest.json；使用者按更新才讀 RPC，無第三方 script、cookie、localStorage 或錢包擴充依賴。
- RPC POST 必須允許對已列明兩個 HTTPS endpoint 的 connect-src；若加同源唯讀代理，只能代理固定方法、固定合約及有上限事件範圍。
- 將本機審閱 footer 改成正式發佈資訊之前，須已有實際發布 readback；不可提前標「已上線」。
- 公網連結以發布後讀回為準，規劃中的 /token/embeo/ 不能填成已成立的 Etherscan／CoinGecko 提交網址。
- 公開資料不放 Etherscan 帳號、工單回信、CoinGecko 草稿私人畫面及原始 .rd/ 證據。

回滾：保留目前官網已驗證版本；首次接入用可移除的獨立路由／元件與入口連結。出現 RPC 或頁面問題時可先撤入口或停用更新按鈕，保留正式地址與來源，不變更鏈上資產。
