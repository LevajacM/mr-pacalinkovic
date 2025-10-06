// 'use client'

// import { useEffect } from 'react';
// import Link from 'next/link';
// import { getAll, getByCategory } from '@/utils/actions';
// import Grid from '@/components/meni/Grid';
// import { ThreeDCard } from '@/components/meni/ThreeDCard';
// import Naslov from '@/components/global/Naslov';
// import { notFound } from 'next/navigation';

// const CategoryPage = async ({ params }) => {
//   const { category } = await params;
//   let artikli;
//   let categoryName;

//   if (category === 'sve') {
//     categoryName = 'Sve Palačinke';
//   }
//   if (category === 'sendvici') {
//     categoryName = 'Sendviči';
//   }
//   if (category === 'pice') {
//     categoryName = 'Piće';
//   }
//   if (
//     category === 'slane' ||
//     category === 'slatke' ||
//     category === 'proteinske'
//   ) {
//     categoryName = category;
//   }
//   if (category === 'sve') {
//     artikli = getAll();
//   }
//   if (
//     category === 'slatke' ||
//     category === 'slane' ||
//     category === 'proteinske' ||
//     category === 'sendvici' ||
//     category === 'pice'
//   ) {
//     artikli = getByCategory(category);
//   }

//   if (!artikli) {
//     notFound();
//   }

//   const smoothScrollDown = (duration = 400) => {
//     const element = document.getElementById('smooth-sc');
//     if (!element) return;

//     const start = window.scrollY;
//     const end = element.getBoundingClientRect().top + window.scrollY;
//     const distance = end - start;
//     const step = distance / (duration / 16); // otprilike 60 FPS
//     let current = start;

//     const scroll = () => {
//       current += step;
//       window.scrollTo(0, current);
//       if ((step > 0 && current < end) || (step < 0 && current > end)) {
//         requestAnimationFrame(scroll);
//       } else {
//         window.scrollTo(0, end);
//       }
//     };

//     scroll();
//   };

//   useEffect(()=>{
// smoothScrollDown();
//   },[])

//   return (
//     <>
//     <div id='smooth-sc'>

//       <Naslov
//         tekst={categoryName}
//         trajanje={0.8}
//         klase='text-3xl sm:text-43xl lg:text-5xl'
//       />
//     </div>

//       <Grid klase='2xl:grid-cols-4'>
//         {artikli.map((item) => {
//           return (
//             <Link href={`/${item.id}`} key={item.id}>
//               <ThreeDCard
//                 naziv={item.title}
//                 slika={item.img}
//                 cena={item.price}
//                 desc={item.desc}
//               />
//             </Link>
//           );
//         })}
//       </Grid>
//     </>
//   );
// };

// export default CategoryPage;

import Link from 'next/link';
import Grid from '@/components/meni/Grid';
import { ThreeDCard } from '@/components/meni/ThreeDCard';
import Naslov from '@/components/global/Naslov';
import { getAll, getByCategory } from '@/utils/actions';
import SmoothScrollClient from './SmoothScrollClient';

export async function generateStaticParams() {
  return [
    { category: 'sve' },
    { category: 'slane' },
    { category: 'slatke' },
    { category: 'proteinske' },
    { category: 'sendvici' },
    { category: 'pice' },
  ];
}

const CategoryPage = async ({ params }) => {
  const { category } = await params;
  let artikli;
  let categoryName;

  // if (category === 'sve') {
  //   categoryName = 'Sve Palačinke';
  // }
  if (category === 'sendvici') {
    categoryName = 'Sendviči';
  }
  if (category === 'pice') {
    categoryName = 'Piće';
  }
  if (
    category === 'slane' ||
    category === 'slatke' ||
    category === 'proteinske'
  ) {
    categoryName = category;
  }
  // if (category === 'sve') {
  //   artikli = getAll();
  // }
  // if (
  //   category === 'slatke' ||
  //   category === 'slane' ||
  //   category === 'proteinske' ||
  //   category === 'sendvici' ||
  //   category === 'pice'
  // ) {
  //   artikli = getByCategory(category);
  // }

  artikli = getByCategory(category);

  if (!artikli) {
    notFound();
  }

  return <SmoothScrollClient artikli={artikli} categoryName={categoryName} />;
};

export default CategoryPage;
