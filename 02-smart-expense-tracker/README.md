# Ledger — Smart Expense Tracker

A responsive, local-first personal finance dashboard with transaction management, charts, category budgets and CSV export.

## Features
- Create, edit and delete income/expense transactions
- Search, type filter, category filter and month selector
- Monthly balance, income, expense and savings-rate summary
- Chart.js daily cash-flow line chart and category doughnut chart
- Category-based monthly budgets with progress indicators
- CSV export
- LocalStorage persistence and helpful empty states
- Responsive sidebar and mobile layout

## Technologies
HTML5 · CSS3 · Vanilla JavaScript · LocalStorage · Chart.js 4 · Font Awesome

## Run locally
Open `index.html`, or run `python -m http.server 8000` in this directory and visit `http://localhost:8000`. Chart.js and Font Awesome load from CDNs, so internet is needed for those libraries.

## Data note
The initial first-run demo data is stored locally to make the dashboard immediately understandable. Delete the entries from the UI to start clean. Data never leaves the browser. Clearing browser storage removes it.

## GitHub
Suggested repository: `smart-expense-tracker`  
Description: `Local-first expense tracker dashboard with budgets, Chart.js visualizations and CSV export.`

```bash
git init
git add .
git commit -m "Build smart expense tracker dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/smart-expense-tracker.git
git push -u origin main
```

## GitHub Pages
Go to **Settings → Pages → Deploy from a branch**, choose `main` and `/ (root)`, then Save. Your app will be available at `https://YOUR_USERNAME.github.io/smart-expense-tracker/`.

## Project description
Ledger demonstrates practical frontend state management without a backend: data modeling, validated forms, filtering, CRUD workflows, persistent browser storage and chart-driven summaries.
