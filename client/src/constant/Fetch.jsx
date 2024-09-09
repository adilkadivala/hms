import { useState } from "react";
import axios from "axios";

// export const Fetch = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getData = async (url) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(url);
//       if (response.status === 200) {
//         setData(response.data);
//       } else {
//         setError(`Error: Received status ${response.status}`);
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "An error occurred");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { getData, data, isLoading, error };
// };

export const Fetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
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

  return { getData, data, isLoading, error };
};
