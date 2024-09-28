import { useState } from "react";

export const togglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // password visibility handler
  const handlePasswordVisible = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  return { isPasswordVisible, handlePasswordVisible };
};
