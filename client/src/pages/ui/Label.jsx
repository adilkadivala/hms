import React from "react";

const Lable = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={
        className
          ? `${className}`
          : `inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200`
      }
    >
      {children}
    </label>
  );
};

export default Lable;
