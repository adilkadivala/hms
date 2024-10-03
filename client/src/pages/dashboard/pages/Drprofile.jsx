import React, { useState, useEffect } from "react";
import Layout from "../layout/Main";
import Table from "../../ui/Table";
import { useParams } from "react-router-dom";
import { useFetchApi } from "../../../storage/Fetch";

const Drprofile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("visited");
  const { doctors, appointments, patients } = useFetchApi();

  const DrData = doctors.find((doctor) => doctor.id === parseInt(id));

  const doctorAppointments = appointments.filter(
    (appointment) => appointment.doctor_id === parseInt(id)
  );

  const tableData = doctorAppointments.map((appointment) => {
    const patient = patients.find((p) => p.id === appointment.patient_id);

    return {
      token_number: appointment.token_number,
      patient_id: patient
        ? patient.first_name + " " + patient.last_name
        : "Unknown",
      contact_no: patient ? patient.contact : "Unknown",
      patient_address: patient ? patient.city : "Unknown",
      status: appointment.Status,
    };
  });

  const columns = [
    { Header: "Token Number", accessor: "token_number" },
    { Header: "Patient Name", accessor: "patient_id" },
    { Header: "Contact No", accessor: "contact_no" },
    { Header: "Address", accessor: "patient_address" },
  ];

  const renderTabContent = () => {
    let filteredData;

    switch (activeTab) {
      case "visited":
        filteredData = tableData.filter((data) => data.status === "visited");
        break;
      case "scheduled":
        filteredData = tableData.filter((data) => data.status === "in-opd");
        break;
      case "type":
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
          onClick={() => setActiveTab("visited")}
          className={`inline-block p-4 border-b-2 rounded-t-lg ${
            activeTab === "visited"
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-gray-600 hover:border-gray-300"
          } dark:hover:text-gray-300`}
        >
          <p>Patients Visited</p>
        </div>

        <div
          onClick={() => setActiveTab("scheduled")}
          className={`inline-block p-4 border-b-2 rounded-t-lg ${
            activeTab === "scheduled"
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-gray-600 hover:border-gray-300"
          } dark:hover:text-gray-300`}
        >
          <p>Patients In OPD</p>
        </div>

        <div
          onClick={() => setActiveTab("type")}
          className={`inline-block p-4 border-b-2 rounded-t-lg ${
            activeTab === "type"
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-gray-600 hover:border-gray-300"
          } dark:hover:text-gray-300`}
        >
          <p>Pending Patients</p>
        </div>
      </div>

      <div className="mt-4">{renderTabContent()}</div>
    </Layout>
  );
};

export default Drprofile;
