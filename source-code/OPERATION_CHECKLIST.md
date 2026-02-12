# 木曜漾會員資訊頁面 - 源代碼操作規範

## 最高層級指令

在不影響 GitHub 網站運作的前提下，將所有源代碼、每次更新的哈希值、版本號、創建時間、更改歷史全部上傳到 GitHub 另一個分支。每次編輯網站都需要在此確認源代碼。

---

## 版本號管理規則

### 版本號格式
```
vX.Y-description
```

| 部分 | 說明 | 例子 |
|------|------|------|
| **X** | 主版本號 | 1, 2, 3... |
| **Y** | 次版本號 | 0, 1, 2... |
| **description** | 簡短描述 | menu-integrated, bug-fix |

### 版本號遞增規則

- **主版本號 (X)** 遞增：重大功能更新或架構改變
  - 例：v1.0 → v2.0（添加菜單組件）
- **次版本號 (Y)** 遞增：小功能更新或 Bug 修復
  - 例：v2.0 → v2.1（修復菜單樣式）
- **描述 (description)** 更新：簡短說明本次修改

### 當前版本
- **最新版本**：v2.0-menu-integrated
- **下一版本**：v2.1-[description]

---

## 每次修改的標準流程

### 第 1 步：確認源代碼版本

**自動檢查清單**（AI 自動執行，無需人工確認）：

```bash
# 1. 檢查 source-code-archive 分支上的最新版本
git log --oneline -1 source-code-archive

# 2. 驗證最新版本的元數據
cat source-code/VERSION_INDEX.md

# 3. 獲取最新版本的所有文件哈希值
sha256sum source-code/vX.Y-description/*
```

**預期結果**：
- ✅ 確認最新版本號
- ✅ 確認所有文件的 SHA256 哈希值
- ✅ 確認創建時間和修改歷史

### 第 2 步：準備修改

**修改源代碼**：
1. 從 GitHub source-code-archive 分支下載最新源代碼
2. 修改 Home.tsx、Menu.tsx 或其他文件
3. 保存修改

**計算新的哈希值**：
```bash
sha256sum [modified_files]
```

### 第 3 步：記錄修改

**創建新版本目錄**：
```
source-code/vX.Y-description/
├── Home.tsx
├── Menu.tsx
├── [other_files]
└── VERSION_METADATA.md
```

**VERSION_METADATA.md 應包含**：
```markdown
# 版本 vX.Y-description

## 版本信息
- 版本號：vX.Y-description
- 創建時間：YYYY-MM-DD HH:mm:ss GMT+8
- 基礎版本：vX.Y-previous
- 狀態：待編譯/已編譯/已部署

## 文件清單
| 文件名 | SHA256 | 大小 | 說明 |
|-------|--------|------|------|
| Home.tsx | `hash` | size | 說明 |
| Menu.tsx | `hash` | size | 說明 |

## 修改歷史
### 修改 1：[描述]
- 位置：[文件名] 第 X 行
- 修改前：[原代碼]
- 修改後：[新代碼]
- 目的：[修改目的]

## 下一步
1. 編譯：使用 `npm run build` 編譯 React 應用
2. 測試：在本地驗證功能
3. 部署：推送到 GitHub main 分支
4. 歸檔：更新 VERSION_INDEX.md
```

### 第 4 步：提交到 source-code-archive

```bash
# 1. 添加新版本目錄
git add source-code/vX.Y-description/

# 2. 更新版本索引
git add source-code/VERSION_INDEX.md

# 3. 提交
git commit -m "Add source code vX.Y-description: [簡短描述]"

# 4. 推送
git push origin source-code-archive
```

### 第 5 步：編譯和部署

```bash
# 1. 編譯 React 應用
npm run build

# 2. 推送編譯結果到 main 分支
git add index.html
git commit -m "Deploy vX.Y-description: [簡短描述]"
git push origin main
```

### 第 6 步：驗證部署

```bash
# 1. 驗證 GitHub Pages 是否更新
curl https://mokuyou-tw.github.io/mokuyou-memberinfo/ | grep -i "MENU"

# 2. 驗證 source-code-archive 分支是否包含源代碼
git ls-tree -r source-code-archive source-code/
```

---

## AI 自動化操作流程（無需人工確認）

### 每次修改前自動執行

```
1. 連接到 GitHub
2. 檢查 source-code-archive 分支的最新版本
3. 下載最新源代碼
4. 驗證所有文件的 SHA256 哈希值
5. 確認版本號和創建時間
6. 記錄當前版本信息到內部日誌
7. 開始修改
```

### 修改完成後自動執行

```
1. 計算修改後文件的 SHA256 哈希值
2. 生成新版本號（遞增規則）
3. 創建 VERSION_METADATA.md
4. 更新 VERSION_INDEX.md
5. 提交到 source-code-archive
6. 編譯 React 應用
7. 推送編譯結果到 main
8. 驗證部署
9. 記錄完成日誌
```

---

## 常見問題

### Q1：如何查看所有版本歷史？
```bash
cat source-code/VERSION_INDEX.md
```

### Q2：如何回溯到某個版本？
```bash
# 1. 查看版本列表
cat source-code/VERSION_INDEX.md

# 2. 下載特定版本
git show source-code-archive:source-code/vX.Y-description/Home.tsx
```

### Q3：如何驗證源代碼完整性？
```bash
# 1. 進入版本目錄
cd source-code/vX.Y-description/

# 2. 驗證哈希值
sha256sum -c VERSION_METADATA.md
```

### Q4：如果編譯失敗怎麼辦？
1. 檢查錯誤信息
2. 修復源代碼
3. 生成新版本號（vX.Y+1）
4. 重新提交到 source-code-archive
5. 重新編譯

---

## 重要提醒

- ✅ **每次修改都必須記錄到 source-code-archive**
- ✅ **每次修改都必須計算 SHA256 哈希值**
- ✅ **每次修改都必須遞增版本號**
- ✅ **每次修改都必須記錄修改時間**
- ✅ **每次修改都必須記錄修改歷史**
- ✅ **編譯失敗時不要推送到 main**
- ✅ **source-code-archive 分支是私密的，只有授權用戶可以訪問**

---

## 版本歷史

| 版本 | 日期 | 修改內容 |
|------|------|--------|
| v2.0-menu-integrated | 2026-02-12 | 添加菜單組件、改 Tab 名稱、插入菜單 |
| v1.0-github-base | 2026-02-12 | GitHub 基礎版本（菜單已插入但位置不對） |
