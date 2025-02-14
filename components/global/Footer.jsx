import { FloatingDockElement } from "./FloatingDock";

const Footer = () => {
  return (
    <>
      <div className=' w-full h-[52vh]  grid items-end justify-center'>
        <FloatingDockElement />
      </div>
      <div className='w-full text-center '>
        <p>Copyright © Mister Pačalinković 2025. </p>
      </div>
    </>
  );
};

export default Footer;
