import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
          "source": "/firmware",
          "destination": "/blog/firmware",
          "permanent": true
      },
      {
          "source": "/healthcare-mvp-prototyping",
          "destination": "/blog/healthcare-mvp-prototyping",
          "permanent": true
      },
      {
          "source": "/build-your-product-mvp",
          "destination": "/blog/build-your-product-mvp",
          "permanent": true
      },
      {
          "source": "/cnc-machines-vs-3d-printer",
          "destination": "/blog/cnc-machines-vs-3d-printer",
          "permanent": true
      },
      {
          "source": "/prototyping",
          "destination": "/blog/prototyping",
          "permanent": true
      },
      {
          "source": "/elite-cnc-machining-in-30-days",
          "destination": "/blog/elite-cnc-machining-in-30-days",
          "permanent": true
      },
      {
          "source": "/3d-printing-rapid-prototyping",
          "destination": "/blog/3d-printing-rapid-prototyping",
          "permanent": true
      },
      {
          "source": "/pcb-developer",
          "destination": "/blog/pcb-developer",
          "permanent": true
      },
      {
          "source": "/low-volume-manufacturing",
          "destination": "/blog/low-volume-manufacturing",
          "permanent": true
      },
      {
          "source": "/custom-electric-bike-development",
          "destination": "/blog/custom-electric-bike-development",
          "permanent": true
      },
      {
          "source": "/rapid-prototyping-vs-production",
          "destination": "/blog/rapid-prototyping-vs-production",
          "permanent": true
      },
      {
          "source": "/hardware-product-design",
          "destination": "/blog/hardware-product-design",
          "permanent": true
      },
      {
          "source": "/robot-development-process",
          "destination": "/blog/robot-development-process",
          "permanent": true
      },
      {
          "source": "/build-my-idea",
          "destination": "/blog/build-my-idea",
          "permanent": true
      },
      {
          "source": "/pcb-design-mistakes",
          "destination": "/blog/pcb-design-mistakes",
          "permanent": true
      },
      {
          "source": "/prototyping-2",
          "destination": "/blog/prototyping-2",
          "permanent": true
      },
      {
          "source": "/the-ultimate-guide-to-cnc-machining",
          "destination": "/blog/the-ultimate-guide-to-cnc-machining",
          "permanent": true
      }
  ];
  },
};

export default nextConfig;
