'use client';

import { getSingleProduct } from '@/utils/actions';
import Image from 'next/image';
import Naslov from '@/components/global/Naslov';

import Footer from '@/components/global/Footer';
import Breadcrumbs from '@/components/single-product/Breadcrumbs';

// export async function generateStaticParams() {
//   return [
//     { category: 'slane', id: '1' },
//     { category: 'slane', id: '2' },
//     { category: 'slane', id: '3' },
//     { category: 'slane', id: '4' },
//     { category: 'slane', id: '5' },
//     { category: 'slane', id: '6' },
//     { category: 'slane', id: '7' },

//     { category: 'slatke', id: '8' },
//     { category: 'slatke', id: '9' },
//     { category: 'slatke', id: '10' },
//     { category: 'slatke', id: '11' },
//     { category: 'slatke', id: '12' },
//     { category: 'slatke', id: '13' },
//     { category: 'slatke', id: '14' },
//     { category: 'slatke', id: '15' },
//     { category: 'slatke', id: '16' },
//     { category: 'slatke', id: '17' },
//     { category: 'slatke', id: '18' },
//     { category: 'slatke', id: '19' },
//     { category: 'slatke', id: '20' },
//     { category: 'slatke', id: '21' },
//     { category: 'slatke', id: '22' },

//     { category: 'proteinske', id: '23' },
//     { category: 'proteinske', id: '24' },
//     { category: 'proteinske', id: '25' },
//     { category: 'proteinske', id: '26' },
//     { category: 'proteinske', id: '27' },

//     { category: 'sendvici', id: '28' },
//     { category: 'sendvici', id: '29' },

//     { category: 'pice', id: '30' },
//     { category: 'pice', id: '31' },
//     { category: 'pice', id: '32' },
//     { category: 'pice', id: '33' },
//     { category: 'pice', id: '34' },
//     { category: 'pice', id: '35' },
//     { category: 'pice', id: '36' },
//     { category: 'pice', id: '37' },
//   ];
// }

// const SingleProductPage = async ({ params }) => {
//   let { id } = await params;
//   id = parseInt(id);
//   const artikal = getSingleProduct(id);
//   const { title, price, img, desc, dodaci, category } = artikal;

//   return (
//     <>
//       <Naslov
//         tekst={title}
//         trajanje={0.7}
//         klase='text-2xl sm:text-3xl lg:text-4xl'
//         textColor='text-emerald-900'
//       />
//       <Filteri />
//       <div className='hidden md:flex w-full h-auto px-3 md:px-6'>
//         <Breadcrumbs title={title} category={category} />
//       </div>
//       <div className='w-full h-[100vh] md:h-[50vh] grid md:grid-cols-2 gap-12 pt-20 md:pt-4 px-3 md:px-6'>
//         <div className='relative w-full h-full'>
//           <Image
//             src={img}
//             alt={title}
//             fill
//             priority
//             className='h-[30vh] md:h-[50vh]  object-cover rounded-2xl'
//           />
//           <span className='absolute top-3 right-3 rounded-full h-16 grid items-center justify-center font-bold bg-emerald-600 text-emerald-50 px-[7px]'>
//             {price}din
//           </span>
//         </div>
//         <div className='w-full h-full text-center md:text-left '>
//           {desc.length !== 0 && (
//             <>
//               <h3 className='text-lg sm:text-xl lg:text-2xl pb-2 text-emerald-900'>
//                 Sastojci:
//               </h3>
//               <ul className='list-none pb-2'>
//                 {desc.map((item) => {
//                   return (
//                     <li key={item}>
//                       <p className='capitalize text-sm  md:text-base text-emerald-700'>
//                         {item}
//                       </p>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </>
//           )}
//           {dodaci.length !== 0 && (
//             <>
//               <h3 className='text-lg sm:text-xl lg:text-2xl pb-2 text-emerald-900'>
//                 Dodaci po želji:
//               </h3>
//               <ul className='list-none pb-2'>
//                 {dodaci.map((item) => {
//                   return (
//                     <li key={item}>
//                       <p className='text-sm text-emerald-700'>{item}</p>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SingleProductPage;
import Link from 'next/link';
import {
  Star,
  Clock,
  Users,
  AlertCircle,
  UtensilsCrossed,
  Dessert,
  Drumstick,
  BicepsFlexed,
  Sandwich,
  CupSoda,
} from 'lucide-react';

