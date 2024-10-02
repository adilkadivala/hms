import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { useFetchApi } from "../../../storage/Fetch";

// doctor view modal
export const DoctorViewModal = ({
  toggleModal = () => {},
  doctorToView = {},
}) => {
  const {
    Doctor_name,
    Profile_image,
    Address,
    Alternate_contact,
    City,
    Country,
    Doctor_degree,
    Doctor_experience,
    Doctor_speciality,
    Email_id,
    Region,
    Whatsapp_no,
    status,
  } = doctorToView;
  return (
    <Modal
      onClose={toggleModal}
      title={`About  ${Doctor_name}`}
      data={doctorToView}
      width="w-[50%]"
      height="h-[55%]"
      footer={
        <>
          <Button
            className="bg-gray-600 text-white py-2 px-4 rounded-full"
            onClick={toggleModal}
          >
            Close
          </Button>
        </>
      }
    >
      <div className="flex flex-col rounded p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex items-center gap-x-4">
          <img
            className="rounded size-40"
            src={`/upload/${Profile_image}`}
            alt="Avatar"
          />
          <div>
            <h3 className="font-medium text-secondry dark:text-neutral-200">
              Name :{" "}
              <span className="text-xs text-primary ">{Doctor_name}</span>
            </h3>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Degree :{" "}
              <span className="text-xs text-primary ">{Doctor_degree}</span>{" "}
              <span className=" text-secondry">
                Specialist In :
                <span className=" text-primary">{Doctor_speciality}</span>
              </span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Email : <span className="text-xs  text-primary">{Email_id}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Contact No :{" "}
              <span className="text-xs  text-primary">{Whatsapp_no}</span>{" "}
              Alternate_contact :{" "}
              <span className="text-xs  text-primary">{Alternate_contact}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Experience :{" "}
              <span className="text-xs  text-primary">{Doctor_experience}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500 ">
              Country : <span className="text-xs  text-primary">{Country}</span>{" "}
              Region : <span className="text-xs  text-primary">{Region}</span>{" "}
              City : <span className="text-xs  text-primary">{City}</span>{" "}
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Address : <span className="text-xs  text-primary">{Address}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              status : <span className="text-xs  text-primary">{status}</span>
            </h4>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// hospital view modal
export const HospitalViewModal = ({
  toggleModal = () => {},
  hospitalToView = {},
}) => {
  const {
    H_image,
    H_name,
    H_category,
    H_contact_no,
    H_email_id,
    H_Todays_Appointment,
    H_advance_Appointment,
    Amenities,
    status,
  } = hospitalToView;

  return (
    <Modal
      onClose={toggleModal}
      title={`About  ${H_name}`}
      data={hospitalToView}
      width="w-[50%]"
      height="h-[55%]"
      footer={
        <>
          <Button
            className="bg-gray-600 text-white py-2 px-4 rounded-full"
            onClick={toggleModal}
          >
            Close
          </Button>
        </>
      }
    >
      <div className="flex flex-col rounded p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex items-center gap-x-4">
          <img
            className="rounded size-40"
            src={`/upload/${H_image}`}
            alt="Avatar"
          />
          <div className="grow">
            <h3 className="font-medium text-secondry dark:text-neutral-200">
              Name : <span className="text-xs text-primary ">{H_name}</span>
            </h3>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Degree :{" "}
              <span className="text-xs text-primary ">{H_category}</span>{" "}
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Email :{" "}
              <span className="text-xs  text-primary">{H_email_id}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Contact No :{" "}
              <span className="text-xs  text-primary">{H_contact_no}</span>{" "}
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Amenities :{" "}
              <span className="text-xs  text-primary">{Amenities}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500 ">
              Todays Appointment :{" "}
              <span className="text-xs  text-primary">
                {H_Todays_Appointment ? "Available" : "not available"}
              </span>{" "}
              Advance Appointment :{" "}
              <span className="text-xs  text-primary">
                {H_advance_Appointment ? "Available" : "not available"}
              </span>{" "}
            </h4>

            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              status : <span className="text-xs  text-primary">{status}</span>
            </h4>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// appointment view modal

export const AppointmentViewmodal = ({
  toggleModal = () => {},
  appointmentToView = {},
}) => {
  const { hospitals, doctors, patients } = useFetchApi();

  // Extracting values from appointmentToView
  const {
    patient_id,
    hospital_id,
    doctor_id,
    Appointment_type,
    Appointment_req,
    Status,
    appointment_scheduled_date,
    token_number,
    Approved_by,
  } = appointmentToView;

  // Finding the corresponding patient, hospital, and doctor based on the IDs
  const patient = patients.find((p) => p.id === patient_id);
  const hospital = hospitals.find((h) => h.id === hospital_id);
  const doctor = doctors.find((d) => d.id === doctor_id);

  return (
    <Modal
      onClose={toggleModal}
      title={`About  ${patient ? patient.first_name : "Patient"}`}
      data={appointmentToView}
      width="w-[50%]"
      height="h-[55%]"
      footer={
        <>
          <Button
            className="bg-gray-600 text-white py-2 px-4 rounded-full"
            onClick={toggleModal}
          >
            Close
          </Button>
        </>
      }
    >
      <div className="flex flex-col rounded p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex items-center gap-x-4">
          <div className="grow">
            <h3 className="font-medium text-secondary dark:text-neutral-200">
              Patient Name:{" "}
              <span className="text-xs text-primary ">
                {patient ? patient.first_name : "N/A"}
              </span>
            </h3>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Hospital Name:{" "}
              <span className="text-xs text-primary ">
                {hospital ? hospital.H_name : "N/A"}
              </span>
            </h4>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Doctor Name:{" "}
              <span className="text-xs text-primary">
                {doctor ? doctor.Doctor_name : "N/A"}
              </span>
            </h4>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Appointment Type:{" "}
              <span className="text-xs text-primary">
                {Appointment_type || "N/A"}
              </span>
            </h4>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Appointment Scheduled Date:{" "}
              <span className="text-xs text-primary">
                {appointment_scheduled_date
                  ? new Date(appointment_scheduled_date).toLocaleString()
                  : "N/A"}
              </span>
            </h4>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Appointment Request Date:{" "}
              <span className="text-xs text-primary">
                {Appointment_req
                  ? new Date(Appointment_req).toLocaleString()
                  : "N/A"}
              </span>
            </h4>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Token Number:{" "}
              <span className="text-xs text-primary">
                {token_number ? token_number : "Not available"}
              </span>
            </h4>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Approved By:{" "}
              <span className="text-xs text-primary">
                {Approved_by ? Approved_by : "Not available"}
              </span>
            </h4>
            <h4 className="uppercase text-secondary dark:text-neutral-500">
              Status:{" "}
              <span className="text-xs text-primary">{Status || "N/A"}</span>
            </h4>
          </div>
        </div>
      </div>
    </Modal>
  );
};
