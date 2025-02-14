const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-6xl xl:max-w-7xl   shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Container;
