const Input = ({ type, name, className, id, onInput, ...props }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`dark:bg-secondry py-3 px-4 block w-full border border-black rounded-lg text-lg ${className}`}
      onInput={onInput}
      {...props}
    />
  );
};

export default Input;
