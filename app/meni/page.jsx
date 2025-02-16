import Link from "next/link";
import Grid from "@/components/meni/Grid";
import { ThreeDCard } from "@/components/meni/ThreeDCard";
import Naslov from "@/components/global/Naslov";
import Filteri from "@/components/meni/Filteri";
import { getAll } from "@/utils/actions";
import Footer from "@/components/global/Footer";

const MeniPage = () => {
  const artikli = getAll();

  return (
    <>
      <Naslov
        tekst='Naš Meni'
        trajanje={2.6}
        klase='text-3xl sm:text-4xl lg:text-5xl '
        textColor='text-emerald-900'
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

export default MeniPage;
