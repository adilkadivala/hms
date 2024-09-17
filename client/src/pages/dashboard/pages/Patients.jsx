import { useEffect } from "react";
import { useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { Fetch } from "../../../constant/Fetch";
const PORT = import.meta.env.VITE_SERVER_API;
const API = `${PORT}/getpatients`;

const Patient = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "First Name", accessor: "First_name" },
    { Header: "Middle Name", accessor: "Middle_name" },
    { Header: "Last Name", accessor: "Last_name" },
    { Header: "Gender", accessor: "Gender" },
    { Header: "DOB", accessor: "DOB" },
    { Header: "Contact Number", accessor: "Contact" },
    { Header: "Address", accessor: "Address" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const { data, isLoading, error, getData } = Fetch();

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = data
    ? data.map((patient) => ({
        First_name: patient.First_name,
        Middle_name: patient.Middle_name,
        Last_name: patient.Last_name,
        Gender: patient.Gender,
        DOB: patient.DOB,
        Contact: patient.Contact,
        Address: patient.Address,
        status: patient.status,
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
        <h1 className="text-2xl font-bold mb-4">Patient Table</h1>

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

export default Patient;
