import { useEffect } from "react";
import { useState } from "react";
import { Fetch } from "../../../constant/Fetch";
import Table from "../../ui/Table";
import Layout from "../component/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const API = "http://localhost:5665/getdoctorbyhospital";

const Doctor_by_Hospital = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "Doctor Name", accessor: "Doctor_id" },
    { Header: "Hospital Name", accessor: "Hospital_id" },
    { Header: "Old case rate", accessor: "Old_case_rate" },
    { Header: "New case rate", accessor: "New_case_rate" },
    { Header: "Department", accessor: "Department_id" },
    { Header: "status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const { getData, data, isLoading, error } = Fetch();

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = data
    ? data.map((Doctor_by_Hospital) => ({
        Doctor_id: Doctor_by_Hospital.Doctor_id,
        Hospital_id: Doctor_by_Hospital.Hospital_id,
        Old_case_rate: Doctor_by_Hospital.Old_case_rate,
        New_case_rate: Doctor_by_Hospital.New_case_rate,
        Department_id: Doctor_by_Hospital.Department_id,
        status: Doctor_by_Hospital.status,
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
        <h1 className="text-2xl font-bold mb-4">Hospital wise Doctors</h1>

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

export default Doctor_by_Hospital;
