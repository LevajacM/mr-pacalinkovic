import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo/logo.svg' alt='Logo' height={63} width={63} priority />
    </Link>
  );
};

export default Logo;
