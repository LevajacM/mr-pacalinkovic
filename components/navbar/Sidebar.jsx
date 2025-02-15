import Link from "next/link";
import { links } from "@/utils/links";
import { sidebarSocialIcons } from "@/utils/links";
import { Separator } from "../ui/separator";

const Sidebar = () => {
  return (
    <aside className='w-full h-auto flex flex-col md:hidden transition  duration-300 ease-in-out delay-200'>
      <div className='w-full pb-4'>
        <ul className='list-none'>
          {links.map((item) => {
            return (
              <li key={item.label}>
                <Link href={item.href}>
                  <p className='py-1 text-xl tracking-widest pl-1 hover:bg-emerald-100 hover:pl-4 duration-300 text-emerald-900 hover:text-emerald-950'>
                    {item.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Separator className='bg-emerald-700' />
      <div className='w-full h-auto pt-6 pb-1'>
        <ul className='list-none flex gap-6 justify-center text-emerald-700  items-center'>
          {sidebarSocialIcons.map((item) => {
            return (
              <li
                key={item.href}
                className='hover:text-emerald-900 hover:scale-125 transition  duration-300 ease-in-out'
              >
                <Link href={item.href}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
