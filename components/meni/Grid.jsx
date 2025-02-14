const Grid = ({ children }) => {
  return (
    <section className='py-5 w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 '>
      {children}
    </section>
  );
};

export default Grid;
