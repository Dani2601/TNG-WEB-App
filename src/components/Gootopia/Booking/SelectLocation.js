import React, { useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import moa from "../../../assets/Gootopia/Booking/SmMoa.png";
import routes from "../../../constants/routes";
import { Link } from "react-router-dom";
import { getBranches } from "../../../functions/Branches";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export default function SelectLocation() {
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(false);
  const { user } = useSelector((state) => state.record);
  const [currentImage, setCurrentImage] = useState(null);

  const handleSelectLocation = () => {
    setSelectedLocation(!selectedLocation);
  };

  useEffect(() => {
    getBranches(user.id)
      .then((response) => {
        if (response.valid) {
          setLocation(response.data);
        } else {
        }
      })
      .catch();
  }, []);

  // useEffect(() => {
  //   if (location?.Image) {
  //     async function viewImage(container, filename, func) {
  //       try {
  //         const { data } = await axios.post(
  //           `${process.env.REACT_APP_REST_API}generateSASToken`,
  //           {
  //             filename: filename,
  //             container: container,
  //           }
  //         );

  //         func(data);
  //       } catch (e) {
  //         console.log("Failed to view");
  //       }
  //     }
  //     if (location?.Image) {
  //       viewImage("users", location?.Image, setCurrentImage);
  //     }
  //   } else {
  //   }
  // }, [setCurrentImage]);

  console.log(location);

  return (
    <GootopiaContainer>
      <div className="max-h-full min-h-screen bg-gootopia-purp ">
        <img class="w-full" src={dripping} alt="gootopialanding" />
        <div className="flex flex-row justify-center">
          <span className="font-flavors text-gootopia-pinkText text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            SELECT A LOCATION
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div className="bg-white w-[300px] tablet:w-[400px] rounded-md p-3">
            <div>
              <div className="flex flex-row">
                {location.map((data, index) => {
                  return (
                    <div className="flex flex-col">
                      <button
                        className="outline-4 self-center"
                        onClick={() => handleSelectLocation()}
                        key={index}
                      >
                        <img
                          className={`rounded-[7px] w-[75px] h-[75px] tablet:w-[120px] tablet:h-[120px]${
                            selectedLocation === true
                              ? "outline-[15px] outline outline-[#E677AA] rounded-[7px] w-[75px] h-[75px] tablet:w-[120px] tablet:h-[120px]"
                              : ""
                          } `}
                          src={data?.Image}
                          alt="gootopia"
                        />
                      </button>
                      <div className="text-[#CA1D6D] text-[12px] tablet:text-[14px] font-poppins font-bold self-center">
                        {data?.Address}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-row justify-end">
                <div>
                  {selectedLocation ?  <button className="text-white text-[12px] tablet:text-[14px] bg-[#E677AA] font-poppins px-3 py-1 rounded-3xl">
                    <Link to={routes.SelectTicketGootopia}>Next</Link>
                  </button> :  <button className="text-white cursor-default text-[12px] tablet:text-[14px] bg-[#777777] font-poppins px-3 py-1 rounded-3xl">
                    Next
                  </button>}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-80">
          <img
            class="w-full rotate-180 "
            src={dripping}
            alt="gootopialanding "
          />
        </div>
      </div>
    </GootopiaContainer>
  );
}
