import { useEffect } from "react";
import { useState } from "react";
import { Fetch } from "../../../constant/Fetch";
import Table from "../../ui/Table";
import Layout from "../component/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const API = "http://localhost:5665/getfacultybyhospital";

const Faculty = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "First Name", accessor: "User_first_name" },
    { Header: "Last Name", accessor: "User_last_name" },
    { Header: "Role", accessor: "User_role" },
    { Header: "Assistent Of", accessor: "Assistant_doctor" },
    { Header: "Gender", accessor: "Gender" },
    { Header: "Hospital Name", accessor: "Hospital_id" },
    { Header: "Status", accessor: "Status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const { getData, data, isLoading, error } = Fetch();

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = data
    ? data.map((faculty) => ({
        User_first_name: faculty.User_first_name,
        User_last_name: faculty.User_last_name,
        User_role: faculty.User_role,
        Assistant_doctor: faculty.Assistant_doctor,
        Gender: faculty.Gender,
        Hospital_id: faculty.Hospital_id,
        Status: faculty.Status,
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
        <h1 className="text-2xl font-bold mb-4">Faculty Table</h1>

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

export default Faculty;
