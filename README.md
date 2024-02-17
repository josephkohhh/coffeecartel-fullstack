# CoffeeCartel (React + Vite)

This repo contains source code for CoffeeCartel, a responsive online coffee store web app.

<img src="/src/assets/cc-banner.png" alt="Banner Image" title="Banner Image" width="550px" height="450px">

## Table of Contents

- [Installation](#Installation)
- [Folder Structure](#FolderStructure)
- [Features](#Features)

## Installation

If you haven't download Nodejs, please install first from https://nodejs.org/en/download

To install and set up your project:

```bash
cd path/to/your-desired-directory

git clone -b prod https://github.com/josephkohhh/coffeecartel-frontend.git

cd coffeecartel-frontend

npm install

```

## Folder Structure

```
coffeecartel-frontend
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ public
│  └─ products
│     ├─ Almondmilk-Mocha.png
│     ├─ Americano.png
│     └─ ...
├─ src
│  ├─ main.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ brand-logo.png
│  │  ├─ coffee-stand.png
│  │  └─ ...
│  ├─ components
│  │  ├─ containers
│  │  │  ├─ CartBox.jsx
│  │  │  ├─ CartList.jsx
│  │  │  └─ ...
│  │  ├─ form
│  │  │  └─ Search.jsx
│  │  ├─ layout
│  │  │  ├─ FilterButtonDrawer.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  └─ SideMenu.jsx
│  │  └─ ui
│  │     ├─ AccordionDiagram.jsx
│  │     ├─ AccountNavButton.jsx
│  │     └─ ...
│  ├─ context
│  │  └─ CartContext.jsx
│  ├─ data
│  │  ├─ constants.js
│  │  └─ products.js
│  ├─ fonts
│  │  ├─ PoorStory-Regular.ttf
│  │  ├─ Poppins-Regular.ttf
│  │  └─ ...
│  ├─ hooks
│  │  ├─ UseCartState.js
│  │  └─ UseWindowResize.js
│  ├─ pages
│  │  ├─ About.jsx
│  │  ├─ Cart.jsx
│  │  ├─ Home.jsx
│  │  └─ Shop.jsx
│  ├─ services
│  │  └─ LocalStorage.js
│  ├─ theme
│  │  └─ FontTheme.js
│  └─ utils
│     ├─ CalculateOrder.js
│     └─ Filter.js
└─ vite.config.js

```

## Features

- Search Products
- Filter Products
- Cart (CRUD)
- Cart Saved to Local Storage
