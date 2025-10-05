'use client';

import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import SearchIconComponent from './SearchIconComponent';

export default function SearchForm() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value.trim();
    if (query) {
      router.push(`/meni/search?query=${query}`);
    }
  }

  const smoothScrollDown = (duration = 400) => {
    const element = document.getElementById('smooth-scroll');
    if (!element) return;

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    const step = distance / (duration / 16); // otprilike 60 FPS
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

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        smoothScrollDown();
      }}
      className='w-full sm:w-auto sm:flex-1 sm:mx-4 sm:mt-0'
    >
      <Input
        type='text'
        name='query'
        placeholder='🔍  Pretražite palačinke...'
        className='pl-5 h-12 text-base border-2 focus:border-primary relative'
      />
      <button
        type='submit'
        className=' h-full w-6 absolute top-0 right-4 px-8 flex items-center justify-center bg-orange-400 rounded-tr-lg rounded-br-lg opacity-80 text-white cursor-pointer border-2 border-gray-400'
      >
        <SearchIconComponent />
      </button>
    </form>
  );
}
