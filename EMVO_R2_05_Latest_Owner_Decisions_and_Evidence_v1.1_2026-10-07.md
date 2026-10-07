# EMVO R2：最新直接 Owner 決策與新增證據 v1.1

日期：2026-10-07，Asia/Taipei。這是準備第二輪 Report 的有效差異，不是第二輪結論、完整母規格升版或金融批准。

## 1. 直接人類決策

| 訊息 | 現行有效要求 |
|---|---|
| 發幣錢包 | `0x1C651928150DADDDA9C2C040a9D4901d862f8eC4` |
| 那就不要burn，就打到我發幣錢包裡 | Paid Genesis 精確 EMVO 付款到上述錢包；不 required burn／permanent consume／automatic later burn |
| 我還是想要自己運用這筆資金 | 可持有、轉帳、出售、換成IMD或自行選用途；不強制世界預算、Safe或鎖倉；分帳僅記錄來源／幣種 |
| 那我想留4%給自己的錢包 | 首發總供應分配：86% Pool、10% Swarm、4%上述錢包；取代此前Follow Official的88/10/2配額選擇 |

預定Token EmberEvo／EMVO，Ethereum chainId 1，EMVO/IMD首選，保留官方標準evm_project研究路線。新配額必須明列poolBps=8600及remainderTo，不能省略後得到API預設80%，也不能因UI預設88%而靜默更改。以目前標準1B參考，入池860M／Swarm100M／Owner40M。其他有效官方條款仍需核對；遇不符則回報，不自動再分配。

Free／有效Remediation保持零EMVO；qualification、MINT_PRICE_EMVO、F/R/P、MAX_SUPPLY及self-payment／recipient-change policy仍TBD。AI無金融簽章或自動支出權，無新staking／yield／backing／贖回／自訂v4 hook。格式檢查不等於wallet控制驗證。

檔案04的「尚未提供wallet」由直接訊息取代，原文不改。檔案03的true-burn前提是SUPERSEDED_BY_OWNER_DECISION，不是技術PASS。v3.3 ReviewFix1保持R1歷史基準；本地工作母版仍是v3.2 Rev.2加上述直接覆蓋，不將v3.3整份自動採定。

## 2. 證據與可重現素材

以`EMVO_R2_EVIDENCE_MANIFEST.json`核對補充檔案與hash。raw HTTP資料未改字；公開化測試receipt移除本機絕對路徑，保留compiler／package／source hashes、方法、時間與限制，並記原receipt hash與公開副本hash。

| 新資料 | 真正支持 | 限制／仍缺 |
|---|---|---|
| 86/10/4 免費Check HTTP200、judged=true、blockers=[]、suggestions=[] | 當次evm_project、chain1、IMD、8600與指定recipient需求可接受；facts明列86% | 沒有Quote、實際EMVO、allocation events或code audit；access/dependencies仍有unknown/assumed |
| capabilities／policies／version／OpenAPI公開GET | 可用chain/kind、已公開policy欄位及付款介面 | global最新policy不等於此kind；不是Factory／LP完整source審查 |
| launch884：QOBS，source commit53c8e396dfaf7add0d1d90dd2ea19c52206feea3 | 官方standard evm_project樣本、source／ABI、runtime provenance、同Factory部署觀察 | QOBS不是EMVO；sample的88%不是本案86%；未独立重編solc0.8.26/Cancun |
| 實際launch884 runtime的本機付款重播：4 checks PASS | storage先驗證；缺allowance回滾；精確EMVO式付款到本案地址、finite allowance、NFT與供應不變 | 複製runtime＋synthetic storage，Ganache Shanghai，不是主網fork、真實EMVO或Final Genesis |
| 新付款fixture：10 TAP PASS（9子項＋父測試） | 不足allowance／balance、假成功、fee-on-transfer、batch callback回滾、重入、max allowance、no-return | synthetic fixture、成本與容量；正式Free／Remediation／F/R/P沒實作 |
| launch737同Factory fee-claim原始12logs及重新Transfer解碼 | 此custom_token實例實收IMD＋ZTO，requester各80%／network餘額20% | 不證明未來EMVO或每個kind；不能只靠未驗證event欄位名稱，不能自動算Owner接受混合幣種 |
| Factory／LaunchFees只讀getter與bytecode | sample部署呼叫Factory ff03…7120；fees→12c9…863；feeowner/treasury047f…54b7；poolFee12500 | Factory owner()revert不是無權限證明；setter、LP withdraw／migration與全面roles未核實 |

