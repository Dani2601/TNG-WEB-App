import React from "react";

export default function DataTable(props) {
  const { header, tableData } = props;

  // const headers = header.map((data, index) => (
  //   <th
  //     key={index}
  //     scope="col"
  //     className="text-sm font-medium text-gray-900 px-6 py-4 text-center "
  //   >
  //     {data}
  //   </th>
  // ));

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 gap-y-8 pt-[2%]">{tableData}</div>

  );
}
