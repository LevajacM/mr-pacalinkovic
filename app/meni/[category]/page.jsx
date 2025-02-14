import Link from "next/link";
import { getByCategory } from "@/utils/actions";
import Grid from "@/components/meni/Grid";
import { ThreeDCard } from "@/components/meni/ThreeDCard";
import Naslov from "@/components/global/Naslov";
import Filteri from "@/components/meni/Filteri";
import Footer from "@/components/global/Footer";

const CategoryPage = async ({ params }) => {
  let { category } = await params;

  if (category === "pi%C4%87e") {
    category = "piće";
  }
  if (category === "sendvi%C4%8Di") {
    category = "sendviči";
  }
  const artikli = getByCategory(category);
  console.log(artikli);

  return (
    <>
      <Naslov
        tekst={category}
        trajanje={0.8}
        klase='text-2xl sm:text-3xl lg:text-4xl text-orange-600'
      />
      <Filteri />
      <Grid>
        {artikli.map((item) => {
          return (
            <Link href={`/meni/${item.category}/${item.id}`} key={item.id}>
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
      <Footer />
    </>
  );
};

export default CategoryPage;
