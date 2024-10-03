import Input from "../../ui/Input";
import Layout from "../layout/Main";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import { doctorFormData } from "../../../constant/Fields";
import { Insert } from "../../../utils/Insert";
import { handleInput } from "../../../utils/handleInput";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useUpdate } from "../../../utils/Update";
import { togglePassword } from "../../../lib";
import { useFetchApi } from "../../../storage/Fetch";

const PORT = import.meta.env.VITE_SERVER_API;
const INSERTAPI = `${PORT}/insertdoctors`;

const DrProfileForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { handleInsertSubmit } = Insert();
  const { handleUpdateSubmit } = useUpdate();
  const { isPasswordVisible, handlePasswordVisible } = togglePassword();
  const { doctors, getDoctors } = useFetchApi();
  const [formData, setFormData] = useState({ ...doctorFormData });

  const doctorDataForUpdate = doctors.find(
    (doctor) => doctor.id === parseInt(id)
  );

  useEffect(() => {
    if (doctorDataForUpdate) {
      setFormData(doctorDataForUpdate);
    }
  }, [doctorDataForUpdate]);

  const setState = setFormData;

  // Update and Insert handlers
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (doctorDataForUpdate) {
      try {
        await handleUpdateSubmit(
          `${PORT}/updatedoctors/${doctorDataForUpdate.id}`,
          formData
        );
        navigate("/doctors");
        getDoctors();
      } catch (error) {
        console.error("Update error:", error);
        setError(error.message || "An error occurred while updating");
      }
    } else {
      try {
        await handleInsertSubmit(INSERTAPI, formData);
        navigate("/doctors");
        getDoctors();
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
              {doctorDataForUpdate ? "Update Profile" : " Create profile"}
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
                    formData?.Profile_image_preview ||
                    (formData?.Profile_image
                      ? `/upload/${formData?.Profile_image}`
                      : null) ||
                    "https://preline.co/assets/img/160x160/img1.jpg"
                  }
                  alt="Avatar"
                />
              </div>
              <div className="flex-1">
                <Input
                  type="file"
                  name="Profile_image"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg"
                  onChange={handleInput(setState)}
                />
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
                value={formData?.Doctor_name || ""}
                name="Doctor_name"
                placeHolder="Dr. John Doe"
                className="bg-transparent"
                onChange={handleInput(setState)}
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
                  value={formData?.Email_id || ""}
                  onChange={handleInput(setState)}
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
                  value={formData?.Password || ""}
                  onChange={handleInput(setState)}
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
                  value={formData?.Doctor_degree || ""}
                  placeHolder="MD"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>

              {/* Doctor Experience */}
              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="Doctor_experience">Experience (Years)</Label>
                <Input
                  id="Doctor_experience"
                  type="text"
                  name="Doctor_experience"
                  value={formData?.Doctor_experience || ""}
                  placeHolder="9.9"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
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
                  value={formData?.Doctor_speciality || ""}
                  placeHolder="Cardiology, Internal Medicine"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>

              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="Doctor_fees">Doctor fees</Label>

                <Input
                  id="Doctor_fees"
                  type="text"
                  name="Doctor_fees"
                  value={formData?.Doctor_fees || ""}
                  placeHolder="70$"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
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
                  value={formData?.Contact_no || ""}
                  name="Contact_no"
                  placeHolder="0987654321"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Alternate_contact">Alternate Contact</Label>

                <Input
                  id="Alternate_contact"
                  type="text"
                  value={formData?.Alternate_contact || ""}
                  name="Alternate_contact"
                  placeHolder="0987654321"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Whatsapp_no">Whatsapp Number</Label>

                <Input
                  id="Whatsapp_no"
                  type="text"
                  name="Whatsapp_no"
                  placeHolder="1234567890"
                  value={formData?.Whatsapp_no || ""}
                  className="bg-transparent"
                  onChange={handleInput(setState)}
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
                value={formData?.Address || ""}
                placeHolder="123 Main St"
                className="bg-transparent"
                onChange={handleInput(setState)}
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
                  value={formData?.City || ""}
                  placeHolder="New York"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Country">Country</Label>
                <Input
                  id="Country"
                  type="text"
                  name="Country"
                  value={formData?.Country || ""}
                  placeHolder="USA"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
                />
              </div>

              <div className=" w-[30%]">
                <Label htmlFor="Region">Region</Label>
                <Input
                  id="Region"
                  type="text"
                  name="Region"
                  value={formData?.Region || ""}
                  placeHolder="North-East"
                  className="bg-transparent"
                  onChange={handleInput(setState)}
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
                value={formData?.status || "active"}
                onChange={handleInput(setState)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 sm:col-span-12">
              <Button
                type={formData ? "submit" : "button"}
                className="p-3 bg-primary text-white rounded dark:text-primary border-none"
              >
                {doctorDataForUpdate ? "Save changes" : "Submit"}
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

export default DrProfileForm;
