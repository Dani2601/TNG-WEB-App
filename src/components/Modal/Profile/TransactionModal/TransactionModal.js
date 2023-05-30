import ReactModal from "react-modal";
import { useTheme } from "styled-components";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { useEffect, useState } from "react";

import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
// import { getDate } from "../../../helper/helper";
// import { addBusinessUnit, editBusinessUnit } from "../../../functions";
import { useRef } from "react";
import { CiCamera, CiTrash } from "react-icons/ci";
import { RiErrorWarningFill } from "react-icons/ri";
// import Status from "../../../Status/Status";
import { changePass } from "../../../../functions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import routes from "../../../../constants/routes";
import { useAuth } from "../../../../context/AuthenticationContext";
import { setToken, setUser } from "../../../../store/action";
import Status from "../../../Status/Status";
import QRCode from "react-qr-code";

const validationSchema = Yup.object().shape({
  OldPassword: Yup.string().required("Old password is required"),
  NewPassword: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("NewPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function TransactionModa({
  openEditBusinessUnitModal,
  closeEditModal,
  editData,
  qrData,
}) {
  console.log(editData);
  const customStyles = {
    content: {
      width: "100%",
      height: "100%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      background: "rgb(120, 120, 120, 0.01)",
      border: "none",
      borderRadius: "21px",
    },
    overlay: {
      position: "fixed",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgb(120, 120, 120,0.5)",
      zIndex: 100,
    },
  };
  const { user } = useSelector((state) => state.record);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const response = await changePass(
      user.id,
      values.OldPassword,
      values.NewPassword
    );
    if (response.valid) {
      closeEditModal();
      toast.success("Password is successfully changed, return to login.");
      setTimeout(() => {
        dispatch(setToken(null));
        dispatch(setUser(null));
        logout();
        navigate(routes.Login);
      }, 3000);
    } else {
      setErrorMsg(response.errorMsg);
    }
  };

  const formik = useFormik({
    initialValues: {
      NewPassword: "",
      OldPassword: "",
      ConfirmPassword: "",
    },
    validationSchema,
    onSubmit,
  });
  

  return (
    <div>
      <ReactModal
        isOpen={openEditBusinessUnitModal}
        onRequestClose={closeEditModal}
        style={customStyles}
      >
        <FormikProvider value={formik}>
          <Form>
            <div className="flex justify-center items-center mt-[25px] font-poppins text-[12px] tablet:text-[16px]">
              <div className="bluegradient  justify-center items-center tablet:justify-start tablet:items-start flex flex-col max-w-[600px] w-[100%] mx-[5px] rounded-[5px] pb-5 bg-white p-5">
                <div className="my-5 font-bold self-center">
                  Transaction Details
                </div>
                <div className="flex flex-col items-center justify-center mx-auto my-2">
                    <div className="mb-3" >Qr Code:</div>
                  <QRCode value={qrData} size={200}/>
                </div>
                <div className="flex tablet:flex-row items-start tablet:items-center flex-col justify-center mt-2 tablet:mt-5 tablet:ml-5 ">
                  <div className="tablet:w-[140px]">Booking Code:</div>
                  <input
                    placeholder="N/A"
                    value={editData.Code}
                    className="shadow-md py-2 px-4 border-2 border-gray-400 "
                  />
                </div>
                <div className="flex tablet:flex-row items-start tablet:items-center flex-col justify-center mt-2 tablet:mt-5 tablet:ml-5 ">
                  <div className="tablet:w-[140px]">TNG Unit:</div>
                  <input
                    placeholder="N/A"
                    value={editData.BusinessUnitName}
                    className="shadow-md py-2 px-4 border-2 border-gray-400 "
                  />
                </div>
                <div className="flex tablet:flex-row items-start tablet:items-center flex-col justify-center mt-2 tablet:mt-5 tablet:ml-5 ">
                  <div className="tablet:w-[140px]">Branch:</div>
                  <input
                    placeholder="N/A"
                    value={editData.Branch}
                    className="shadow-md py-2 px-4 border-2 border-gray-400 "
                  />
                </div>
                <div className="flex tablet:flex-row items-start tablet:items-center flex-col justify-center mt-2 tablet:mt-5 tablet:ml-5 ">
                  <div className="tablet:w-[140px]">Booking Date:</div>
                  <input
                    placeholder="N/A"
                    value={editData.BookingDate}
                    className="shadow-md py-2 px-4 border-2 border-gray-400 "
                  />
                </div>
                <div className="flex tablet:flex-row items-start tablet:items-center flex-col justify-center mt-2 tablet:mt-5 tablet:ml-5 ">
                  <div className="tablet:w-[140px]">Booking Time:</div>
                  <input
                    placeholder="N/A"
                    value={editData.BookingTime}
                    className="shadow-md py-2 px-4 border-2 border-gray-400 "
                  />
                </div>
                <div className="flex tablet:flex-row items-start tablet:items-center flex-col justify-center mt-2 tablet:mt-5 tablet:ml-5 ">
                  <div className="w-[140px] font-bold">Total Price:</div>
                  <input
                    placeholder="N/A"
                    value={"₱ " + editData.TotalPrice}
                    className="shadow-md py-2 px-4 border-2 border-gray-400 "
                  />
                </div>
                <div className="flex flex-row items-start tablet:items-center -ml-[52px] justify-center mt-2 tablet:mt-5 tablet:ml-5 ">
                  <div className="tablet:w-[140px] font-bold tablet:mr-0 pr-2">
                    Status:
                  </div>
                  <Status status={editData.Status}></Status>
                </div>
                <div className="flex justify-center mt-4  text-[12px] tablet:text-[16px] font-bold gap-4 mx-auto">
                  <button
                    className=" bg-white h-8 rounded-[5px] px-3  text-modalgradient"
                    onClick={closeEditModal}
                  >
                    <p className="self-center">Close </p>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </FormikProvider>
      </ReactModal>
    </div>
  );
}
