/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Set the logo (favicon) for the site
  head: {
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico", // Path to your favicon
      },
    ],
  },
  images: {
    // domains: ['pexels.com'],
    unoptimized: true,
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
