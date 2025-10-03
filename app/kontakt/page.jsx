// import Footer from '@/components/global/Footer';
// import Naslov from '@/components/global/Naslov';
// import Podnaslov from '@/components/global/Podnaslov';
// import { radnoVr } from '@/utils/links';

// const KontaktPage = () => {
//   return (
//     <main className='bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground'>
//       <Naslov
//         tekst='kontakt'
//         trajanje={1.6}
//         klase='text-3xl sm:text-4xl lg:text-5xl'
//         textColor='text-emerald-900'
//       />
//       <div className='w-full h-auto  grid gap-x-10 gap-y-10 md:grid-cols-2 items-center my-16'>
//         <div className='w-full grid items-center justify-center overflow-hidden rounded-2xl '>
//           <iframe
//             src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.853420189028!2d19.609418899999998!3d44.966971799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ba53e94ecba47%3A0x86dc485657b2d93f!2z0JzQuNGB0YLQtdGAINCf0LDRh9Cw0LvQuNC90LrQvtCy0LjRmw!5e0!3m2!1ssr!2srs!4v1739547807134!5m2!1ssr!2srs'
//             // width='600'
//             height='450'
//             // style='border:0;'
//             className='w-[90vw] md:w-[45vw] lg:w-[31vw] border border-emerald-700 rounded-lg'
//             // allowFullScreen
//             referrerPolicy='no-referrer-when-downgrade'
//           ></iframe>
//         </div>
//         <div className='w-full pt-0 grid  items-center h-[452px] text-center'>
//           <Podnaslov
//             tekst='Radno Vreme'
//             trajanje={2}
//             klase='text-lg sm:text-xl lg:text-2xl  text-primary font-bold'
//             textColor='text-emerald-800'
//           />
//           <ul className='list-none pb-2 w-[300px] mx-auto'>
//             {radnoVr.map((item, i) => {
//               const delay = (i + 1) / 5;
//               return (
//                 <li key={item.dan} className='flex justify-between '>
//                   <Podnaslov
//                     tekst={item.dan}
//                     trajanje={2 + delay}
//                     klase='text-sm md:text-base lg:text-lg'
//                     textColor='text-emerald-700'
//                   />

//                   <span>
//                     <Podnaslov
//                       tekst={item.sat}
//                       trajanje={2 + delay}
//                       klase='text-sm md:text-base lg:text-lg text-primary'
//                       textColor='text-emerald-500'
//                     />
//                   </span>
//                 </li>
//               );
//             })}
//           </ul>
//           <Podnaslov
//             tekst='Kontakt Telefon'
//             trajanje={3.5}
//             klase='text-lg sm:text-xl lg:text-2xl  text-primary font-bold text-orange-600'
//             textColor='text-emerald-800'
//           />
//           <a
//             href='tel:+381645574037'
//             className='hover:underline hover:text-emerald-500 duration-300'
//           >
//             <Podnaslov
//               tekst='064/5574037'
//               trajanje={4}
//               klase='text-lg sm:text-xl lg:text-2xl pb-2 text-primary font-bold'
//               textColor='text-emerald-500'
//             />
//           </a>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// };

// export default KontaktPage;

'use client';

