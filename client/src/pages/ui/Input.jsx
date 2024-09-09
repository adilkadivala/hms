const Input = ({
  type,
  name,
  className,
  id,
  onInput,
  placeHolder,
  ...props
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`dark:bg-secondry dark:text-white py-3 px-4 block w-full border border-black rounded-lg text-lg ${className}`}
      onInput={onInput}
      placeholder={placeHolder}
      {...props}
    />
  );
};

export default Input;
