import { socialIcons } from "@/utils/links";
import Link from "next/link";

const SocialIkone = () => {
  return (
    <ul className='hidden sm:flex flex-row items-center justify-between gap-4 lg:gap-7 text-xl text-emerald-700'>
      {socialIcons.map((icon, i) => {
        return (
          <li key={i}>
            <Link href={icon.href} target='_blank'>
              <button className='hover:scale-[1.2] transition duration-300 hover:text-emerald-900'>
                {icon.icon}
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIkone;
