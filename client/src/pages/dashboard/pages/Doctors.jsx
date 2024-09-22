import { useEffect, useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import { Fetch } from "../../../utils/Fetch";
import { NavLink, useNavigate } from "react-router-dom";
import { Delete } from "../../../utils/Delete";
import ViewModal from "../compoenets/ViewModal";
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
  const [DoctorID, setDoctorID] = useState(null);
  const [doctorNameInput, setDoctorNameInput] = useState("");
  const [nameError, setNameError] = useState(null);

  // edit Doctor handler
  const toggleUpdateDoctor = (doctor) => {
    navigate("/dashboard", { state: { doctor } });
  };

  // delete modal
  const toggleModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
    setDoctorNameInput("");
    setNameError(null);
  };

  // view Modal
  const toggleViewModal = (DoctorView) => {
    setIsViewModalOpen((prev) => !prev);
    setDoctorID(DoctorView);
  };

  // getting data via network api on page rendering
  useEffect(() => {
    getData(API);
  }, []);

  // delete conformation
  const confirmDelete = (doctor) => {
    setDoctorID(doctor);
    toggleModal();
  };

  // deleting Data
  const handleDelete = async () => {
    if (DoctorID.Doctor_name === doctorNameInput) {
      setIsLoading(true);
      try {
        const apiUrl = `${PORT}/deletedoctor/${DoctorID.id}`;
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
          <div className="flex items-center gap-1">
            <Button
              className="py-2 px-3 rounded-full bg-primary text-white"
              onClick={() => toggleUpdateDoctor(doctor)}
            >
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
              onClick={() => toggleViewModal(doctor)}
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

        {/* delete modal */}
        {isDeleteModalOpen && DoctorID && (
          <DeleteModal
            toggleModal={toggleModal}
            handleDelete={handleDelete}
            DoctorIDForDelete={DoctorID}
            setDoctorNameInput={setDoctorNameInput}
            nameError={nameError}
            doctorNameInput={doctorNameInput}
          />
        )}
        {/* delete modal */}

        {/* view modal */}
        {isViewModalOpen && (
          <ViewModal toggleModal={toggleViewModal} doctorToView={DoctorID} />
        )}
        {/* view modal */}
      </div>
    </Layout>
  );
};

export default Doctor;
