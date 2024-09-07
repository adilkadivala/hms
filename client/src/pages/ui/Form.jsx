import Button from "../ui/Button";
import Input from "./Input";

const Form = ({ formLable, discription, className } = {}) => {
  return (
    <div className={className}>
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
                {formLable === "Sign Up" ? "Login here" : "Sign Up here"}
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
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email address
                </label>
                <div>
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
                <div>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    className="py-3 px-4 block w-full border border-black rounded-lg text-lg"
                    required
                    aria-describedby="password-error"
                  />
                </div>
              </div>

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
              <Button
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                name={formLable}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
