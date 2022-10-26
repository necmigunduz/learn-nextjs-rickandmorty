/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com", "images5.alphacoders.com"],
  },
};

module.exports = nextConfig;
