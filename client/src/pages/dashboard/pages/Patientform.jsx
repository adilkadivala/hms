import Input from "../../ui/Input";
import Layout from "../layout/Main";
import Label from "../../ui/Label";
import Button from "../../ui/Button";

import { useEffect, useState } from "react";
import { doctorFormData } from "../../../constant/Fields";
import { Insert } from "../../../utils/Insert";
import { handleInput } from "../../../utils/handleInput";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useUpdate } from "../../../utils/Update";
import { togglePassword } from "../../../lib";
import { useFetchApi } from "../../../storage/Fetch";

const PORT = import.meta.env.VITE_SERVER_API;
const INSERTAPI = `${PORT}/createhospital`;

const Patientform = () => {
  const doctorDataForUpdate = useLocation();
  const navigate = useNavigate();
  const { getPatients } = useFetchApi();
  const oldData = doctorDataForUpdate?.state?.doctor || null;
  const [formData, setFormData] = useState({ ...doctorFormData });
  const [formUpdateData, setFormUpdateData] = useState({ ...oldData });
  const { handleInsertSubmit } = Insert();
  const { handleUpdateSubmit } = useUpdate();
  const { isPasswordVisible, handlePasswordVisible } = togglePassword();

  // update data api
  const UPDATEAPI = `${PORT}/updatedoctors/${formUpdateData.id}`;

  // data insertion handler...
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (oldData) {
      try {
        await handleUpdateSubmit(UPDATEAPI, formUpdateData);
        console.log(formUpdateData);
        navigate("/patients");
        getPatients();
      } catch (error) {
        console.error("Update error:", error);
        setError(error.message || "An error occurred while updating");
      }
    } else {
      try {
        await handleInsertSubmit(INSERTAPI, formData);
        navigate("/patients");
        getPatients();
      } catch (error) {
        console.error("Insert error:", error);
        setError(error.message || "An error occurred while creating doctor");
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
              {oldData ? "Update Profile" : " Create profile"}
            </h2>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Manage your profile information, account settings, and more.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} method="post">
            <div className="flex flex-wrap items-center w-full sm:gap-6">
              <div className="flex flex-col items-center ">
                <img
                  className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  src={
                    formUpdateData?.Profile_image_preview ||
                    formData?.Profile_image_preview ||
                    (formUpdateData?.Profile_image
                      ? `/upload/${formUpdateData?.Profile_image}`
                      : null) ||
                    "https://preline.co/assets/img/160x160/img1.jpg"
                  }
                  alt="Avatar"
                />

                <Label>Profile photo</Label>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <Input
                    type="file"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    name="Profile_image"
                    onChange={handleInput(
                      oldData ? setFormUpdateData : setFormData
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Full name */}
            <div className="mt-2">
              <Label htmlFor="Doctor_name">Full name</Label>
            </div>
            <div>
              <Input
                id="Doctor_name"
                type="text"
                value={
                  formData?.Doctor_name || formUpdateData?.Doctor_name || ""
                }
                name="Doctor_name"
                placeHolder="Dr. John Doe"
                className="bg-transparent"
                onChange={handleInput(
                  oldData ? setFormUpdateData : setFormData
                )}
              />
            </div>
            {/* Email */} {/* Password */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="Email_id">Email</Label>
                <Input
                  id="Email_id"
                  type="email"
                  name="Email_id"
                  placeHolder="john.doe@example.com"
                  className="bg-transparent"
                  value={formData?.Email_id || formUpdateData?.Email_id || ""}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              <div className="flex items-center gap-5 relative w-[40%]">
                <Label htmlFor="Password">Password</Label>
                <Input
                  id="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  name="Password"
                  placeHolder="Enter your password"
                  className="bg-transparent"
                  value={formData?.Password || formUpdateData?.Password || ""}
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
                <Button type="button" onClick={handlePasswordVisible}>
                  <i
                    className={`fa-solid ${
                      isPasswordVisible ? `fa-eye-slash` : `fa-eye`
                    } absolute pointer z-10 right-5 top-3`}
                  ></i>
                </Button>
              </div>
            </div>
            {/* Doctor Degree */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="Doctor_degree">Degree</Label>
                <Input
                  id="Doctor_degree"
                  type="text"
                  name="Doctor_degree"
                  value={
                    formData?.Doctor_degree ||
                    formUpdateData?.Doctor_degree ||
                    ""
                  }
                  placeHolder="MD"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              {/* Doctor Experience */}
              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="Doctor_experience">Experience (Years)</Label>
                <Input
                  id="Doctor_experience"
                  type="text"
                  name="Doctor_experience"
                  value={
                    formData?.Doctor_experience ||
                    formUpdateData?.Doctor_experience ||
                    ""
                  }
                  placeHolder="9.9"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>
            </div>
            {/* Speciality */} {/* Doctor fees */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="Doctor_speciality">Speciality</Label>

                <Input
                  id="Doctor_speciality"
                  type="text"
                  name="Doctor_speciality"
                  value={
                    formData?.Doctor_speciality ||
                    formUpdateData?.Doctor_speciality ||
                    ""
                  }
                  placeHolder="Cardiology, Internal Medicine"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="Doctor_fees">Doctor fees</Label>

                <Input
                  id="Doctor_fees"
                  type="text"
                  name="Doctor_fees"
                  value={
                    formData?.Doctor_fees || formUpdateData?.Doctor_fees || ""
                  }
                  placeHolder="70$"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>
            </div>
            {/*  Contact */}
            {/* Alternate Contact */}
            {/* Whatsapp Number */}
            <div className="flex w-full mt-3 justify-between items-center">
              <div className=" w-[30%]">
                <Label htmlFor="Contact_no">Contact No</Label>
                <Input
                  id="Contact_no"
                  type="text"
                  value={
                    formData?.Contact_no || formUpdateData?.Contact_no || ""
                  }
                  name="Contact_no"
                  placeHolder="0987654321"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Alternate_contact">Alternate Contact</Label>

                <Input
                  id="Alternate_contact"
                  type="text"
                  value={
                    formData?.Alternate_contact ||
                    formUpdateData?.Alternate_contact ||
                    ""
                  }
                  name="Alternate_contact"
                  placeHolder="0987654321"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Whatsapp_no">Whatsapp Number</Label>

                <Input
                  id="Whatsapp_no"
                  type="text"
                  name="Whatsapp_no"
                  placeHolder="1234567890"
                  value={
                    formData?.Whatsapp_no || formUpdateData?.Whatsapp_no || ""
                  }
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>
            </div>
            {/* Address */}
            <div className="mt-2">
              <Label htmlFor="Address">Address</Label>
            </div>
            <div>
              <Input
                id="Address"
                type="text"
                name="Address"
                value={formData?.Address || formUpdateData?.Address || ""}
                placeHolder="123 Main St"
                className="bg-transparent"
                onChange={handleInput(
                  oldData ? setFormUpdateData : setFormData
                )}
              />
            </div>
            {/* City */} {/* Region */}
            {/* Country */}
            <div className="flex w-full mt-3 justify-between items-center">
              <div className=" w-[30%]">
                <Label htmlFor="City">City</Label>
                <Input
                  id="City"
                  type="text"
                  name="City"
                  value={formData?.City || formUpdateData?.City || ""}
                  placeHolder="New York"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Country">Country</Label>
                <Input
                  id="Country"
                  type="text"
                  name="Country"
                  value={formData?.Country || formUpdateData?.Country || ""}
                  placeHolder="USA"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Region">Region</Label>
                <Input
                  id="Region"
                  type="text"
                  name="Region"
                  value={formData?.Region || formUpdateData?.Region || ""}
                  placeHolder="North-East"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>
            </div>
            {/* Status */}
            <div className="mt-2">
              <Label htmlFor="status">Status</Label>
            </div>
            <div>
              <select
                className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                id="status"
                name="status"
                value={formUpdateData?.status || formData?.status || "active"}
                onChange={handleInput(
                  oldData ? setFormUpdateData : setFormData
                )}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 sm:col-span-12">
              <Button
                type={formUpdateData ? "submit" : "button"}
                className="p-3 bg-primary text-white rounded dark:text-primary border-none"
              >
                {oldData ? "Save changes" : "Submit"}
              </Button>
              <NavLink
                to="/doctors"
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

export default Patientform;
