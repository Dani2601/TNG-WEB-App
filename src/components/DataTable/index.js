import React from "react";

export default function DataTable(props) {
  const { header, tableData } = props;

  const headers = header?.map((data, index) => (
    <th
      key={index}
      scope="col"
      className="text-sm font-medium text-center text-gray-900 px-6 py-4 text-left"
    >
      {data}
    </th>
  ));

  return (
    <div className="table-container">
      <table className="w-full">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>

      <style jsx>{`
        .table-container {
          overflow-x: auto;
        }

        @media (max-width: 640px) {
          /* Styles for screens up to 640px wide */
          .table-container {
            width: 100%;
            overflow-x: auto;
          }

          table {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
