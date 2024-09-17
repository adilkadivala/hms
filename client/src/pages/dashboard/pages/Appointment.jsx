import { useEffect } from "react";
import { useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { Fetch } from "../../../constant/Fetch";
const PORT = import.meta.env.VITE_SERVER_API;
const API = `${PORT}/getappointments`;

const Appointment = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const { data, isLoading, error, getData } = Fetch();

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "patient Name", accessor: "patient_id" },
    { Header: "Hospital Name", accessor: "hospital_id" },
    { Header: "Appointment Type", accessor: "Appointment_type" },
    { Header: "Doctor Name", accessor: "doctor_by_hospital_id" },
    { Header: "Token Number", accessor: "token_number" },
    { Header: "Status", accessor: "Status" },
    { Header: "Actions", accessor: "actions" },
  ];

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = data
    ? data.map((appointment) => ({
        patient_id: appointment.patient_id,
        hospital_id: appointment.hospital_id,
        Appointment_type: appointment.Appointment_type,
        doctor_by_hospital_id: appointment.doctor_by_hospital_id,
        token_number: appointment.token_number,
        Status: appointment.Status,
        actions: (
          <div className="flex items-center gap-1">
            <Button
              className="py-2 px-3 rounded-full bg-primary text-white"
              onClick={toggleModal}
            >
              <i className="fa-solid fa-pen"></i>
            </Button>
            <Button
              className="py-2 px-3  rounded-full bg-red-600 text-white"
              onClick={toggleModal}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
            <Button
              className="py-2 px-3  rounded-full bg-slate-400 text-white"
              onClick={toggleModal}
            >
              <i className="fa-solid fa-eye"></i>
            </Button>
          </div>
        ),
      }))
    : [];

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Appointment Table</h1>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <Table columns={columns} data={tableData} />}

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
