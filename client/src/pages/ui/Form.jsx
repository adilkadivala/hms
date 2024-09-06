import Button from "../ui/Button";
import Input from "./Input";

const Form = ({ formLable, discription } = {}) => {
  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            {formLable}
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            {discription}
            {discription && (
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="../examples/html/signup.html"
              >
                {formLable === "Sign Up" ? "Sign up here" : "Sign in here"}
              </a>
            )}
          </p>
        </div>

        <div className="mt-5">
          <Button
            name="Sign in with Google"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm  "
          >
            <i className="fa-brands fa-google"></i>
          </Button>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
            Or
          </div>

          {/* <!-- Form --> */}
          <form>
            <div className="grid gap-y-4">
              {/* <!-- Form Group --> */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email address
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="py-3 px-4 block w-full border border-black rounded-lg text-lg"
                    required
                    aria-describedby="email-error"
                  />
                </div>
              </div>
              {/* <!-- End Form Group --> */}

              {/* <!-- Form Group --> */}
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <a
                    className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                    href="../examples/html/recover-account.html"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    className="py-3 px-4 block w-full border border-black rounded-lg text-lg"
                    required
                    aria-describedby="password-error"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="password-error"
                >
                  8+ characters required
                </p>
              </div>
              {/* <!-- End Form Group --> */}

              {/* <!-- Checkbox --> */}
              <div className="flex items-center">
                <div className="flex">
                  <Input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="py-3 px-4 block w-full border border-black rounded-lg text-lg"
                  />
                </div>
                <div className="ms-3">
                  <label
                    htmlFor="remember-me"
                    className="text-sm dark:text-white"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              {/* <!-- End Checkbox --> */}
              <Button
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                name="Sign in"
              />
            </div>
          </form>
          {/* <!-- End Form --> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
