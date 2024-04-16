import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
// import { Topbar } from "../../components/NavigationBars";
// import Footer from "../../components/Footer/index";
import SkeletonTable from "../../components/Animation/SkeletonLoader";
import { getDate } from "../../helper";
import { getDateTime } from "../../helper";
import DataTable from "../../components/DataTable";
import Pagination from "../../components/Pagination";
import Status from "../../components/Status/Status";
// import { GlobalToolTip } from "../../components/ToolTip";
import { FaEllipsisV } from "react-icons/fa";
import TransactionModal from "../../components/Modal/Profile/TransactionModal/TransactionModal";
// import BusinessUnitModal from "../../components/Modal/BusinessUnitModal/BusinessUnitModal";
// import { changeStatusBusinessUnit, viewBusinessUnit } from "../../functions";
import { useSelector } from "react-redux";
import { Topbar } from "../../components/Navbar";
import { viewMyTickets, viewMyTransaction } from "../../functions/Booking";
import { encryptData } from "../../helper/DataEncryption";
import TicketModal from "../../components/Modal/Profile/TransactionModal/TicketModal";

const tableHeader = [
  "Ticket Name",
  "Transaction Code",
  "TNG",
  "Branch",
  "Booking Date",
  "Booking Time",
  "Date Created",
  "Status",
];
let title = "Tickets";

