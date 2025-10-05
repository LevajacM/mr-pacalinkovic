import Link from 'next/link';
import { Button } from '../ui/button';

const MenuFooter = () => {
  const handleCall = () => {
    window.location.href = 'tel:+381645574037';
  };

  return (
    <section className='container mx-auto px-4 py-20'>
      <div className='rounded-3xl bg-gradient-to-br from-primary via-accent to-primary-glow p-12 md:p-16 text-center text-primary-foreground shadow-elegant relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYxMmMwIDItMiA0LTIgNHMtMi0yLTItNHYtMTJ6bS0yMCAwYzAtMiAyLTQgMi00czIgMiAyIDR2MTJjMCAyLTIgNC0yIDRzLTItMi0yLTR2LTEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        <div className='relative'>
          <h2 className='mb-4 text-4xl md:text-5xl font-bold'>
            Gladni ste? Mi smo tu za vas!
          </h2>
          <p className='mb-8 text-xl md:text-2xl text-white/95 max-w-2xl mx-auto'>
            Poručite sada i uživajte u toplim, svežim palačinkama za samo 20
            minuta!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/kontakt'>
              <Button
                // onClick={handleCall}
                size='lg'
                className='bg-card text-primary hover:bg-transparent hover:shadow-gray-100 hover:shadow-xl hover:text-white shadow-lg text-lg px-8 py-[25.5px] transition-all duration-500 hover:scale-110'
              >
                📞 Kontaktirajte nas
              </Button>
            </Link>
            <a
              href='https://wolt.com/sr/srb/sremska-mitrovica/restaurant/mister-paalinkovi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                size='lg'
                variant='outline'
                className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all hover:shadow-2xl hover:scale-110 duration-300 text-lg px-8 py-6'
              >
                🛵 Online poručivanje
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuFooter;
