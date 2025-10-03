const Container = ({ children, className }) => {
  return <div className={`   shadow-md ${className}`}>{children}</div>;
};

export default Container;
