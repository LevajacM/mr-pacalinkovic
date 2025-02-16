import { FloatingDockElement } from "./FloatingDock";

const Footer = () => {
  return (
    <>
      <div className=' w-full h-[72vh] sm:h-[54vh]  grid items-end justify-center'>
        <FloatingDockElement />
      </div>
      <div className='w-full text-center text-emerald-900'>
        <p>Copyright © Mister Pačalinković 2025. </p>
      </div>
    </>
  );
};

export default Footer;
