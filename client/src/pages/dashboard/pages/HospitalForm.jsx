import Layout from "../layout/Main";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const HospitalForm = () => {
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
                    formUpdateData?.H_image_preview ||
                    formData?.H_image_preview ||
                    (formUpdateData?.H_image
                      ? `/upload/${formUpdateData?.H_image}`
                      : null) ||
                    "https://preline.co/assets/img/160x160/img1.jpg"
                  }
                  alt="Avatar"
                />

                <Label htmlFor="H_image">Profile photo</Label>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <Input
                    type="file"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 disabled:opaH_full_add-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    name="H_image"
                    onChange={handleInput(
                      oldData ? setFormUpdateData : setFormData
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Full name */}
            <div className="mt-2">
              <Label htmlFor="H_name">Hospital name</Label>
            </div>
            <div>
              <Input
                id="H_name"
                type="text"
                value={formData?.H_name || formUpdateData?.H_name || ""}
                name="H_name"
                placeHolder="Dr. John Doe"
                className="bg-transparent"
                onChange={handleInput(
                  oldData ? setFormUpdateData : setFormData
                )}
              />
            </div>
            {/* Email */} {/* H_password */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="H_email_id">Email</Label>
                <Input
                  id="H_email_id"
                  type="email"
                  name="H_email_id"
                  placeHolder="medicare.appolo@gmail.com"
                  className="bg-transparent"
                  value={
                    formData?.H_email_id || formUpdateData?.H_email_id || ""
                  }
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>

              <div className="flex items-center gap-5 relative w-[40%]">
                <Label htmlFor="H_password">password</Label>
                <Input
                  id="H_password"
                  type={isH_passwordVisible ? "text" : "H_password"}
                  name="H_password"
                  placeHolder="Enter your H_password"
                  className="bg-transparent"
                  value={
                    formData?.H_password || formUpdateData?.H_password || ""
                  }
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
                <Button type="button" onClick={handleH_passwordVisible}>
                  <i
                    className={`fa-solid ${
                      isH_passwordVisible ? `fa-eye-slash` : `fa-eye`
                    } absolute pointer z-10 right-5 top-3`}
                  ></i>
                </Button>
              </div>
            </div>
            {/* Doctor Degree */}
            <div className="flex w-full mt-3 justify-between">
              <div className="flex items-center gap-5 w-[40%]">
                <Label htmlFor="H_category">Hospital category</Label>
                <Input
                  id="H_category"
                  type="text"
                  name="H_category"
                  value={
                    formData?.H_category || formUpdateData?.H_category || ""
                  }
                  placeHolder="MD"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>
            </div>
            {/*  Contact */}
            <div className="flex w-full mt-3 justify-between items-center">
              <div className=" w-[30%]">
                <Label htmlFor="H_contact_no">Contact No</Label>
                <Input
                  id="H_contact_no"
                  type="text"
                  value={
                    formData?.H_contact_no || formUpdateData?.H_contact_no || ""
                  }
                  name="H_contact_no"
                  placeHolder="0987654321"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>
            </div>
            {/* H_short_add */}
            <div className="mt-2">
              <Label htmlFor="H_short_add">H_short_add</Label>
            </div>
            <div>
              <Input
                id="H_short_add"
                type="text"
                name="H_short_add"
                value={
                  formData?.H_short_add || formUpdateData?.H_short_add || ""
                }
                placeHolder="123 Main St"
                className="bg-transparent"
                onChange={handleInput(
                  oldData ? setFormUpdateData : setFormData
                )}
              />
            </div>
            {/* H_full_add */}
            <div className="flex w-full mt-3 justify-between items-center">
              <div className=" w-[30%]">
                <Label htmlFor="H_full_add">H_full_add</Label>
                <Input
                  id="H_full_add"
                  type="text"
                  name="H_full_add"
                  value={
                    formData?.H_full_add || formUpdateData?.H_full_add || ""
                  }
                  placeHolder="New York"
                  className="bg-transparent"
                  onChange={handleInput(
                    oldData ? setFormUpdateData : setFormData
                  )}
                />
              </div>
            </div>
            {/* H_advance_Appointment */}
            <div className="mt-2">
              <Label htmlFor="H_advance_Appointment">
                H_advance_Appointment
              </Label>
            </div>
            <div>
              <select
                className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                id="H_advance_Appointment"
                name="H_advance_Appointment"
                value={
                  formUpdateData?.H_advance_Appointment ||
                  formData?.H_advance_Appointment ||
                  "true"
                }
                onChange={handleInput(
                  oldData ? setFormUpdateData : setFormData
                )}
              >
                <option value="active">True</option>
                <option value="inactive">False</option>
              </select>
            </div>
            {/* H_advance_Appointment */}
            <div className="mt-2">
              <Label htmlFor="H_Todays_Appointment">H_Todays_Appointment</Label>
            </div>
            <div>
              <select
                className="py-3 px-4 pe-9 block bg-gray-100 border-transparent rounded-lg text-sm "
                id="H_Todays_Appointment"
                name="H_Todays_Appointment"
                value={
                  formUpdateData?.H_Todays_Appointment ||
                  formData?.H_Todays_Appointment ||
                  "true"
                }
                onChange={handleInput(
                  oldData ? setFormUpdateData : setFormData
                )}
              >
                <option value="active">True</option>
                <option value="inactive">False</option>
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

export default HospitalForm;
