import React from "react";
import { handleModelInput } from "../../../utils/handleInput";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

const DeleteModal = ({
  toggleModal = () => {},
  handleDelete = () => {},
  setInputName = () => {},
  nameError = {},
  inputName = {},
  conformDataName = "",
  placeHolder = "",
  conformText = "",
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
          Are you sure you want to delete {""}
          <span className="text-primary">{conformDataName}?</span>
        </p>
        <p>{conformText}</p>
        <Input
          type="text"
          name="inputName"
          placeHolder={placeHolder}
          value={inputName}
          onChange={handleModelInput(setInputName)}
        />
        {nameError && <p className="text-red-600">{nameError}</p>}
      </div>
    </Modal>
  );
};

export default DeleteModal;
