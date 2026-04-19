# Lux Cloud — LLM Context

## Purpose

`lux.cloud` is the unified marketing + dashboard entry for the Lux ecosystem.

## Stack

- **Vite 8** + React 19 + wouter
- **@hanzo/gui** for shared primitives (when tamagui provider is wired later)
- **hanzoai/spa** (Go) as static server — scratch-based image, ~5 MB
- Pure CSS (`src/styles.css`) for monochrome dark theme + prismatic accents
- **No Next.js**, no SSR, no Node runtime in production

## Layout

```
apps/web/
  index.html        # Static entry, title + OG tags baked in
  vite.config.ts    # Vite 8
  tsconfig.json
  package.json
  public/
    logo.svg        # Upside-down triangle Lux mark
  src/
    main.tsx        # React root
    App.tsx         # Router (wouter)
    styles.css      # Monochrome dark palette
    components/
      Header.tsx    # Sticky header w/ Try Lux dropdown
      Footer.tsx
      Logo.tsx      # ▼ mark + wordmark intro/collapse
      TryLux.tsx    # Web3 quick-launch (Node/Validator/Bridge/DEX/…)
    pages/
      HomePage.tsx
      ServicesPage.tsx
      DashboardPage.tsx
```

## Build

```
pnpm install
pnpm -C apps/web build    # → apps/web/dist
```

## Docker

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile && pnpm -C apps/web build

FROM ghcr.io/hanzoai/spa
COPY --from=build /app/apps/web/dist /public
```

Runs on port 3000. SPA mode (all routes serve `index.html`). Pre-compressed Brotli+gzip. Cache-Control correct for hashed assets vs `index.html`.

## Brand

- **Monochrome dark**: `#000` bg, `#f5f5f5` fg, `rgba(255,255,255,0.08)` borders (subtle, never stark white)
- **Prismatic accents**: on hero "onchain" gradient only — matches lux.network aesthetic
- **Try Lux** dropdown top-right: Node · Validator · Bridge · DEX · Explorer · Wallet · Chain · Status
- **Logo animation**: wordmark shows for 2.5s on load, collapses to just the ▼ mark; re-expands on hover

## Deploy

CI builds from `main` → `ghcr.io/luxfi/cloud-web:latest` → rolled out on `do-sfo3-lux-k8s` `lux-cloud` namespace. Ingress `lux.cloud` + `www.lux.cloud` → `cloud` service port 3000.
