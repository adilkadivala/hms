const Button = ({ name, className, children } = {}) => {
  return (
    <button className={className}>
      {children} {name}
    </button>
  );
};

export default Button;
