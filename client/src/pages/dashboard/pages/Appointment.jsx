import { useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { NavLink, useNavigate } from "react-router-dom";
import { useFetchApi } from "../../../storage/Fetch";
const PORT = import.meta.env.VITE_SERVER_API;

const Appointment = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { appointments, isLoading, error, hospitals, doctors, patients } =
    useFetchApi();
  const toggleModal = () => setModalOpen((prev) => !prev);
  const navigate = useNavigate();

  // edit Appointment handler
  const toggleUpdateDoctor = (appointment) => {
    navigate("/appointment-form", { state: { appointment } });
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
                onClick={() => toggleUpdateDoctor(appointments.id)}
              >
                <i className="fa-solid fa-pen text-primary"></i>
              </Button>
              <Button
                className="bg-none border-none text-red-600"
                onClick={toggleModal}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
              <Button className="bg-none border-none" onClick={toggleModal}>
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

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
            title="Vertically Centered Modal"
            footer={
              <>
                <Button
                  className="py-2 px-3 bg-gray-50 text-primary"
                  onClick={toggleModal}
                >
                  Close
                </Button>
                <Button className="py-2 px-3 bg-blue-600 text-white">
                  Save changes
                </Button>
              </>
            }
          >
            <p>This is a reusable modal component!</p>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default Appointment;
