# Lux Cloud

White-label of Hanzo platform, branded as Lux. Domain: `lux.cloud`.

## Scope

AI + Web3. Three buckets:
1. AI model serving
2. Blockchain node hosting (validators, RPC, bootnodes)
3. DeFi tooling + white-label chain deployment

## Key rules

- Use `luxfi/*` packages, never `go-ethereum` or `ava-labs`.
- Build on Hanzo infra (`@hanzo/iam`, `@hanzo/kms`, `@hanzo/commerce`, `@hanzo/gateway`, `@hanzo/ingress`, `@hanzo/insights`).
- Images push to GHCR only: `ghcr.io/luxfi/cloud:v{semver}`. Never GAR.
- Secrets via `@hanzo/kms`. Never K8s secrets for app secrets.
- Hash passwords. Argon2id preferred.
- White-label via hostname: `lux.cloud` => Lux brand.

## Layout

- `apps/web` — Next.js dashboard
- `apps/api` — backend API
- `apps/billing` — Hanzo Commerce integration
- `apps/docs` — docs site
- `packages/brand` — Lux tokens
- `packages/config` — shared configs
- `packages/ui` — Lux UI over `@hanzo/ui`
- `k8s/` — manifests

## Dev

```
pnpm install
pnpm dev
```
