import MenuHeader from '@/components/meni/MenuHeader';
import MenuFooter from '@/components/meni/MenuFooter';

export default function MenuLayout({ children }) {
  return (
    <>
      <MenuHeader />
      {children}
      <MenuFooter />
    </>
  );
}
