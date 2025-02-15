"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "../global/Container";
import Logo from "./Logo";
import MeniLinkovi from "./MeniLinkovi";
import SocialIkone from "./SocialIkone";
import ToggleBtn from "./ToggleBtn";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const path = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [path]);

  return (
    <nav className='border-b'>
      <Container className='flex  sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-5 px-5'>
        <Logo />
        <ToggleBtn toggle={toggleSidebar} />

        <MeniLinkovi />
        <SocialIkone />
        {isSidebarOpen && <Sidebar />}
      </Container>
    </nav>
  );
};

export default Navbar;
