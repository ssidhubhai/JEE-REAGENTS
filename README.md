# JEE 2027 Organic Chemistry — Handwritten Master Notebook

A comprehensive, handwritten-style organic chemistry revision notebook built with React 19, TypeScript, Vite, and Tailwind CSS. Features drawn skeletal bond-line mechanisms, Hinglish explanations, self-quiz modes, and full-screen card study mode with keyboard arrow navigation.

---

## 🚀 Deploy to Vercel

This repository is pre-configured for **1-click seamless deployment on Vercel** with zero extra setup needed.

### Method 1: Via Vercel Dashboard (Recommended)
1. Push this project to your GitHub / GitLab / Bitbucket account.
2. Go to [vercel.com](https://vercel.com) and click **"Add New..." → "Project"**.
3. Select your repository and click **Import**.
4. The project settings are automatically detected via `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your app will be live with a free `.vercel.app` URL and automatic HTTPS!

### Method 2: Via Vercel CLI
Run the following in your terminal:
```bash
# 1. Install or run Vercel CLI
npx vercel

# 2. Deploy to production
npx vercel --prod
```

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Configuration Files for Vercel
- **`vercel.json`**: Configures Vite framework detection, output directory (`dist`), SPA rewrites for deep-link safety, and long-term asset caching.
- **`vite.config.ts`**: Configured with `base: '/'` and modern path resolution.
- **`.gitignore`**: Excludes `node_modules`, `dist`, `.vercel`, and local environment variables.
