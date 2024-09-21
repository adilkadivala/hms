import React from "react";
import { handleModelInput } from "../../../utils/handleInput";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const DeleteModal = ({
  toggleModal = () => {},
  handleDelete = () => {},
  DoctorIDForDelete = {},
  setDoctorNameInput = () => {},
  nameError = {},
  doctorNameInput = {},
}) => {
  return (
    <Modal
      onClose={toggleModal}
      title="Delete Confirmation"
      footer={
        <>
          <Button
            className="bg-red-600 text-white py-2 px-4 rounded-full"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            className="bg-gray-600 text-white py-2 px-4 rounded-full"
            onClick={toggleModal}
          >
            Cancel
          </Button>
        </>
      }
    >
      <div className="flex flex-col gap-3">
        <p>
          Are you sure you want to delete
          <span className="text-primary">{DoctorIDForDelete.Doctor_name}?</span>
        </p>
        <p>Write Down Doctor's Name to Confirm:</p>
        <Input
          type="text"
          name="doctorNameInput"
          placeHolder="Dr. Name Here"
          value={doctorNameInput}
          onChange={handleModelInput(setDoctorNameInput)}
        />
        {nameError && <p className="text-red-600">{nameError}</p>}
      </div>
    </Modal>
  );
};

export default DeleteModal;
