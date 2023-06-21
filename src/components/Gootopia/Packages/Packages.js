import React from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import WeirdandWonderfulping from "../../../assets/Gootopia/Obstacles/WeirdAndWonderful.png";
import ObstaclesDrip from "../../../assets/Gootopia/Obstacles/Obstacles.png";

import seventh from "../../../assets/Gootopia/Packages&Activities/Ironman.png";
import second from "../../../assets/Gootopia/Packages&Activities/BdayParty.png";
import fifth from "../../../assets/Gootopia/Packages&Activities/GenderReveal.png";
import sixth from "../../../assets/Gootopia/Packages&Activities/BookNow.png";
import eight from "../../../assets/Gootopia/Packages&Activities/hammer.png";
import first from "../../../assets/Gootopia/Packages&Activities/Photoshoot.png";
import fourth from "../../../assets/Gootopia/Packages&Activities/GroupTour.png";
import ninth from "../../../assets/Gootopia/Packages&Activities/arcade.png";
import tenth from "../../../assets/Gootopia/Packages&Activities/trophy.png";
import eleventh from "../../../assets/Gootopia/Packages&Activities/paint.png";
import twelvth from "../../../assets/Gootopia/Packages&Activities/shop.png";

import third from "../../../assets/Gootopia/Packages&Activities/TeamBuilding.png";

