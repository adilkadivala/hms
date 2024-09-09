import { Fetch } from "../constant/Fetch";
import { createContext, useContext } from "react";

const fetchApi = createContext();

export const FetchApiProvider = ({ children }) => {
  const { data, isLoading, error, getData } = Fetch();

  return (
    <fetchApi.Provider value={{ data, isLoading, error, getData }}>
      {children}
    </fetchApi.Provider>
  );
};

export const useFetchApi = () => useContext(fetchApi);
