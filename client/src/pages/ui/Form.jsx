import Input from "./Input";
import Label from "./Label";

const Form = ({ onSubmit }) => {
  return (
    <div className="border border-gray-300 rounded">
      <div className="bg-transparent rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800 ">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
            Profile
          </h2>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Manage your name, password and account settings.
          </p>
        </div>

        <form onSubmit={onSubmit} method="post">
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Profile photo
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="flex items-center gap-5">
                <img
                  className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  src="https://preline.co/assets/img/160x160/img1.jpg"
                  alt="Avatar"
                />
                <div className="flex gap-x-2">
                  <div>
                    <Input
                      type="file"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      <i className="fa-solid fa-upload"></i>
                      Upload photo
                    </Input>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="fullname"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Full name
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <Input
                  id="fullname"
                  type="text"
                  placeHolder="Maria"
                  className="bg-transparent"
                />
                <Input
                  type="text"
                  placeHolder="Boone"
                  className="bg-transparent"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Email
              </label>
            </div>

            <div className="sm:col-span-9">
              <Input
                id="email"
                className="bg-transparent"
                type="email"
                placeHolder="maria@site.com"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Password
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="space-y-2">
                <Input
                  id="password"
                  type="text"
                  className="bg-transparent"
                  placeHolder="Enter current password"
                />
                <Input
                  type="text"
                  placeHolder="Enter new password"
                  className="bg-transparent"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="phone"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                >
                  Phone
                </label>
                <span className="text-sm text-gray-400 dark:text-neutral-600">
                  (Optional)
                </span>
              </div>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <Input
                  id="phone"
                  type="text"
                  className="bg-transparent"
                  placeHolder="+x(xxx)xxx-xx-xx"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Gender
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <Label htmlFor="male">
                  <Input
                    type="radio"
                    name="gender"
                    id="male"
                    className="bg-transparent"
                    defaultChecked
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Male
                  </span>
                </Label>

                <label
                  htmlFor="female"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <Input
                    type="radio"
                    name="af-account-gender-checkbox"
                    id="female"
                    className="bg-transparent"
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Female
                  </span>
                </label>

                <label
                  htmlFor="other"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <Input
                    type="radio"
                    name="af-account-gender-checkbox"
                    id="other"
                    className="bg-transparent"
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Other
                  </span>
                </label>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-bio"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                BIO
              </label>
            </div>

            <div className="sm:col-span-9">
              <textarea
                className="py-2 px-3 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 border bg-transparent"
                rows="6"
                placeholder="Type your message..."
              ></textarea>
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
