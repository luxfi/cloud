import type { FC } from "react";

export const Logo: FC<{ size?: number }> = ({ size = 24 }) => (
  <span
    style={{
      fontFamily: '"Basel Grotesk", system-ui, sans-serif',
      fontWeight: 500,
      fontSize: size,
      letterSpacing: "-0.02em",
    }}
  >
    Lux Cloud
  </span>
);
