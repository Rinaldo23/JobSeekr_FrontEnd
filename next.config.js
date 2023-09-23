/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['pexels.com'],
    unoptimized : true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
}

module.exports = nextConfig
