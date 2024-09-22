import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useUpdate = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleUpdateSubmit = async (url, data) => {
    setError(null);
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
      console.log(data);
    }

    try {
      const response = await axios.put(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        toast.success("Data updated successfully!");
        navigate("/doctors");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setError(error.message || "An error occurred");
    }
  };
  return { handleUpdateSubmit, setError };
};
