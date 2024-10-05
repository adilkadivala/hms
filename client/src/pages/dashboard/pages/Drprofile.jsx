import React, { useState } from "react";
import { Delete } from "../../../utils/Delete";
import { useParams } from "react-router-dom";
import { useFetchApi } from "../../../storage/Fetch";
import { useUpdate } from "../../../utils/Update";

import Layout from "../layout/Main";
import DeleteModal from "../compoenets/DeleteModal";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import axios from "axios";

const PORT = import.meta.env.VITE_SERVER_API;

const Drprofile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("in-opd");
  const { doctors, appointments, patients, getAppointments } = useFetchApi();
  const { deleteData, setError, setIsLoading } = Delete();
  const { handleUpdateSubmit } = useUpdate();

  const [inputName, setInputName] = useState("");
  const [appointmentData, setAppointmentData] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const DrData = doctors.find((doctor) => doctor.id === parseInt(id));

  const doctorAppointments = appointments.filter(
    (appointment) => appointment.doctor_id === parseInt(id)
  );

  const toggleStatus = async (appointment, newStatus) => {
    try {
      // Update the appointment with the new status
      await handleUpdateSubmit(
        `${PORT}/updateappointments/${appointment.id}`, // Update the specific appointment
        {
          ...appointment,
          Status: newStatus, // Only change the status field
        }
      );
      getAppointments(); // Refresh appointments after updating
    } catch (error) {
      console.error("Update error:", error);
      setError(error.message || "An error occurred while updating");
    }
  };

  // Update the tableData to include the toggleStatus function
  const tableData = doctorAppointments.map((appointment) => {
    const patient = patients.find((p) => p.id === appointment.patient_id);

    const actions = (
      <div className="flex gap-3">
        <Button
          className="bg-none border-none"
          onClick={() => conformDelete(appointment)}
        >
          <i className="fa-solid fa-trash text-red-600"></i>
        </Button>

        {/* Only show the buttons that are relevant to the current status */}
        {appointment.Status === "in-opd" && (
          <Button
            className="bg-none border-none"
            onClick={() => toggleStatus(appointment, "pending")}
          >
            <i className="fa-solid fa-hourglass-start text-yellow-500"></i>
          </Button>
        )}

        {appointment.Status === "in-opd" && (
          <Button
            className="bg-none border-none"
            onClick={() => toggleStatus(appointment, "absent")}
          >
            <i className="fa-solid fa-times text-red-500"></i>
          </Button>
        )}

        {appointment.Status === "pending" && (
          <Button
            className="bg-none border-none"
            onClick={() => toggleStatus(appointment, "in-opd")}
          >
            <i className="fa-regular fa-handshake text-primary"></i>
          </Button>
        )}
        {appointment.Status === "pending" && (
          <Button
            className="bg-none border-none"
            onClick={() => toggleStatus(appointment, "absent")}
          >
            <i className="fa-solid fa-times text-red-500"></i>
          </Button>
        )}

        {appointment.Status === "absent" && (
          <Button
            className="bg-none border-none"
            onClick={() => toggleStatus(appointment, "in-opd")}
          >
            <i className="fa-regular fa-handshake text-primary"></i>
          </Button>
        )}
        {appointment.Status === "absent" && (
          <Button
            className="bg-none border-none"
            onClick={() => toggleStatus(appointment, "pending")}
          >
            <i className="fa-solid fa-hourglass-start text-yellow-500"></i>
          </Button>
        )}
      </div>
    );

    return {
      token_number: appointment.token_number,
      patient_id: patient
        ? patient.first_name + " " + patient.last_name
        : "Unknown",
      contact_no: patient ? patient.contact : "Unknown",
      patient_address: patient ? patient.city : "Unknown",
      status: appointment.Status,
      actions: actions,
    };
  });

  const columns = [
    { Header: "Token Number", accessor: "token_number" },
    { Header: "Patient Name", accessor: "patient_id" },
    { Header: "Contact No", accessor: "contact_no" },
    { Header: "Address", accessor: "patient_address" },
    { Header: "Actions", accessor: "actions" },
  ];

  const renderTabContent = () => {
    let filteredData;

    switch (activeTab) {
      case "absent":
        filteredData = tableData.filter((data) => data.status === "absent");
        break;
      case "in-opd":
        filteredData = tableData.filter((data) => data.status === "in-opd");
        break;
      case "pending":
        filteredData = tableData.filter((data) => data.status === "pending");
        break;
      default:
        filteredData = [];
    }

    return (
      <div>
        {filteredData.length === 0 ? (
          <p className="text-gray-500">
            No patients available for this status.
          </p>
        ) : (
          <Table columns={columns} data={filteredData} />
        )}
      </div>
    );
  };

  if (!DrData) {
    return <p>Loading doctor information...</p>;
  }

  const {
    Profile_image,
    Doctor_name,
    Doctor_degree,
    Doctor_speciality,
    Address,
    Alternate_contact,
    Doctor_experience,
    Email_id,
    Whatsapp_no,
    Country,
    Region,
    City,
    status,
  } = DrData;

  // action operations

  // model status
  // modal handler
  const toggleModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
    setInputName("");
    setNameError(null);
  };

  // delete process
  const conformDelete = (appointment) => {
    setAppointmentData(appointment);
    toggleModal();
  };

  // deleting Data
  const handleDelete = async () => {
    if (appointmentData.token_number === inputName) {
      setIsLoading(true);
      try {
        const apiUrl = `${PORT}/deleteappointments/${appointmentData.id}`;
        await deleteData(apiUrl);
        getAppointments();
        toggleModal();
      } catch (error) {
        setError(error);
      }
    } else {
      setNameError("Token doesn't match. Please enter the correct Token.");
    }
  };

  return (
    <Layout>
      <section className="relative">
        <div className="flex gap-x-5 w-full">
          <div className="max-w-7xl">
            <div>
              <img
                src={`/upload/${Profile_image}`}
                alt="user-avatar-image"
                height={200}
                width={200}
                className="border border-solid border-primary rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
              <div className="block">
                <h5 className="text-2xl font-semibold text-gray-900 mb-1 dark:text-white">
                  {Doctor_name}
                </h5>
                <p className="font-normal text-base leading-7 text-gray-500">
                  {Doctor_degree}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="uppercase text-secondry dark:text-neutral-500">
              Specialist In :{" "}
              <span className="text-primary">{Doctor_speciality}</span>
            </h4>
            <h4 className="uppercase text-secondry dark:text-neutral-500">
              Email : <span className="text-primary">{Email_id}</span>
            </h4>
            <h4 className="uppercase text-secondry dark:text-neutral-500">
              Contact No : <span className="text-primary">{Whatsapp_no}</span>{" "}
              Alternate_contact :{" "}
              <span className="text-primary">{Alternate_contact}</span>
            </h4>
            <h4 className="uppercase text-secondry dark:text-neutral-500">
              Experience :{" "}
              <span className="text-primary">{Doctor_experience}</span>
            </h4>
            <h4 className="uppercase text-secondry dark:text-neutral-500">
              Country : <span className="text-primary">{Country}</span> Region :{" "}
              <span className="text-primary">{Region}</span> City :{" "}
              <span className="text-primary">{City}</span>
            </h4>
            <h4 className="uppercase text-secondry dark:text-neutral-500">
              Address : <span className="text-primary">{Address}</span>
            </h4>
            <h4 className="uppercase text-secondry dark:text-neutral-500">
              Status : <span className="text-primary">{status}</span>
            </h4>
          </div>
        </div>
      </section>

      <div className="text-sm font-medium  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <div
          onClick={() => setActiveTab("in-opd")}
          className={`inline-block p-4 border-b-2 rounded-t-lg ${
            activeTab === "in-opd"
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-gray-600 hover:border-gray-300"
          } dark:hover:text-gray-300`}
        >
          <p>
            Patients In OPD <i className="fa-regular fa-handshake"></i>
          </p>
        </div>

        <div
          onClick={() => setActiveTab("pending")}
          className={`inline-block p-4 border-b-2 rounded-t-lg ${
            activeTab === "pending"
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-gray-600 hover:border-gray-300"
          } dark:hover:text-gray-300`}
        >
          <p>
            Patients in Waiting <i className="fa-solid fa-hourglass-start "></i>
          </p>
        </div>

        <div
          onClick={() => setActiveTab("absent")}
          className={`inline-block p-4 border-b-2 rounded-t-lg ${
            activeTab === "absent"
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-gray-600 hover:border-gray-300"
          } dark:hover:text-gray-300`}
        >
          <p>
            Absents <i className="fa-solid fa-times"></i>
          </p>
        </div>
      </div>

      <div className="mt-4">{renderTabContent()}</div>

      {isDeleteModalOpen && appointmentData && (
        <DeleteModal
          toggleModal={toggleModal}
          handleDelete={handleDelete}
          setInputName={setInputName}
          nameError={nameError}
          conformDataName={appointmentData.token_number}
          placeHolder="Token Number"
          conformText="Write down token number below"
          inputName={inputName}
        />
      )}
    </Layout>
  );
};

export default Drprofile;
