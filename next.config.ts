import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: ['i.postimg.cc', 'i.porb'].map((domain) => ({
      protocol: 'https',
      hostname: domain,
    })),
  },
} satisfies NextConfig

export default nextConfig
