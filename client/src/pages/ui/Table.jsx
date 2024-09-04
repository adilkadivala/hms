const Table = ({ columns, data }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto pb-4">
        <div className="block">
          <div className="overflow-x-auto w-full border rounded-lg border-gray-300">
            <table className="w-full rounded-xl">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-5">
                    <div className="flex items-center py-5 px-5">
                      <input
                        type="checkbox"
                        value=""
                        className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                      />
                    </div>
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column.accessor}
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="bg-white transition-all duration-500 hover:bg-gray-50"
                  >
                    <td className="p-5">
                      <div className="flex items-center py-5 px-5">
                        <input
                          type="checkbox"
                          value=""
                          className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        />
                      </div>
                    </td>
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav
            className="flex items-center justify-center py-4"
            aria-label="Table navigation"
          >
            <ul className="flex items-center justify-center text-sm h-auto gap-12">
              <li>
                <a
                  href="javascript:;"
                  className="flex items-center justify-center gap-2 px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-7 hover:text-gray-700"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0002 14.9999L8 9.99967L13.0032 4.99652"
                      stroke="black"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                  Back
                </a>
              </li>
              <li>
                <ul className="flex items-center justify-center gap-4">
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full"
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.52754 10.001H5.47754M10.5412 10.001H10.4912M15.5549 10.001H15.5049"
                          stroke="black"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="flex items-center justify-center gap-2 px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-7 hover:text-gray-700"
                >
                  Next{" "}
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00295 4.99646L13.0032 9.99666L8 14.9998"
                      stroke="black"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Table;
