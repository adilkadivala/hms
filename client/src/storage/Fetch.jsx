import { Fetch } from "../utils/Fetch";
import { createContext, useContext, useEffect, useState } from "react";

// APIs
const PORT = import.meta.env.VITE_SERVER_API;
const DOCTORAPI = `${PORT}/getdoctors`;
const HOSPITALAPI = `${PORT}/gethospitals`;
const PATIENTSAPI = `${PORT}/getpatients`;
const APPOINTMENTSAPI = `${PORT}/getappointments`;

const fetchApi = createContext();

export const FetchApiProvider = ({ children }) => {
  const { getData, isLoading, error } = Fetch();
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Define specific API calls for each dataset
  const getDoctors = async () => {
    const data = await getData(DOCTORAPI);
    setDoctors(data);
  };

  const getHospitals = async () => {
    const data = await getData(HOSPITALAPI);
    setHospitals(data);
  };

  const getPatients = async () => {
    const data = await getData(PATIENTSAPI);
    setPatients(data);
  };

  const getAppointments = async () => {
    const data = await getData(APPOINTMENTSAPI);
    setAppointments(data);
  };

  useEffect(() => {
    if (!doctors.length) {
      getDoctors();
    }
    if (!hospitals.length) {
      getHospitals();
    }
    if (!patients.length) {
      getPatients();
    }
    if (!appointments.length) {
      getAppointments();
    }
  }, []);

  return (
    <fetchApi.Provider
      value={{
        doctors,
        hospitals,
        patients,
        appointments,
        isLoading,
        error,
        getDoctors,
        getHospitals,
        getPatients,
        getAppointments,
      }}
    >
      {children}
    </fetchApi.Provider>
  );
};

export const useFetchApi = () => useContext(fetchApi);
