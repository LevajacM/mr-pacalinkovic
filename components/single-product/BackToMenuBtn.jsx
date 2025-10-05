'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScroll } from 'motion/react';
import useWindowDimensions from '@/lib/useWindowDimensions';
import { StepBack } from 'lucide-react';

const BackToMenuBtn = () => {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const { width } = useWindowDimensions();

  useEffect(() => {
    let mounted = true;

    const unsubscribe = scrollYProgress.on('change', (current) => {
      if (!mounted) return;

      if (typeof current === 'number') {
        if (current > 0.7) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });

    return () => {
      mounted = false;
      unsubscribe?.();
    };
  }, [scrollYProgress]);

  if (!visible) return null;

  return (
    <Link
      href='/meni'
      className='fixed bottom-4 right-4 md:bottom-10 md:right-12 z-100000'
    >
      {width > 640 ? (
        <button className='px-4 py-2 bg-orange-400 rounded-full font-bold text-white animate-pulse hover:animate-none hover:bg-primary hover:shadow-lg '>
          Nazad na meni
        </button>
      ) : (
        <button className='px-4 py-4 bg-orange-400 rounded-full font-bold text-white animate-pulse'>
          <StepBack className='w-8 h-8' />
        </button>
      )}
    </Link>
  );
};

export default BackToMenuBtn;
