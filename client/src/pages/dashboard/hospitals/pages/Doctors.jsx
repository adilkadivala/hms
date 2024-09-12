import { useEffect } from "react";
import { useState } from "react";
import Table from "../../../ui/Table";
import Layout from "../compoenets/Main";
import Button from "../../../ui/Button";
import Form from "../../../ui/Form";
import Modal from "../../../ui/Modal";
import axios from "axios";
import { DoctorFields } from "../../../../constant/Fields";
import { useFetchApi } from "../../../../storage/Fetch";
const PORT = import.meta.env.VITE_SERVER_API;
const API = `${PORT}/getdoctors`;

const Doctor = () => {
  const { data, isLoading, error, getData } = useFetchApi();
  console.log(data);

  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const [formData, setFormData] = useState({});

  // toggleing for modal
  const toggleModal = () => setModalOpen((prev) => !prev);

  // inserting and updating data

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formdata = new FormData();
    formdata.append("Doctor_name", formData.doctorFormData.Doctor_name);
    formdata.append("Doctor_degree", formData.doctorFormData.Doctor_degree);
    formdata.append(
      "Doctor_experience",
      formData.doctorFormData.Doctor_experience
    );
    formdata.append(
      "Doctor_speciality",
      formData.doctorFormData.Doctor_speciality
    );
    formdata.append("Profile_image", formData.doctorFormData.Profile_image);
    formdata.append("Contact_no", formData.doctorFormData.Contact_no);
    formdata.append(
      "Alternate_contact",
      formData.doctorFormData.Alternate_contact
    );
    formdata.append("Whatsapp_no", formData.doctorFormData.Whatsapp_no);
    formdata.append("Email_id", formData.doctorFormData.Email_id);
    formdata.append("Address", formData.doctorFormData.Address);
    formdata.append("Country", formData.doctorFormData.Country);
    formdata.append("Region", formData.doctorFormData.Region);
    formdata.append("Password", formData.doctorFormData.Password);
    formdata.append("status", formData.doctorFormData.status);
    formdata.append("Approval_status", formData.doctorFormData.Approval_status);
    formdata.append("Created_by", formData.doctorFormData.Created_by);
    formdata.append("Updated_by", formData.doctorFormData.Updated_by);
    formdata.append("Approved_by", formData.doctorFormData.Approved_by);
    formdata.append("approved_date", formData.doctorFormData.approved_date);

    console.log("clicked");

    try {
      // const url = isUpdateMode
      //   ? `http://localhost:5665/updatedoctors/${formData.id}`
      //   : `http://localhost:5665/insertdoctors`;
      const url = `http://localhost:5665/insertdoctors`;

      // const method = isUpdateMode ? "put" : "post";
      const method = "post";
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

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = data
    ? data.map((doctor) => ({
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
            className="py-1 px-3 bg-gray-50 text-primary border border-primary rounded font-bold"
            onClick={toggleModal}
          >
            Add +
          </Button>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <Table columns={columns} data={tableData} />}

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
            width="w-[70vw]"
            height="h-[95vh]"
            title="Create a Doctor profile"
            footer={
              <>
                <Button
                  className="py-2 px-3 bg-gray-50 text-primary"
                  onClick={toggleModal}
                >
                  Close
                </Button>
              </>
            }
          >
            <div className="text-black dark:text-white">
              <Form
                fields={DoctorFields}
                className="flex flex-wrap gap-1"
                onSubmit={handleSubmit}
              />
            </div>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default Doctor;
