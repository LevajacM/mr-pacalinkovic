import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      {/* ***************************************** */}
      {/* <Image
        src='/logo/beli-logo.svg'
        alt='Logo'
        height={63}
        width={63}
        priority
      /> */}
      {/* ***************************************** */}

      <img
        src='/logo/beli-logo.svg'
        alt='Logo'
        height={63}
        width={63}
        loading='eager'
        style={{ display: 'block' }}
      />
    </Link>
  );
};

export default Logo;
