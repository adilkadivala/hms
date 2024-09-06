const Table = ({ columns, data }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto pb-4">
        <div className="block">
          <div className="overflow-x-auto w-full border rounded-lg border-gray-300 dark:border-gray-700">
            <table className="w-full rounded-xl">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="p-5">
                    <div className="flex items-center py-5 px-5">
                      <input
                        type="checkbox"
                        value=""
                        className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 dark:border-gray-600 dark:hover:border-indigo-500 dark:bg-gray-800"
                      />
                    </div>
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column.accessor}
                      scope="col"
                      className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 dark:text-gray-300 capitalize"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="bg-white dark:bg-gray-900 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="p-5">
                      <div className="flex items-center py-5 px-5">
                        <input
                          type="checkbox"
                          value=""
                          className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 dark:border-gray-600 dark:hover:border-indigo-500 dark:bg-gray-800"
                        />
                      </div>
                    </td>
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 dark:text-gray-300"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
