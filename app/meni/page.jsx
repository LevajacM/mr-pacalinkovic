// import { redirect } from 'next/navigation';

// const page = () => {
//   return redirect('/meni/Sve%20pala%C4%8Dinke');
// };

// export default page;

import { getAll } from '@/utils/actions';
import SmoothScrollClient from './[category]/SmoothScrollClient';

export default function MeniPage() {
  const artikli = getAll();
  const categoryName = 'Sve Palačinke';

  return <SmoothScrollClient artikli={artikli} categoryName={categoryName} />;
}
