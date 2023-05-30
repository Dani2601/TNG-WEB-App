import React from "react";

export default function DataTable(props) {
  const { header, tableData } = props;

  const headers = header.map((data, index) => (
    <th
      key={index}
      scope="col"
      className="text-sm font-medium text-gray-900 px-6 py-4 text-center "
    >
      {data}
    </th>
  ));

  return (
<div className="overflow-x-auto">
  <table className="w-full whitespace-no-wrap">
    <thead>
      <tr>{headers}</tr>
    </thead>
    <tbody>{tableData}</tbody>
  </table>
</div>

  );
}
