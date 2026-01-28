export const colors = {
  primary: "#0A84FF",
  primaryDark: "#0062CC",
  accent: "#64D2FF",
  bg: "#0B0B0F",
  bgElev: "#15151A",
  fg: "#F5F5F7",
  fgMuted: "#8E8E93",
  border: "#2C2C2E",
  success: "#30D158",
  warning: "#FFD60A",
  danger: "#FF453A",
} as const;

export const fonts = {
  sans: '"Basel Grotesk", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const radius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;

export const brand = {
  name: "Lux Cloud",
  domain: "lux.cloud",
  tagline: "AI + Web3 cloud platform",
} as const;
