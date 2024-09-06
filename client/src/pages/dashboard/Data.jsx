import Table from "../ui/Table";
import Layout from "./component/Main";

const Data = () => {
  const columns = [
    { Header: "Full Name & Email", accessor: "fullNameEmail" },
    { Header: "Company", accessor: "company" },
    { Header: "User ID", accessor: "userId" },
    { Header: "Status", accessor: "status" },
    { Header: "Actions", accessor: "actions" },
  ];

  const data = [
    {
      fullNameEmail: (
        <div className="w-48 flex items-center gap-3">
          <img
            src="https://pagedone.io/asset/uploads/1697536419.png"
            alt="Floyd image"
          />
          <div className="data">
            <p className="font-normal text-sm text-gray-900">Floyd Miles</p>
            <p className="font-normal text-xs leading-5 text-gray-400">
              floydmiles@pagedone.io
            </p>
          </div>
        </div>
      ),
      company: "Louis Vuitton",
      userId: "20010510",

      status: (
        <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20 items-center gap-1">
          <svg
            width="5"
            height="6"
            viewBox="0 0 5 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="3" r="2.5" fill="#059669"></circle>
          </svg>
          <span className="font-medium text-xs text-emerald-600">Active</span>
        </div>
      ),
      actions: (
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-full bg-white group transition-all  hover:text-white duration-500 hover:bg-indigo-600 dark:bg-black hover:dark:bg-indigo-600 flex item-center">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600  hover:text-white dark:bg-black hover:dark:bg-red-600 flex item-center">
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="p-2 rounded-full bg-white group transition-all duration-500  flex item-center dark:text-white dark:bg-black hover:bg-indigo-400 hover:text-white hover:dark:bg-indigo-400">
            <i className="fa-solid fa-grip-vertical "></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">User Table</h1>
          <Table columns={columns} data={data} />
        </div>
      </Layout>
    </>
  );
};

export default Data;
