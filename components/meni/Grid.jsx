const Grid = ({ children, klase }) => {
  return (
    <section
      className={`py-2 w-full h-auto grid md:grid-cols-2 xl:grid-cols-3 gap-x-4  ${
        klase || ''
      }`}
    >
      {children}
    </section>
  );
};

export default Grid;
