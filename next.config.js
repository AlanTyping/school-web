/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**i.imgur.com',
        port: '',
      },{
        protocol: 'https',
        hostname: '**drive.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**picsum.photos',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**plus.unsplash.com',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig
