import { useEffect } from "react";
import { useState } from "react";
// import Table from "../../ui/Table";
import Layout from "../layout/Main";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Modal from "../../ui/Modal";
import toast from "react-hot-toast";
import axios from "axios";
import { DoctorFields, doctorFormData } from "../../../constant/Fields";
import { Fetch } from "../../../constant/Fetch";
import { Delete } from "../../../constant/Delete";
import { NavLink } from "react-router-dom";

const PORT = import.meta.env.VITE_SERVER_API;
// const API = `${PORT}/getdoctors`;
const API = "https://dummyjson.com/users";

const Doctor = () => {
  const { data, isLoading, error, getData } = Fetch();
  const { deleteData } = Delete();

  useEffect(() => {
    getData(API);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between align-middle text-center">
          <h1 className="text-2xl font-bold mb-4">Doctors</h1>
          <NavLink to="/dashboard">
            <span className="border-b-2 border-b-primary">Add +</span>
          </NavLink>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        
        {/* {data && <Table columns={columns} data={tableData} />} */}

        {/* {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
            width="w-[]"
            height="h-[]"
            title="Create a Doctor profile"
            footer={
              <>
                <Button
                  className="py-2 px-3 bg-gray-50 text-primary"
                  onClick={toggleModal}
                >
                  Close
                </Button>
              </>
            }
          >
            <div className="text-black dark:text-white">
              <Form className="flex flex-wrap gap-1" />
            </div>
          </Modal>
        )} */}
      </div>
    </Layout>
  );
};

export default Doctor;
