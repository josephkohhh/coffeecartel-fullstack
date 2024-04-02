# CoffeeCartel (React + Vite)

This repo contains source code for CoffeeCartel, a responsive online coffee store web app.

<img src="/src/assets/cc-banner.PNG" alt="Banner Image" title="Banner Image" width="550px" height="450px">

## Table of Contents

- [Repo](#Repo)
- [Installation](#Installation)
- [Folder Structure](#FolderStructure)
- [Features](#Features)

## Repo

Frontend: https://github.com/josephkohhh/coffeecartel-frontend

Backend: https://github.com/josephkohhh/coffeecartel-backend

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
├─ .git
├─ .gitattributes
├─ .gitignore
├─ index.html
├─ main.jsx
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ README.md
├─ public
│  └─ products
│     ├─ Almondmilk-Mocha.png
│     ├─ Americano.png
│     ├─ Arabica-Coffee-Bean.png
│     └─ ...
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ brand-logo.png
│  │  ├─ cc-banner.PNG
│  │  ├─ coffee-stand.png
│  │  └─ ...
│  ├─ components
│  │  ├─ containers
│  │  │  ├─ AdminMaster.jsx
│  │  │  ├─ CartBox.jsx
│  │  │  ├─ CartList.jsx
│  │  │  └─ ...
│  │  ├─ form
│  │  │  ├─ LoginForm.jsx
│  │  │  ├─ ProfileForm.jsx
│  │  │  ├─ RegisterForm.jsx
│  │  │  └─ Search.jsx
│  │  ├─ layout
│  │  │  ├─ AdminNavbar.jsx
│  │  │  ├─ FilterButtonDrawer.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  └─ SideMenu.jsx
│  │  └─ ui
│  │     ├─ AccessButton.jsx
│  │     ├─ AccordionDiagram.jsx
│  │     ├─ AccountNavButton.jsx
│  │     └─ ...
│  ├─ context
│  │  ├─ CartContext.jsx
│  │  └─ UserContext.jsx
│  ├─ data
│  │  ├─ constants.js
│  │  └─ products.js
│  ├─ fonts
│  │  ├─ PoorStory-Regular.ttf
│  │  ├─ Poppins-Regular.ttf
│  │  └─ ...
│  ├─ hooks
│  │  ├─ UseCartState.js
│  │  ├─ UseUserState.js
│  │  └─ UseWindowResize.js
│  ├─ pages
│  │  ├─ About.jsx
│  │  ├─ Cart.jsx
│  │  ├─ Forbidden.jsx
│  │  └─ ...
│  ├─ services
│  │  ├─ LocalStorage.js
│  │  ├─ OrderApi.js
│  │  └─ UserApi.js
│  ├─ theme
│  │  └─ FontTheme.js
│  └─ utils
│     ├─ AdminRoute.jsx
│     ├─ Delay.js
│     ├─ Filter.js
│     └─ ...
└─ vite.config.js

```

## Features

- Search Products
- Filter Products
- Login
- Register
- View/Edit Profile
- Cart (CRUD)
- Cart Saved to Local Storage
- View Order
- Admin Panel
- Route Guard
