import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


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
        toast.success("deleted Successfully");
        setIsLoading(false);
      } else {
        setError(Error(`Received status ${response.status}`));
        setIsLoading(false);
      }
    } catch (err) {
      toast.error(err.message);
      setIsLoading(false);
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return { deleteData, setError, setIsLoading };
};
