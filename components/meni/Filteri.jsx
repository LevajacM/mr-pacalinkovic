import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getButtonCategory } from "@/utils/actions";

const Filteri = () => {
  const kategorije = getButtonCategory;

  return (
    <div className='w-full flex flex-row flex-wrap gap-4 items-center justify-center mt-8'>
      <Link href='/meni'>
        <Button
          variant='default'
          size='default'
          className='bg-primary capitalize'
        >
          Sve
        </Button>
      </Link>
      {kategorije.map((item) => {
        return (
          <Link href={`/meni/${item}`} key={item}>
            <Button
              variant='default'
              size='default'
              className='bg-primary capitalize'
            >
              {item}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Filteri;
