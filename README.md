# Nuxt Sample Store (Admin Panel)
[![fr](https://img.shields.io/badge/lang-fr-red.svg)](https://github.com/zKazemeini125/front-app/README.fa.md)
This project is a sample e-commerce admin panel built with **Nuxt 3**, **Vuetify**, and **TypeScript**.

The main goal of this project is to demonstrate:

- Clean frontend architecture
- Client-side authentication simulation
- Session handling using cookies and localStorage
- Route protection using Nuxt middleware

> No backend or API is used in this project.
> Authentication and data handling are intentionally simulated to focus on frontend architecture.

## Features

- Admin authentication (simulated)
- Protected routes with middleware
- Session persistence using cookies
- User data and preferences stored in localStorage
- Modular composables (useSession, usePreferences)
- Vuetify-based UI and layouts

## Tech Stack

- Nuxt 3
- Vue 3
- TypeScript
- Vuetify
- Vite

## Project Structure

- `composables/` – Session and preferences logic
- `middleware/` – Route protection
- `layouts/` – Application layouts
- `pages/` – Application pages

## Why no backend?

This project is designed to:

- Practice frontend-only authentication patterns
- Keep the UI and business logic independent from the backend
- Allow easy integration with a real API in the future

## Getting Started

```bash
npm install
npm run dev
```
