# EMVO 第二輪 — 有效範圍、原發現對照與補證要求 v1.1

日期：2026-10-07  
用途：第二次 Token Report 的局部有效需求與差異表；**不是已完成的第二輪報告，也不是新的發幣授權。**  
本檔不稱 v3.4，不覆寫 v3.3 ReviewFix1、第一次 Swarm 報告或其他已付款任務。

## 0. 證據種類與閱讀方式

- **[原報告]**：來源為檔案03。保留原 F-01...F-09、G-/I-編號與原判斷，不在原文中改字。
- **[Owner新決策]**：以檔案05記錄的直接人類指示為準：86/10/4、已指定錢包、Paid Mint收款不burn、Owner自由運用。檔案04保留為更早的原文。
- **[團隊測量]**：檔案05與evidence/、reproduction/提供可核對的新證據；不是外部Reviewer的獨立PASS。
- **[工程建議]**：本檔與R2 Brief提出的查核、修正及驗收方法。它們不是已部署功能，也不是已證明缺陷。
- **[公開文件]**：此次查到的官方靜態描述；需對照當次kind、policy及chain evidence，不能代替exact quote。

Reviewer可以不同意本檔的工程判斷，但必須給出相符的證據，不能把工程提案寫成Owner已批准新的Tokenomics。

## 1. 第一輪到底完成了什麼？【原報告】

R1標題是「v3.3 ReviewFix1 — 單次非部署規格審查報告」。§1列出讀取四份規格／Brief／活動補充與README，來源固定在`902075d1dfb772738a074f06f56f7aeea9240fd8`。

R1 §1.1記錄在約08:05 UTC取得public HTTP capabilities/policies/version；沒有source/runtime、RPC、fork、quote或Owner Paying Wallet。§14.5說明未做code測試與金融操作；只提供單一agent，未證明多位獨立Reviewer。

所以：保留這些來源與限制，不把R1的「OBSERVED_HTTP」升級成鏈上或合約審計證據；R1的數值也不能永久當成current policy。

## 2. 最新有效產品意向【Owner決策】

| 題目 | 本次有效方向 | 不能偷換成 |
|---|---|---|
| 名稱 | EmberEvo / EMVO / $EMVO | 自行改名或重發別的Token |
| 網路 | Ethereum Mainnet目標 | UI/API預設就切到其他鏈 |
| 發行 | IMD官方標準evm_project；Owner已選86%Pool／10%Swarm／4%錢包；其他官方條款需核對 | 靜默退回88/10/2、80/10/10或custom_token |
| Pair | EMVO/IMD首選，需明示核對 | 默默改ETH |
| 官方池費用 | 依有效政策；希望直接收IMD，仍待證據 | 因Genesis收EMVO就視同同意池費混合幣種 |
| 4%配額 | 不加vesting／鎖倉／用途限制，可出售 | 團隊零配額、永不賣、全部強制建世界 |
| Paid Genesis | EMVO付款到Owner明確確認的發幣Paying Wallet | burn、部分burn、之後必須burn、可贖回backing |
| Free／Remediation | 零EMVO成本；原資格／容量規則保留 | 任何人免費mint、管理員任意送新資格 |
| 金融權限 | Owner逐筆批准 | 把付款key、session spend、upgrade交給AI |

Genesis款、官方池費用、4%配額及Owner增資分別記錄；記帳不限制Owner自行運用。Paid Mint收EMVO，不是自動換到IMD，也不是與API admission費相同的`payTo`。

**已提供預定Paying Wallet：`0x1C651928150DADDDA9C2C040a9D4901d862f8eC4`，但尚未證明私鑰控制或實際Quote付款人。** 不能把官方launch wallet、Hook admin、部署者、API payTo、或先前Report付款人填成Owner的Mint recipient。

## 3. F-01...F-09逐項處理

以下「第二輪要求」為工程查核建議，不是第二輪已完成結論。

