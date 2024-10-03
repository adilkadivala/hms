import { useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";

const PORT = import.meta.env.VITE_SERVER_API;

import { NavLink, useNavigate } from "react-router-dom";
import { Delete } from "../../../utils/Delete";
import DeleteModal from "../compoenets/DeleteModal";
import { HospitalViewModal } from "../compoenets/ViewModal";
import { useFetchApi } from "../../../storage/Fetch";

const Hospital = () => {
  // functions
  const { hospitals, isLoading, error, getHospitals } = useFetchApi();
  const { deleteData, setError, setIsLoading } = Delete();
  const navigate = useNavigate();
  // states
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [inputName, setInputName] = useState("");
  const [hospitalData, setHospitalData] = useState(null);
  const [nameError, setNameError] = useState(null);

  // handler
  const toggleModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
    setInputName("");
    setNameError(null);
  };

  const toggleUpdateHospital = (hospital) => {
    navigate(`/hospital-profile/${hospital.id}`);
  };

  // delete conformation
  const confirmDelete = (hospital) => {
    setHospitalData(hospital);
    toggleModal();
  };

  const handleDelete = async () => {
    if (hospitalData.H_name === inputName) {
      setIsLoading(true);
      try {
        const apiURL = `${PORT}/deletehospital/${hospitalData.id}`;
        await deleteData(apiURL);
        getHospitals();
        toggleModal();
      } catch (error) {
        setError(error);
      }
    } else {
      setNameError(
        "Hospital's name doesn't match. Please enter the correct name."
      );
    }
  };

  // view Modal
  const toggleViewModal = (hospitalView) => {
    setIsViewModalOpen((prev) => !prev);
    setHospitalData(hospitalView);
  };

  const columns = [
    { Header: "image", accessor: "H_image" },
    { Header: "Hospital Name", accessor: "H_name" },
    { Header: "Hospital Category", accessor: "H_category" },
    { Header: "Email", accessor: "H_email_id" },
    { Header: "Contact Number", accessor: "H_contact_no" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const tableData = hospitals
    ? hospitals.map((hospital) => ({
        H_image: `/upload/${hospital.H_image}`,
        H_name: hospital.H_name,
        H_category: hospital.H_category,
        H_email_id: hospital.H_email_id,
        H_contact_no: hospital.H_contact_no,
        status: hospital.status,
        actions: (
          <div className="flex items-center justify-center gap-3">
            <Button
              className="bg-none border-none"
              onClick={() => toggleUpdateHospital(hospital)}
            >
              <i className="fa-solid fa-pen text-primary"></i>
            </Button>
            <Button
              className=" bg-none border-none"
              onClick={() => confirmDelete(hospital)}
            >
              <i className="fa-solid fa-trash text-red-600"></i>
            </Button>
            <Button
              className="bg-none border-none"
              onClick={() => toggleViewModal(hospital)}
            >
              <i className="fa-solid fa-eye text-slate-400"></i>
            </Button>
          </div>
        ),
      }))
    : [];

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between align-middle text-center">
          <h1 className="text-2xl font-bold mb-4">Hospitals</h1>
          <NavLink to="/hospital-profile">
            <span className="border-b-2 border-b-primary">Add +</span>
          </NavLink>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {hospitals && <Table columns={columns} data={tableData} />}

        {isViewModalOpen && (
          <HospitalViewModal
            toggleModal={toggleViewModal}
            hospitalToView={hospitalData}
          />
        )}

        {isDeleteModalOpen && hospitalData && (
          <DeleteModal
            toggleModal={toggleModal}
            handleDelete={handleDelete}
            conformDataName={hospitalData.H_name}
            setInputName={setInputName}
            nameError={nameError}
            inputName={inputName}
            placeHolder="hospital Name here"
            conformText="Write down hospital name below"
          />
        )}
      </div>
    </Layout>
  );
};

export default Hospital;
