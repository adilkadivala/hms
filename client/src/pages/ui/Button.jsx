const Button = ({ name, className, children, onClick }) => {
  return (
    <button
      className={`${className} dark:bg-secondry border dark:text-white dark:border-white`}
      onClick={onClick}
    >
      {children} {name}
    </button>
  );
};

export default Button;
