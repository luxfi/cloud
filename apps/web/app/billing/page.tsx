import { Logo } from "@luxfi/cloud-ui";

export default function BillingPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>
      <Logo />
      <h1 style={{ fontSize: 32, fontWeight: 500, margin: "24px 0" }}>Billing</h1>
      <p style={{ color: "#8e8e93" }}>Subscription and usage. Powered by @hanzo/commerce.</p>
    </main>
  );
}
