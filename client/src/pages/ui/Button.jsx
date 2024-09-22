const Button = ({ name, className, children, onClick, type = "button" }) => {
  return (
    <button
      className={`${className} dark:bg-secondry border dark:text-white dark:border-white`}
      onClick={onClick}
      type={type}
    >
      {children} {name}
    </button>
  );
};

export default Button;
