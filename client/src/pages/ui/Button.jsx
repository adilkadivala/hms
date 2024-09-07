const Button = ({ name, className, children } = {}) => {
  return (
    <button className={`${className} dark:bg-secondry dark:text-white`}>
      {children} {name}
    </button>
  );
};

export default Button;
