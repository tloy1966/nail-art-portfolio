# Lumiere Nail Atelier 美甲作品展示網站

一個以 React、Vite 與 TypeScript 製作的純靜態美甲師作品集網站。網站包含作品分類、圖片 Lightbox、精選設計、服務價格、美甲師介紹、預約流程、顧客評價、Instagram 展示與聯絡 CTA，可直接部署至 GitHub Pages。

網站內容集中在 `src/data/siteConfig.ts`，圖片集中在 `public/images/`。日常更新不需要修改 React 元件。

## 技術架構

- React 19（目前穩定版本）
- Vite 8
- TypeScript 6，strict mode
- 結構化純 CSS、CSS Variables、原生 React Hooks
- Lucide React icons
- ESLint 10
- GitHub Actions + GitHub Pages

字體使用 Google Fonts 的 Cormorant Garamond、Noto Serif TC 與 Noto Sans TC，各字體只載入必要字重。CSS 另提供 Times New Roman、PMingLiU、Microsoft JhengHei 與 sans-serif fallback。

## 系統需求

- Node.js 22（GitHub Actions 使用相同版本）
- npm 10 或更新版本
- Git

## 安裝與本機開發

```bash
npm install
npm run dev
```

開啟終端顯示的本機網址。Vite 預設通常為 `http://localhost:5173/nail-art-portfolio/`。

## Production Build

```bash
npm run lint
npm run build
```

成品會輸出至 `dist/`。本機預覽 build 結果：

```bash
npm run preview
```

請使用終端提供的完整網址，包含 `/nail-art-portfolio/` base path。

## 專案結構

```text
├── .github/workflows/deploy.yml   # GitHub Pages 自動部署
├── public/images/                 # 可直接替換的網站圖片
├── src/components/common/        # 按鈕、圖片 fallback、SEO 等
├── src/components/layout/        # Header、手機選單、Footer
├── src/components/lightbox/      # 作品大圖預覽
├── src/components/sections/      # 各首頁內容區塊
├── src/data/siteConfig.ts        # 全站可維護內容
├── src/hooks/                     # 鍵盤、捲動與導覽 hooks
├── src/styles/                    # Design tokens、動畫、RWD
├── src/types/site.ts              # 完整資料型別
├── src/utils/getAssetPath.ts      # GitHub Pages 圖片路徑處理
└── vite.config.ts                 # Vite base path
```

## 修改網站內容

所有品牌、文字、作品、服務、價格、社群連結與 SEO 資料都在 `src/data/siteConfig.ts`。

### 修改品牌名稱

```ts
site: {
  name: '新的品牌名稱',
  englishName: 'New English Name',
  logoText: 'New Logo',
}
```

導覽、Hero、About、預約注意事項、Footer 簡介等文字，都可直接修改對應欄位的引號內內容。不要刪除逗號、引號或大括號。

### 修改 Hero 圖片

方法一：用新檔案覆蓋 `public/images/hero/hero-main.svg`，檔名維持相同。

方法二：放入新圖片後修改設定：

```ts
hero: {
  image: 'images/hero/new-hero.jpg',
}
```

建議 Hero 圖片尺寸為 1200 × 1500 px，直式構圖。JPG、PNG、WebP、AVIF 與 SVG 都可使用。

### 替換作品圖片

1. 將新圖片放進 `public/images/portfolio/`。
2. 使用相同檔名覆蓋既有 placeholder；或修改作品的 `image` 路徑。
3. 路徑一律從 `images/` 開始，不要加入 repository 名稱。
4. 圖片檔名大小寫必須與設定完全一致。

### 新增作品

在 `portfolio.items` 陣列中加入：

```ts
{
  id: 'nail-013',
  title: '新的作品',
  category: '日系美甲',
  description: '作品介紹',
  image: 'images/portfolio/nail-013.jpg',
  alt: '新的日系美甲作品',
  tags: ['日系', '裸粉'],
  featured: false,
  aspectRatio: 'portrait',
}
```

`aspectRatio` 可使用 `portrait`、`landscape`、`square` 或 `tall`。`id` 不可與既有作品重複。

### 刪除作品

在 `portfolio.items` 中刪除該作品完整物件（從 `{` 到配對的 `},`）。圖片可一併從 `public/images/portfolio/` 刪除。

### 新增分類

1. 在 `portfolio.categories` 加入分類名稱，例如 `'極簡美甲'`。
2. 將作品的 `category` 設為完全相同的文字。
3. 保留 `'全部'`，它是顯示所有作品的篩選項目。

### 修改服務與價格

在 `services` 陣列修改 `title`、`description`、`price`、`duration` 與 `note`。可用 icon 名稱定義在 `src/types/site.ts` 的 `IconName` 型別中。價格說明位於 `servicesNote`。

### 修改 LINE、Instagram、Facebook 與 Email

修改 `contact`，並同步修改 `socialLinks`：

```ts
contact: {
  lineUrl: 'https://line.me/ti/p/YOUR_LINE_ID',
  instagramUrl: 'https://www.instagram.com/YOUR_ACCOUNT',
  facebookUrl: 'https://www.facebook.com/YOUR_PAGE',
  email: 'hello@example.com',
}
```

專案預設使用可辨識的 `REPLACE_ME` placeholder。未設定前連結仍可安全開啟，但正式上線前應換成真實帳號。Email 按鈕會自動使用 `mailto:`。

## 圖片路徑與 GitHub Pages

