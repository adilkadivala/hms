import { useEffect } from "react";
import { useState } from "react";
import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { Fetch } from "../../../constant/Fetch";
import { Delete } from "../../../constant/Delete";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { doctorFormData } from "../../../constant/Fields";
import axios from "axios";

const PORT = import.meta.env.VITE_SERVER_API;
const API = `${PORT}/getdoctors`;

const Doctor = () => {
  const { data, isLoading, error, getData } = Fetch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(doctorFormData);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await axios.put(`${PORT}/updatedoctors/${formData.id}`);

      if (response.ok) {
        toast.success("Doctor data saved successfully");
        toggleModal();
        getData(API);
        navigate("/doctors");
      } else {
        console.error("Failed to save doctor data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData(API);
  }, []);

  const toggleModal = (doctor) => {
    console.log("Selected Doctor:", doctor); // Log to check if doctor data is correct
    navigate("/dashboard", { state: { doctor } });
    setSelectedDoctor(doctor);
    setFormData(doctor);
    setUpdateModalOpen(!isUpdateModalOpen); // Open the modal
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
        Profile_image: doctor.Profile_image,
        Doctor_name: doctor.Doctor_name,
        Doctor_degree: doctor.Doctor_degree,
        Doctor_speciality: doctor.Doctor_speciality,
        Whatsapp_no: doctor.Whatsapp_no,
        status: doctor.status,
        actions: (
          <div className="flex items-center gap-1">
            <Button
              className="py-2 px-3 rounded-full bg-primary text-white"
              onClick={() => toggleModal(doctor)}
            >
              <i className="fa-solid fa-pen"></i>
            </Button>
            <Button className="py-2 px-3  rounded-full bg-red-600 text-white">
              <i className="fa-solid fa-trash"></i>
            </Button>
            <Button className="py-2 px-3  rounded-full bg-slate-400 text-white">
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

        {isUpdateModalOpen && (
          <Form
            className="flex flex-wrap gap-1"
            onSubmit={handleSubmit}
            setDate={setFormData}
            formData={formData}
          />
        )}
      </div>
    </Layout>
  );
};

export default Doctor;
