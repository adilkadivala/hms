const Button = ({ name, className, children, onClick, ...props }) => {
  return (
    <button
      className={`${className} dark:bg-secondry border dark:text-white dark:border-white`}
      onClick={onClick}
      {...props} // submit
    >
      {children} {name}
    </button>
  );
};

export default Button;
