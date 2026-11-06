# Forma — Modern E-commerce Storefront

A responsive concept storefront for a fictional lifestyle brand. It demonstrates product discovery, category filtering, sorting, wishlist state and a working cart drawer.

## Features
- Product catalogue with category filters and sorting
- Live product search and full-screen search overlay
- Product detail summary on product selection
- Add to cart, remove and quantity controls
- Automatic subtotal and item-count calculations
- Wishlist toggle and wishlist-only view
- Cart and wishlist persistence with LocalStorage
- Responsive navigation, product grid and cart drawer
- Image fallbacks for unavailable remote product images
- Demo checkout clearly communicates that payments are disabled

## Technologies
HTML5 · CSS3 · Vanilla JavaScript · LocalStorage · Font Awesome · Unsplash image CDN

## Run locally
Open `index.html`, or run `python -m http.server 8000` in this directory and visit `http://localhost:8000`. Product photos, fonts and icons use external CDNs; internet is required for those assets. Product images have a CSS/HTML fallback if a remote image fails.

## GitHub
Suggested repository: `forma-modern-ecommerce`  
Description: `Responsive lifestyle storefront with product filters, wishlist, persistent cart and drawer UI.`

```bash
git init
git add .
git commit -m "Build responsive Forma storefront"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/forma-modern-ecommerce.git
git push -u origin main
```

## GitHub Pages
Go to **Settings → Pages → Deploy from a branch**, choose `main` and `/ (root)`, then Save. The storefront will be available at `https://YOUR_USERNAME.github.io/forma-modern-ecommerce/`.

## Project description
Forma is a fictional design-led lifestyle store. The project focuses on client-side commerce patterns: catalogue rendering, filtering, search, cart quantity state, subtotal calculation and browser persistence. It does not collect payment or send orders to a server.
