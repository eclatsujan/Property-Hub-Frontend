/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env: {
    SERVER: "http://localhost:3001/"
  },
};

module.exports = nextConfig;
