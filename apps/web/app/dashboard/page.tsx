import { Logo } from "@luxfi/cloud-ui";

export default function DashboardPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>
      <Logo />
      <h1 style={{ fontSize: 32, fontWeight: 500, margin: "24px 0" }}>Dashboard</h1>
      <p style={{ color: "#8e8e93" }}>Your AI + Web3 resources.</p>
    </main>
  );
}
