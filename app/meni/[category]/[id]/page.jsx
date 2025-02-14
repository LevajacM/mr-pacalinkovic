import { getSingleProduct } from "@/utils/actions";
import Image from "next/image";
import Naslov from "@/components/global/Naslov";
import Filteri from "@/components/meni/Filteri";

const SingleProductPage = async ({ params }) => {
  let { id } = await params;
  id = parseInt(id);
  const artikal = getSingleProduct(id);
  const { title, price, img, desc, dodaci } = artikal;

  return (
    <>
      <Naslov
        tekst={title}
        trajanje={0.7}
        klase='text-2xl sm:text-3xl lg:text-4xl text-orange-600'
      />
      <Filteri />
      <div className='w-full h-[100vh] md:h-[50vh] grid md:grid-cols-2 gap-12 pt-20'>
        <div className='relative w-full h-full'>
          <Image
            src={img}
            alt={title}
            fill
            priority
            className='h-[30vh] md:h-[50vh]  object-cover rounded-2xl'
          />
          <span className='absolute top-3 right-3 rounded-full h-16 grid items-center justify-center font-bold bg-primary px-[5px]'>
            {price}din
          </span>
        </div>
        <div className='w-full h-full text-left '>
          {desc.length !== 0 && (
            <>
              <h3 className='text-lg sm:text-xl lg:text-2xl pb-2'>Sastojci:</h3>
              <ul className='list-none pb-2'>
                {desc.map((item) => {
                  return (
                    <li key={item}>
                      <p className='capitalize text-xs sm:text-sm md:text-base'>
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
              <h3 className='text-lg sm:text-xl lg:text-2xl pb-2'>
                Dodaci po želji:
              </h3>
              <ul className='list-none pb-2'>
                {dodaci.map((item) => {
                  return (
                    <li key={item}>
                      <p className='text-xs'>{item}</p>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
