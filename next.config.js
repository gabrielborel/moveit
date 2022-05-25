/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com']
  }
};

module.exports = nextConfig;
