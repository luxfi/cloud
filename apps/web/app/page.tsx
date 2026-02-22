import { Logo, Button } from "@luxfi/cloud-ui";
import { brand } from "@luxfi/cloud-brand";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "80px 24px" }}>
      <Logo size={32} />
      <h1 style={{ fontSize: 56, fontWeight: 500, margin: "32px 0 16px", letterSpacing: "-0.03em" }}>
        {brand.tagline}
      </h1>
      <p style={{ color: "#8e8e93", fontSize: 20, margin: "0 0 40px" }}>
        AI compute. Node hosting. DeFi tooling. White-label chains.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/dashboard"><Button>Dashboard</Button></Link>
        <Link href="/services"><Button variant="ghost">Services</Button></Link>
      </div>
    </main>
  );
}