設定檔只儲存 `images/...` 相對路徑。所有 React 圖片經由 `src/utils/getAssetPath.ts` 加上 `import.meta.env.BASE_URL`，因此部署在 Project Pages 子路徑時不會 404。

不要在 `siteConfig.ts` 寫入 `/nail-art-portfolio/images/...`，也不要寫入 repository 名稱。

## 修改 Repository 名稱與 Vite Base Path

GitHub Project Pages 的網址格式為 `https://username.github.io/repository-name/`。將 `vite.config.ts` 改成：

```ts
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/',
})
```

目前預設為：

```ts
base: '/nail-art-portfolio/'
```

若部署至 `username.github.io` repository 或自訂網域，改為：

```ts
base: '/'
```

`index.html` 的 favicon 與 OG placeholder 使用 `%BASE_URL%`，會跟著 Vite base 自動更新。另請在 `siteConfig.ts` 修改 `seo.canonicalUrl` 為正式網址。

## GitHub Actions 部署

工作流程位於 `.github/workflows/deploy.yml`，推送到 `main` 後會自動：

1. Checkout repository
2. 安裝 Node.js 22
3. 執行 `npm ci`
4. 執行 `npm run build`
5. 上傳 `dist/` Pages artifact
6. 部署到 GitHub Pages

### 啟用 GitHub Pages

1. 將專案推送至 GitHub，預設分支應為 `main`。
2. 進入 repository 的 **Settings → Pages**。
3. 在 **Build and deployment → Source** 選擇 **GitHub Actions**。
4. 進入 **Actions** 查看 `Deploy to GitHub Pages`。
5. 首次部署完成後，網址會顯示在 workflow 的 Deploy job 與 Settings → Pages。

也可以在 Actions 頁面用 **Run workflow** 手動部署。

## 自訂網域

1. 在 **Settings → Pages → Custom domain** 輸入網域。
2. 依 GitHub 指示設定 DNS：頂級網域通常使用 A/AAAA 記錄，子網域通常使用 CNAME 指向 `username.github.io`。
3. 將 `vite.config.ts` 的 `base` 改為 `'/'`。
4. 將 `siteConfig.ts` 的 `seo.canonicalUrl` 改為自訂網域完整網址。
5. 等 DNS 生效後啟用 **Enforce HTTPS**。

若要把 CNAME 納入版本控制，可在 `public/CNAME` 放入單一網域名稱；Vite build 時會複製到 `dist/`。

## SEO 與字體

基礎 SEO 標籤位於 `index.html`，React 啟動後 `Seo.tsx` 會使用 `siteConfig.seo` 更新 title、description、Open Graph、Twitter 與 canonical。正式上線前請修改：

- `seo.title`
- `seo.description`
- `seo.canonicalUrl`
- `seo.ogImage`
- `index.html` 中的靜態 SEO fallback 內容

若不想使用 Google Fonts，可移除 `index.html` 的 Google Fonts links；系統 fallback 仍可正常顯示。

## 常見問題與排錯

### GitHub Pages 顯示空白頁面

確認 `vite.config.ts` 的 `base` 與 repository 名稱完全相同，包含開頭與結尾的 `/`。再到 Actions 確認 build 與 deploy jobs 都成功。

### JavaScript 或 CSS 404

通常是 Vite base path 錯誤。Project Pages 使用 `'/repository-name/'`；自訂網域或 `username.github.io` 使用 `'/'`。修改後重新 push 觸發部署。

### 圖片在本機正常但部署後 404

確認元件使用 `ImageWithFallback`，設定路徑為 `images/...`，且未寫死 `/images/...` 或 repository 名稱。檢查檔名大小寫與副檔名。

### Vite base path 設定錯誤

本機執行 `npm run build` 與 `npm run preview`，使用 preview 顯示的完整子路徑測試。檢查 build 後 `dist/index.html` 的 `/assets/` 前方是否包含正確 base。

### GitHub Actions 沒有 Pages 權限

workflow 已包含 `pages: write` 與 `id-token: write`。若組織政策阻擋，請由 repository 或組織管理員在 **Settings → Actions → General → Workflow permissions** 檢查權限。

### Repository Settings 尚未選擇 GitHub Actions

前往 **Settings → Pages → Build and deployment → Source**，選擇 **GitHub Actions**，不要選 Deploy from a branch。

### Linux 找不到圖片

GitHub Actions 使用 Linux，檔名大小寫敏感。`Nail-001.jpg` 與 `nail-001.jpg` 是不同檔案。請讓 `siteConfig.ts` 路徑與實際檔名完全一致。

### `npm ci` 因 lock file 不一致失敗

在本機執行：

```bash
npm install
npm run lint
npm run build
```

確認 `package.json` 與 `package-lock.json` 一起 commit。不要手動編輯 lock file。

## 上線前檢查

- 替換 LINE、Instagram、Facebook 與 Email placeholder
- 替換作品、Hero、美甲師與 OG placeholder 圖片
- 將示範顧客評價換成已取得同意的真實內容
- 更新 canonical URL 與靜態 SEO fallback
- 在手機與桌面實機測試所有 CTA
- 執行 `npm run lint` 與 `npm run build`

## 可用指令

| 指令 | 用途 |
| --- | --- |
| `npm run dev` | 啟動 Vite 開發伺服器 |
| `npm run lint` | 執行 ESLint |
| `npm run build` | TypeScript 檢查並產生 production build |
| `npm run preview` | 本機預覽 `dist/` |