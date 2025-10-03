import { meni } from '@/utils/links';

export const getButtonCategory = [
  ...new Set(meni.map((item) => item.category)),
];

export const getAll = () => {
  return meni;
};

export const getByCategory = (category) => {
  const categ = meni.filter((item) => item.category === category);
  return categ;
};

export const getSingleByCategory = (category) => {
  const categ = meni.filter((item) => item.category === category);
  const categoryLength = categ.length;
  const index = Math.floor(Math.random() * categoryLength);
  return categ[index];
};

export const getSingleProt = (category) => {
  const categ = meni.filter((item) => item.category === category);
  const categoryLength = categ.length;
  let index = Math.floor(Math.random() * categoryLength);
  if (index === 2) {
    index += 1;
  }
  return categ[index];
};

export const getSingleProduct = (id) => {
  const artikal = meni.find((item) => item.id === id);
  return artikal;
};
