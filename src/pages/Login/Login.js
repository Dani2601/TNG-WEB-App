import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import { useAuth } from "../../context/AuthenticationContext";
import { toast } from "react-toastify";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../store/action";
import { Topbar } from "../../components/Navbar";
import { loginViaEmail } from "../../functions/index";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useCallback } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email or Phone Number is required")
    .label("Email or Phone Number"),
  password: Yup.string().required("Password is required"),
});

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

const business_unit = {
  [BAKEBE_KEY]: routes.BookingBakebe,
  [GOOTOPIA_KEY]: routes.BookingGootopia,
  [TFR_KEY]: routes.BookingTFR,
  [DESSERT_KEY]: routes.DessertBooking,
  [TIS_KEY]: routes.BookingInflatable
}

function Landing() {
  const navigate = useNavigate();
  const { cart } = useSelector(state => state.record)
  const { login } = useAuth();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  async function onSubmit(values) {
    try {
      const response = await loginViaEmail(values.email, values.password);
      console.log(response);
      // if (response.valid) {
      if (response.success) {
        console.log(response);
        dispatch(setUser(response.user));
        dispatch(setToken(response.token));
        localStorage.setItem('accessToken', response.token);
        localStorage.setItem('user', response.user);

        login()
        console.log(cart);
        return;
        if (cart?.length > 0) {
          const checkBusiness = cart[0]?.BusinessUnitID;
          navigate(business_unit[checkBusiness], { state: { step: true } });
        }
        else {
          navigate(-1)
        }
      } else {
        toast.error(
          response.errorMsg.length === undefined
            ? "Password is wrong"
            : response.errorMsg
        );
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);
  return (
    <>
      <Topbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handleMenuClick={handleMenuClick}
      />
      <FormikProvider value={formik}>
        <Form>
          <div className="flex flex-col h-screen bg-gradient-to-l from-[#55ace2a4]  to-[#6bc4c1a1] bg-opacity-5">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
              <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl bg-white shadow-xl">
                  <div className="p-6 sm:p-16">
                    {/* <img src={TheNextperience} alt="FindFood" className="-mt-10 mb-8" /> */}

                    <div className="space-y-4">
                      <h2 className="text-lg text-cyan-900 font-bold">
                        Welcome back!
                      </h2>

                      <span className="text-cyan-900">
                        Please login to your account
                      </span>
                    </div>
                    <div className="flex flex-col space-y-4 w-full">
                      <span className="text-cyan-900 mt-10">
                        Email or Phone Number
                      </span>
                      <input
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        className="px-5 py-2 border-[1px] border-slate-300 rounded-full"
                        required
                      />
                      <span className="text-cyan-900">Password</span>
                      <div className="flex flex-row relative justify-center">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={formik.handleChange}
                          className="px-5 py-2 border-[1px] border-slate-300 rounded-full w-full"
                          required
                        />
                        <div className="absolute right-5 top-3 cursor-pointer">
                          {showPassword === true ? (
                            <FaEye onClick={togglePasswordVisibility} />
                          ) : (
                            <FaEyeSlash onClick={togglePasswordVisibility} />
                          )}
                        </div>
                      </div>
                      <button
                        onClick={formik.handleSubmit}
                        type="submit"
                        className="bluegradient group h-12 py-3 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-BrrringYellow"
                      >
                        <div className="relative flex items-center space-x-4 justify-center">
                          <span className="block w-max font-semibold tracking-wide text-sm text-black transition duration-300 group-hover:text-gray sm:text-base">
                            Log in{" "}
                          </span>
                        </div>
                      </button>
                      <div className="flex flex-row justify-between">
                        <a className="text-sky-500">Forgot password</a>
                        <Link to={routes.Register}>
                          <div className="text-sky-500 underline">
                            New user? Register here!
                          </div>
                        </Link>
                      </div>
                    </div>
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

export default Landing;
