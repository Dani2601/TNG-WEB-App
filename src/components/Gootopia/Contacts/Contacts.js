import React from "react";
import GootopiaContainer from "../../Container/GootopiaContainter";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import sumbit from "../../../assets/Gootopia/Contact/SubmitButton.png";
import connect from "../../../assets/Gootopia/Contact/Connect.png";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const validationSchema = Yup.object().shape({
  date: Yup.string().required().label("Event Date"),
  type: Yup.string().required().label("Package Type"),
  pax: Yup.string().required().label("Pax"),
  message: Yup.string().required().label("Message"),
});
export default function Faqs() {
  const { user } = useSelector((state) => state.record);

  const onSubmit = (values) => {
    axios
      .post(`${process.env.REACT_APP_REST_API}AddPackageBooking`, {
        BusinessUnitID: DESSERT_KEY, //dessert
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
          <div className="max-h-full min-h-screen bg-gootopia-purp ">
            <img class="w-full" src={dripping} alt="gootopialanding" />
            <div className="flex flex-row justify-center">
              <span className="font-flavors text-gootopia-pinkText text-[30px] tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k">
                CONTACT US
              </span>
            </div>

            <div className="laptop:flex laptop:justify-center laptop:flex-row-reverse ">
              <div className="flex flex-col">
                <div className="flex flex-row text-[12px] tablet:text-[15px] font-poppins text-[#F8E71C]   justify-center">
                  <div className="flex flex-col  w-[280px] tablet:w-[400px]">
                    <div className="mt-5">
                      10 am - 10pm daily starting August 5, 2022
                    </div>
                    <div className="mt-5">
                      ​3rd Floor, SM Central Business Park, SM Mall of Asia,
                      Pasay City Philippines
                    </div>
                    <div>gootopia@thenextperience.com</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row text-[14px] laptop:text-[20px] font-flavors text-gootopia-green  mt-5 justify-center">
                <div className="flex flex-col gap-2 items-center  w-[280px] tablet:w-[400px]">
                  <div className="mx-auto">
                    {" "}
                    <img
                      class="w-[139px] laptop:w-[200px]"
                      src={connect}
                      alt="gootopialanding "
                    />
                  </div>
                  <a
                    href=" https://www.facebook.com/GootopiaPh"
                    target="_blank"
                  >
                    <div>Facebook</div>
                  </a>
                  <a href=" https://www.tiktok.com/@gootopia" target="_blank">
                    <div>Tiktok</div>
                  </a>

                  <a
                    href=" https://www.instagram.com/gootopiaph/"
                    target="_blank"
                  >
                    <div>Instagram</div>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=ehZqlrxfg-k"
                    target="__blank"
                  >
                    <div>Youtube</div>
                  </a>

                  {/* <div>Tiktok</div>
                  
                  <div>Twitter</div> */}
                </div>
              </div>
            </div>
            <img
              class="w-full rotate-180 laptop4k:mt-[200px]"
              src={dripping}
              alt="gootopialanding "
            />
          </div>
        </Form>
      </FormikProvider>
    </GootopiaContainer>
  );
}
