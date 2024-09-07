import { useEffect } from "react";
import { useState } from "react";
import { Fetch } from "../../../constant/Fetch";
import Table from "../../ui/Table";
import Layout from "../component/Main";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const API = "http://localhost:5665/getpayments";

const Payment = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const columns = [
    { Header: "Patient Name", accessor: "Patient_id" },
    { Header: "Doctor Name", accessor: "Doctor_by_hospital_id" },
    { Header: "Hospital Name", accessor: "Doctor_by_hospital_id" },
    { Header: "Appointment", accessor: "Appointment_id" },
    { Header: "Amount", accessor: "Payment_amount" },
    { Header: "Payment Status", accessor: "Payment_status" },
    { Header: "Transaction Id", accessor: "Transaction_id" },
  ];

  const { getData, data: payment, isLoading, error } = Fetch();

  useEffect(() => {
    getData(API);
  }, []);

  const tableData = payment
    ? payment.map((payment) => ({
        Patient_id: payment.Patient_id,
        Doctor_by_hospital_id: payment.Doctor_by_hospital_id,
        Doctor_by_hospital_id: payment.Doctor_by_hospital_id,
        Appointment_id: payment.Appointment_id,
        Payment_amount: payment.Payment_amount,
        Payment_status: payment.Payment_status,
        Transaction_id: payment.Transaction_id,
        actions: (
          <div className="flex items-center gap-1">
            <Button
              className="py-2 px-3 rounded-full bg-primary text-white"
              onClick={toggleModal}
            >
              <i className="fa-solid fa-pen"></i>
            </Button>
            <Button
              className="py-2 px-3  rounded-full bg-red-600 text-white"
              onClick={toggleModal}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
            <Button
              className="py-2 px-3  rounded-full bg-slate-400 text-white"
              onClick={toggleModal}
            >
              <i className="fa-solid fa-eye"></i>
            </Button>
          </div>
        ),
      }))
    : [];

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Payment Table</h1>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {payment && <Table columns={columns} data={tableData} />}

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
            title="Vertically Centered Modal"
            footer={
              <>
                <Button
                  className="py-2 px-3 bg-gray-50 text-primary"
                  onClick={toggleModal}
                >
                  Close
                </Button>
                <Button className="py-2 px-3 bg-blue-600 text-white">
                  Save changes
                </Button>
              </>
            }
          >
            <p>This is a reusable modal component!</p>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default Payment;
