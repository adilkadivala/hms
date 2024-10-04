import Layout from "../layout/Main";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useEffect, useState } from "react";
import { hospitalFields } from "../../../constant/Fields";
import { handleInput } from "../../../utils/handleInput";
import { Insert } from "../../../utils/Insert";
import { useUpdate } from "../../../utils/Update";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { togglePassword } from "../../../lib";
import { useFetchApi } from "../../../storage/Fetch";

const PORT = import.meta.env.VITE_SERVER_API;
const INSERTAPI = `${PORT}/createhospital`;

const HospitalForm = () => {
  // functions
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleInsertSubmit } = Insert();
  const { handleUpdateSubmit } = useUpdate();
  const { getHospitals, hospitals } = useFetchApi();
  const { isPasswordVisible, handlePasswordVisible } = togglePassword();

  // states
  const [formData, setFormData] = useState({ ...hospitalFields });

  const hospitalDataForUpdate = hospitals.find(
    (hospital) => hospital.id === parseInt(id)
  );

  useEffect(() => {
    if (hospitalDataForUpdate) {
      setFormData(hospitalDataForUpdate);
    }
  }, [hospitalDataForUpdate]);

  const setState = setFormData;

  // Update and Insert handlers
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (hospitalDataForUpdate) {
      try {
        await handleUpdateSubmit(
          `${PORT}/updatehospital/${hospitalDataForUpdate.id}`,
          formData
        );
        navigate("/hospitals");
        getHospitals();
      } catch (error) {
        console.error("Update error:", error);
        setError(error.message || "An error occurred while updating");
      }
    } else {
      try {
        await handleInsertSubmit(INSERTAPI, formData);
        navigate("/hospitals");
        getHospitals();
      } catch (error) {
        console.error("Insert error:", error);
        setError(error.message || "An error occurred while creating doctor");
      }
    }
  };

  return (
    <Layout>
      <div className="border border-gray-300 rounded">
        <div className="bg-transparent rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800 ">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
              {formData ? "Update Profile" : " Create Hospital profile"}
            </h2>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Manage hospital profile information, account settings, and more.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} method="post">
            <div className="flex flex-wrap items-center w-full sm:gap-6">
              <div className="flex flex-col items-center ">
                <img
                  className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  src={
                    formData?.H_image_preview ||
                    "https://preline.co/assets/img/160x160/img1.jpg"
                  }
                  alt="Avatar"
                />

              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <Input
                    type="file"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 disabled:opaH_full_add-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    name="H_image"
                    onChange={handleInput(setState)}
                  />
                </div>
              </div>
            </div>
            {/* Full name */}
            <div className="flex w-full mt-3 justify-between ">
              <div className="flex flex-col  gap-5 w-[40%]">
                <Label htmlFor="H_name">Hospital name</Label>
                <Input
                  id="H_name"
                  type="text"
                  value={formData?.H_name || ""}
                  name="H_name"
                  placeHolder="Apollo multispecilist"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>
              {/* Email */} {/* H_password */}
              <div className="flex flex-col  gap-5 w-[40%]">
                <Label htmlFor="H_email_id">Email</Label>
                <Input
                  id="H_email_id"
                  type="email"
                  name="H_email_id"
                  placeHolder="medicare.appolo@gmail.com"
                  className="bg-transparent"
                  value={formData?.H_email_id || ""}
                  onChange={handleInput(setState)}
                />
              </div>
              <div className="flex flex-col  gap-5 relative w-[40%]">
                <Label htmlFor="H_password">password</Label>
                <Input
                  id="H_password"
                  type={isPasswordVisible ? "text" : "password"}
                  name="H_password"
                  placeHolder="Enter hospital Password"
                  className="bg-transparent"
                  value={formData?.H_password || ""}
                  onChange={handleInput(setState)}
                />
                <Button
                  type="button"
                  className="border-none"
                  onClick={handlePasswordVisible}
                >
                  <i
                    className={`fa-solid ${
                      isPasswordVisible ? `fa-eye-slash` : `fa-eye`
                    } absolute pointer z-10 right-5 top-[3.7rem]`}
                  ></i>
                </Button>
              </div>
            </div>
            {/* Doctor Degree */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex flex-col  gap-5 w-[45%]">
                <Label htmlFor="H_category">Hospital category</Label>
                <Input
                  id="H_category"
                  type="text"
                  name="H_category"
                  value={formData?.H_category || ""}
                  placeHolder="Multispecilist"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>

              {/*  Contact */}

              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="H_contact_no">Contact No</Label>
                <Input
                  id="H_contact_no"
                  type="text"
                  value={formData?.H_contact_no || ""}
                  name="H_contact_no"
                  placeHolder="0987654321"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>
            </div>
            {/* H_short_add */}
            <div className="flex w-full mt-3 justify-between items-center">
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="H_short_add">Short Address</Label>
                <Input
                  id="H_short_add"
                  type="text"
                  name="H_short_add"
                  value={formData?.H_short_add || ""}
                  placeHolder="123 Main St"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>
              {/* H_full_add */}

              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="H_full_add">Full address</Label>
                <textarea
                  id="H_full_add"
                  type="text"
                  name="H_full_add"
                  value={formData?.H_full_add || ""}
                  placeholder="New York"
                  className="bg-transparent w-full"
                  onChange={handleInput(setState)}
                />
              </div>
            </div>
            {/*  Amenities*/} {/*Description*/}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Amenities">Amenities</Label>
                <textarea
                  id="Amenities"
                  type="text"
                  name="Amenities"
                  value={formData?.Amenities || ""}
                  placeholder="New York"
                  className="bg-transparent w-full"
                  onChange={handleInput(setState)}
                />
              </div>
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Description">Description</Label>
                <textarea
                  id="Description"
                  type="text"
                  name="Description"
                  value={formData?.Description || ""}
                  placeholder="New York"
                  className="bg-transparent w-full"
                  onChange={handleInput(setState)}
                />
              </div>
            </div>
            {/* H_advance_Appointment */} {/* H_advance_Appointment */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="H_advance_Appointment">
                  Advance Appointment
                </Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="H_advance_Appointment"
                  name="H_advance_Appointment"
                  value={formData?.H_advance_Appointment || "true"}
                  onChange={handleInput(setState)}
                >
                  <option value="true">Enable</option>
                  <option value="false">Desable</option>
                </select>
              </div>

              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="H_Todays_Appointment">Today Appointment</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="H_Todays_Appointment"
                  name="H_Todays_Appointment"
                  value={formData?.H_Todays_Appointment || "true"}
                  onChange={handleInput(setState)}
                >
                  <option value="true">Enable</option>
                  <option value="false">Desable</option>
                </select>
              </div>
            </div>
            {/* status */} {/* Approval_status */} {/* Approved_by */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="status">status</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="status"
                  name="status"
                  value={formData?.status || "active"}
                  onChange={handleInput(setState)}
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>

              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Approval_status">Approval Status </Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="Approval_status"
                  name="Approval_status"
                  value={formData?.Approval_status || "Approved"}
                  onChange={handleInput(setState)}
                >
                  <option value="Approved">Approved</option>
                  <option value="Not Approved">Not Approved</option>
                </select>
              </div>

              <div className="flex flex-col gap-5 w-[45%]">
                <Label htmlFor="Approved_by">Today Appointment</Label>
                <select
                  className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                  id="Approved_by"
                  name="Approved_by"
                  value={formData?.Approved_by || "admin"}
                  onChange={handleInput(setState)}
                >
                  <option value="admin">Admin</option>
                  <option value="hospital">Hospital</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-5 gap-2 sm:col-span-12">
              <Button
                type={formData ? "submit" : "button"}
                className="p-3 bg-primary text-white rounded dark:text-primary border-none"
              >
                {formData ? "Save changes" : "Submit"}
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

export default HospitalForm;
