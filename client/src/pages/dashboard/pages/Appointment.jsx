import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFetchApi } from "../../../storage/Fetch";
import DeleteModal from "../compoenets/DeleteModal";
import { Delete } from "../../../utils/Delete";
import { AppointmentViewmodal } from "../compoenets/ViewModal";
const PORT = import.meta.env.VITE_SERVER_API;

const Appointment = () => {
  const {
    appointments,
    isLoading,
    error,
    hospitals,
    doctors,
    patients,
    getAppointments,
  } = useFetchApi();
  const navigate = useNavigate();
  const { deleteData, setError, setIsLoading } = Delete();

  // states
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);
  const [inputName, setInputName] = useState("");
  const [nameError, setNameError] = useState(null);

  // moddal handler
  const toggleModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
    setInputName("");
    setNameError(null);
  };

  // edit Appointment handler
  const toggleUpdateDoctor = (appointment) => {
    console.log(appointment);
    navigate("/appointment-form", { state: { appointment } });
  };

  // delete process
  const conformDelete = (appointment) => {
    setAppointmentData(appointment);
    console.log(appointment);
    toggleModal();
  };

  // deleting Data
  const handleDelete = async () => {
    if (appointmentData.token_number === inputName) {
      setIsLoading(true);
      try {
        const apiUrl = `${PORT}/deleteappointments/${appointmentData.id}`;
        await deleteData(apiUrl);
        getAppointments();
        toggleModal();
      } catch (error) {
        setError(error);
      }
    } else {
      setNameError("Token doesn't match. Please enter the correct Token.");
    }
  };

  // view modal
  // view Modal
  const toggleViewModal = (appointmentView) => {
    setIsViewModalOpen((prev) => !prev);
    setAppointmentData(appointmentView);
  };

  const columns = [
    { Header: "patient Name", accessor: "patient_id" },
    { Header: "Hospital Name", accessor: "hospital_id" },
    { Header: "Appointment Type", accessor: "Appointment_type" },
    { Header: "Doctor Name", accessor: "doctor_id" },
    { Header: "Token Number", accessor: "token_number" },
    { Header: "Status", accessor: "Status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const tableData = appointments
    ? appointments.map((appointment) => {
        const patient = patients.find((p) => p.id === appointment.patient_id);

        const hospital = hospitals.find(
          (h) => h.id === appointment.hospital_id
        );
        const doctor = doctors.find((d) => d.id === appointment.doctor_id);

        return {
          patient_id: patient ? patient.first_name : "Unknown",
          hospital_id: hospital ? hospital.H_name : "Unknown",
          Appointment_type: appointment.Appointment_type,
          doctor_id: doctor ? doctor.Doctor_name : "Unknown",
          token_number: appointment.token_number,
          Status: appointment.Status,
          actions: (
            <div className="flex items-center justify-center gap-3">
              <Button
                className="bg-none border-none"
                onClick={() => toggleUpdateDoctor(appointment)}
              >
                <i className="fa-solid fa-pen text-primary"></i>
              </Button>
              <Button
                className="bg-none border-none text-red-600"
                onClick={() => conformDelete(appointment)}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
              <Button
                className="bg-none border-none"
                onClick={() => toggleViewModal(appointment)}
              >
                <i className="fa-solid fa-eye text-slate-400"></i>
              </Button>
            </div>
          ),
        };
      })
    : [];

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between align-middle text-center">
          <h1 className="text-2xl font-bold mb-4">Appintments</h1>
          <NavLink to="/appointment-form">
            <span className="border-b-2 border-b-primary">Add +</span>
          </NavLink>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {appointments && <Table columns={columns} data={tableData} />}

        {isDeleteModalOpen && appointmentData && (
          <DeleteModal
            toggleModal={toggleModal}
            handleDelete={handleDelete}
            setInputName={setInputName}
            nameError={nameError}
            conformDataName={appointmentData.token_number}
            placeHolder="Token Number"
            conformText="Write down token number below"
            inputName={inputName}
          />
        )}

        {isViewModalOpen && (
          <AppointmentViewmodal
            toggleModal={toggleViewModal}
            appointmentToView={appointmentData}
          />
        )}
      </div>
    </Layout>
  );
};

export default Appointment;
