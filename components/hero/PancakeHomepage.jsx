'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShoppingCart,
  Clock,
  Sparkles,
  Heart,
  Star,
  Truck,
  ChefHat,
  Orbit,
  Phone,
} from 'lucide-react';
import Grid from '@/components/meni/Grid';
import { ThreeDCard } from '@/components/meni/ThreeDCard';
import Image from 'next/image';
import { getSingleByCategory, getSingleProt } from '@/utils/actions';
import { MovingBorderDiv } from '../ui/movingBorderDiv';
import useWindowDimensions from '@/lib/useWindowDimensions';
import { PixelatedCanvasComponent } from './PixelatedCanvas';

const PancakeHomepage = () => {
  const [isClient, setIsClient] = useState(false);
  const artikal1 = getSingleByCategory('slane');
  const artikal2 = getSingleProt('proteinske');
  const artikal3 = getSingleByCategory('slatke');

  const { width } = useWindowDimensions();

  const handleCall = () => {
    window.location.href = 'tel:+381641234567';
  };

  // Ensure the component only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className='h-full'>
        <div className='flex items-center justify-center h-screen'>
          <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-orange-500' />
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background'>
      {/* hero palacinka section */}
      <section className='relative h-[100vh]  flex items-center justify-center overflow-visible'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url('/palacinke-hero.jpeg')` }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-background'></div>
        </div>

        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl'>
            Mr. Pačalinković 🥞🧡
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg'>
            Najukusnije palačinke u gradu! Svaka palačinka je naša ljubav.
          </p>
          {/* Buttons za porucivanje */}
          <div className='flex flex-col sm:flex-row gap-10'>
            <Button
              onClick={handleCall}
              className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:shadow-[0_0_30px_rgba(255,165,0,0.6)] transition-all duration-300 text-lg px-8 py-6 rounded-full border-2 border-white hover:shadow-white font-bold'
            >
              <Phone className='mr-2 h-5 w-5' />
              Lično preuzimanje
            </Button>

            <a
              href='https://www.alideda.rs/mister-pacalinkovic-dostava-sremska-mitrovica'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,165,0,0.4)]  transition-all duration-300 text-lg px-8 py-6 rounded-full w-full border-2 border-white hover:shadow-white font-bold'>
                <Image
                  src='/logo/alideda-emb.png'
                  width={20}
                  height={20}
                  className='mr-2 h-5 w-5'
                  alt='Alidede Logo'
                />
                Poruči preko Alidede
              </Button>
            </a>

            <a
              href='https://wolt.com/sr/srb/sremska-mitrovica/restaurant/mister-paalinkovi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,165,0,0.4)]  transition-all duration-300 text-lg px-8 py-6 rounded-full w-full border-2 border-white hover:shadow-white font-bold'>
                <Image
                  src='/logo/wolt-logo.png'
                  width={20}
                  height={20}
                  className='mr-2 h-5 w-5'
                  alt='Wolt Logo'
                />
                Poruči preko Wolta
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <header className='relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground'>
        <div className='absolute inset-0  opacity-20' />
        <div className='container relative mx-auto px-4 py-24 md:py-32'>
          <div className='max-w-4xl mx-auto text-center'>
            <Badge className='mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm text-base px-4 py-2'>
              <Sparkles className='mr-2 h-4 w-4' />
              #1 Palačinke u Sremskoj Mitrovici
            </Badge>
            <h1 className='mb-6 text-5xl font-bold md:text-7xl tracking-tight animate-fade-in '>
              Najbolje Palačinke
              <br />
              <span className=' text-white'>Dostavljene na Vrata</span>
            </h1>
            <p className='mb-10 text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed'>
              Sveže, tople i ukusne palačinke napravljene sa ljubavlju - dostava
              za 20 minuta
            </p>

            {/* Stats */}
            <div className='mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto'>
              <div className='text-center'>
                <div className='text-4xl font-bold mb-2'>100+</div>
                <div className='text-white/80'>Dnevnih Porudžbina</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold mb-2'>4.9★</div>
                <div className='text-white/80'>Prosečna Ocena</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold mb-2'>20min</div>
                <div className='text-white/80'>Vreme Dostave</div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent' />
      </header>

      {/* Menu Section */}
      <section className='container mx-auto px-4 pt-20 pb-12'>
        <div className='mb-4 text-center'>
          <h2 className='mb-4 text-4xl md:text-5xl font-bold text-primary'>
            Današnje Preporuke
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Uživajte u pažljivo odabranoj poslastici koju danas posebno
            preporučujemo!
          </p>
        </div>

        {/* <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>       
        </div> */}
        {width >= 1280 ? (
          <MovingBorderDiv duration={5000}>
            <Grid klase='bg-[#FFFBF5] rounded-lg  w-full h-full'>
              <ThreeDCard
                naziv={artikal1.title}
                slika={artikal1.img}
                cena={artikal1.price}
                desc={artikal1.desc}
                cardHoverShadow='hover:shadow-orange-400'
              />
              <ThreeDCard
                naziv={artikal2.title}
                slika={artikal2.img}
                cena={artikal2.price}
                desc={artikal2.desc}
                cardHoverShadow='hover:shadow-orange-400'
              />
              <ThreeDCard
                naziv={artikal3.title}
                slika={artikal3.img}
                cena={artikal3.price}
                desc={artikal3.desc}
                cardHoverShadow='hover:shadow-orange-400'
              />
            </Grid>
          </MovingBorderDiv>
        ) : (
          <Grid>
            <ThreeDCard
              naziv={artikal1.title}
              slika={artikal1.img}
              cena={artikal1.price}
              desc={artikal1.desc}
              cardHoverShadow='hover:shadow-orange-400'
            />
            <ThreeDCard
              naziv={artikal2.title}
              slika={artikal2.img}
              cena={artikal2.price}
              desc={artikal2.desc}
              cardHoverShadow='hover:shadow-orange-400'
            />
            <ThreeDCard
              naziv={artikal3.title}
              slika={artikal3.img}
              cena={artikal3.price}
              desc={artikal3.desc}
              cardHoverShadow='hover:shadow-orange-400'
            />
          </Grid>
        )}
      </section>

      {/* Features Section */}
      <section className='bg-secondary/50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center group'>
              <div className='mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-elegant group-hover:scale-110 transition-transform duration-300'>
                <Truck className='h-10 w-10' />
              </div>
              <h3 className='mb-3 text-2xl font-bold text-foreground'>
                Brza Dostava
              </h3>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                Dostava za 20 minuta
              </p>
            </div>

            <div className='text-center group'>
              <div className='mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-elegant group-hover:scale-110 transition-transform duration-300'>
                <ChefHat className='h-10 w-10' />
              </div>
              <h3 className='mb-3 text-2xl font-bold text-foreground'>
                Sveži Sastojci
              </h3>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                Samo premium sastojci od proverenih dobavljača
              </p>
            </div>

            <div className='text-center group'>
              <div className='mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-elegant group-hover:scale-110 transition-transform duration-300'>
                <Heart className='h-10 w-10' />
              </div>
              <h3 className='mb-3 text-2xl font-bold text-foreground'>
                Sa Ljubavlju
              </h3>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                Svaka palačinka napravljena sa pažnjom i strašću
              </p>
            </div>

            <div className='text-center group'>
              <div className='mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-elegant group-hover:scale-110 transition-transform duration-300'>
                <Orbit className='h-10 w-10' />
              </div>
              <h3 className='mb-3 text-2xl font-bold text-foreground'>
                Svaki dan
              </h3>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                365 dana u godini
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-20'>
        <div className='rounded-3xl bg-gradient-to-br from-primary via-accent to-primary-glow p-12 md:p-16 text-center text-primary-foreground shadow-elegant relative overflow-hidden'>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYxMmMwIDItMiA0LTIgNHMtMi0yLTItNHYtMTJ6bS0yMCAwYzAtMiAyLTQgMi00czIgMiAyIDR2MTJjMCAyLTIgNC0yIDRzLTItMi0yLTR2LTEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          <div className='relative'>
            <h2 className='mb-4 text-4xl md:text-5xl font-bold'>
              Vaša sledeća omiljena palačinka? Možda baš ova.
            </h2>
            <p className='mb-8 text-xl md:text-2xl text-white/95 max-w-2xl mx-auto'>
              Poručite odmah i uživajte u toplim, svježim palačinkama za 20
              minuta!
            </p>

            <PixelatedCanvasComponent />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-card border-t border-border'>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid gap-12 md:grid-cols-3'>
            <div>
              <h3 className='mb-4 text-2xl font-bold text-foreground flex items-center gap-2'>
                <div className='h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent' />
                Mr Pačalinković
              </h3>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                Najbolje palačinke u gradu, dostavljene direktno na vašu adresu
                sa garantovanim kvalitetom.
              </p>
            </div>

            <div>
              <h3 className='mb-4 text-xl font-semibold text-foreground'>
                Kontakt
              </h3>
              <div className='space-y-2 text-muted-foreground'>
                <p className='text-lg'>📞 Telefon: 064/557-4037</p>

                <p className='text-lg'>📍 Sremska Mitrovica, Srbija</p>
              </div>
            </div>

            <div>
              <h3 className='mb-4 text-xl font-semibold text-foreground'>
                Radno Vreme
              </h3>
              <div className='space-y-2 text-muted-foreground'>
                <p className='text-lg'>Ponedeljak - Nedelja</p>
                <p className='text-2xl font-bold text-primary'>12:00 - 22:45</p>
                <p className='text-sm'>Dostupni smo svakog dana!</p>
              </div>
            </div>
          </div>

          <div className='mt-12 border-t border-border pt-8 text-center'>
            <p className='text-muted-foreground'>
              &copy; 2024 Palačinke Dostava. Sva prava zadržana. Napravljeno sa
              ❤️ u Beogradu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PancakeHomepage;
