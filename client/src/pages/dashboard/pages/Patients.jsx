import { useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useFetchApi } from "../../../storage/Fetch";

const Patient = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { patients, isLoading, error } = useFetchApi();

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "First Name", accessor: "first_name" },
    { Header: "Middle Name", accessor: "middle_name" },
    { Header: "Last Name", accessor: "last_name" },
    { Header: "Gender", accessor: "gender" },
    { Header: "DOB", accessor: "dob" },
    { Header: "Contact Number", accessor: "contact" },
    { Header: "Address", accessor: "address" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const tableData = patients
    ? patients.map((patient) => ({
        first_name: patient.first_name,
        middle_name: patient.middle_name,
        last_name: patient.last_name,
        gender: patient.gender,
        dob: patient.dob,
        contact: patient.contact,
        address: patient.address,
        status: patient.status,
        actions: (
          <div className="flex items-center justify-center gap-3">
            <Button className="bg-none border-none" onClick={toggleModal}>
              <i className="fa-solid fa-pen text-primary"></i>
            </Button>
            <Button className=" bg-none border-none" onClick={toggleModal}>
              <i className="fa-solid fa-trash text-red-600"></i>
            </Button>
            <Button className="bg-none border-none" onClick={toggleModal}>
              <i className="fa-solid fa-eye text-slate-400"></i>
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
        {patients && <Table columns={columns} data={tableData} />}

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
