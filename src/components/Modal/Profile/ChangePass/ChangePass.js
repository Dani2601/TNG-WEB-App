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
import Status from "../../../Status/Status";
import { changePass } from "../../../../functions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import routes from "../../../../constants/routes";
import { useAuth } from "../../../../context/AuthenticationContext";
import { setToken, setUser } from "../../../../store/action";

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

export default function ChangePass({
  openEditBusinessUnitModal,
  closeEditModal,
  editData,
  toAddData,
  setDataAdded,
  dataAdded,
}) {
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
  // const { token } = useSelector((state) => state);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const token = localStorage.getItem('accessToken')
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const response = await changePass(
      values.OldPassword,
      values.NewPassword,
      values.ConfirmPassword,
      token
    );

    if (response.message == 'Password updated successfully') {
      localStorage.setItem('accessToken', response.token);
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
              <div className="bluegradient  justify-center items-center flex flex-col max-w-[600px] w-[100%] mx-[5px]  rounded-[5px] pb-5  bg-white ">
                <div className="my-5 font-bold">Change Password</div>
                <div className="flex flex-col items-center justify-center mt-2 tablet:mt-5">
                  <div className="">Old Password:</div>
                  <input
                    type="password"
                    placeholder="Old Password"
                    value={formik.values.OldPassword}
                    onChange={formik.handleChange}
                    name={"OldPassword"}
                    className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3 mt-1"
                  />
                  {formik.touched.OldPassword && formik.errors.OldPassword ? (
                    <div className="flex flex-row justify-center text-center items-center text-red-500 text-sm ">
                      {formik.errors.OldPassword}
                    </div>
                  ) : null}

                  {errorMsg ? (
                    <div className="flex flex-row justify-center text-center items-center text-red-500 text-sm ">
                      {errorMsg}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col items-center justify-center mt-2 tablet:mt-5">
                  <div className="">New Password</div>
                  <input
                    type="password"
                    placeholder="New Password"
                    name={"NewPassword"}
                    value={formik.values.NewPassword}
                    onChange={formik.handleChange}
                    className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3 mt-1"
                  />
                </div>
                <div className="flex flex-col items-center justify-center mt-2 tablet:mt-5">
                  <div className="">Confirm Password</div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name={"ConfirmPassword"}
                    value={formik.values.ConfirmPassword}
                    onChange={formik.handleChange}
                    className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3 mt-1"
                  />
                </div>
                {formik.touched.NewPassword && formik.errors.NewPassword ? (
                  <div className="flex flex-row justify-center text-center items-center text-red-500 text-sm ">
                    {formik.errors.NewPassword}
                  </div>
                ) : null}
                {formik.touched.ConfirmPassword &&
                  formik.errors.ConfirmPassword ? (
                  <div className="flex flex-row justify-center text-center items-center text-red-500 text-sm ">
                    {formik.errors.ConfirmPassword}
                  </div>
                ) : null}
                <div className="flex justify-end mt-8  text-[12px] tablet:text-[16px] font-bold gap-4">
                  <button className=" bg-white h-8 rounded-[5px] px-3 mt-2 text-modalgradient" onClick={closeEditModal}>
                    {" "}
                    <p className="self-center">Cancel </p>
                  </button>
                  <button
                    type="submit"
                    onClick={formik.handleSubmit}
                    className="modalgradient bg-white h-8 rounded-[5px] px-3 mt-2"
                  >
                    {" "}
                    <p className="self-center">Save </p>
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
