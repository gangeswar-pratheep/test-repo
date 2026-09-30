# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Running locally

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

## Pointing at a different backend

The app talks to the backend API over HTTP using a base URL and health path read from environment variables at build/dev time:

- `VITE_API_BASE_URL` — the backend's origin, e.g. `http://localhost:3000` (default if unset)
- `VITE_API_HEALTH_PATH` — the health check path appended to the base URL, e.g. `/health` (default if unset)

Copy `.env.example` to `.env.local` and edit the values to point at a different backend; `.env.local` is gitignored and overrides the defaults without any source change.

The "Backend Status" link in the header opens a proof-of-connectivity page that calls the configured health endpoint and shows a success or failure indicator.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
