'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Grid from '@/components/meni/Grid';
import { ThreeDCard } from '@/components/meni/ThreeDCard';
import Naslov from '@/components/global/Naslov';

const SmoothScrollClient = ({ artikli, categoryName }) => {
  useEffect(() => {
    // Proveri da li je window dostupan (samo na klijentu)
    if (typeof window === 'undefined') return;

    const smoothScrollDown = (duration = 400) => {
      const element = document.getElementById('smooth-sc');
      if (!element) return;

      const start = window.scrollY;
      const end = element.getBoundingClientRect().top + window.scrollY;
      const distance = end - start;
      const step = distance / (duration / 16);
      let current = start;

      const scroll = () => {
        current += step;
        window.scrollTo(0, current);
        if ((step > 0 && current < end) || (step < 0 && current > end)) {
          requestAnimationFrame(scroll);
        } else {
          window.scrollTo(0, end);
        }
      };

      scroll();
    };

    setTimeout(() => {
      smoothScrollDown();
    }, 100);
  }, []);

  return (
    <>
      <div id='smooth-sc'>
        <Naslov
          tekst={categoryName}
          trajanje={0.8}
          klase='text-3xl sm:text-4xl lg:text-5xl'
        />
      </div>

      <Grid klase='2xl:grid-cols-4'>
        {artikli.map((item) => (
          <Link href={`/${item.id}`} key={item.id}>
            <ThreeDCard
              naziv={item.title}
              slika={item.img}
              cena={item.price}
              desc={item.desc}
            />
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default SmoothScrollClient;
