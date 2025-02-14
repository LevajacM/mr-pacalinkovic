import Footer from "@/components/global/Footer";
import Naslov from "@/components/global/Naslov";
import Podnaslov from "@/components/global/Podnaslov";
import { radnoVr } from "@/utils/links";

const KontaktPage = () => {
  return (
    <>
      <Naslov
        tekst='kontakt'
        trajanje={1.6}
        klase='text-3xl sm:text-4xl lg:text-5xl text-orange-600'
      />
      <div className='w-full h-auto  grid gap-x-10 gap-y-10 md:grid-cols-2 items-center my-16'>
        <div className='w-full grid items-center justify-center overflow-hidden rounded-2xl '>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.853420189028!2d19.609418899999998!3d44.966971799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ba53e94ecba47%3A0x86dc485657b2d93f!2z0JzQuNGB0YLQtdGAINCf0LDRh9Cw0LvQuNC90LrQvtCy0LjRmw!5e0!3m2!1ssr!2srs!4v1739547807134!5m2!1ssr!2srs'
            // width='600'
            height='450'
            // style='border:0;'
            className='w-[90vw] md:w-[45vw] lg:w-[31vw] border border-primary rounded-lg'
            // allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='w-full pt-0 grid  items-center h-[452px] text-center'>
          <Podnaslov
            tekst='Radno Vreme'
            trajanje={2}
            klase='text-lg sm:text-xl lg:text-2xl  text-primary font-bold text-orange-600'
          />
          <ul className='list-none pb-2 w-[300px] mx-auto'>
            {radnoVr.map((item, i) => {
              const delay = (i + 1) / 5;
              return (
                <li key={item.dan} className='flex justify-between '>
                  <Podnaslov
                    tekst={item.dan}
                    trajanje={2 + delay}
                    klase='text-sm md:text-base lg:text-lg'
                  />

                  <span>
                    <Podnaslov
                      tekst={item.sat}
                      trajanje={2 + delay}
                      klase='text-sm md:text-base lg:text-lg text-primary'
                    />
                  </span>
                </li>
              );
            })}
          </ul>
          <Podnaslov
            tekst='Kontakt Telefon'
            trajanje={3.5}
            klase='text-lg sm:text-xl lg:text-2xl  text-primary font-bold text-orange-600'
          />
          <a
            href='tel:+381645574037'
            className='hover:underline hover:text-primary duration-300'
          >
            <Podnaslov
              tekst='064/5574037'
              trajanje={4}
              klase='text-lg sm:text-xl lg:text-2xl pb-2 text-primary font-bold'
            />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KontaktPage;
