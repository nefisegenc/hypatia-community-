import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Bu kısmı ekliyoruz
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig