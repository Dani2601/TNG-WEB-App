import React, { useMemo, useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";

import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import bookingCard from "../../../assets/Gootopia/Booking/BookingCard.png";
import routes from "../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { getTicketBakebe, getTicketGootopia } from "../../../functions/Tickets";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TFRContainer from "../../Container/TFRContainer";
import TFRMenubarNonSpa from "../../Navbar/TFRMenubar";
import booknow from "../../../assets/TFR/button BOOK NOW GAMES.png";
import BakebeContainer from "../../Container/BakebeContainer";
import clock from "../../../assets/Bakebe/clock.png";
import timer from "../../../assets/Bakebe/timer.png";
import { convertToHoursMinutes } from "../../../helper/DateTime";
import { TicketBookingModal } from "../../Modal/Bakebe/TicketBookingModal";
import { getBranches } from "../../../functions/Branches";
import Pagination from "../../../components/Pagination";
import { getDifficulty } from "../../../constants/input";
import DataTable from "../../DataTable";
import TicketCard from "../../Card/Bakebe/TicketCard";
let ticket = [
  {
    id: 1,
    TicketName: "Entrance",
    OldPrice: "PHP 799.00",
    NewPrice: "699.00",
    Discount: "13% OFF",
    Description: "Your ticket to the Weird and Wonderful World of Gootopia!",
  },
  {
    id: 3,
    TicketName: "JANUARY BABIES ARE FREE!",
    OldPrice: "PHP 799.00",
    NewPrice: "699.00",
    Discount: "13% OFF",
    Description:
      "Just bring 1 paying friend! Valid within JANUARY 2023 ONLY. Celebrants must present their valid ID with date of Birth to avail the promo.",
  },
];

let category = [
  "Cake",
  "Cupcakes",
  "Macaroon",
  "Puff, Tarts & Cookies",
  "Pet Treats",
  "Crispnuts",
];

let durationRegular = [
  { Name: "5 hours", Value: "05:00" },
  { Name: "3 hours and 15 minutes", Value: "03:15" },
  { Name: "3 hours", Value: "03:00" },
  { Name: "2 hours and 45 minutes", Value: "02:45" },
  { Name: "2 hours and 30 minutes", Value: "02:30" },
  { Name: "2 hours", Value: "02:00" },
  { Name: "1 hour and 45 minutes", Value: "01:45" },
  { Name: "1 hour and 30 minutes", Value: "01:30" },
];

let durationExpress = [
  { Name: "1 hour", Value: "01:00" },
  { Name: "1 hour and 30 minutes", Value: "01:30" },
];

let pageCount = [10, 15, 20];

const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

export default function SelectTicketBakebe({
  setStep,
  location,
  setTicket,
  ticket,
  selectedType,
}) {
  const { user } = useSelector((state) => state.record);
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [dataPageCount, setDataPageCount] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState("All");
  const [pageSizeFilter, setPageSizeFilter] = useState(10);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const difficultyCount = getDifficulty();
  const navigate = useNavigate();

  const handleFilterChangeCategory = (event) => {
    setCategoryFilter(event.target.value);
    setPageNumber(1);
  };

  const handleFilterChangeDifficulty = (event) => {
    setDifficultyFilter(event.target.value);
    setPageNumber(1);
  };

  const handleFilterChangeDuration = (event) => {
    setDurationFilter(event.target.value);
    setPageNumber(1);
  };

  const handlePageCountChange = (event) => {
    setPageSizeFilter(event.target.value);
  };

  function handleBack() {
    setStep(2);
  }

  function handleNext() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setTicket("");
  }

  function handleProceed() {
    setStep(4);
    setShowModal(false);
  }

  useEffect(() => {
    getBranches(user.id, BAKEBE_KEY)
      .then((response) => {
        if (response.valid) {
          // Convert the object into an array
          const locationArray = Object.values(response.data);
          setSelectedLocation(
            locationArray.find((item) => item?.id === location)
          );
        }
      })
      .catch((error) => {
        // Handle error case
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    getTicketBakebe(
      user.id,
      process.env.REACT_APP_TFR_KEY,
      location,
      selectedType,
      pageSizeFilter,
      pageNumber,
      categoryFilter,
      difficultyFilter,
      durationFilter
    )
      .then((response) => {
        if (response.valid) {
          setTickets(response.data);
          setDataPageCount(response.pageCount);
          setLoading(false);
        } else {
        }
      })
      .catch(setLoading(false));
  }, [
    location,
    user,
    categoryFilter,
    difficultyFilter,
    durationFilter,
    pageSizeFilter,
  ]);

  const tableData = useMemo(() => {
    if (loading) {
      return (
        <>
          <div class="border-[0.5px] group container border-[#eeeeee] flex flex-col shadow-xl rounded-[30px] h-[322px]  w-[133px] mobileM:w-[167px] mobileL:w-[189px] tablet:w-[220px]  laptop:w-[290px] laptop4k:w-[350px] laptop:h-[270px]">
            <div className="h-[70%] ">
              <div className="animate-pulse bg-slate-200 rounded-t-[30px] h-full w-full object-cover" />
            </div>
            <div className="h-[30%] flex flex-col mx-[10px] gap-2 my-[10px] ">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="space-y-5">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-400 rounded col-span-5"></div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-row flex-wrap justify-between gap-2 text-bakebe-brown text-[12px] laptop:mx-[2%]">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-5">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-400 rounded col-span-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      if (tickets?.length > 0) {
        return tickets
          .filter((data) => {
            if (search === null) return data;
            else if (data.Name.toLowerCase().includes(search.toLowerCase())) {
              return data;
            }
          }).sort((a, b) => a.Name.localeCompare(b.Name))
          .map((data, index) => {
            return (
              <div class="hoverEffects border-[0.5px] group container border-[#eeeeee] flex flex-col shadow-xl rounded-[30px] h-[322px]  w-[133px] mobileM:w-[167px] mobileL:w-[189px] tablet:w-[220px]  laptop:w-[290px] laptop4k:w-[350px] laptop:h-[270px] content-div">
                <div className="h-[70%] fd-cl group-hover:opacity-0">
                   <img
                    src={data.Image}
                    alt={data.Image}
                    className="rounded-t-[30px] h-full w-full object-cover"
                  /> 
              
                </div>
                <div className="h-[30%] flex flex-col mx-[10px] gap-2 my-[10px] fd-cl group-hover:opacity-0">
                  <div className="truncate">{data.Name}</div>
                  <div className="flex flex-row flex-wrap justify-between gap-2 text-bakebe-brown text-[12px] laptop:mx-[2%]">
                    <div className="flex flex-row truncate items-center">
                      <img src={clock} className="mr-1" />{" "}
                      {convertToHoursMinutes(data.Hours)}
                    </div>
                    <div className="flex flex-row items-center">
                      <img src={timer} className="mr-1" />
                      {data.Difficulty.slice(0, 1)}
                    </div>
                  </div>
                </div>

                <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                  <div class="py-4 border-[0.5px] group container border-[#eeeeee] flex flex-col shadow-xl rounded-[30px] h-[322px]  w-[133px] mobileM:w-[167px] mobileL:w-[189px] tablet:w-[220px]  laptop:w-[290px] laptop4k:w-[350px] laptop:h-[270px] content-div">
                    <div className="h-[10%] px-3 ">
                      <div className="truncate">{data.Name}</div>
                    </div>
                    <div className="h-[20%] flex flex-col mx-[10px] gap-2 my-[10px] ">
                      <div className="flex flex-col laptop:flex-row flex-wrap justify-between gap-2 text-bakebe-brown text-[12px] laptop:mx-[2%]">
                        <div className="flex flex-row truncate items-center">
                          <img src={clock} className="mr-1" />{" "}
                          {convertToHoursMinutes(data.Hours)}
                        </div>
                        <div className="flex flex-row items-center">
                          <img src={timer} className="mr-1" />
                          {data.Difficulty.slice(0, 1)}
                        </div>
                      </div>
                    </div>
                    <div className="h-[40%] px-3 overflow-y-auto text-[13px] tracking-wide">
                      <div
                        className=""
                        style={{
                          fontFamily: "Gotham-Light, sans-serif",
                        }}
                      >
                        {data.Description}
                      </div>
                    </div>
                    <div className="h-[20%] px-3 self-center -mt-[3%] laptop:-mt-[7%]">
                      <button
                        onClick={() => {
                          handleNext();
                          setTicket(data);
                        }}
                        className="rounded-full px-[24px] py-[10px] bg-bakebe-pink text-white mt-8 laptop4K:[30px]"
                      >
                        BOOK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
      } else {
        return (
          <>
            <div class="border-[0.5px] group container border-[#eeeeee] flex flex-col shadow-xl rounded-[30px] h-[322px]  w-[133px] mobileM:w-[167px] mobileL:w-[189px] tablet:w-[220px]  laptop:w-[290px] laptop4k:w-[350px] laptop:h-[270px]">
              <div className="h-[70%] ">
                <div className="animate-pulse text-center flex flex-col items-center justify-center bg-slate-200 rounded-t-[30px] h-full w-full object-cover">
                 
                </div>
              </div>
              <div className="h-[30%] flex flex-col mx-[10px] gap-2 my-[10px] ">
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-5">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-400 rounded col-span-5">
                          {" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-row flex-wrap justify-between gap-2 text-bakebe-brown text-[12px] laptop:mx-[2%]">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                      <div className="space-y-5">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-400 rounded col-span-5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
  }, [
    loading,
    tickets,
    search,
    categoryFilter,
    difficultyFilter,
    durationFilter,
    pageSizeFilter,
  ]);

  return (
    <BakebeContainer>
      <TicketBookingModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        ticket={ticket}
        setStep={setStep}
        handleProceed={handleProceed}
        business={"Bakebe"}
      />

      <div
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        {" "}
        <div className="h-auto flex flex-col mt-5 ">
          <span className=" text-bakebe-orange text-[23px]  tablet:text-[28px] tablet:laptop:LaptopL:Laptop4k mt-8 ml-[4%]">
            ALL PRODUCTS
          </span>
          <div className="flex flex-row flex-wrap laptopL:flex-nowrap mt-[2%] mb-[1%]">
            <div className=" w-full laptopL:w-[75%] mx-[4%]">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-4 ">
                    <div
                      className="text-[13px] tracking-wider "
                      style={{ fontFamily: "Gotham-Light, sans-serif" }}
                    >
                      Sort By:
                    </div>
                    <select
                      className="shadow-lg focus:outline-none hidden laptopL:block bg-white border rounded-[5px]  p-[12px] w-[137px] "
                      aria-label="Default select example"
                      style={{ fontFamily: "Gotham-Light, sans-serif" }}
                      onChange={handleFilterChangeCategory}

                      // onChange={(e) => {
                      //   handleBusinessUnitSelectChange(e);
                      // }}
                      // name="BusinessUnit"
                      // onClick={() => businessUnits()}
                    >
                      <option className="text-[10px]" value="All">
                        All
                      </option>

                      {category?.map((item, index) => {
                        return (
                          <option
                            key={index}
                            className="text-[10px]"
                            value={item}
                          >
                            {" "}
                            {item}
                          </option>
                        );
                      })}
                    </select>

                    <select
                      className="shadow-lg focus:outline-none hidden laptopL:block bg-white border rounded-[5px]  p-[12px] w-[137px] "
                      aria-label="Default select example"
                      style={{ fontFamily: "Gotham-Light, sans-serif" }}
                      onChange={handleFilterChangeDifficulty}

                      // onChange={(e) => {
                      //   handleBusinessUnitSelectChange(e);
                      // }}
                      // name="BusinessUnit"
                      // onClick={() => businessUnits()}
                    >
                      <option className="text-[10px]" value="All">
                        All
                      </option>
                      {difficultyCount?.map((item, index) => {
                        return (
                          <option
                            key={index}
                            className="text-[10px]"
                            value={item}
                          >
                            {" "}
                            {item}
                          </option>
                        );
                      })}
                    </select>

                    <select
                      className="shadow-lg focus:outline-none hidden laptopL:block bg-white border rounded-[5px]  p-[12px] w-[137px] "
                      aria-label="Default select example"
                      style={{ fontFamily: "Gotham-Light, sans-serif" }}
                      onChange={handleFilterChangeDuration}
                      // name="BusinessUnit"
                      // onClick={() => businessUnits()}
                    >
                      <option className="text-[10px]" value="All">
                        All
                      </option>

                      {selectedType === "Express"
                        ? durationExpress?.map((item, index) => {
                            return (
                              <option
                                key={index}
                                className="text-[10px]"
                                value={item.Value}
                              >
                                {item.Name}
                              </option>
                            );
                          })
                        : durationRegular?.map((item, index) => {
                            return (
                              <option
                                key={index}
                                className="text-[10px]"
                                value={item.Value}
                              >
                                {" "}
                                {item.Name}
                              </option>
                            );
                          })}
                    </select>
                  </div>

                  <form className="">
                    <div class="flex ml-3 laptopL:ml-0">
                      <div class="relative w-full">
                        <input
                          type="search"
                          id="search-dropdown"
                          class="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-[5px]   border-t border-b border-l border-pink-200   focus:ring-2 focus:outline-none focus:ring-pink-200 "
                          placeholder="Search"
                          required
                          style={{ fontFamily: "Gotham-Light, sans-serif" }}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                          type="submit"
                          class="absolute top-0 right-0 p-2.5 text-sm font-medium text-bakebe-pink bg-white rounded-r-[5px] border-t border-b border-r border-pink-200 "
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                          <span class="sr-only">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* <div className="flex flex-row flex-wrap  gap-4 gap-y-8 pt-[2%] "> */}
                <TicketCard tableData={tableData} />
                {/* </div> */}

                <div
                  className="flex flex-col tablet:flex-row  pt-[8%] tablet:justify-between"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  <div className="flex flex-row justify-center items-center gap-2 flex-wrap pb-[3%]">
                    <div className="">Show</div>

                    <select
                      className="shadow-lg focus:outline-none  bg-white border rounded-[5px]  p-[12px] w-[137px] "
                      aria-label="Default select example"
                      style={{ fontFamily: "Gotham-Light, sans-serif" }}
                      onChange={(e) => {
                        handlePageCountChange(e);
                      }}
                      // name="BusinessUnit"
                      // onClick={() => businessUnits()}
                    >
                      {pageCount?.map((item, index) => {
                        return (
                          <option
                            key={index}
                            className="text-[10px]"
                            value={item}
                          >
                            {" "}
                            {item}
                          </option>
                        );
                      })}
                    </select>
                    <div className="">Entries</div>
                  </div>
                  <div className="tablet:mt-2">
                    {" "}
                    <Pagination
                      dataPageCount={dataPageCount}
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                    />
                  </div>
                </div>

                {/* <div
                  className="flex flex-col pt-[3%] tablet:pt-0 tablet:justify-between"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  <div className="flex flex-row items-center gap-2 flex-wrap pb-[3%] tablet:justify-between">
                    <div className="">Showing 1 to 20 of 54</div>
                    <div className="flex flex-row items-center">
                      <div className="mr-2">Go to Page:</div>
                      <div className="">
                        {" "}
                        <select
                          className="shadow-lg focus:outline-none  bg-white border rounded-[5px]  p-[12px] w-[137px] "
                          aria-label="Default select example"
                          style={{ fontFamily: "Gotham-Light, sans-serif" }}

                          // onChange={(e) => {
                          //   handleBusinessUnitSelectChange(e);
                          // }}
                          // name="BusinessUnit"
                          // onClick={() => businessUnits()}
                        >
                          {pageCount?.map((item, index) => {
                            return (
                              <option
                                key={index}
                                className="text-[10px]"
                                value={item}
                              >
                                {" "}
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="text-[13px] laptopL:text-[16px] laptopL:w-[25%] mx-[8%] py-[6%] laptopL:py-0 laptopL:mx-0 w-full">
              <div className="flex flex-col">
                <div className="flex flex-col laptopL:ml-3 gap-2">
                  <div style={{ fontFamily: "Gotham-Light, sans-serif" }}>
                    Location
                  </div>
                  <div className="text-bakebe-footerpink">
                    {selectedLocation?.Name}
                  </div>
                </div>
                <hr class="h-px bg-gray-200 border-0 my-5 laptopL:w-[250px]"></hr>
                <div className="flex flex-col laptopL:ml-3 gap-2">
                  <div style={{ fontFamily: "Gotham-Light, sans-serif" }}>
                    Type Of Booking
                  </div>
                  <div className="text-bakebe-footerpink">{selectedType}</div>
                </div>
                <hr class="h-px bg-gray-200 border-0 my-5 laptopL:w-[250px]"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BakebeContainer>
  );
}
