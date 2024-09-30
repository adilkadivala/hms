import { lazy, useState, Suspense } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFetchApi } from "../../../storage/Fetch";
import { Delete } from "../../../utils/Delete";
import { AppointmentViewmodal } from "../compoenets/ViewModal";
import { filterFields } from "../../../constant/Fields";
import Input from "../../ui/Input";

const Table = lazy(() => import("../../ui/Table"));
const Layout = lazy(() => import("../layout/Main"));
const Button = lazy(() => import("../../ui/Button"));
const DeleteModal = lazy(() => import("../compoenets/DeleteModal"));

const PORT = import.meta.env.VITE_SERVER_API;

const Appointment = () => {
  const {
    appointments,
    isLoading,
    error,
    hospitals,
    doctors,
    patients,
    getAppointments,
  } = useFetchApi();
  const navigate = useNavigate();
  const { deleteData, setError, setIsLoading } = Delete();

  // states
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);
  const [inputName, setInputName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [filterData, setFilterData] = useState({ ...filterFields });

  // modal handler
  const toggleModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
    setInputName("");
    setNameError(null);
  };

  // edit Appointment handler
  const toggleUpdateDoctor = (appointment) => {
    navigate("/appointment-form", { state: { appointment } });
  };

  // delete process
  const conformDelete = (appointment) => {
    setAppointmentData(appointment);
    console.log(appointment);
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

  // view modal
  const toggleViewModal = (appointmentView) => {
    setAppointmentData(appointmentView);
    setIsViewModalOpen((prev) => !prev);
  };

  // filter handler
  const inputFilterHandler = (e) => {
    const { name, value } = e.target;

    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const columns = [
    { Header: "Token Number", accessor: "token_number" },
    { Header: "patient Name", accessor: "patient_id" },
    { Header: "Contact no", accessor: "contact_no" },
    { Header: "Doctor Name", accessor: "doctor_id" },
    { Header: "Address", accessor: "patient_address" },
    { Header: "Status", accessor: "Status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const filteredAppointments = appointments.filter((appointment) => {
    const patient = patients.find((p) => p.id === appointment.patient_id);
    const doctor = doctors.find((d) => d.id === appointment.doctor_id);

    const matchesToken = filterData.tokenNo
      ? appointment.token_number
          .toLowerCase()
          .includes(filterData.tokenNo.toLowerCase())
      : true;

    const matchesPhone = filterData.mobileNo
      ? patient && patient.phone
        ? patient.phone
            .toLowerCase()
            .includes(filterData.mobileNo.toLowerCase())
        : false
      : true;

    const matchesDoctor = filterData.doctorName
      ? doctor && doctor.Doctor_name
        ? doctor.Doctor_name.toLowerCase().includes(
            filterData.doctorName.toLowerCase()
          )
        : false
      : true;

    return matchesToken && matchesPhone && matchesDoctor;
  });

  const tableData = filteredAppointments.map((appointment) => {
    const patient = patients.find((p) => p.id === appointment.patient_id);
    const hospital = hospitals.find((h) => h.id === appointment.hospital_id);
    const doctor = doctors.find((d) => d.id === appointment.doctor_id);

    return {
      token_number: appointment.token_number,
      patient_id: patient
        ? patient.first_name + " " + patient.last_name
        : "Unknown",
      // hospital_id: hospital ? hospital.H_name : "Unknown",
      contact_no: patient ? patient.contact : "Unknown",
      patient_address: patient ? patient.city : "Unknown",
      doctor_id: doctor ? doctor.Doctor_name : "Unknown",
      Appointment_type: appointment.Appointment_type,
      Status: appointment.Status,
      actions: (
        <div className="flex items-center justify-center gap-3">
          <Button
            className="bg-none border-none"
            onClick={() => toggleUpdateDoctor(appointment)}
          >
            <i className="fa-solid fa-pen text-primary"></i>
          </Button>
          <Button
            className="bg-none border-none text-red-600"
            onClick={() => conformDelete(appointment)}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
          <Button
            className="bg-none border-none"
            onClick={() => toggleViewModal(appointment)}
          >
            <i className="fa-solid fa-eye text-slate-400"></i>
          </Button>
        </div>
      ),
    };
  });

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between align-middle text-center">
          <h1 className="text-2xl font-bold mb-4">Appintments</h1>
          <NavLink to="/appointment-form">
            <span className="border-b-2 border-b-primary">Add +</span>
          </NavLink>
        </div>

        <div className="flex gap-4 mb-4">
          <Input
            type="text"
            placeHolder="Filter by Token Number"
            name="tokenNo"
            value={filterData.tokenNo}
            onChange={inputFilterHandler}
            className="border p-2"
          />
          <Input
            type="text"
            name="mobileNo"
            placeHolder="Filter by Phone Number"
            value={filterData.mobileNo}
            onChange={inputFilterHandler}
            className="border p-2"
          />
          <select
            className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
            id="doctorName"
            name="doctorName"
            value={filterData.doctorName}
            onChange={inputFilterHandler}
          >
            <option value="" disabled>
              filter by doctor
            </option>
            {doctors?.map((doctor) => (
              <option value={doctor.Doctor_name} key={doctor.id}>
                {doctor.Doctor_name}
              </option>
            ))}
          </select>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {appointments && (
          <Suspense fallback="data is loading...">
            <Table columns={columns} data={tableData} />
          </Suspense>
        )}

        {isDeleteModalOpen && appointmentData && (
          <Suspense fallback="delete modal is loading...">
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
          </Suspense>
        )}

        {isViewModalOpen && (
          <Suspense fallback="view modal is loading...">
            <AppointmentViewmodal
              toggleModal={toggleViewModal}
              appointmentToView={appointmentData}
            />
          </Suspense>
        )}
      </div>
    </Layout>
  );
};

export default Appointment;
