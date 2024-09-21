import Input from "./Input";
import { doctorFormData } from "../../constant/Fields";
import Label from "./Label";
import { useState } from "react";
import { Insert } from "../../utils/Insert";
import { handleInput } from "../../utils/handleInput";

const PORT = import.meta.env.VITE_SERVER_API;
const INSERTAPI = `${PORT}/insertdoctors`;

const Form = () => {
  const [formData, setFormData] = useState(doctorFormData);
  const { handleSubmit } = Insert();

  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(INSERTAPI, formData);
      console.log(formData.Profile_image);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border border-gray-300 rounded">
      <div className="bg-transparent rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800 ">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
            Profile
          </h2>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Manage your profile information, account settings, and more.
          </p>
        </div>

        <form onSubmit={handleInsert} method="post">
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            {/* Profile photo upload */}
            <div className="sm:col-span-3">
              <Label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Profile photo
              </Label>
            </div>
            <div className="sm:col-span-9">
              <div className="flex items-center gap-5">
                <img
                  className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  src={
                    formData?.Profile_image_preview ||
                    "https://preline.co/assets/img/160x160/img1.jpg"
                  }
                  alt="Avatar"
                />
                <div className="flex gap-x-2">
                  <div>
                    <Input
                      type="file"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      name="Profile_image"
                      accept="image/*"
                      onChange={handleInput(setFormData)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Full name */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Doctor_name"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Full name
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Doctor_name"
                type="text"
                value={formData?.Doctor_name || ""}
                name="Doctor_name"
                placeholder="Dr. John Doe"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Email_id"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Email
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Email_id"
                type="email"
                name="Email_id"
                placeholder="john.doe@example.com"
                className="bg-transparent"
                value={formData?.Email_id || ""}
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Password */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Password"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Password
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Password"
                type="password"
                name="Password"
                placeholder="Enter your password"
                className="bg-transparent"
                value={formData?.Password || ""}
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Doctor Degree */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Doctor_degree"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Degree
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Doctor_degree"
                type="text"
                name="Doctor_degree"
                value={formData?.Doctor_degree || ""}
                placeholder="MD"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Doctor Experience */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Doctor_experience"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Experience (Years)
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Doctor_experience"
                type="number"
                name="Doctor_experience"
                value={formData?.Doctor_experience || ""}
                placeholder="9.9"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Speciality */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Doctor_speciality"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Speciality
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Doctor_speciality"
                type="text"
                name="Doctor_speciality"
                value={formData?.Doctor_speciality || ""}
                placeholder='["Cardiology", "Internal Medicine"]'
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Alternate Contact */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Alternate_contact"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Alternate Contact
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Alternate_contact"
                type="text"
                value={formData?.Alternate_contact || ""}
                name="Alternate_contact"
                placeholder="0987654321"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Whatsapp Number */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Whatsapp_no"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Whatsapp Number
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Whatsapp_no"
                type="text"
                name="Whatsapp_no"
                placeholder="1234567890"
                value={formData?.Whatsapp_no || ""}
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Address */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Address"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Address
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Address"
                type="text"
                name="Address"
                value={formData?.Address || ""}
                placeholder="123 Main St"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* City */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="City"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                City
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="City"
                type="text"
                name="City"
                value={formData?.City || ""}
                placeholder="New York"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Country */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Country"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Country
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Country"
                type="text"
                name="Country"
                value={formData?.Country || ""}
                placeholder="USA"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            {/* Region */}
            <div className="sm:col-span-3">
              <Label
                htmlFor="Region"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Region
              </Label>
            </div>
            <div className="sm:col-span-9">
              <Input
                id="Region"
                type="text"
                name="Region"
                value={formData?.Region || ""}
                placeholder="North-East"
                className="bg-transparent"
                onChange={handleInput(setFormData)}
              />
            </div>

            <div className="flex justify-end gap-2 sm:col-span-12">
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                Save changes
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