const SingleProductPage = () => {
  const ingredients = [
    'Mleveno integralno brašno',
    'Svež punomasni šlag',
    'Organska jaja',
    'Kvalitetno mleko',
    'Puter',
    'Prirodna vanila',
  ];

  const toppings = [
    { name: 'Nutella', price: '80 RSD' },
    { name: 'Plazma', price: '70 RSD' },
    { name: 'Eurokrem', price: '80 RSD' },
    { name: 'Voće (jagode, borovnice)', price: '100 RSD' },
    { name: 'Šlag', price: '50 RSD' },
    { name: 'Med', price: '60 RSD' },
    { name: 'Orasi', price: '70 RSD' },
    { name: 'Bela čokolada', price: '90 RSD' },
  ];

  const allergens = ['Gluten', 'Mleko', 'Jaja'];

  return (
    <>
      {/* nazad na meni - posle skrola!!!!!!******* */}
      <Link
        href='/meni'
        className='fixed bottom-4 right-4 md:bottom-10 md:right-12 z-100000'
      >
        <button className='px-4 py-2 bg-orange-500 rounded-md font-bold text-white animate-pulse '>
          Nazad na meni
        </button>
      </Link>
      <div className='min-h-screen bg-gradient-to-br from-background via-background to-primary/5'>
        {/* Hero Section */}
        <section className='relative h-[60vh] overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              src='/single3.jpg'
              alt='Palačinka sa Nutellom'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent' />
          </div>

          <div className='relative h-full container mx-auto px-4 flex items-end pb-12'>
            <div className='animate-fade-in'>
              <div className='flex items-center gap-2 mb-4'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-5 h-5 fill-primary text-primary' />
                ))}
                <span className='text-muted-foreground ml-2'>
                  (245 recenzija)
                </span>
              </div>
              <h1 className='text-5xl md:text-6xl font-bold mb-4 text-foreground'>
                Palačinka sa Nutellom
              </h1>
              <p className='text-3xl font-semibold text-primary mb-2'>
                320 RSD
              </p>
              <p className='text-lg text-muted-foreground max-w-2xl'>
                Naša najpopularnija palačinka sa bogatim slojem originalne
                Nutelle, svežim voćem i domaćim šlagom
              </p>
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
                <h2 className='text-2xl font-bold mb-6 text-foreground'>
                  Informacije
                </h2>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Clock className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <p className='font-semibold text-foreground'>
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
                      <p className='font-semibold text-foreground'>
                        Veličina porcije
                      </p>
                      <p className='text-muted-foreground'>
                        1 osoba (2 palačinke)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className='bg-card rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-border hover:shadow-[var(--shadow-large)] transition-all duration-300'>
                <h2 className='text-2xl font-bold mb-6 text-foreground'>
                  Osnovni sastojci
                </h2>
                <div className='grid grid-cols-2 gap-3'>
                  {ingredients.map((ingredient, index) => (
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
            </div>

            {/* Toppings Section */}
            <div className='space-y-6'>
              <div className='bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-primary/20 hover:shadow-[var(--shadow-large)] transition-all duration-300'>
                <h2 className='text-2xl font-bold mb-3 text-foreground'>
                  Dodaci po želji
                </h2>
                <p className='text-muted-foreground mb-6'>
                  Personalizujte svoju palačinku sa našim premium dodacima
                </p>
                <div className='space-y-3'>
                  {toppings.map((topping, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between bg-card/80 backdrop-blur rounded-xl p-4 hover:bg-card transition-all duration-200 hover:scale-[1.02] cursor-pointer border border-border/50'
                    >
                      <span className='font-medium text-foreground'>
                        {topping.name}
                      </span>
                      <span className='text-primary font-semibold'>
                        + {topping.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className='bg-card rounded-2xl p-8 shadow-[var(--shadow-medium)] border border-border'>
                <h2 className='text-2xl font-bold mb-4 text-foreground'>
                  Opis
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-4'>
                  Svaka palačinka se pravi sa ljubavlju i pažnjom, koristeći
                  samo najkvalitetnije sastojke. Naše testo je pažljivo
                  pripremljeno po tradicionalnom receptu koji se prenosio
                  generacijama.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                  Nutella preliv dolazi u izdašnoj količini, a možete dodati
                  dodatne toppinge da stvorite savršenu kombinaciju za svoje
                  nepce. Svaka porcija dolazi sa dve velike palačinke.
                </p>
              </div>

              {/* Call to Action */}
              <div className='bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-8 text-center shadow-[var(--shadow-large)]'>
                <h3 className='text-2xl font-bold text-primary-foreground mb-3'>
                  Spremni za užitak?
                </h3>
                <p className='text-primary-foreground/90 mb-6'>
                  Posetite nas ili nas pozovite za više informacija
                </p>
                <button
                  onClick={() => (window.location.href = 'tel:+381601234567')}
                  className='bg-background text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg'
                >
                  Pozovi: 060 123 4567
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProductPage;
