/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@luxfi/cloud-brand", "@luxfi/cloud-config", "@luxfi/cloud-ui"],
};

export default nextConfig;
