import { useEffect, useState } from "react";
import Table from "../../ui/Table";
import Input from "../../ui/Input";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import { Fetch } from "../../../utils/Fetch";
import { NavLink } from "react-router-dom";
import { Delete } from "../../../utils/Delete";
import Modal from "../../ui/Modal";
import { handleModelInput } from "../../../utils/handleInput";

const PORT = import.meta.env.VITE_SERVER_API;
const API = `${PORT}/getdoctors`;

const Doctor = () => {
  const { data, isLoading, error, getData } = Fetch();
  const { deleteData, setError, setIsLoading } = Delete();

  const [isModalOpen, setModalOpen] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);
  const [doctorNameInput, setDoctorNameInput] = useState("");
  const [nameError, setNameError] = useState(null);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
    setDoctorNameInput("");
    setNameError(null);
  };

  useEffect(() => {
    getData(API);
  }, []);

  const confirmDelete = (doctor) => {
    setDoctorToDelete(doctor);
    toggleModal();
  };

  // Deleting doctor after name validation
  const handleDelete = async () => {
    if (doctorToDelete.Doctor_name === doctorNameInput) {
      setIsLoading(true);
      try {
        const apiUrl = `${PORT}/deletedoctor/${doctorToDelete.id}`;
        await deleteData(apiUrl);
        getData(API);
        toggleModal();
      } catch (error) {
        setError(error);
      }
    } else {
      setNameError(
        "Doctor's name doesn't match. Please enter the correct name."
      );
    }
  };

  const columns = [
    { Header: "image", accessor: "Profile_image" },
    { Header: "Doctor Name", accessor: "Doctor_name" },
    { Header: "Doctor Degree", accessor: "Doctor_degree" },
    { Header: "Doctor Speciality", accessor: "Doctor_speciality" },
    { Header: "Whatsapp Number", accessor: "Whatsapp_no" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const tableData = data
    ? data.map((doctor) => ({
        Profile_image: `/upload/${doctor.Profile_image}`,
        Doctor_name: doctor.Doctor_name,
        Doctor_degree: doctor.Doctor_degree,
        Doctor_speciality: doctor.Doctor_speciality,
        Whatsapp_no: doctor.Whatsapp_no,
        status: doctor.status,
        actions: (
          <div className="flex items-center gap-1">
            <Button className="py-2 px-3 rounded-full bg-primary text-white">
              <i className="fa-solid fa-pen"></i>
            </Button>
            <Button
              className="py-2 px-3 rounded-full bg-red-600 text-white"
              onClick={() => confirmDelete(doctor)}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
            <Button
              className="py-2 px-3 rounded-full bg-slate-400 text-white"
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
        <div className="flex justify-between align-middle text-center">
          <h1 className="text-2xl font-bold mb-4">Doctors</h1>
          <NavLink to="/dashboard">
            <span className="border-b-2 border-b-primary">Add +</span>
          </NavLink>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {data && <Table columns={columns} data={tableData} />}

        {isModalOpen && doctorToDelete && (
          <Modal
            onClose={toggleModal}
            title="Delete Confirmation"
            data={doctorToDelete}
            footer={
              <>
                <Button
                  className="bg-red-600 text-white py-2 px-4 rounded-full"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button
                  className="bg-gray-600 text-white py-2 px-4 rounded-full"
                  onClick={toggleModal}
                >
                  Cancel
                </Button>
              </>
            }
          >
            <div className="flex flex-col gap-3">
              <p>
                Are you sure you want to delete
                <span className="text-primary">
                  {doctorToDelete.Doctor_name}?
                </span>
              </p>
              <p>Write Down Doctor's Name to Confirm:</p>
              <Input
                type="text"
                name="doctorNameInput"
                placeHolder="Dr. Name Here"
                value={doctorNameInput}
                onChange={handleModelInput(setDoctorNameInput)}
              />
              {nameError && <p className="text-red-600">{nameError}</p>}
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default Doctor;
