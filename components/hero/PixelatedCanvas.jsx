'use client';
import { PixelatedCanvas } from '@/components/ui/pixelatedCanvas';

export function PixelatedCanvasComponent() {
  return (
    <div className='mx-auto mt-8 flex w-full items-center justify-center'>
      <PixelatedCanvas
        src='Coa.png'
        width={800}
        height={600}
        cellSize={4}
        dotScale={0.9}
        shape='circle'
        backgroundColor='#f97316'
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode='repel'
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className='rounded-3xl shadow-xl shadow-yellow-100 transition-all duration-700 hover:shadow-4xl hover:shadow-[#FEEED2]'
      />
    </div>
  );
}
