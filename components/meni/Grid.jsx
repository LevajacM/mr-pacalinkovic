const Grid = ({ children, klase }) => {
  return (
    <section
      className={`pb-2 w-full h-auto grid md:grid-cols-2 xl:grid-cols-3   gap-x-4 max-w-[1536px] mx-auto ${
        klase || ''
      }`}
    >
      {children}
    </section>
  );
};

export default Grid;
