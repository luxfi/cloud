# Lux Cloud — LLM Context

## Purpose

Lux Cloud is the unified cloud entry for the Lux ecosystem. It is a white-label deployment pattern over the Hanzo platform, branded for Lux users.

Domain: `lux.cloud`

## Scope

- **AI model serving** — GPU-backed inference, training, fine-tuning
- **Blockchain node hosting** — validator, archive, RPC, bootnodes
- **DeFi tooling** — DEX, bridges, liquidity, oracle feeds
- **White-label chain deployment** — one-click L1/L2 launches on Lux DOKS

## Subdomain Map (production)

| Hostname | Serves | Namespace | Image |
|----------|--------|-----------|-------|
| `lux.cloud` | Marketing/dashboard | `lux-cloud` | `ghcr.io/luxfi/cloud:latest` |
| `www.lux.cloud` | Same as root | `lux-cloud` | `ghcr.io/luxfi/cloud:latest` |
| `api.lux.cloud` | Platform API | `hanzo` | shared Hanzo Cloud API |
| `console.lux.cloud` | Operator console | `hanzo` | `ghcr.io/luxfi/console:latest` |
| `id.lux.cloud` | OAuth/OIDC (alias of lux.id) | `hanzo` | `ghcr.io/luxfi/id:latest` |
| `kms.lux.cloud` | Secrets (alias of kms.lux.network) | `hanzo` | `ghcr.io/luxfi/kms:latest` |
| `mpc.lux.cloud` | MPC wallets (alias of mpc.lux.network) | `lux-mpc` | `ghcr.io/luxfi/mpc:latest` |
| `nodes.lux.cloud` | Node deploy (alias of web3.hanzo.ai) | `bootnode` | `ghcr.io/bootnode/bootnode:web-latest` |

Shared Hanzo platform services (cloud-api, console, hanzo-login, kms) are multi-tenant and serve hanzo.ai, lux.cloud, zoo.ngo, pars.id simultaneously — deliberately NOT duplicated per brand.

## Infrastructure

- **Cluster:** DOKS `do-sfo3-lux-k8s` (Lux-owned)
- **Ingress:** `hanzo-ingress` Traefik DaemonSet in `lux-system` ns
- **LB:** DO LB `134.199.138.27` (`lux-ingress`, size_unit=3, externalTrafficPolicy=Cluster)
- **DNS:** Cloudflare zone `6a015a77307b6b6b355fb69c4a3de548`, all records CF-proxied
- **TLS:** cert-manager letsencrypt-prod
- **CI:** `.github/workflows/publish.yml` builds amd64+arm64 via GHA, pushes to `ghcr.io/luxfi/cloud`

## NetworkPolicy Gotcha (hanzo ns)

The `allow-ingress-controller` NP in `hanzo` ns selects source pods by `app.kubernetes.io/name: ingress-nginx`, but the ingress controller is Traefik on `hostNetwork: true`. Cilium doesn't map hostNetwork traffic to a pod identity matching that label.

Workaround (already in place): `allow-all-to-cloud` NP in `hanzo` ns permitting all ingress to `app in (cloud-api, console, hanzo-login, kms)`.

For new `lux-cloud`-ns apps: include an `allow-ingress` NP with `ingress: [{}]` (see `k8s/deploy.yaml`).

## Repo Layout

```
apps/
  web/       Next.js marketing + dashboard (@luxfi/cloud-web)
  api/       Go API stub
  billing/   billing adapter
  docs/      docs site
packages/
  brand/     Lux brand tokens (@luxfi/cloud-brand)
  config/    shared config (@luxfi/cloud-config)
  ui/        UI primitives (@luxfi/cloud-ui)
k8s/
  deploy.yaml   Namespace + Deployment + Service + NP
  ingress.yaml  Ingress with TLS for lux.cloud, www.lux.cloud
.github/
  workflows/publish.yml  multi-arch build+push to ghcr.io/luxfi/cloud
Dockerfile    multi-stage, pnpm-based, standalone Next output
compose.yml   local dev
```
