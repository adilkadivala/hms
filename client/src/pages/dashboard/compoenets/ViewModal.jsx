import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const ViewModal = ({ toggleModal = () => {}, doctorToView = {} }) => {
  const {
    Doctor_name,
    Profile_image,
    Address,
    Alternate_contact,
    City,
    Country,
    Doctor_degree,
    Doctor_experience,
    Doctor_speciality,
    Email_id,
    Region,
    Whatsapp_no,
    status,
  } = doctorToView;
  return (
    <Modal
      onClose={toggleModal}
      title={`About  ${Doctor_name}`}
      data={doctorToView}
      width="w-[50%]"
      height="h-[60%]"
      footer={
        <>
          <Button
            className="bg-gray-600 text-white py-2 px-4 rounded-full"
            onClick={toggleModal}
          >
            Close
          </Button>
        </>
      }
    >
      <div className="flex flex-col rounded p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex items-center gap-x-4">
          <img
            className="rounded size-40"
            src={`/upload/${Profile_image}`}
            alt="Avatar"
          />
          <div className="grow">
            <h3 className="font-medium text-secondry dark:text-neutral-200">
              Name :{" "}
              <span className="text-xs text-primary ">{Doctor_name}</span>
            </h3>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Degree :{" "}
              <span className="text-xs text-primary ">{Doctor_degree}</span>{" "}
              <span className=" text-secondry">
                Specialist In :
                <span className=" text-primary">{Doctor_speciality}</span>
              </span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Email : <span className="text-xs  text-primary">{Email_id}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Contact No :{" "}
              <span className="text-xs  text-primary">{Whatsapp_no}</span>{" "}
              Alternate_contact :{" "}
              <span className="text-xs  text-primary">{Alternate_contact}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Experience :{" "}
              <span className="text-xs  text-primary">{Doctor_experience}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500 ">
              Country : <span className="text-xs  text-primary">{Country}</span>{" "}
              Region : <span className="text-xs  text-primary">{Region}</span>{" "}
              City : <span className="text-xs  text-primary">{City}</span>{" "}
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              Address : <span className="text-xs  text-primary">{Address}</span>
            </h4>
            <h4 className=" uppercase text-secondry dark:text-neutral-500">
              status : <span className="text-xs  text-primary">{status}</span>
            </h4>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewModal;
