'use client';

import dynamic from 'next/dynamic';

// Disable SSR for Three.js components
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Scene3D />
    </main>
  );
}
