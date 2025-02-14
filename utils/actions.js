import { meni } from "@/utils/links";

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

export const getSingleProduct = (id) => {
  const artikal = meni.find((item) => item.id === id);
  return artikal;
};
