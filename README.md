# Fake Store Cart Application

## Overview
1. The Fake Store Cart Application is a React-based e-commerce interface that consumes data from the Fake Store API. 
2. It allows users to browse products, add items to a cart, view cart contents in a modal, and remove items from the cart. 
3. The application follows a component-based architecture and implements responsive design principles.

## Features
- Fetches product data from Fake Store API
- Responsive product layout using Flexbox
- Add to Cart with duplicate item prevention
- Dynamic cart count displayed in Navbar
- Modal interface for cart items
- Remove items from cart
- Sticky navigation bar for improved UX

## Technology Stack
- React (Vite)
- JavaScript
- HTML
- CSS
- Fake Store API

## How to Use

- Browse products displayed on the web page.
- Click **Add to Cart** to add a specific product from web page.
- Duplicate items are prevented with an alert message, ie.If double clicked the alert message is displayed from browser.
- View the cart item count in the Navbar.
- Click the **Cart** button to open the cart modal.
- Remove items from the cart using the **Remove** button.
- Close the modal to return to the product list by clicking **Close** button.























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
