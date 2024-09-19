import { useState } from "react";
import axios from "axios";

export const Insert = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post(INSRTAPI, formData);
      console.log("Doctor created:", response.data);
      if (response.status === 200) {
        setFormData({
          formData: "",
        });
        toast.success("Doctor created successfully!");
        navigate("/doctors");
      }
    } catch (error) {
      console.error("Error creating doctor:", error);
    }
  };

  return { handleSubmit, setIsLoading, setError };
};
