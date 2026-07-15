# Hema Sree Surapaneni — Portfolio

Static React site. No backend, no database — all content lives in `src/Portfolio.jsx` inside the `DATA` object at the top of the file.

## Run locally

```
npm install
npm run dev
```

## Update content

Edit the `DATA` object at the top of `src/Portfolio.jsx`, then redeploy.

## Deploy — Firebase Hosting (recommended, keeps your existing URL)

This reuses your existing Firebase project (`hema-portfolio-d87a4`), hosting only — no Firestore. Your live URL stays `https://hema-portfolio-d87a4.web.app`, so nothing else (resume, LinkedIn) needs to change.

```
npm install -g firebase-tools
firebase login
npm install
npm run build
firebase deploy --only hosting
```

## Deploy — GitHub Pages (alternative, new URL)

```
npm install
npm install -D gh-pages
```

Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`, and add `"homepage": "https://hema-sree-s.github.io/portfolio"` at the top level. Then:

```
npm run deploy
```

Your site will be live at `https://hema-sree-s.github.io/portfolio`.
