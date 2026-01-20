# Lux Cloud — LLM Context

## Purpose

Lux Cloud is the AI + Web3 cloud platform for the Lux ecosystem. It is a white-label deployment of the Hanzo platform, branded for Lux users.

Domain: `lux.cloud`

## Scope

Unlike Hanzo (general AI infra), Lux Cloud focuses on:

1. **AI model serving** — GPU-backed inference, training, fine-tuning marketplace
2. **Blockchain node hosting** — validator nodes, archive nodes, RPC endpoints, bootnodes
3. **DeFi tooling** — hosted DEX, bridges, liquidity provisioning, oracle feeds
4. **White-label chain deployment** — one-click L1/L2 launches on Lux infrastructure

## Architecture

Lux Cloud is a thin orchestration layer over existing OSS services:

```
                lux.cloud (apps/web)
                       |
                   apps/api
                       |
   +-----------+-------+---------+-----------+-----------+
   |           |                 |           |           |
@hanzo/iam  @hanzo/kms  @hanzo/commerce  @hanzo/gateway  @hanzo/insights
(lux.id)    (secrets)   (billing)        (api.lux.cloud) (analytics)
   |           |                 |           |
   +-----------+-----------------+-----------+
                       |
              Lux OSS services
   +-----------+-------+---------+-----------+-----------+
   |           |           |           |           |
broker        cex         dex         mpc         bank
(routing)   (exchange)  (orderbook) (custody)   (fiat rails)
```

## Apps

### apps/web
Next.js 14 dashboard. Renders at `lux.cloud`. Pages:
- `/` — marketing / landing
- `/dashboard` — logged-in user home
- `/services` — AI + node + DeFi catalog
- `/billing` — subscription + usage (via `@hanzo/commerce`)
- `/account` — profile, teams, API keys (via `@hanzo/iam`)

### apps/api
Backend. Thin proxy to Hanzo services + Lux OSS services via gateway.

### apps/billing
Server-side billing workflows. Imports `@hanzo/commerce` for subscription lifecycle, metering, credits.

### apps/docs
Docs site at `docs.lux.cloud`. Fumadocs or similar.

## Packages

- `packages/brand` — Lux design tokens (colors, typography, logo SVGs)
- `packages/config` — shared `tsconfig.json`, eslint rules
- `packages/ui` — Lux-branded React components re-exporting `@hanzo/ui`

## Auth Flow

OIDC authorization_code + PKCE against `lux.id` (a Hanzo IAM deployment).

- Client IDs: `lux-cloud-web`, `lux-cloud-api`
- Claims: `sub` (user id), `owner` (org id), `roles`
- Gateway injects: `X-User-Id`, `X-Org-Id`, `X-Roles`

## Bootnode Integration

Lux Cloud exposes node hosting as a first-class service:
- User picks network (mainnet, testnet, devnet)
- Provisions a validator or RPC node via `lux/node` binary
- Billed per GB/hour via `@hanzo/commerce` metering
- Secrets (validator keys) stored in `@hanzo/kms`

## Clusters

| Env | Cluster context | Purpose |
|-----|-----------------|---------|
| mainnet | `do-sfo3-lux-k8s` | Production Lux Cloud |
| testnet | `do-sfo3-lux-test-k8s` | Public testnet |
| devnet  | `do-sfo3-lux-dev-k8s` | Internal dev |

## Image

`ghcr.io/luxfi/cloud:v{semver}` — multi-arch (amd64 + arm64), no QEMU, native runners.

## CI/CD

Push to `main` → GHA runs lint + typecheck + build → auto-bump semver → push image to GHCR → dispatch to operator for progressive rollout (dev → test → main).

## Rules

- Never push to GAR (that's Liquidity's registry).
- Never pull in `ava-labs` or `go-ethereum` — use `luxfi/*`.
- Hanzo services are dependencies; do not fork them here.
- Secrets always via `@hanzo/kms`. Never env files in prod.
