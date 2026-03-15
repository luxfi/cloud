// Thin adapter over @hanzo/commerce.
// When @hanzo/commerce is wired in, this service will:
//   - Forward subscription events from Commerce webhooks
//   - Meter AI compute + node-hour usage
//   - Charge via configured payment processors
//
// For now: expose a health endpoint and document the shape.

import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 4100);

const server = createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, service: "lux-cloud-billing" }));
    return;
  }
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ service: "lux-cloud-billing", upstream: "@hanzo/commerce" }));
});

server.listen(port, () => {
  console.log(`lux-cloud-billing listening on :${port}`);
});
