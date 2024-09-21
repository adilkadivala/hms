import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Insert = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (url, data) => {
    setError(null);

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        toast.success("Data inserted successfully!");
        navigate("/doctors");
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      setError(error.message || "An error occurred");
    }
  };

  return { handleSubmit, error };
};