| ID | R1原有內容／出處 | 第二輪要求 | 初始狀態 |
|---|---|---|---|
| F-01 | §4/§4.1：true-burn無source，L HOLD；原報告允許Owner另行變更路徑。 | 依新決策把**burn必要條件**標SUPERSEDED_BY_OWNER_DECISION；另查標準付款相容性，不稱burn測試PASS。 | 原burn要求已取代；局部付款測量見05，真實EMVO／Final Genesis仍NOT_RUN |
| F-02 | §4：UI 88/10/2與policy類80/10/10欄位尚無語意映射。 | 找到對此kind生效的default／override／分配邏輯，核對分母和recipient；不要直接說官方改成80/10/10。 | OPEN_EVIDENCE_GAP |
| F-03 | §4/§6：owners同址的HTTP觀察，且文字推定非Owner。 | 分離收款權與管理權；Owner地址缺失不能判不相等；逐合約查實際可執行能力與可變性。 | OPEN_EVIDENCE_GAP＋原推論需核對 |
| F-04 | §5：IMD-only未確立，accrual／distribution全未知。 | 買、賣各追蹤fee basis、asset、帳本、distribution、conversion、recipient與gas。保留Owner待選。 | OPEN_EVIDENCE_GAP |
| F-05 | §4：標準launch kind未選；no custom Hook易混淆。 | 根據現行schema／capabilities找相符標準kind；官方Hook不等於Owner批准自寫Hook。 | OPEN_EVIDENCE_GAP |
| F-06 | §4：v19→v29 policy變動；要求pin version。 | 找到當次pin／expiry／拒絕規則，保留舊值為歷史。不因無關catalog更新就斷言exact quote被改。 | OPEN_EVIDENCE_GAP |
| F-07 | §4：defaultChainId觀察為Sepolia；建議混入本次非部署flags。 | 清楚分REPORT的job.open與將來TOKEN的chainId/pairWith；不把launch fields當作Report執行參數。 | 文件範圍需修正；live預設需重核 |
| F-08 | §4：費用、spender、expiry、gas payer未知。 | 查實際價格／付款資產／gas歸屬；policy ceiling不是已付金額，no-source/quote不捏造完成。 | OPEN_EVIDENCE_GAP |
| F-09 | §4：contributorLockSeconds可能指Swarm鎖定。 | 查欄位實際適用範圍；2%不加lockup不等於全體所有配額都無鎖。 | 待語意證據；文案可先區分 |

### 3.1 不burn帶來什麼改變？【Owner新決策＋工程推論】

移除的是：「Token模板必須提供能降低totalSupply的burn介面，否則此設計不能往後做Genesis」這個必要條件。

沒有移除的是：標準轉帳相容性、付款與NFT同筆原子完成、Token/Hook/LP權限、官方分配與fee實收、exact quote及Owner批准。

不得出現：「Owner接受不burn，所以全部L風險已解除」。R1其他缺證仍需處理。

### 3.2 對『plain transfers』的用詞【公開標準＋工程判斷】

R1 §2／F-01明確承認無source，卻推測plain transfers高度可能不支援burn。ERC-20標準只定義基礎介面；OpenZeppelin亦有可與一般轉帳並存的burn擴充。此處應記為原報告推論，而不是技術結論。現行需求不再需要burn，因此不浪費主要預算追查非必要能力。

此修正也不證明IMD模板一定有burn；本包不作相反斷言。

## 4. Genesis付款驗收計畫【最終合約尚未實作；局部原型測量見05】

```text
MINT_PRICE_EMVO：仍待定，開放前依原規則Freeze
cost = quantity × frozen_price
確認Token、收款人、Paid容量及開放狀態
transferFrom(user, confirmed_payment_recipient, cost)
鑄造指定quantity的Genesis
同一筆交易全部完成；失敗整筆回滾
```

不是部署程式碼。Checks-Effects-Interactions／nonReentrant／safeMint callback的實際順序與實作仍需測試。

一般付款人與收款人不同時，驗證這筆成本的精確轉移；付款人正好等於收款人的情況必須另外定義，不能盲目套用balance delta。只觀察同區塊totalSupply也不能證明這筆付款是burn或不是burn；應以實際呼叫、events與state diff歸因。

| 測試類別 | 要確認 | 狀態 |
|---|---|---|
| ERC-20模板 | approve／allowance／transferFrom、return value、合同收款與精確金額 | NOT_RUN |
| 原子性 | Token失敗、receiver callback失敗不留部分付款或Mint | NOT_RUN |
| 重入與容量 | 不重領、不超P、不侵占F/R、歷史counter不因NFT burn歸零 | NOT_RUN |
| 地址與權限 | 明確recipient、不被訪客／產物改向；是否可變另決 | NOT_RUN |
| 帳務 | Mint付款不是burn／backing；與官方池費用分離 | NOT_RUN |
| Free／Remediation | 零EMVO；正常與補救共用claimed | NOT_RUN |

mock harness的成功僅能證明該mock測試，不能當IMD模板或未來完整Genesis合約已審完。

## 5. 原報告次要建議：保留範圍但不擴張本輪

### G-1／G-2／G-3【原報告§7.2】

- chain、IMD collection與proof domain綁定值得明確寫入最終偽碼／合約；細節Gate G。
- **G-2須分清『原資格規則／觀察窗口』和『可能漏列的輸出名單』。** 補救應可處理依原規則能證明符合，但被原名單漏列的tokenId；不能要求它一定已出現在錯誤名單中才准補救。
- 原snapshot/root生成／批准者、公開證據與events仍需規格與測試；不自行增加任意資格、timelock數字或無限admin mint。
- 累計minted計數與NFT當前totalSupply分開，原範圍保留。

