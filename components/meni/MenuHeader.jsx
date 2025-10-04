'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  UtensilsCrossed,
  Dessert,
  Drumstick,
  BicepsFlexed,
  Sandwich,
  CupSoda,
} from 'lucide-react';
import Form from 'next/form';
import Link from 'next/link';

const MenuHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Sve palačinke', icon: UtensilsCrossed },
    { id: 'slatke', name: 'slatke', icon: Dessert },
    { id: 'slane', name: 'slane', icon: Drumstick },
    { id: 'proteinske', name: 'proteinske', icon: BicepsFlexed },
    { id: 'sendvici', name: 'sendviči', icon: BicepsFlexed },
    { id: 'pice', name: 'piće', icon: BicepsFlexed },
  ];

  const smoothScrollDown = (distance, duration) => {
    const start = window.scrollY;
    const end = start + distance;
    const step = (end - start) / (duration / 16); // otprilike 60 FPS
    let current = start;

    const scroll = () => {
      current += step;
      window.scrollTo(0, current);
      if ((step > 0 && current < end) || (step < 0 && current > end)) {
        requestAnimationFrame(scroll);
      }
    };

    scroll();
  };

  return (
    <div className='min-h-[85vh] bg-background'>
      {/* Hero Section */}
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

      {/* Search Section */}
      <section className='container mx-auto px-4 -mt-4 relative z-20'>
        <div
          id='smooth-scroll'
          className='bg-card rounded-2xl shadow-elegant p-6 border-2 border-primary/20'
        >
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <div className='relative flex-1 w-full'>
              <Form
                action='/meni/search'
                className='w-full sm:w-auto sm:flex-1 sm:mx-4  sm:mt-0'
              >
                <Input
                  type='text'
                  name='query'
                  placeholder='🔍  Pretražite palačinke...'
                  className='pl-5 h-12 text-base border-2 focus:border-primary'
                />
              </Form>
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
              const isActive = selectedCategory === category.id;

              return (
                <Link href={`/meni/${category.name}`} key={ind}>
                  <Button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      // document
                      //   .getElementById('smooth-scroll')
                      //   ?.scrollIntoView({ behavior: 'smooth' });
                      smoothScrollDown(window.innerHeight * 0.5, 300);
                    }}
                    className={`flex items-center gap-2 py-3 text-base h-auto transition-all overflow-hidden w-full ${
                      isActive
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-transparent text-foreground hover:bg-background/50'
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
