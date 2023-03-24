/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/pictures/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
