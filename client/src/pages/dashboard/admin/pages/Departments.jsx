import { useEffect } from "react";
import { useState } from "react";
import Table from "../../../ui/Table";
import Layout from "../compoenets/Main";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { useFetchApi } from "../../../../storage/Fetch";
const PORT = import.meta.env.VITE_SERVER_API;

const API = `${PORT}/getdepartments`;

const Deprtment = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { data, isLoading, error, getData } = useFetchApi();

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "Department Type", accessor: "Department_type" },
    { Header: "Hospital Name", accessor: "Hospital_id" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = data
    ? data.map((deprtment) => ({
        Department_type: deprtment.Department_type,
        Hospital_id: deprtment.Hospital_id,
        status: deprtment.status,
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
        <h1 className="text-2xl font-bold mb-4">Deprtment Table</h1>

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

export default Deprtment;
