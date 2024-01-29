/** @type {import('next').NextConfig} */
const nextConfig = {
  generateEtags: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**i.imgur.com',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
