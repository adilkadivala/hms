import Layout from "../layout/Main";
import Label from "../../ui/Label";
import Button from "../../ui/Button";

import { useEffect, useState } from "react";
import { appointmentfields } from "../../../constant/Fields";
import { handleInput } from "../../../utils/handleInput";
import { Insert } from "../../../utils/Insert";
import { useUpdate } from "../../../utils/Update";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useFetchApi } from "../../../storage/Fetch";

// apies
const PORT = import.meta.env.VITE_SERVER_API;
const INSERTAPI = `${PORT}/createappointments`;

const AppointmentForm = () => {
  // functions
  const appointmentDataforUpdate = useLocation();
  const navigate = useNavigate();
  const { hospitals, doctors, patients, getAppointments } = useFetchApi();
  const oldData = appointmentDataforUpdate?.state?.appointment || null;
  const { handleInsertSubmit } = Insert();
  const { handleUpdateSubmit } = useUpdate();
  console.log({ ...oldData });

  // states
  const [formData, setFormData] = useState({ ...appointmentfields });
  const [formUpdateData, setFormUpdateData] = useState({ ...oldData });

  // api
  const UPDATEAPI = `${PORT}/updateappointments/${formUpdateData.id}`;

  // formhandler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (oldData) {
      try {
        await handleUpdateSubmit(UPDATEAPI, formUpdateData);
        navigate("/appointments");
        getAppointments();
      } catch (error) {
        console.error("Update error:", error);
        setError(error.message || "An error occurred while updating");
      }
    } else {
      try {
        await handleInsertSubmit(INSERTAPI, formData);
        navigate("/appointments");
        getAppointments();
      } catch (error) {
        console.error(error);
        setError(error.message || "An error occurred while creating hospital");
      }
    }
  };

  // setting form for inserting data and updating it
  useEffect(() => {
    if (formUpdateData) {
      setFormUpdateData(formUpdateData);
    }
  }, [formUpdateData]);

  return (
    <Layout>
      <div className="border border-gray-300 rounded">
        <div className="bg-transparent rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800 ">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
              {oldData ? "Update Appointment" : " New appointment"}
            </h2>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Manage hospital profile information, account settings, and more.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} method="post">
            {/* select Hospital */} {/* select patient */}
            {/* select doctor */}
            <div className="flex w-full mt-3 justify-between ">
              <div className="flex flex-col  gap-5 w-[40%]">
                <Label htmlFor="hospital_id"> select Hospital </Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="hospital_id"
                  name="hospital_id"
                  value={formUpdateData?.hospital_id || formData?.hospital_id}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                >
                  <option value="" disabled>
                    select hospiotal name
                  </option>
                  {hospitals?.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.H_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col  gap-5 w-[40%]">
                <Label htmlFor="doctor_id">select doctor</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="doctor_id"
                  name="doctor_id"
                  value={formUpdateData?.doctor_id || formData?.doctor_id}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                >
                  <option value="" disabled>
                    select Doctor name
                  </option>
                  {doctors?.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.Doctor_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col  gap-5 relative w-[40%]">
                <Label htmlFor="patient_id">select patient</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="patient_id"
                  name="patient_id"
                  value={formUpdateData?.patient_id || formData?.patient_id}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                >
                  <option value="" disabled>
                    select patients
                  </option>
                  {patients?.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.first_name} {p.last_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Appointment Status  */}
            {/* Appointment_type */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Appointment_type">Appointment type</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="Appointment_type"
                  name="Appointment_type"
                  value={
                    formUpdateData?.Appointment_type ||
                    formData?.Appointment_type
                  }
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                >
                  <option value="" disabled>
                    select Appointment type
                  </option>
                  <option value="today">Today</option>
                  <option value="advance">advance</option>
                </select>
              </div>

              {/* Appointment Status  */}
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Status">Appointment Status </Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="Status"
                  name="Status"
                  value={formUpdateData?.Status || formData?.Status}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                >
                  <option value="" disabled>
                    select Appointment Status
                  </option>
                  <option value="pending">Pending</option>
                  <option value="accept">Accept</option>
                  <option value="reject">Reject</option>
                </select>
              </div>
            </div>
            {/* created_by */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Created_by">Created By</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="Created_by"
                  name="Created_by"
                  value={formUpdateData?.Created_by || formData?.Created_by}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                >
                  <option value="" disabled>
                    Appointment Created By
                  </option>
                  <option value="admin">Admin</option>
                  <option value="hospital">Hospital</option>
                </select>
              </div>

              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Approved_by">Approved By</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="Approved_by"
                  name="Approved_by"
                  value={formUpdateData?.Approved_by || formData?.Approved_by}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                >
                  <option value="" disabled>
                    Appointment Approved By
                  </option>
                  <option value="admin">Admin</option>
                  <option value="hospital">Hospital</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-5 gap-2 sm:col-span-12">
              <Button
                type={formUpdateData ? "submit" : "button"}
                className="p-3 bg-primary text-white rounded dark:text-primary border-none"
              >
                {oldData ? "Save changes" : "Submit"}
              </Button>
              <NavLink
                to="/hospitals"
                className="p-3 text-red-700 rounded border-none border border-primary"
              >
                Cancel
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AppointmentForm;
