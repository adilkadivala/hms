import { useEffect } from "react";
import { useState } from "react";
import { Fetch } from "../../../constant/Fetch";
import Table from "../../ui/Table";
import Layout from "../component/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import axios from "axios";

const API = "http://localhost:5665/getdoctors";

const Doctor = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const [formData, setFormData] = useState({
    Doctor_name: "",
    Doctor_degree: "",
    Doctor_experience: "",
    Doctor_speciality: "",
    Profile_image: null,
    Contact_no: "",
    Alternate_contact: "",
    Whatsapp_no: "",
    Email_id: "",
    Address: "",
    Country: "",
    Region: "",
    Password: "",
    status: "",
    Approval_status: "",
    Created_by: "",
    Updated_by: "",
    Approved_by: "",
    approved_date: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // toggleing for modal
  const toggleModal = () => setModalOpen((prev) => !prev);

  // inserting and updating data

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formdata = new FormData();
    formdata.append("Doctor_name", formData.Doctor_name);
    formdata.append("Doctor_degree", formData.Doctor_degree);
    formdata.append("Doctor_experience", formData.Doctor_experience);
    formdata.append("Doctor_speciality", formData.Doctor_speciality);
    formdata.append("Profile_image", formData.Profile_image);
    formdata.append("Contact_no", formData.Contact_no);
    formdata.append("Alternate_contact", formData.Alternate_contact);
    formdata.append("Whatsapp_no", formData.Whatsapp_no);
    formdata.append("Email_id", formData.Email_id);
    formdata.append("Address", formData.Address);
    formdata.append("Country", formData.Country);
    formdata.append("Region", formData.Region);
    formdata.append("Password", formData.Password);
    formdata.append("status", formData.status);
    formdata.append("Approval_status", formData.Approval_status);
    formdata.append("Created_by", formData.Created_by);
    formdata.append("Updated_by", formData.Updated_by);
    formdata.append("Approved_by", formData.Approved_by);
    formdata.append("approved_date", formData.approved_date);

    try {
      const url = isUpdateMode
        ? `http://localhost:5665/updatedoctors/${formData.id}`
        : `http://localhost:5665/insertdoctors`;

      const method = isUpdateMode ? "put" : "post";
      const response = await axios[method](url, formdata);

      if (response.status === 200) {
        setFormData({
          Doctor_name: "",
          Doctor_degree: "",
          Doctor_experience: "",
          Doctor_speciality: "",
          Profile_image: "",
          Contact_no: "",
          Alternate_contact: "",
          Whatsapp_no: "",
          Email_id: "",
          Address: "",
          Country: "",
          Region: "",
          Password: "",
          status: "",
          Approval_status: "",
          Created_by: "",
          Updated_by: "",
          Approved_by: "",
          approved_date: "",
        });
        alert("insert successfully");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { Header: "image", accessor: "Profile_image" },
    { Header: "Doctor Name", accessor: "Doctor_name" },
    { Header: "Doctor Degree", accessor: "Doctor_degree" },
    { Header: "Doctor Experience", accessor: "Doctor_experience" },
    { Header: "Doctor Speciality", accessor: "Doctor_speciality" },
    { Header: "Whatsapp Number", accessor: "Whatsapp_no" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const { getData, data: doctor, isLoading, error } = Fetch();

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = doctor
    ? doctor.map((doctor) => ({
        Profile_image: doctor.Profile_image,
        Doctor_name: doctor.Doctor_name,
        Doctor_degree: doctor.Doctor_degree,
        Doctor_experience: doctor.Doctor_experience,
        Doctor_speciality: doctor.Doctor_speciality,
        Whatsapp_no: doctor.Whatsapp_no,
        status: doctor.status,
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
        <div className="flex justify-between align-middle text-center my-2">
          <h1 className="text-2xl font-bold mb-4">Doctor Table</h1>
          <Button
            className="py-1 px-3 bg-gray-50 text-primary"
            onClick={toggleModal}
          >
            Add +
          </Button>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {doctor && <Table columns={columns} data={tableData} />}

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

export default Doctor;
