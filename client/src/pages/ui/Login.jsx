import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { handleInput } from "../../utils/handleInput";

const PORT = import.meta.env.VITE_SERVER_API;
const INSERTAPI = `${PORT}/check-user`;

const Login = ({ form_name }) => {
  const navigate = useNavigate();

  const [formData, setFromData] = useState({
    Email_id: "",
    Password: "",
  });

  // form handling
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(INSERTAPI, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate(`/dr-profile/${response.data.doctorId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            {form_name}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Don't have an account yet?
            <a
              className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
              href="/"
            >
              Sign up here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={handleFormSubmit} method="post">
            <div className="grid gap-y-4">
              <div>
                <Label
                  htmlFor="Email_id"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email address
                </Label>
                <div className="relative">
                  <Input
                    type="email"
                    id="Email_id"
                    name="Email_id"
                    value={formData.Email_id}
                    onChange={handleInput(setFromData)}
                    required
                    aria-describedby="email-error"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="Password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <a
                    className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    href="/"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    id="Password"
                    onChange={handleInput(setFromData)}
                    value={formData.Password}
                    name="Password"
                    required
                    aria-describedby="password-error"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-3 px-3 bg-primary text-white rounded"
              >
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
