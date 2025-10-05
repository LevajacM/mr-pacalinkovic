import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary px-4'>
      <div className='text-center max-w-2xl mx-auto'>
        <div className='mb-8 animate-bounce-slow'>
          <img
            src='/404-palacinka.jpeg'
            alt='Izgubljena palačinka'
            className='w-full max-w-md mx-auto rounded-2xl shadow-[var(--shadow-warm)]'
          />
        </div>

        <h1 className='text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient'>
          404
        </h1>

        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-foreground'>
          Ups! Ova stranica je nestala kao topla palačinka
        </h2>

        <p className='text-lg text-muted-foreground mb-8 max-w-md mx-auto'>
          Izgleda da je neko već pojeo ovu stranicu, ili možda nikada nije ni
          postojala...
        </p>

        <Link href='/'>
          <Button
            size='lg'
            className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-warm)] transition-all duration-300 hover:scale-105 font-semibold text-lg px-8 py-6 rounded-full'
          >
            Vrati se na početnu
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
