import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const Login = ({ form_name }) => {
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
          <form>
            <div className="grid gap-y-4">
              <div>
                <Label
                  for="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email address
                </Label>
                <div className="relative">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    aria-describedby="email-error"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3"></div>
                </div>
                <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="email-error"
                >
                  Please include a valid email address so we can get back to you
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label
                    for="password"
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
                    id="password"
                    name="password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required
                    aria-describedby="password-error"
                  />
                </div>
                <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="password-error"
                >
                  8+ characters required
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex">
                  <Input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ms-3">
                  <label for="remember-me" className="text-sm dark:text-white">
                    Remember me
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-3 px-3 bg-primary text-white rounded"
              >
                Sign in
              </Button>
            </div>
          </form>
          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
            Or
          </div>
          <Button
            type="button"
            className="border-none w-full align-middle text-center bg-red-500 px-2 py-2 rounded text-white"
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
