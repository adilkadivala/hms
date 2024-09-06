import React from "react";

const Input = ({ type, name, className, id, children }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`${className}, dark:bg-secondry`}
      {...children}
    />
  );
};

export default Input;
