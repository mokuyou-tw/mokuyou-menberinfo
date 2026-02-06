# 木曜漾 mokuyou - 品牌完整調查報告

完整的靜態HTML網站，包含品牌特色、會員資訊、優惠方案、真實評價和招牌特色等內容。

## 📁 檔案結構

```
.
├── index.html              # 主要HTML檔案
├── assets/                 # CSS和JavaScript資源
│   ├── index-*.css        # 樣式檔案
│   └── index-*.js         # 應用程式檔案
└── __manus__/             # 調試工具（可選）
```

## 🚀 部署方式

### 方式1：直接上傳到GitHub Pages
1. 將所有檔案上傳到GitHub倉庫
2. 在Settings → Pages中選擇部署來源
3. 網站將自動發佈

### 方式2：上傳到任何靜態主機
- Netlify、Vercel、AWS S3等任何靜態主機都支援
- 只需上傳所有檔案即可

### 方式3：本地測試
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx http-server
```

然後訪問 `http://localhost:8000`

## 📝 內容特色

- ✅ 品牌介紹與特色
- ✅ 會員等級與權益
- ✅ 折扣券方案與點數兌換
- ✅ 真實評價展示（Google Map、foodpanda、Uber Eats）
- ✅ 招牌產品展示
- ✅ 響應式設計（支援手機、平板、桌面）

## 🎨 技術棧

- React 19
- Tailwind CSS 4
- shadcn/ui 元件庫
- Framer Motion 動畫
- Wouter 路由

## 📱 響應式設計

網站完全支援所有裝置：
- 📱 手機 (320px+)
- 📱 平板 (768px+)
- 🖥️ 桌面 (1024px+)

## 🔗 重要連結

- 📍 Google Maps：https://www.google.com/search?q=%E6%9C%A8%E6%9B%9C%E6%BC%BE
- 📱 LINE官方帳號：https://lin.ee/eefIbqz
- 📸 Instagram：https://www.instagram.com/mokuyou_tw/
- 🍕 foodpanda：搜尋「木曜漾」
- 🚗 Uber Eats：搜尋「木曜漾mokuyou」

## 📞 店家資訊

- 📍 地址：台中市西屯區文華路1-8號（逢甲商圈）
- 📞 電話：04-2452-3999

## 📄 授權

MIT License

---

**最後更新：2026年2月5日**
