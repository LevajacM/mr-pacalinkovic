const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Footer */}
      <footer className='bg-card border-t border-border'>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid gap-12 md:grid-cols-3'>
            <div>
              <h3 className='mb-4 text-2xl font-bold text-gray-600 flex items-center gap-2'>
                <div className='h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent' />
                Mr. Pačalinković
              </h3>
              <p className='text-muted-foreground text-lg leading-relaxed'>
                Najbolje palačinke u gradu, dostavljene direktno na vašu adresu
                sa garantovanim kvalitetom.
              </p>
            </div>

            <div>
              <h3 className='mb-4 text-xl font-semibold text-gray-600'>
                Kontakt
              </h3>
              <div className='space-y-2 text-muted-foreground'>
                <p className='text-lg'>📞 Telefon: 064 / 557 - 4037</p>

                <p className='text-lg'>📌 Vuka Karadžića 10a</p>
                <p className='text-lg'>🇷🇸 Sremska Mitrovica, Srbija</p>
              </div>
            </div>

            <div>
              <h3 className='mb-4 text-xl font-semibold text-gray-600'>
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
              &copy; {year}. Mr Pačalinković. Sva prava zadržana. Napravljeno sa
              ❤️ u Sremskoj Mitrovici.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
