import { links } from '@/utils/links';
import Link from 'next/link';

const MeniLinkovi = () => {
  return (
    <ul className='hidden sm:flex flex-row items-center justify-between gap-6 lg:gap-12 text-lg font-bold lg:text-2xl text-white '>
      {links.map((link) => {
        return (
          <li key={link.label}>
            <Link href={link.href}>
              <button className='hover:scale-[1.1] transition duration-300 border-2 border-white px-4 py-2 rounded-3xl shadow-sm shadow-white hover:shadow-md hover:shadow-white '>
                {link.label}
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MeniLinkovi;
