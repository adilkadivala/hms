import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { doctorFormData } from "../constant/Fields";
const PORT = import.meta.env.VITE_SERVER_API;

const API = `${PORT}/insertdoctors`;

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(doctorFormData);
  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API, formData);
      console.log("Doctor created:", response.data);
      if (response.status === 200) {
        setFormData({
          formData: "",
        });
        toast.success("Doctor created successfully!");
        navigate("/doctors");
      }
    } catch (error) {
      console.error("Error creating doctor:", error);
    }
  };

  return (
    <div className="flex justify-between">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Doctor
            </h1>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="Doctor_name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Doctor name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="Doctor_name"
                      name="Doctor_name"
                      value={formData.Doctor_name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Contact_no"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Contact Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="Contact_no"
                      name="Contact_no"
                      value={formData.Contact_no}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Email_id"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="Email_id"
                      name="Email_id"
                      value={formData.Email_id}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="Password"
                      name="Password"
                      value={formData.Password}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
