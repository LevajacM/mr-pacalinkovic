import Link from 'next/link';
import { links, sidebarSocialIcons } from '@/utils/links';
import { Separator } from '../ui/separator';

const Sidebar = () => {
  return (
    <aside className='w-full h-auto flex flex-col md:hidden transition  duration-300 ease-in-out delay-500'>
      <div className='w-full pb-4'>
        <ul className='list-none'>
          {links.map((item) => {
            return (
              <li key={item.label}>
                <Link href={item.href}>
                  <p className='py-1 text-xl tracking-widest pl-1 hover:bg-gray-50 rounded-sm hover:pl-4 duration-500 text-white font-bold hover:text-foreground'>
                    {item.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Separator className='bg-white' />
      <div className='w-full h-auto pt-6 pb-1'>
        <ul className='list-none flex gap-10 justify-center text-white  items-center'>
          {sidebarSocialIcons.map((item) => {
            return (
              <li
                key={item.href}
                className='hover:text-foreground hover:scale-125 transition  duration-500 ease-in-out'
              >
                <Link href={item.href} target='_blank'>
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
