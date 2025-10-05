'use client';

import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { radnoVr } from '@/utils/links';

const KontaktPage = () => {
  const handleCall = () => {
    window.location.href = 'tel:+381645574037';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@mrpacalinkovic.com';
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
            Palačinkarnica <br /> Mr. Pačalinković
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg'>
            Najukusnije palačinke u gradu! Svaka palačinka je naša ljubav.
          </p>
          <Button
            onClick={handleCall}
            className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-gray-300 hover:shadow-white hover:shadow-md transition-all duration-500 text-lg px-8 py-6 rounded-2xl'
          >
            <Phone className='mr-2 h-5 w-5' />
            Pozovi Odmah
          </Button>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className='py-16 px-4 max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 text-gray-500'>
          Kontaktirajte Nas
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {/* Phone Card */}
          <Card className='group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 bg-card border-border'>
            <CardContent className='pt-8 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Phone className='h-8 w-8 text-primary-foreground' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-600'>
                Telefon
              </h3>
              <a
                href='tel:+381645574037'
                className='text-primary hover:text-primary/80 transition-colors text-lg font-medium'
              >
                064 / 557 - 4037
              </a>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className='group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 bg-card border-border'>
            <CardContent className='pt-8 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300'>
                <Mail className='h-8 w-8 text-primary-foreground' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-600'>
                Email
              </h3>
              <a
                href='mailto:info@palacinkarnica.rs'
                className='text-primary hover:text-primary/80 transition-colors text-lg font-medium break-all'
              >
                info@mrpacalinkovic.com
              </a>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className='group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 bg-card border-border'>
            <CardContent className='pt-8 text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300'>
                <MapPin className='h-8 w-8 text-primary-foreground' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-600'>
                Adresa
              </h3>
              <p className='text-muted-foreground text-lg'>
                Vuka Karadžića 10a
                <br />
                Sremska Mitrovica, Srbija
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
              <h3 className='text-3xl font-bold text-center mb-8 text-gray-600'>
                Radno Vreme
              </h3>

              <div className='space-y-4'>
                {radnoVr.map((item, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-3 px-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors'
                  >
                    <span className='font-semibold text-lg text-gray-600'>
                      {item.dan}
                    </span>
                    <span className='text-muted-foreground text-lg font-medium'>
                      {item.sat}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className='mb-16'>
          <h3 className='text-3xl font-bold text-center mb-8 text-gray-600'>
            Kako Do Nas?
          </h3>
          <Card className='overflow-hidden border-border shadow-[var(--shadow-medium)]'>
            <CardContent className='p-0'>
              <div className='w-full h-[400px] md:h-[500px]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.853420189028!2d19.609418899999998!3d44.966971799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ba53e94ecba47%3A0x86dc485657b2d93f!2z0JzQuNGB0YLQtdGAINCf0LDRh9Cw0LvQuNC90LrQvtCy0LjRmw!5e0!3m2!1ssr!2srs!4v1739547807134!5m2!1ssr!2srs'
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
          <h3 className='text-2xl font-bold mb-6 text-gray-600'>
            Zapratite Nas
          </h3>
          <div className='flex justify-center gap-6'>
            <a
              href='https://www.instagram.com/p/BfyUoFtAwog/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-soft)]'
            >
              <Instagram className='h-7 w-7 text-primary-foreground' />
            </a>
            <a
              href='https://www.facebook.com/p/Palacinkarnica-Mister-Pacalinkovic-100068327874172/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-soft)]'
            >
              <Facebook className='h-7 w-7 text-primary-foreground' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontaktPage;
