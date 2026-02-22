import { Logo } from "@luxfi/cloud-ui";

const services = [
  { name: "AI Compute", desc: "GPU-backed inference and fine-tuning" },
  { name: "Node Hosting", desc: "Validators, archive nodes, RPC, bootnodes" },
  { name: "DeFi Tooling", desc: "DEX, bridges, liquidity provisioning" },
  { name: "Chain Launch", desc: "White-label L1/L2 deployment" },
];

export default function ServicesPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 24px" }}>
      <Logo />
      <h1 style={{ fontSize: 32, fontWeight: 500, margin: "24px 0" }}>Services</h1>
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {services.map((s) => (
          <li key={s.name} style={{ padding: 16, border: "1px solid #2c2c2e", borderRadius: 8 }}>
            <h3 style={{ margin: 0 }}>{s.name}</h3>
            <p style={{ margin: "4px 0 0", color: "#8e8e93" }}>{s.desc}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
