import { useEffect } from "react";
import { useState } from "react";
import Table from "../../../ui/Table";
import Layout from "../../component/Main";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { useFetchApi } from "../../../../storage/Fetch";
const PORT = import.meta.env.VITE_SERVER_API;
const API = `${PORT}/gethospitals`;

const Hospital = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "Hospital Image", accessor: "H_image" },
    { Header: "Hospital Name", accessor: "H_name" },
    { Header: "Hospital Category", accessor: "H_category" },
    { Header: "Email", accessor: "H_email_id" },
    { Header: "Contact Number", accessor: "H_contact_no" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const { data, isLoading, error, getData } = useFetchApi();

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = data
    ? data.map((hospital) => ({
        H_image: hospital.H_image,
        H_name: hospital.H_name,
        H_category: hospital.H_category,
        H_email_id: hospital.H_email_id,
        H_contact_no: hospital.H_contact_no,
        status: hospital.status,
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
        <h1 className="text-2xl font-bold mb-4">Hospital Table</h1>

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

export default Hospital;
