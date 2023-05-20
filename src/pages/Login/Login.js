import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import routes from "../../constants/routes";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../store/action";
import { useAuth } from "../../context/AuthenticationContext";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().label("Email Address").required(),
  password: Yup.string().label("Password").required(),
});

export default function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  // async function onSubmit(values) {
  //   const response = await loginViaEmail({
  //     email: values?.email,
  //     password: values?.password,
  //   });
  //   if (response.valid) {
  //     dispatch(setToken(response.token));
  //     const userData = decryptData(response.response);
  //     dispatch(setUser(userData));
  //     login();
  //     navigate(routes.Feed);
  //   } else {
  //     toast.error(response?.errorMsg, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
  // }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    // onSubmit,
  });

  // async function handleMetamaskLogin() {
  //   connect();
  //   if (isActive) {
  //     if (account) {
  //       const response = await loginViaMetamask(account);
  //       if (response?.valid) {
  //         const userData = decryptData(response.response);
  //         dispatch(setToken(response.token));
  //         dispatch(setUser(userData));
  //         login();
  //         navigate(routes.Feed);
  //       } else {
  //         toast.error(response, {
  //           position: toast.POSITION.TOP_RIGHT,
  //         });
  //       }
  //     } else {
  //       console.log("No wallet active found!");
  //     }
  //   }
  // }

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const code = searchParams.get("code");
  //   if (code) {
  //     handleAuthorizationCode(code, navigate, dispatch, login);
  //   }
  // }, []);

  return (
    <>
      <Helmet>
        <title>Hello Charlie | Login</title>
      </Helmet>

      <div className="mb-[64px] sm:mb-[0px]">
        {/* <HeaderA /> */}
        <div className={``}>
          <div className="grid grid-cols-1 gap-4 justify-items-center gap-y-20 sm:gap-10 text-white text-center min-h-screen">
            <div className="mb-[156px] sm:mb-[151px] md:mb-[183px] w-[293px] h-[420px] mt-[71px] rounded-[25px]  border-solid border-[#272b30] border-[3px] sm:w-[594px] sm:h-[600px] sm:md">
              <div className="font-bold text-[16px] mb-[17px] sm:text-[24px] sm:mb-17 sm:my-[30px] sm:tracking-[3px] sm:md mt-[30px]">
                LOGIN
              </div>
              <FormikProvider value={formik}>
                <Form>
                  <div className="mx-31 mt-71">
                    <label
                      htmlFor="email"
                      className="block mb-[11px] text-[14px] ml-[32px] text-left sm:text-[18px] sm:md  sm:ml-[70px]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={formik.handleChange}
                      className={` px-5 border-solid rounded-[25px] border-[3px] w-[231px] h-[36px] mb-[10px] sm:w-[470px] sm:h-[41px] sm:mb-[24px] md:w-[470px] md:h-[41px] md:mb-[27px]`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className=" ">
                    <label
                      htmlFor="password"
                      className="block mb-[11px] text-[14px] ml-[32px] text-left sm:text-[18px]  sm:ml-[70px] md:text-[18px] md:mb-[16px] md:ml-[70px]"
                    >
                      Password
                    </label>
                    <div className="relative ">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        onChange={formik.handleChange}
                        className={` px-5 border-solid rounded-[25px] border-[3px] w-[231px] h-[36px] mb-[10px] sm:w-[470px] sm:h-[41px] sm:mb-[24px] md:w-[470px] md:h-[41px] md:mb-[24px]`}
                      />
                      {showPassword ? (
                        <AiFillEye
                          onClick={togglePasswordVisibility}
                          className="absolute top-[10px] right-[45px] sm:top-[10px] sm:right-[70px] text-[20px] transform text-gray-400"
                        />
                      ) : (
                        <AiFillEyeInvisible
                          onClick={togglePasswordVisibility}
                          className="absolute top-[10px] right-[45px] sm:top-[10px] sm:right-[70px] text-[20px] transform text-gray-400"
                        />
                      )}
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    onClick={formik.handleSubmit}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="mt-2 w-[229px] h-[25px] sm:w-[465px] sm:h-[41px] sm:md rounded-[54px] bg-[#1D9BF0] sm:text-[20px] font-bold text-white text-center font-sans sm:padding"
                  >
                    Continue with Email
                  </button>
                </Form>
              </FormikProvider>
              <div className="grid grid-cols-3 justify-items-center px-[52px] sm:px-[73px] md:px-[88px]">
                <div className="border border-solid border-[#272b30] w-[86px] h-0 mt-[29px] sm:w-[174px] sm:mt-[50px] sm:md"></div>
                <div className="font-bold text-[12px] mx-[12px] mt-[19px] sm:text-[20px] sm:mt-[33px] sm:md text-white font-sans">
                  Or
                </div>
                <div className="border border-solid border-[#272b30] w-[86px] h-0 mt-[29px] sm:w-[174px] sm:mt-[50px] sm:md"></div>
              </div>
              <div className="flex justify-evenly mx-auto gap-x-[30.15px] sm:gap-x-[59.42px] md:gap-x-[68px] w-[186.15px] sm:w-[379.27px] md:w-[434px] justify-items-center grid-cols-4 mt-[25px] mb-[29px]">
                <div></div>
              </div>
              <button
                // onClick={handleMetamaskLogin}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="w-[229px] h-[25px] sm:w-[465px] sm:h-[41px] sm:md rounded-[54px] bg-[#1D9BF0] text-[12] mb-[52px] sm:text-[20px] sm:mb-[68px] font-bold text-white text-center font-sans sm:padding"
              >
                {/* {isActive ? "Continue with Wallet" : "Connect Wallet"} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
