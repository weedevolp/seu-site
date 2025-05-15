/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  typescript: {
    // Set this to false if you want production builds to abort if there are type errors
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  eslint: {
    // Set this to false if you want production builds to abort if there are lint errors
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  output: 'export',
  basePath: '/weedev',
  trailingSlash: true,
}

module.exports = nextConfig
