import { useState } from "react";
import axios from "axios";

export const Fetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data;
      } else {
        setError(Error(`Received status ${response.status}`));
        return null;
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { getData, isLoading, error };
};
