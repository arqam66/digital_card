# Slick Portfolio with Svelte

A **Vercel-like** style portfolio template for developers.

## 🚀 Getting Started

To use this template, follow these steps:

1. **Update your information:** Modify the files in `src/lib/data` with your details.
2. **Customize styles:** Edit `src/lib/index.scss` to match your design preferences.
3. **Change favicon:** Replace `static/favicon.ico` to update the tab icon.

## 🔧 Deployment Guide

### Deploy to GitHub Pages

Before deploying, ensure you complete these steps:

1. **Modify `svelte.config.js`:** Update the `base` parameter.
2. **Adjust GitHub Actions:** Change the target branch in `deploy.yml` (default: `master`).
3. **Enable GitHub Pages:**
   - **Actions Permissions:**
     - Go to `Settings` → `Actions` → `General`
     - Under `Actions permissions`, select **Allow all actions and reusable workflows**
   - **Pages Setup:**
     - Navigate to `Settings` → `Pages`
     - Set **Source** to `Deploy from a branch`
     - Select **gh-pages** as the branch and `/ (root)`, then click Save.

⚠ **If workflows don't run automatically**, try pushing another commit (even an empty one). If issues persist, create an issue and provide your repo link.

## ❗ Known Issues

- **Node.js Compatibility:**
  - Svelte no longer supports **Node.js 14**. Please use a newer version.

---

📌 Feel free to **fork**, **customize**, and **enhance** this project as needed!
