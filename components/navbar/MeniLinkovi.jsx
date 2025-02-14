import { links } from "@/utils/links";
import Link from "next/link";

const MeniLinkovi = () => {
  return (
    <ul className='hidden sm:flex flex-row items-center justify-between gap-6 lg:gap-12 text-lg font-bold lg:text-xl text-emerald-600 '>
      {links.map((link) => {
        return (
          <li key={link.label}>
            <Link href={link.href}>
              <button className='hover:scale-[1.2] transition duration-300 hover:text-lime-600'>
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
