'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Container from '../global/Container';
import Logo from './Logo';
import MeniLinkovi from './MeniLinkovi';
import SocialIkone from './SocialIkone';
import ToggleBtn from './ToggleBtn';
import Sidebar from './Sidebar';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const { scrollY } = useScroll();

  const path = usePathname();

  const menuPage = path === '/meni';

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current - scrollY.getPrevious();

      // prag u pikselima
      const prag = 200;

      if (current > prag && direction > 0) {
        setVisible(false);
      } else if (direction < 0) {
        setVisible(true);
      }
    }
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [path]);

  return (
    <AnimatePresence mode='wait'>
      <motion.nav
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className='bg-transparent fixed sm:top-4 left-0 w-full z-50 '
      >
        <Container className='flex  sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-5 px-5 sm:w-[95%] mx-auto sm:rounded-sm bg-gradient-to-br from-primary to-accent opacity-80 sm:hover:scale-105 transition-all duration-700 shadow-lg shadow-white sm:hover:shadow-xl sm:hover:shadow-white hover:opacity-100'>
          <Logo />
          <ToggleBtn toggle={toggleSidebar} />

          <MeniLinkovi />
          <SocialIkone />
          {isSidebarOpen && <Sidebar />}
        </Container>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
