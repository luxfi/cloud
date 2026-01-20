# Lux Cloud

AI + Web3 cloud platform. White-label of Hanzo's platform, branded for Lux.

## What it does

- **AI compute** — model serving marketplace
- **Node hosting** — validator nodes, RPC endpoints, bootnodes
- **DeFi tooling** — DEX, bridges, liquidity management
- **White-label chains** — launch branded L1/L2 deployments

## Stack

Built on the Hanzo infrastructure stack:
- `@hanzo/iam` — OAuth2/OIDC auth (lux.id)
- `@hanzo/kms` — secrets, keys, certificates
- `@hanzo/commerce` — billing, subscriptions
- `@hanzo/gateway` — API routing
- `@hanzo/ingress` — L7 reverse proxy
- `@hanzo/insights` — product analytics

Plus Lux-specific OSS services from `~/work/lux/`:
- Broker, CEX, DEX, MPC, Bank

## Layout

```
apps/
  web/       — main dashboard (lux.cloud)
  api/       — backend API
  billing/   — @hanzo/commerce integration
  docs/      — docs.lux.cloud
packages/
  brand/     — Lux tokens (colors, fonts, logo)
  config/    — shared tsconfig, eslint
  ui/        — Lux components over @hanzo/ui
k8s/
  deploy.yaml
  ingress.yaml
```

## Dev

```bash
pnpm install
pnpm dev
```

## Domain

`lux.cloud`

## Clusters

| Env | Cluster |
|-----|---------|
| mainnet | `do-sfo3-lux-k8s` |
| testnet | `do-sfo3-lux-test-k8s` |
| devnet  | `do-sfo3-lux-dev-k8s` |
