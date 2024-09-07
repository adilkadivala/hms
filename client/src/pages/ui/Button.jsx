const Button = ({ name, className, children, onClick } = {}) => {
  return (
    <button
      className={`${className} dark:bg-secondry dark:text-white`}
      onClick={onClick}
    >
      {children} {name}
    </button>
  );
};

export default Button;
