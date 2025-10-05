import Link from 'next/link';
import { getAll, getByCategory } from '@/utils/actions';
import Grid from '@/components/meni/Grid';
import { ThreeDCard } from '@/components/meni/ThreeDCard';
import Naslov from '@/components/global/Naslov';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { category: 'Sve%20palačinke' },
    { category: 'slane' },
    { category: 'slatke' },
    { category: 'proteinske' },
    { category: 'sendviči' },
    { category: 'piće' },
  ];
}

const CategoryPage = async ({ params }) => {
  let { category } = await params;
  let artikli;

  if (category === 'Sve%20pala%C4%8Dinke') {
    category = 'Sve Palačinke';
  }
  if (category === 'sendvi%C4%8Di') {
    category = 'sendviči';
  }
  if (category === 'pi%C4%87e') {
    category = 'piće';
  }

  if (category === 'Sve Palačinke') {
    artikli = getAll();
  }
  if (
    category === 'slatke' ||
    category === 'slane' ||
    category === 'proteinske' ||
    category === 'sendviči' ||
    category === 'piće'
  ) {
    artikli = getByCategory(category);
  }

  if (!artikli) {
    notFound();
  }

  return (
    <>
      <Naslov
        tekst={category}
        trajanje={0.8}
        klase='text-3xl sm:text-43xl lg:text-5xl'
      />

      <Grid klase='2xl:grid-cols-4'>
        {artikli.map((item) => {
          return (
            <Link href={`/${item.id}`} key={item.id}>
              <ThreeDCard
                naziv={item.title}
                slika={item.img}
                cena={item.price}
                desc={item.desc}
              />
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default CategoryPage;