export default function Tickets() {
  const [search, setSearch] = useState(null);
  const [qrData, setQrData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [record, setRecord] = useState([]);
  const [tooltip, showTooltip] = useState(true);
  // const [statusFilter, setStatusFilter] = useState("All");
  const [dataPageCount, setDataPageCount] = useState(1);
  const [openEditBusinessUnitModal, setOpenEditBusinessUnitModal] =
    useState(false);
  const [editData, setEditData] = useState("");
  const [toAddData, isToAddData] = useState(false);
  const [dataAdded, setDataAdded] = useState();
  const { user } = useSelector((state) => state.record);

  // const handleFilterChange = (event) => {
  //   setStatusFilter(event.target.value);
  //   setPageNumber(1);
  // };

  // Open edit post Modal
  const openEditModal = () => {
    setOpenEditBusinessUnitModal(true);
  };

  // CLose edit post Modal
  const closeEditModal = () => {
    setOpenEditBusinessUnitModal(false);
    isToAddData(false);
  };

  function getTime(bookingTime) {
    const [hours24, minutes, seconds] = bookingTime.split(':');
    const hours = parseInt(hours24, 10);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    const formattedTime = `${hours12}:${minutes.padStart(2, '0')} ${period}`;

    return formattedTime;
  }

  const getEditData = (data) => {
    const objData = { transactionCode: data.qrCode, UserID: data.customer.Id, Status: data.status }

    const encrypt = encryptData(objData)

    setOpenEditBusinessUnitModal(true);
    setEditData(data);
    setQrData(encrypt);
    openEditModal();
  };

  const addData = () => {
    // setOpenEditBusinessUnitModal(true);
    setEditData();
    openEditModal();
    isToAddData(true);
  };

  const _promptChangeStatus = async (a, b) => {
    // await changeStatusBusinessUnit(a, b)
    //   .then((res) => setDataAdded(!dataAdded))
    //   .catch();
  };

  const PAGE_SIZE = 10;

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      viewMyTickets(accessToken)
        .then((response) => {
          if (response && response.success) {
            setRecord(response.transactionsArray);
            console.log(record)
          } else {
            console.log('Failed to fetch ticket data');
          }
        })
        .catch((error) => {
          console.error('Error fetching ticket data:', error);
        })
        .finally(() => {
          setLoading(false); // Set loading state to false when done fetching
        });
    }
  }, []);


  const tableData = useMemo(() => {
    if (loading) {
      return (
        <tr className="border-b max-w-96">
          {tableHeader.map((data, index) => (
            <SkeletonTable key={index} />
          ))}
        </tr>
      );
    } else {
      if (record?.length > 0) {
        return record
          .filter((data) => {
            if (search === null) return data;
            else if (
              data.ticketName.toLowerCase().includes(search.toLowerCase()) ||
              data.bookingDate.toLowerCase().includes(search.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data, index) => {
            // Parse and format the booking date
            const formattedBookingDate = data.bookingDate ? getDate(data.bookingDate) : "N/A"; // Use your date formatting logic here
            console.log('Data')
            console.log(data)
            return (
              <tr className="border-b max-w-96" key={index}>
                <td
                  onClick={() => getEditData(data)}
                  className="font-poppins text-center px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px]"
                >
                  <p
                    data-tip="Click to view details"
                    data-for="memo"
                    className="font-poppins cursor-pointer hover:text-BrrringYellow"
                    onMouseEnter={() => showTooltip(true)}
                    onMouseLeave={() => {
                      showTooltip(false);
                      setTimeout(() => showTooltip(true));
                    }}
                  >
                    {data?.ticket.name || data?.qrCode.qrCode}
                  </p>
                </td>
                <td className="font-poppins text-center px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px]">
                  {data.transactionCode}
                </td>
                <td className="font-poppins text-center px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px]">
                  {data?.businessUnit.name}
                </td>
                <td className="font-poppins text-center px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px]">
                  {data?.businessUnitBranch.name}
                </td>
                <td className="font-poppins text-center px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px]">
                  {formattedBookingDate}
                </td>
                <td className="font-poppins text-center px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px]">
                  {getTime(data.bookingTime)}
                </td>
                <td className="font-poppins text-center px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px]">
                  {getDate(data.createdAt)} {/* Assuming CreatedTS needs formatting */}
                </td>
                <td className="font-poppins px-6 py-4 text-sm font-medium text-gray-900 max-w-[300px] flex justify-center">
                  <span className="w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
                    <Status status={data.status} />
                  </span>
                </td>
              </tr>
            );
          });
      } else {
        return "No data available";
      }
    }
  }, [loading, record, search, tooltip, getEditData]);

  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Helmet>
        <title>TNG Admin | Business Unit</title>
      </Helmet>
      {openEditBusinessUnitModal && (
        <TicketModal
          ariaHideApp={false}
          editData={editData}
          record={record}
          closeEditModal={closeEditModal}
          openEditBusinessUnitModal={openEditBusinessUnitModal}
          toAddData={toAddData}
          setDataAdded={setDataAdded}
          dataAdded={dataAdded}
          qrData={qrData}
        />
      )}
      <div className="min-h-screen flex flex-col bluegradient">
        <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick} />

        <div className=" p-10 gap-8 mb-auto font-poppins ">
          <div className="text-2xl flex flex-row">
            {title}
            <div className="ml-auto flex mt-10">
              <div className="flex mb-2 flex-row justify-center gap-3 items-center">
                {/* <ExportExcel
                  // csvData={dateToExport()}
                  fileName={
                    state?.user?.Name?.FirstName +
                    String(
                      statusFilter === "V"
                        ? "-Verified-"
                        : statusFilter === "U"
                        ? "-Rejected-"
                        : statusFilter === "All"
                        ? "-All-"
                        : "-Archived-"
                    ) +
                    "Users"
                  }
                  onRequestRecord={getExcelRecord}
                />
                <GlobalToolTip title={title}/>
                {redAdd} */}
                <div>
                  {/* <button className="bluegradient text-[15px] h-8 self-center rounded-[5px] px-3 mt-2">
                  {" "}
                  Export
                </button> */}
                </div>
                <div>
                  {/* <button
                  className="bluegradient text-[15px] h-8 self-center rounded-[5px] px-3 mt-2"
                  onClick={() => addData()}
                >
                  {" "}
                  + New Business Unit
                </button> */}
                </div>
                <div>{/* <GlobalToolTip title={title} /> */}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-5 rounded-lg shadow-lg bg-white">
            <div className="flex flex-row place-items-center">
              <div>
                {/* <div className="flex justify-center mr-2">
                  <select
                    id="ddlProducts"
                    className="w-[140px]  block px-3 py-1.5 text-sm text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={handleFilterChange}
                  >
                    <option value="All">All</option>
                    <option value="A">Active</option>
                    <option value="I">Inactive</option>
                    <option value="X">Archived</option>
                  </select>
                </div> */}
              </div>
              <input
                type="text"
                className=" w-full h-10 border border-1 border-solid border-gray-300 rounded "
                placeholder=" Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <img src={FindFoodIcon} alt="FindFood" className="-ml-10 h-7" /> */}
            </div>
            <div className="flex flex-col">
              <DataTable header={tableHeader} tableData={tableData} />
            </div>
            <Pagination
              dataPageCount={dataPageCount}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
        {/* <Footer className="mt-auto"/> */}
      </div>
    </>
  );
}
