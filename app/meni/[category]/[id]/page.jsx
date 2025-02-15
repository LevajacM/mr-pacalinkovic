import { getSingleProduct } from "@/utils/actions";
import Image from "next/image";
import Naslov from "@/components/global/Naslov";
import Filteri from "@/components/meni/Filteri";
import Footer from "@/components/global/Footer";
import Breadcrumbs from "@/components/single-product/Breadcrumbs";

const SingleProductPage = async ({ params }) => {
  let { id } = await params;
  id = parseInt(id);
  const artikal = getSingleProduct(id);
  const { title, price, img, desc, dodaci, category } = artikal;

  return (
    <>
      <Naslov
        tekst={title}
        trajanje={0.7}
        klase='text-2xl sm:text-3xl lg:text-4xl'
        textColor='text-emerald-900'
      />
      <Filteri />
      <div className='hidden md:flex w-full h-auto px-3 md:px-6'>
        <Breadcrumbs title={title} category={category} />
      </div>
      <div className='w-full h-[100vh] md:h-[50vh] grid md:grid-cols-2 gap-12 pt-20 md:pt-4 px-3 md:px-6'>
        <div className='relative w-full h-full'>
          <Image
            src={img}
            alt={title}
            fill
            priority
            className='h-[30vh] md:h-[50vh]  object-cover rounded-2xl'
          />
          <span className='absolute top-3 right-3 rounded-full h-16 grid items-center justify-center font-bold bg-emerald-600 text-emerald-50 px-[7px]'>
            {price}din
          </span>
        </div>
        <div className='w-full h-full text-center md:text-left '>
          {desc.length !== 0 && (
            <>
              <h3 className='text-lg sm:text-xl lg:text-2xl pb-2 text-emerald-900'>
                Sastojci:
              </h3>
              <ul className='list-none pb-2'>
                {desc.map((item) => {
                  return (
                    <li key={item}>
                      <p className='capitalize text-sm  md:text-base text-emerald-700'>
                        {item}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {dodaci.length !== 0 && (
            <>
              <h3 className='text-lg sm:text-xl lg:text-2xl pb-2 text-emerald-900'>
                Dodaci po želji:
              </h3>
              <ul className='list-none pb-2'>
                {dodaci.map((item) => {
                  return (
                    <li key={item}>
                      <p className='text-sm text-emerald-700'>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductPage;
