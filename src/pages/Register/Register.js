import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import { useAuth } from "../../context/AuthenticationContext";
import { toast } from "react-toastify";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../store/action";
import { Topbar } from "../../components/Navbar";
import { loginViaEmail, register } from "../../functions/index";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email or Phone Number is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    )
    .label("Email or Phone Number"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must not exceed 20 characters")
    .label("Password"),
  cpassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),

  mobile: Yup.string()
    .required("Phone number is required")
    .matches(/^(\+?63|0)9\d{9}$/, "Invalid phone number")
    .label("Email or Phone Number"),
});

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const dispatch = useDispatch();

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
      const response = await register(
        values.name,
        values.mobile,

        values.email,
        values.address,
        values.password
      );
      if (response.valid) {
        console.log(response);

        dispatch(setUser(response.user));
        dispatch(setToken(response.token));
        login();
        navigate(routes.LandingDesert)
      } else {
        toast.error(response.errorMsg);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>
      <FormikProvider value={formik}>
        <Form>
          <div className="flex flex-col  bg-gradient-to-l from-[#55ace2a4]  to-[#6bc4c1a1] bg-opacity-5 py-20">
            <div className=" container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
              <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl bg-white shadow-xl">
                  <div className="p-6 sm:p-16">
                    {/* <img src={TheNextperience} alt="FindFood" className="-mt-8 mb-8" /> */}

                    <div className="space-y-4">
                      <h2 className="text-lg text-cyan-900 font-bold">
                        Hello!
                      </h2>

                      <span className="text-cyan-900">
                        Please create your account
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                      <span className="text-cyan-900 mt-8">Name</span>
                      <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        className="px-5 py-2 border-[1px] border-slate-300 rounded-full"
                        required
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="flex text-red-500 text-sm">
                          {formik.errors.name}
                        </div>
                      ) : null}
                      <span className="text-cyan-900">Email</span>
                      <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        className="px-5 py-2 border-[1px] border-slate-300 rounded-full"
                        required
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="flex text-red-500 text-sm">
                          {formik.errors.email}
                        </div>
                      ) : null}
                      <span className="text-cyan-900 mt-8">Mobile</span>
                      <input
                        type="text"
                        name="mobile"
                        onChange={formik.handleChange}
                        className="px-5 py-2 border-[1px] border-slate-300 rounded-full"
                        required
                      />
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <div className="flex text-red-500 text-sm">
                          {formik.errors.mobile}
                        </div>
                      ) : null}
                      <span className="text-cyan-900 mt-8">Address</span>
                      <input
                        type="text"
                        name="address"
                        onChange={formik.handleChange}
                        className="px-5 py-2 border-[1px] border-slate-300 rounded-full"
                        required
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="flex text-red-500 text-sm">
                          {formik.errors.address}
                        </div>
                      ) : null}
                      <span className="text-cyan-900">Password</span>
                      <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        className="px-5 py-2 border-[1px] border-slate-300 rounded-full"
                        required
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="flex text-red-500 text-sm">
                          {formik.errors.password}
                        </div>
                      ) : null}
                      <span className="text-cyan-900">Confirm Password</span>
                      <input
                        type="password"
                        name="cpassword"
                        onChange={formik.handleChange}
                        className="px-5 py-2 border-[1px] border-slate-300 rounded-full"
                        required
                      />
                      {formik.touched.cpassword && formik.errors.cpassword ? (
                        <div className="flex text-red-500 text-sm">
                          {formik.errors.cpassword}
                        </div>
                      ) : null}
                      <button
                        onClick={formik.handleSubmit}
                        type="submit"
                        className="bluegradient group h-12 py-3 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-BrrringYellow"
                      >
                        <div className="relative flex items-center space-x-4 justify-center">
                          <span className="block w-max font-semibold tracking-wide text-sm text-black transition duration-300 group-hover:text-gray sm:text-base">
                            Sign Up!
                          </span>
                        </div>
                      </button>
                      <div className="flex flex-row justify-between">
                        <a className="text-sky-500">Forgot password</a>
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

export default Register;
