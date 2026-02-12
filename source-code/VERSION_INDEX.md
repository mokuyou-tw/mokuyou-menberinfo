# 木曜漾會員資訊頁面 - 源代碼版本索引

此分支存儲所有源代碼版本、哈希值、修改歷史和元數據。

## 版本列表

### v2.0-menu-integrated (2026-02-12 05:42 GMT+8)
- **狀態**: 最新版本
- **基礎**: v1.0-github-base (commit 61f5ea1)
- **修改**: 添加菜單組件、改 Tab 名稱、插入菜單
- **文件**:
  - Home.tsx: `32528a4c76bccc59bc2cc0202769fb460dbfcb531541e7a3933fc07c9587ba58`
  - Menu.tsx: `7d9a798981019df31ebc09ea68f602ac336a746e5f8b8dfafca704e4d387e5df`
- **詳情**: 見 `v2.0-menu-integrated/VERSION_METADATA.md`

## 分支說明

- **main**: 公開的網站代碼（編譯後的 index.html）
- **source-code-archive**: 私密分支，存儲所有源代碼版本
  - 只有授權用戶可以訪問
  - 包含完整的修改歷史和元數據
  - 用於版本控制和回溯

## 訪問權限

此分支設為私密，只有以下用戶可以訪問：
- 倉庫所有者
- 授權的協作者

## 使用說明

每次更新源代碼時：
1. 在 `source-code/vX.X-description/` 目錄下創建新版本
2. 包含所有源代碼文件
3. 添加 `VERSION_METADATA.md` 記錄修改詳情
4. 更新此索引文件
5. 提交到 source-code-archive 分支

