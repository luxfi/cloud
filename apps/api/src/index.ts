import { createServer } from "node:http";
import { env } from "@luxfi/cloud-config";

const port = Number(process.env.PORT ?? 4000);

const server = createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, service: "lux-cloud-api" }));
    return;
  }
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ service: "lux-cloud-api", iam: env.iamHost, api: env.apiHost }));
});

server.listen(port, () => {
  console.log(`lux-cloud-api listening on :${port}`);
});
