import LazyVideo from '@/components/hero/Video';
import Footer from '@/components/global/Footer';
import { PixelatedCanvasComponent } from '@/components/hero/PixelatedCanvas';
import PancakeHomepage from '@/components/hero/PancakeHomepage';

export default function Home() {
  return (
    <div>
      <PancakeHomepage />
      {/* <PixelatedCanvasComponent /> */}
      {/* <LazyVideo src='/video/coa-video-2.mp4' poster='/video/galerija-2.jpg' /> */}
      <Footer />
    </div>
  );
}
