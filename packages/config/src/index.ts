export const env = {
  iamHost: process.env.NEXT_PUBLIC_IAM_HOST ?? "https://lux.id",
  apiHost: process.env.NEXT_PUBLIC_API_HOST ?? "https://api.lux.cloud",
  insightsHost: process.env.NEXT_PUBLIC_INSIGHTS_HOST ?? "https://insights.lux.cloud",
} as const;

export const clusters = {
  mainnet: "do-sfo3-lux-k8s",
  testnet: "do-sfo3-lux-test-k8s",
  devnet: "do-sfo3-lux-dev-k8s",
} as const;

export type Cluster = keyof typeof clusters;
