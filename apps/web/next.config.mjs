/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["@luxfi/cloud-brand", "@luxfi/cloud-config", "@luxfi/cloud-ui"],
};

export default nextConfig;
