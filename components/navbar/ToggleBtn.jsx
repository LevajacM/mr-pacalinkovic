import { HiMenu } from 'react-icons/hi';
import { Button } from '../ui/button';

const ToggleBtn = ({ toggle }) => {
  return (
    <Button
      asChild
      variant='secondary'
      size='icon'
      className='cursor-pointer !bg-transparent hover:scale-[1.2] delay-200 hover:rotate-90 transition duration-500 ease-in-out sm:hidden absolute top-8 right-6 text-white border-transparent'
      onClick={toggle}
    >
      <HiMenu />
    </Button>
  );
};

export default ToggleBtn;