### I-G／D-T【原報告§8／§10】

留在研究／網站工作，不再做一次完整E1建站審查。可記錄必要交接項，但不能把前端版型、Pet或研究服務未完成當成Token必然不能發行。

I-G4：Reviewer應回讀歷史spec §71.2／71.3，分開「文字已有UNDECLARED不可發布」與「尚無實作validator」；不要把不同問題合成同一個漏洞。

I-G3：service account＋period只是候選；同一NFT跨帳號仍可能重領，應先定資格／額度歸屬再測，不能在未決產品中硬加配額。

D-T11：交易目標地址／RPC等改動必須被金融／權限審查覆蓋，不能當一般美術JSON。此輪只記交接，不改Website。

### H【原報告§12】

主辦規則／資格仍保持未核准的歷史狀態。這次不重新搜尋獎金、設計Registry或為了參賽加合約；H = NOT_REVIEWED_THIS_ROUND，不冒稱已合格。

## 6. 第二輪最重要的可交付成果

1. 原F-01...F-09每項的新狀態與依據，不漏編號、不把舊報告洗成GO。
2. 本次標準Launch所選kind／policy與86/10/4實際計算方法（88/10/2保留為歷史UI比較）；找不到就列精確缺件。
3. 各合約控制權與recipient的對照，不用單一owner欄位概括全系統。
4. 買／賣／distribution的幣種證據；IMD-only結論需方法，不憑Pair名稱。
5. Genesis付款相容性計畫／實測證據，清楚區分mock、template、instance與未來Gate G。
6. 一份不執行的Q參數清單，以及Owner還要提供哪些公開資料。

## 7. 給Owner的提交說明

此次包包含R1原文及最新決策，所以需要先把它放到Reviewer能讀到的地方；與從空白工作區建Website不同，不能只貼檔名。

本次候選包含五份必讀MD、專用manifest、README及evidence/reproduction資料夾；以本地操作說明的清單為準。之後由Owner授權公開推送時才放到`tungweb3/emvo-review`。檔名均帶R2或EMVO_R2，不覆寫原`INPUT_MANIFEST.json`、README或舊報告。新任務讀`EMVO_R2_INPUT_MANIFEST.json`指定的五份MD並核對evidence/reproduction清單。新增commit後使用這次R2複製頁，不沿用902075d1或0dc9eec7。

這是PUBLIC去敏規格；上傳前確認願意公開。不能加入request bearer、付款簽名、私鑰、密碼、帳戶憑證。Report可以公开保存，不表示可寫入你的input repo。

本次已提供Owner選的公開地址。地址正確不等於控制權或Quote已確認，L仍未授權；不可另猜API或Report付款人。不需要提供私鑰或額外授權。

## 8. 來源與本次製作邊界

### 本包內來源

- 原報告03：原檔 `EmberEvo_Swarm_Report_原文_2026-10-07.md`；原文完整保留、僅副本檔名ASCII化。
- 決策04：原檔 `EMVO_Genesis_PaidMint_PayingWallet_Decision_Addendum_2026-10-07.md`；原文完整保留。
- 兩者SHA-256及bytes見`EMVO_R2_INPUT_MANIFEST.json`。

### 可復核的外部來源

- 歷史manifest：https://github.com/tungweb3/emvo-review/blob/902075d1dfb772738a074f06f56f7aeea9240fd8/INPUT_MANIFEST.json
- 歷史spec：https://github.com/tungweb3/emvo-review/blob/902075d1dfb772738a074f06f56f7aeea9240fd8/IMD_Ember_EmberEvo_v3.3_Crypto_Research_Genesis_Burn_2026-10-07.md
- IMD Docs：https://imd.fun/docs/
- Launch UI：https://explorer.imd.fun/launch
- ERC-20：https://eips.ethereum.org/EIPS/eip-20
- OpenZeppelin ERC20：https://docs.openzeppelin.com/contracts/5.x/api/token/erc20

本次準備已讀R1全文、最新Owner補充、官方靜態Docs/UI及ERC-20參考，並核對歷史GitHub manifest。沒有重讀歷史四份母文件的每一行，未對來源全部重算鏈上或合約證據。對原報告的工程修正需由R2針對所引用原段再核對。

原GPT v1.0直接讀取capabilities/policies未成功；後續本地團隊已取證，見05。v29屬hook，不因數字最大就套成標準evm_project。沒有查最新GitHub main、沒有上傳、沒有Check/Quote／付款／Swarm執行／部署。複製頁只協助組成文字，不能證明遠端檔案已傳入。
