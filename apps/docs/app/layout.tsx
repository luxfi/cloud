import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lux Cloud Docs",
  description: "Documentation for Lux Cloud",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, background: "#0b0b0f", color: "#f5f5f7" }}>
        {children}
      </body>
    </html>
  );
}
