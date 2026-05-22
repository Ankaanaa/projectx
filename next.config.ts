import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: ['i.postimg.cc', 'i.porb'].map((domain) => ({
      protocol: 'https',
      hostname: domain,
    })),
  },
}

export default nextConfig
