'use client';

// import Link from 'next/link';
// import Grid from '@/components/meni/Grid';
// import { ThreeDCard } from '@/components/meni/ThreeDCard';
// import Naslov from '@/components/global/Naslov';
// import { getProductsBySearch } from '@/utils/actions';

// export const dynamic = 'force-static';

// const SearchPage = async ({ searchParams }) => {
//   const { query } = (await searchParams) || '';
//   const artikli = getProductsBySearch(query);

//   if (!query) {
//     return (
//       <>
//         <p className='text-muted-foreground text-3xl text-center'>
//           Unesite pojam za pretragu.
//         </p>
//       </>
//     );
//   }

//   if (artikli.length === 0) {
//     return (
//       <>
//         <div className='flex flex-col items-center justify-top min-h-screen  p-4'>
//           <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
//             <h1 className='text-3xl font-bold mb-6 text-center text-primary'>
//               Nema rezultata pretrage za:{' '}
//               <span className='font-bold text-foreground italic '>{query}</span>
//             </h1>
//             <p className='text-7xl text-center pb-6  animate-wiggle'>☝🏻</p>
//             <p className=' text-center text-primary text-3xl'>
//               Potraži nešto drugo...
//             </p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Naslov
//         tekst={`Rezultati pretrage`}
//         trajanje={2.6}
//         klase='text-3xl sm:text-4xl lg:text-5xl '
//       />

//       <Grid klase='2xl:grid-cols-4'>
//         {artikli.map((item) => {
//           return (
//             <Link href={`/${item.id}`} key={item.id}>
//               <ThreeDCard
//                 naziv={item.title}
//                 slika={item.img}
//                 cena={item.price}
//                 desc={item.desc}
//                 cardHoverShadow='hover:shadow-white'
//               />
//             </Link>
//           );
//         })}
//       </Grid>
//     </>
//   );
// };

// export default SearchPage;

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Grid from '@/components/meni/Grid';
import { ThreeDCard } from '@/components/meni/ThreeDCard';
import Naslov from '@/components/global/Naslov';
import { getProductsBySearch } from '@/utils/actions';
import { useEffect, useState } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [artikli, setArtikli] = useState([]);

  useEffect(() => {
    if (query) {
      const results = getProductsBySearch(query);
      setArtikli(results);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // smooth scroll
    }
  }, [query]);

  if (!query) {
    return (
      <p className='text-muted-foreground text-3xl text-center'>
        Unesite pojam za pretragu.
      </p>
    );
  }

  if (artikli.length === 0) {
    return (
      <div className='flex flex-col items-center justify-top min-h-screen p-4'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
          <h1 className='text-3xl font-bold mb-6 text-center text-primary'>
            Nema rezultata pretrage za:{' '}
            <span className='font-bold text-foreground italic'>{query}</span>
          </h1>
          <p className='text-7xl text-center pb-6 animate-wiggle'>☝🏻</p>
          <p className='text-center text-primary text-3xl'>
            Potraži nešto drugo...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Naslov
        tekst={`Rezultati pretrage`}
        trajanje={2.6}
        klase='text-3xl sm:text-4xl lg:text-5xl'
      />

      <Grid klase='2xl:grid-cols-4'>
        {artikli.map((item) => (
          <Link href={`/${item.id}`} key={item.id}>
            <ThreeDCard
              naziv={item.title}
              slika={item.img}
              cena={item.price}
              desc={item.desc}
              cardHoverShadow='hover:shadow-white'
            />
          </Link>
        ))}
      </Grid>
    </>
  );
}