鏈上只讀主要固定在block26139425；各raw receipt及RPC資料保留原時間。不能把「有block number」當成每列都有block hash；缺hash或source的欄位仍明示缺口。費用樣本transaction `0xd751270d5e5a49352c5151065f41e0d29d37de40b73f5c089f9002aa8c4e7259`。

## 3. 測量重現

`reproduction/`僅含必要test probes／fixtures／callback helper／compiler/runtime loader及付款測試，不含正式發幣合約、網站、3D或音樂。旧burn/consume probe与sink只是callback/helper原有source依賴，並非重新採用burn或部署候選。測試constructor只允許31337／Sepolia。

所需Node24、solc0.8.30、ethers6.15、Ganache7.9.2、OpenZeppelin5.4與可讀的exact dependency lock；沒有自動下載套件／軟體。可在隔離測試目錄提供已核對套件，或設定EMBER_TEST_RUNTIME_ROOT到相同版本的既有dependency root。禁止使用有私鑰或生產環境憑證的目錄。

命令：在reproduction目錄執行 `node --test --test-concurrency=1 tests/treasury-payment.test.mjs`；另執行 `node evidence/local-payment-runtime-test.mjs`。兩者只使用本機Ganache，不連錢包、不廣播。供Reviewer核對source與重現，不能拿TEAM提供receipt冒充Reviewer自己測量。

現有receipt保留Node24 µWS native缺失、JS fallback、Shanghai限制。路徑移除不是重跑證據；新獨立run須另列命令與結果。

## 4. 本次必須判定的差異

- F-01：burn前提由人類取代；付款已有局部證據，Final Genesis不據此PASS。
- F-02：Owner改為86/10/4；精確輸入與免費Check已有證據，部署後allocation仍NOT_RUN。
- F-03：getter與sample source補足部分角色證據，不把policy owners當全部合約權限；全面Factory／fees／LP仍缺。
- F-04：一筆比較實例已支持雙幣種收款，需核對可比性與未來standard路線；Owner未另採定混合官方池費用。Mint收EMVO及自由運用與此不同。
- F-05／06／07：標準kind、explicit chain/pair與新allocation request可核對；exact Quote的版本／pinning／expiry仍未提供。
- F-08／09：本次沒有付費或公開transaction；額外gas責任、Swarm鎖定語義仍需具體證据。

R/Q/L/V/G分開下結論；L未授權，V無EMVO實例，G無最終合約。D/I/H不是本輪任務。Reviewer不能因本案已有地址與付款測量，再泛稱「完全無wallet／無source，無法研究任何部分」。

## 5. 操作狀態

Owner已於2026-10-07直接授權把本包上傳公開GitHub，並產生可複製的Report文字。此文件描述送審payload；固定commit及遠端逐檔核驗結果由發布後的操作說明提供，不能從本段推定已發布成功。未送R2 Report、未建立Quote、未付款、未發幣或部署。原Downloads文件／R1 public commit／網站／legacy genesis-mint未修改。公開包沒有密碼、bearer、私鑰、簽名或錢包交易。

## 6. 新包的最小source closure重跑

本地團隊在本候選reproduction目錄重新執行兩條命令：fixture為10 TAP PASS／0 FAIL；sample runtime為4 checks PASS。此次完整輸出另記為repacked-fixture.receipt.json與repacked-runtime.public-receipt.json，不冒充外部Swarm Reviewer執行。兩次執行均無網路廣播。

這個候選只攜帶四份必要Solidity source及工具／測試，比原私有workbench的全部contracts更小；編譯source集合／metadata變動可能使local probe artifact hash不同。各run保留自己的artifact hash，不宣稱和原整個workbench重編逐byte相同。重播的官方Token runtime SHA-256仍固定一致；這不是重編官方solc0.8.26/Cancun source。
