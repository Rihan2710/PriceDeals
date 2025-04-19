/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // ✅ Use object instead of `true`
  },
  serverExternalPackages: ['mongoose'], // ✅ Move outside of `experimental`
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = nextConfig;