import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const KontaktPage = () => {
  const workingHours = [
    { day: 'Ponedeljak', hours: '08:00 - 22:00' },
    { day: 'Utorak', hours: '08:00 - 22:00' },
    { day: 'Sreda', hours: '08:00 - 22:00' },
    { day: 'Četvrtak', hours: '08:00 - 22:00' },
    { day: 'Petak', hours: '08:00 - 23:00' },
    { day: 'Subota', hours: '09:00 - 23:00' },
    { day: 'Nedelja', hours: '09:00 - 22:00' },
  ];

  const handleCall = () => {
    window.location.href = 'tel:+381641234567';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@palacinkarnica.rs';
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-background to-secondary'>
      {/* Hero Section */}
      <section className='relative h-[100vh]  flex items-center justify-center overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url('/palacinke-hero.jpeg')` }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-background'></div>
        </div>

        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl'>
            Palačinkarnica Slatki Zalogaj
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg'>
            Najukusnije palačinke u gradu! Svaka palačinka je naša ljubav.
          </p>
          <Button
            onClick={handleCall}
            className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:shadow-[0_0_30px_rgba(255,165,0,0.6)] transition-all duration-300 text-lg px-8 py-6 rounded-full'
          >
            <Phone className='mr-2 h-5 w-5' />
            Poruči Odmah
          </Button>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className='py-16 px-4 max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 text-foreground'>
          Kontaktirajte Nas
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {/* Phone Card */}
          <Card className='group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 bg-card border-border'>
            <CardContent className='pt-8 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Phone className='h-8 w-8 text-primary-foreground' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-card-foreground'>
                Telefon
              </h3>
              <a
                href='tel:+381641234567'
                className='text-primary hover:text-primary/80 transition-colors text-lg font-medium'
              >
                +381 64 123 4567
              </a>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className='group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 bg-card border-border'>
            <CardContent className='pt-8 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Mail className='h-8 w-8 text-primary-foreground' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-card-foreground'>
                Email
              </h3>
              <a
                href='mailto:info@palacinkarnica.rs'
                className='text-primary hover:text-primary/80 transition-colors text-lg font-medium break-all'
              >
                info@palacinkarnica.rs
              </a>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className='group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 bg-card border-border'>
            <CardContent className='pt-8 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300'>
                <MapPin className='h-8 w-8 text-primary-foreground' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-card-foreground'>
                Adresa
              </h3>
              <p className='text-muted-foreground text-lg'>
                Knez Mihailova 15
                <br />
                Beograd, Srbija
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Working Hours Section */}
        <div className='mb-16'>
          <Card className='max-w-2xl mx-auto bg-card border-border shadow-[var(--shadow-soft)]'>
            <CardContent className='pt-8'>
              <div className='flex items-center justify-center mb-6'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow'>
                  <Clock className='h-8 w-8 text-primary-foreground' />
                </div>
              </div>
              <h3 className='text-3xl font-bold text-center mb-8 text-card-foreground'>
                Radno Vreme
              </h3>

              <div className='space-y-4'>
                {workingHours.map((item, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-3 px-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors'
                  >
                    <span className='font-semibold text-lg text-foreground'>
                      {item.day}
                    </span>
                    <span className='text-muted-foreground text-lg font-medium'>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className='mb-16'>
          <h3 className='text-3xl font-bold text-center mb-8 text-foreground'>
            Kako Do Nas?
          </h3>
          <Card className='overflow-hidden border-border shadow-[var(--shadow-medium)]'>
            <CardContent className='p-0'>
              <div className='w-full h-[400px] md:h-[500px]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.211344707897!2d20.456824076525034!3d44.81791517909823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab3d7c7a0b5%3A0xf2c9e67a85847b4a!2sKnez%20Mihailova%2C%20Beograd!5e0!3m2!1sen!2srs!4v1709234567890!5m2!1sen!2srs'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Lokacija Palačinkarnice'
                  className='grayscale-[30%] hover:grayscale-0 transition-all duration-500'
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Section */}
        <div className='text-center'>
          <h3 className='text-2xl font-bold mb-6 text-foreground'>
            Zapratite Nas
          </h3>
          <div className='flex justify-center gap-6'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-soft)]'
            >
              <Instagram className='h-7 w-7 text-primary-foreground' />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-soft)]'
            >
              <Facebook className='h-7 w-7 text-primary-foreground' />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-secondary border-t border-border py-8 mt-16'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <p className='text-muted-foreground'>
            © 2024 Palačinkarnica Slatki Zalogaj. Sva prava zadržana.
          </p>
          <p className='text-muted-foreground mt-2 text-sm'>
            Napravljeno sa ❤️ i palačinkama
          </p>
        </div>
      </footer>
    </div>
  );
};

export default KontaktPage;
