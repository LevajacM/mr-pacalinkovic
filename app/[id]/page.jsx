export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
    { id: '13' },
    { id: '14' },
    { id: '15' },
    { id: '16' },
    { id: '17' },
    { id: '18' },
    { id: '19' },
    { id: '20' },
    { id: '21' },
    { id: '22' },
    { id: '23' },
    { id: '24' },
    { id: '25' },
    { id: '26' },
    { id: '27' },
    { id: '28' },
    { id: '29' },
    { id: '30' },
    { id: '31' },
    { id: '32' },
    { id: '33' },
    { id: '34' },
    { id: '35' },
    { id: '36' },
    { id: '37' },
  ];
}

import Link from 'next/link';
import { getSingleProduct } from '@/utils/actions';
import { Star, Clock, Users, AlertCircle } from 'lucide-react';
import CallBtn from '@/components/single-product/CallBtn';
import BackToMenuBtn from '@/components/single-product/BackToMenuBtn';

const SingleProductPage = async ({ params }) => {
  const { id } = await params;

  const artikal = getSingleProduct(parseInt(id));

  const { title, category, price, img, desc, dodaci, opis1, opis2 } = artikal;

  const allergens = ['Gluten', 'Mleko', 'Jaja'];

  let velicinaPorcije;
  if (id <= 22) {
    velicinaPorcije = '1 osoba (1 palačinka)';
  }
  if (id > 22 && id <= 27) {
    velicinaPorcije = '1 osoba (5 palačinaka)';
  }
  if (id > 27 && id <= 29) {
    velicinaPorcije = '1 osoba (2 sendviča)';
  }
  if (id > 29) {
    velicinaPorcije = '1 osoba';
  }

  return (
    <>
      <BackToMenuBtn />
      <div className='min-h-screen bg-gradient-to-br from-background via-background to-primary/5'>
        {/* Hero Section */}
        <section className='relative h-[60vh] overflow-hidden'>
          <div className='absolute inset-0'>
            <img src={img} alt={title} className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent' />
          </div>

          <div className='relative h-full container mx-auto px-4 flex items-end pb-12'>
            <div className='animate-fade-in'>
              <div className='flex items-center gap-2 mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 fill-primary text-primary' />
                ))}
                <span className='text-muted-foreground ml-2'>
                  (199 recenzija)
                </span>
              </div>
              <h1 className='text-5xl md:text-6xl font-bold mb-4 text-gray-600'>
                {title}
              </h1>
              <p className='text-3xl font-semibold text-primary mb-2'>
                {price} Din
              </p>
              <p className='text-lg text-muted-foreground max-w-2xl'>{opis1}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='container mx-auto px-4 py-16'>
          <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Product Info Cards */}
            <div className='space-y-6'>
              {/* Quick Info */}
              <div className='bg-card rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-border hover:shadow-[var(--shadow-large)] transition-all duration-300'>
                <h2 className='text-2xl font-bold mb-6 text-gray-600'>
                  Informacije
                </h2>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Clock className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <p className='font-semibold text-gray-600'>
                        Vreme pripreme
                      </p>
                      <p className='text-muted-foreground'>5-7 minuta</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Users className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <p className='font-semibold text-gray-600'>
                        Veličina porcije
                      </p>

                      <p className='text-muted-foreground'>{velicinaPorcije}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className='bg-card rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-border hover:shadow-[var(--shadow-large)] transition-all duration-300'>
                <h2 className='text-2xl font-bold mb-6 text-gray-600'>
                  Osnovni sastojci
                </h2>
                <div className='grid grid-cols-2 gap-3'>
                  {desc.map((ingredient, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-2 bg-primary/5 rounded-lg p-3 hover:bg-primary/10 transition-colors'
                    >
                      <div className='w-2 h-2 rounded-full bg-primary' />
                      <span className='text-sm text-foreground'>
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allergens */}
              {id < 30 ? (
                <div className='bg-destructive/10 border border-destructive/20 rounded-2xl p-6'>
                  <div className='flex items-start gap-3'>
                    <AlertCircle className='w-5 h-5 text-destructive mt-0.5' />
                    <div>
                      <h3 className='font-semibold text-destructive mb-2'>
                        Alergeni
                      </h3>
                      <p className='text-sm text-destructive/80'>
                        Sadrži: {allergens.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Dodaci Section */}
            <div className='space-y-6'>
              {dodaci.length > 0 ? (
                <div className='bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-primary/20 hover:shadow-[var(--shadow-large)] transition-all duration-300'>
                  <h2 className='text-2xl font-bold mb-3 text-gray-600'>
                    Dodaci po želji
                  </h2>
                  <p className='text-muted-foreground mb-6'>
                    Personalizujte svoju palačinku sa našim premium dodacima
                  </p>
                  <div className='space-y-3'>
                    {dodaci.map((dodatak, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-between bg-card/80 backdrop-blur rounded-xl p-4 hover:bg-card transition-all duration-200 hover:scale-[1.02] cursor-pointer border border-border/50'
                      >
                        <span className='font-medium text-foreground'>
                          {dodatak.name}
                        </span>
                        <span className='text-primary font-semibold'>
                          + {dodatak.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Description */}
              <div className='bg-card rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-border'>
                <h2 className='text-2xl font-bold mb-4 text-gray-600'>Opis</h2>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  {opis1}
                </p>
                <p className='text-muted-foreground leading-relaxed'>{opis2}</p>
              </div>

              {/* Call to Action */}
              <div className='bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-8 text-center shadow-[var(--shadow-large)]'>
                <h3 className='text-2xl font-bold text-primary-foreground mb-3'>
                  Spremni za užitak?
                </h3>
                <p className='text-primary-foreground/90 mb-6'>
                  Posetite nas ili nas pozovite za više informacija
                </p>
                <CallBtn />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProductPage;
