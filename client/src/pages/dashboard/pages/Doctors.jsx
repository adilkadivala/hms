import { useEffect, useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import { Fetch } from "../../../utils/Fetch";
import { NavLink, useNavigate } from "react-router-dom";
import { Delete } from "../../../utils/Delete";
import { DoctorViewModal } from "../compoenets/ViewModal";
import DeleteModal from "../compoenets/DeleteModal";

const PORT = import.meta.env.VITE_SERVER_API;
const API = `${PORT}/getdoctors`;

const Doctor = () => {
  // defined functions
  const { data, isLoading, error, getData } = Fetch();
  const { deleteData, setError, setIsLoading } = Delete();
  const navigate = useNavigate();

  // states
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [DoctorData, setDoctorData] = useState(null);
  const [inputName, setInputName] = useState("");
  const [nameError, setNameError] = useState(null);

  // edit Doctor handler
  const toggleUpdateDoctor = (doctor) => {
    navigate("/profile", { state: { doctor } });
  };

  // delete modal
  const toggleModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
    setInputName("");
    setNameError(null);
  };

  // view Modal
  const toggleViewModal = (DoctorView) => {
    setIsViewModalOpen((prev) => !prev);
    setDoctorData(DoctorView);
  };

  // getting data via network api on page rendering
  useEffect(() => {
    getData(API);
  }, []);

  // delete conformation
  const confirmDelete = (doctor) => {
    setDoctorData(doctor);
    toggleModal();
  };

  // deleting Data
  const handleDelete = async () => {
    if (DoctorData.Doctor_name === inputName) {
      setIsLoading(true);
      try {
        const apiUrl = `${PORT}/deletedoctor/${DoctorData.id}`;
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

  // table
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
          <div className="flex items-center justify-center gap-3">
            <Button
              className="bg-none border-none"
              onClick={() => toggleUpdateDoctor(doctor)}
            >
              <i className="fa-solid fa-pen text-primary"></i>
            </Button>
            <Button
              className=" bg-none border-none"
              onClick={() => confirmDelete(doctor)}
            >
              <i className="fa-solid fa-trash text-red-600"></i>
            </Button>
            <Button
              className="bg-none border-none"
              onClick={() => toggleViewModal(doctor)}
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
          <h1 className="text-2xl font-bold mb-4">Doctors</h1>
          <NavLink to="/profile">
            <span className="border-b-2 border-b-primary">Add +</span>
          </NavLink>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {data && <Table columns={columns} data={tableData} />}

        {/* delete modal */}
        {isDeleteModalOpen && DoctorData && (
          <DeleteModal
            toggleModal={toggleModal}
            handleDelete={handleDelete}
            setInputName={setInputName}
            nameError={nameError}
            conformDataName={DoctorData.Doctor_name}
            placeHolder="Dr. name"
            conformText="Write down Dr. name below"
            inputName={inputName}
          />
        )}
        {/* delete modal */}

        {/* view modal */}
        {isViewModalOpen && (
          <DoctorViewModal toggleModal={toggleViewModal} doctorToView={DoctorData} />
        )}
        {/* view modal */}
      </div>
    </Layout>
  );
};

export default Doctor;
