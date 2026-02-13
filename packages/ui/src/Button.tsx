import type { ButtonHTMLAttributes, FC } from "react";
import { colors, radius } from "@luxfi/cloud-brand";

type Variant = "primary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export const Button: FC<Props> = ({ variant = "primary", style, ...rest }) => {
  const base = {
    padding: "10px 16px",
    borderRadius: radius.md,
    fontFamily: '"Basel Grotesk", system-ui, sans-serif',
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
  } as const;
  const variants: Record<Variant, React.CSSProperties> = {
    primary: { background: colors.primary, color: "#fff" },
    ghost: { background: "transparent", color: colors.fg, border: `1px solid ${colors.border}` },
  };
  return <button {...rest} style={{ ...base, ...variants[variant], ...style }} />;
};
