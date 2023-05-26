/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@/react-icons'] = path.join(
      __dirname,
      'src',
      'react-icons',
    );
    return config;
  },
};

module.exports = nextConfig;
