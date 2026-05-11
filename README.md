# TOCFL Daily 手機網頁 MVP

這是一個純靜態的 **TOCFL Daily** 手機版網頁 MVP，主題是給在台灣生活、學習、打工並準備 TOCFL A1-B2 的越南學習者使用的繁體中文單字記憶 App 原型。

## 目前內容

- 首頁：每日學習任務、今日進度、考試倒數、連續學習天數、今日 6 個推薦單字
- 快速略讀：圖片、等級與主題、繁體中文單字、拼音、越南文意思、雙語例句
- 閃卡：點擊翻面、三段記憶回饋、進度條
- 小考：3 題選擇題、答題狀態、結果頁
- 進度：目標等級、考試日期、剩餘天數、學習數據與簡單設定

## 開發者語言切換

首頁右上角有 `中文 / Tiếng Việt` 按鈕，可在越南文 UI 與中文 UI 之間切換，方便開發與展示。

這只是 developer-only language toggle，正式上架 Google Play 時可移除；正式版預設應保留越南文 UI。

## 如何打開

直接用瀏覽器打開 `index.html` 即可。

不需要 npm install、不需要後端、不需要登入、不需要資料庫，也沒有 build step。

因為專案只使用 HTML、CSS、JavaScript，所以可以直接放到 GitHub Pages。

## 圖片

單字圖片路徑已保留在 `script.js`：

- `images/a1_001.webp`
- `images/a1_002.webp`
- `images/a2_001.webp`
- `images/a2_002.webp`
- `images/b1_001.webp`
- `images/b1_002.webp`

如果圖片不存在，畫面會顯示 `AI image placeholder`。
