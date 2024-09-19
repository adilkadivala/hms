import { useState } from "react";
import axios from "axios";

export const Delete = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //   function
  const deleteData = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.delete(url);
      if (response.status === 200) {
        setData(response.data);
      } else {
        setError(Error(`Received status ${response.status}`));
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return { deleteData, setError, setIsLoading };
};
