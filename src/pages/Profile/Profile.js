import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";

import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Topbar } from "../../components/Navbar";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { editProfile } from "../../functions";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import {PDFTicketWithQR} from "../../helper/PDF";

let title = "Profile";

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required").label("Name"),
  Email: Yup.string()
    .matches(
      /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
      "Please enter a valid Email"
    )
    .required("Email is required")
    .label("Email"),
  Mobile: Yup.string()
    .matches(/^(09|\+639)\d{9}$/, "Please enter a valid PHP mobile number")
    .required("Phone is required")
    .label("Phone"),
  Address: Yup.string().required("Address is required").label("Address"),
});

export default function Profile() {
  const { user } = useSelector((state) => state.record);

  const styleForPDFViewer = StyleSheet.create({
    pdfviewer: {
      width: "100%",
      height: "100%"
    }
  });

  const onSubmit = async (values) => {
  
      const response = await editProfile(user?.id,values.Name,values.Mobile,values.Address);
      if (response.valid) {
        // setDataAdded(!dataAdded);
        // closeEditModal();
      } else {
        // toast
      }
      // handleUserUpdate(values);
  };

  const formik = useFormik({
    initialValues: {
      Name: user?.Name ? user?.Name : "",
      Email: user?.Email ? user?.Email : "",
      Address: user?.Address ? user?.Address : "",
      Mobile: user?.Mobile ? user?.Mobile : "",
    },
    validationSchema,
    onSubmit,
  });
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>
      <Helmet>
        <title>TNG Admin | Business Unit</title>
      </Helmet>

      <FormikProvider value={formik}>
        <Form>
          <div className="h-screen p-10 gap-8 mb-auto font-poppins modalgradient">
            <div className="text-2xl flex flex-row mb-10">{title}</div>
            <div className="flex mobileS:flex-col mobileS:mobileL tablet:flex-row">
              <div className="flex-none modalgradient rounded-lg tablet:mr-10 mobileS:mb-8 shadow-lg">
                <div className="m-4">
                  <div className="flex flex-row">
                    <div className="flex flex-none justify-center rounded-full border-2 border-black h-[70px] w-[70px] ">
                  <FaUser
                    className={`flex self-end w-[50px] h-[50px] rounded-[90px]`}
                  />{" "}
                </div>
                    <div className="flex flex-none self-center text-base font-bold">
                      Hello there! {user?.Name}
                    </div>
                  </div>
                  <hr class="h-[2px] mt-1 modalgradient border-0 dark:bg-gray-700"></hr>
                </div>
              </div>

              <div className="flex-none modalgradient rounded-lg shadow-lg">
                <div className=" mb-5 rounded-lg p-5">
                  <div className="mt-5 flex flex-col text-base">
                    <div className="flex flex-col gap-3 font-medium ">
                      <div className="font-bold">Edit Profile</div>
                      <div className="flex tablet:flex-row flex-col">
                        <div className="tablet:w-[120px]">Full Name:</div>
                        <input
                          type="text"
                          className="input-text tablet:ml-3"
                          placeholder="First name"
                          defaultValue={user?.Name}
                          value={formik.values?.Name}
                          onChange={formik.handleChange}
                          name="Name"
                        />
                      </div>
                      <div className="flex tablet:flex-row flex-col">
                        <div className="tablet:w-[120px]">Email:</div>
                        <input
                          type="text"
                          className="input-text tablet:ml-3"
                          placeholder="Email"
                          defaultValue={user?.Email}
                          value={formik.values?.Email}
                          onChange={formik.handleChange}
                          name="Email"
                        />
                      </div>
                      <div className="flex tablet:flex-row flex-col">
                        <div className="tablet:w-[120px]">Mobile:</div>
                        <input
                          type="text"
                          className="input-text tablet:ml-3"
                          placeholder="Mobile"
                          defaultValue={user?.Mobile}
                          value={formik.values?.Mobile}
                          onChange={formik.handleChange}
                          name="Mobile"
                        />
                      </div>
                      <div className="flex tablet:flex-row flex-col">
                        <div className="tablet:w-[120px]">Address:</div>
                        <input
                          type="text"
                          className="input-text tablet:ml-3"
                          placeholder="Address"
                          defaultValue={user?.Address}
                          value={formik.values?.Address}
                          onChange={formik.handleChange}
                          name="Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      type="submit"
                      onClick={formik.handleSubmit}
                      className="  bg-white text-[15px] h-8 rounded-[5px] px-3 mt-2"
                    >
                      {" "}
                      <p className="self-center">Save </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
}
