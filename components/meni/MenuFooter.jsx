import { Button } from '../ui/button';

const MenuFooter = () => {
  return (
    <section className='container mx-auto px-4 py-20'>
      <div className='rounded-3xl bg-primary p-12 md:p-16 text-center text-primary-foreground shadow-elegant relative overflow-hidden'>
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
            <Button
              size='lg'
              className='bg-card text-card-foreground hover:bg-card/90 shadow-lg text-lg px-8 py-6'
            >
              📞 Pozovite nas
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6'
            >
              🛵 Online poručivanje
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuFooter;