import GootopiaContainer from "../../Container/GootopiaContainter";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import routes from "../../../constants/routes";
import { Link } from "react-router-dom";
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const validationSchema = Yup.object().shape({
  date: Yup.string().required().label("Event Date"),
  type: Yup.string().required().label("Package Type"),
  pax: Yup.string().required().label("Pax"),
  message: Yup.string().required().label("Message"),
});
export default function Packages() {
  const [packages, setPackages] = useState([]);
  const { user } = useSelector((state) => state.record);
  const [packageImage, setPackageImage] = useState([]);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_REST_API}ViewPublicBusinessPackage`, {
        BusinessUnitID: GOOTOPIA_KEY,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.valid) {
          setPackages(res.data.data);
        } else {
          setPackages([]);
        }
      })
      .catch((error) => {
        setPackages([]);
      });
  }, []);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_REST_API}ViewSpecBusinessPackage`, {
        BusinessUnitID: GOOTOPIA_KEY,
      })
      .then((res) => {
        console.log(res);
        if (res.data.valid) {
          setPackageImage(res.data.data);
        } else {
          setPackageImage([]);
        }
      })
      .catch((error) => {
        setPackages([]);
      });
  }, []);

  const onSubmit = (values) => {
    axios
      .post(`${process.env.REACT_APP_REST_API}AddPackageBooking`, {
        BusinessUnitID: GOOTOPIA_KEY, //dessert
        CustomerID: user?.id,
        BookingDate: values?.date,
        Type: values?.type,
        Pax: parseInt(values?.pax),
        Message: values?.message,
      })
      .then((result) => {
        console.log(result.data);
        if (result.data.valid) {
          toast.success("Successfully submit");
          formik.handleReset();
        } else {
          toast.error(result?.data?.errorMsg);
        }
      })
      .catch((e) => {
        toast.error("Something went wrong");
      });
  };
  const formik = useFormik({
    initialValues: {
      date: "",
      type: "",
      pax: 1,
      message: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <GootopiaContainer>
      <FormikProvider value={formik}>
        <Form>
          <div>
            <div className="max-h-full min-h-screen bg-gootopia-purp ">
              <img class="w-full" src={dripping} alt="gootopialanding" />
              <div className="flex flex-row justify-center">
                <span className="font-flavors text-gootopia-pinkText text-[30px] tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k">
                  PACKAGES
                </span>
              </div>

              <div className="flex flex-col justify-center py-5 ">
                <div className="flex flex-col justify-center items-center ">
                  <div className="tablet:flex tablet:flex-row tablet:flex-wrap justify-center items-center tablet:gap-5 ">
                    {packageImage.map((item) => {
                      return (
                        <div>
                          <img
                            class="h-[285px] tablet:h-[308px] mb-5 hoverPackageEffects cursor-pointer"
                            src={item.Image}
                            alt="gootopialanding"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="w-[70vw] md:w-[50vw] m-auto py-10">
                  <label className="font-bold text-gootopia-pinkText text-[30px] tablet:text-[50px] ">Booking Form</label>
                  <div className="flex mt-4 gap-2 font-poppins">
                    <div className="w-full">
                      <label>Package Type</label>
                      <select
                        value={formik.values.type}
                        name="type"
                        onChange={formik.handleChange}
                        className="w-full h-[43px] shadow-md py-2 px-4 border-2 border-gray-400"
                      >
                        <option value={""}>Type of Package</option>
                        {packages.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item?.Name}
                          </option>
                        ))}
                      </select>
                      {formik.touched.type && formik.errors.type ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.type}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex mt-4 gap-2">
                    <div className="w-full">
                      <label>Event Date</label>
                      <input
                        name="date"
                        value={formik.values.date}
                        type="date"
                        onChange={formik.handleChange}
                        className="w-full shadow-md py-2 px-4 border-2 border-gray-400"
                      />
                      {formik.touched.date && formik.errors.date ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.date}
                        </div>
                      ) : null}
                    </div>
                    <div className="w-full">
                      <label>Pax</label>
                      <input
                        type="number"
                        value={formik.values.pax}
                        name="pax"
                        onChange={(e) => {
                          const newValue = Math.max(
                            1,
                            parseInt(e.target.value) || 0
                          );
                          formik.setFieldValue("pax", newValue);
                        }}
                        className="w-full shadow-md py-2 px-4 border-2 border-gray-400"
                      />
                      {formik.touched.pax && formik.errors.pax ? (
                        <div className="text-red-500 text-sm">
                          {formik.errors.pax}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-4 gap-2">
                    <label>Message</label>
                    <textarea
                      placeholder="Type a message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      name="message"
                      className="w-full shadow-md py-2 px-4 border-2 border-gray-400"
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.message}
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    {user ? (
                      <button
                        onClick={formik.handleSubmit}
                        className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white"
                      >
                        Book Now
                      </button>
                    ) : (
                      <Link
                        to={routes.Login}
                        className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white"
                      >
                        Book Now
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col  py-5  text-gootopia-yellowText font-poppins ">
                <div className="flex flex-row justify-evenly items-start">
                  <div className="text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px] ">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2 mx-auto "
                        src={seventh}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">Cosplay</div>
                    <div className="text-center">
                      Perfect time for your own costume party! You are after all
                      entering a weird and wonderful world!
                    </div>
                  </div>

                  <div className="text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px] ">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={eight}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">
                      Slime Sentence
                    </div>
                    <div className="text-center">
                      You and your guests can get sentenced to get slimed (the
                      most fun experience for everyone!) The only way to get out
                      is to beat the game our challenges!
                    </div>
                  </div>

                  <div className="hidden laptop:block text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={ninth}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">
                      Gaming Stations
                    </div>
                    <div className="text-center">
                      There will be unique and fun game stations scattered
                      throughout this fun house. Your guests are sure to test
                      both their mental and physical limits!
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-evenly items-start mt-10">
                  <div className="laptop:hidden text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={ninth}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">
                      Gaming Stations
                    </div>
                    <div className="text-center">
                      There will be unique and fun game stations scattered
                      throughout this fun house. Your guests are sure to test
                      both their mental and physical limits!
                    </div>
                  </div>

                  <div className="hidden laptop:block text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={tenth}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">
                      Award Stage
                    </div>
                    <div className="text-center">
                      The Winner of the Great Games of Gootopia will always have
                      a great reward, but of course, we'll always have something
                      special for the celebrant!
                    </div>
                  </div>

                  <div className="hidden laptop:block text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={eleventh}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">Slime Kit</div>
                    <div className="text-center">
                      Create your own slime concoction with our expansive Slime
                      Lab!
                    </div>
                  </div>

                  <div className="text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={twelvth}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">
                      Vendors Booth
                    </div>
                    <div className="text-center">
                      Photos/videos from our resident photographer and set up
                      your own food/drink stations for the ultimate party
                      set-up!
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-evenly items-start mt-10">
                  <div className="laptop:hidden text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={eleventh}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">Slime Kit</div>
                    <div className="text-center">
                      Create your own slime concoction with our expansive Slime
                      Lab!
                    </div>
                  </div>
                  <div className="laptop:hidden text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                    <div>
                      <img
                        class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                        src={twelvth}
                        alt="gootopialanding"
                      />
                    </div>
                    <div className="text-center mb-1 font-bold">
                      Vendors Booth
                    </div>
                    <div className="text-center">
                      Photos/videos from our resident photographer and set up
                      your own food/drink stations for the ultimate party
                      set-up!
                    </div>
                  </div>
                </div>
              </div>

              <img
                class="w-full rotate-180 "
                src={dripping}
                alt="gootopialanding "
              />
            </div>
          </div>
        </Form>
      </FormikProvider>
    </GootopiaContainer>
  );
}
