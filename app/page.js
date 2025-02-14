import Hero from "@/components/hero/Hero";
import LazyVideo from "@/components/hero/Video";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <LazyVideo src='/video/coa-video-2.mp4' poster='/video/galerija-2.jpg' />
      <Footer />
    </div>
  );
}
