'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  UtensilsCrossed,
  Dessert,
  Drumstick,
  BicepsFlexed,
  Sandwich,
  CupSoda,
} from 'lucide-react';
import Link from 'next/link';
import SearchForm from './SearchForm';
import { usePathname } from 'next/navigation';

const MenuHeader = () => {
  // const [selectedCategory, setSelectedCategory] = useState('all');
  const pathname = usePathname();

  // const categories = [
  //   {
  //     id: 'all',
  //     name: 'Sve palačinke',
  //     icon: UtensilsCrossed,
  //     link: 'sve',
  //   },
  //   {
  //     id: 'slatke',
  //     name: 'Slatke',
  //     icon: Dessert,
  //     link: 'slatke',
  //   },
  //   {
  //     id: 'slane',
  //     name: 'Slane',
  //     icon: Drumstick,
  //     link: 'slane',
  //   },
  //   {
  //     id: 'proteinske',
  //     name: 'Proteinske',
  //     icon: BicepsFlexed,
  //     link: 'proteinske',
  //   },
  //   {
  //     id: 'sendvici',
  //     name: 'Sendviči',
  //     icon: BicepsFlexed,
  //     link: 'sendvici',
  //   },
  //   {
  //     id: 'pice',
  //     name: 'Piće',
  //     icon: BicepsFlexed,
  //     link: 'pice',
  //   },
  // ];

  // const smoothScrollDown = (duration = 400) => {
  //   const element = document.getElementById('smooth-scroll');
  //   if (!element) return;

  //   const start = window.scrollY;
  //   const end = element.getBoundingClientRect().top + window.scrollY;
  //   const distance = end - start;
  //   const step = distance / (duration / 16); // otprilike 60 FPS
  //   let current = start;

  //   const scroll = () => {
  //     current += step;
  //     window.scrollTo(0, current);
  //     if ((step > 0 && current < end) || (step < 0 && current > end)) {
  //       requestAnimationFrame(scroll);
  //     } else {
  //       window.scrollTo(0, end);
  //     }
  //   };

  //   scroll();
  // };

  const categories = [
    {
      id: 'all',
      name: 'Sve palačinke',
      icon: UtensilsCrossed,
      link: '',
      paths: ['/meni'],
    },
    {
      id: 'slatke',
      name: 'Slatke',
      icon: Dessert,
      link: 'slatke',
      paths: ['/meni/slatke'],
    },
    {
      id: 'slane',
      name: 'Slane',
      icon: Drumstick,
      link: 'slane',
      paths: ['/meni/slane'],
    },
    {
      id: 'proteinske',
      name: 'Proteinske',
      icon: BicepsFlexed,
      link: 'proteinske',
      paths: ['/meni/proteinske'],
    },
    {
      id: 'sendvici',
      name: 'Sendviči',
      icon: Sandwich,
      link: 'sendvici',
      paths: ['/meni/sendvici'],
    },
    {
      id: 'pice',
      name: 'Piće',
      icon: CupSoda,
      link: 'pice',
      paths: ['/meni/pice'],
    },
  ];

  return (
    <div className='min-h-[85vh] bg-background'>
      {/* Hero Sekcija */}

      <section className='relative h-[65vh] flex items-center justify-center overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url('/palacinke-hero.jpeg')` }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background'></div>
        </div>

        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in pt-28'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl'>
            Izaberite Svoju Omiljenu
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg'>
            Više od 20 različitih vrsta palačinki koje će vas oduševiti
          </p>
        </div>
      </section>

      {/* Search Sekcija */}

      <section className='container mx-auto px-4 -mt-4 relative z-20'>
        <div
          id='smooth-scroll'
          className='bg-card rounded-2xl shadow-elegant p-6 border-2 border-primary/20'
        >
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <div className='relative flex-1 w-full'>
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Category Buttons */}

      <section className='container mx-auto px-4 py-12'>
        <div className='w-full'>
          <div className='grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2  h-auto p-2 bg-secondary rounded-md'>
            {categories.map((category, ind) => {
              const Icon = category.icon;
              // const isActive = selectedCategory === category.id;
              // const isActive =
              //   window.location.pathname === `/meni/${category.link}`;
              const isActive =
                pathname === `/meni/${category.link}` ||
                (pathname === '/meni' && category.link === '');

              return (
                <Link href={`/meni/${category.link}`} key={ind}>
                  <Button
                    key={category.id}
                    // onClick={() => {
                    //   setSelectedCategory(category.id);
                    //   smoothScrollDown();
                    // }}
                    className={`flex items-center gap-2 py-3 text-base h-auto transition-all overflow-hidden w-full ${
                      isActive
                        ? 'bg-orange-400 text-primary-foreground hover:bg-primary/90 transition-colors duration-500'
                        : 'bg-transparent text-gray-600 hover:bg-background/50 hover:text-gray-400 transition-colors duration-500'
                    }`}
                    variant={isActive ? 'default' : 'ghost'}
                  >
                    <Icon className='h-5 w-5' />
                    <span className='hidden sm:inline capitalize'>
                      {category.name}
                    </span>
                    <span className='sm:hidden capitalize'>
                      {category.name}
                    </span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuHeader;
