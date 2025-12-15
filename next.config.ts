import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/firmware', destination: '/blog/firmware', permanent: true },
      { source: '/healthcare-mvp-prototyping', destination: '/blog/healthcare-mvp-prototyping', permanent: true },
      { source: '/build-your-product-mvp', destination: '/blog/build-your-product-mvp', permanent: true },
      { source: '/cnc-machines-vs-3d-printer', destination: '/blog/cnc-machines-vs-3d-printer', permanent: true },
    ];
  },
};

export default nextConfig;
