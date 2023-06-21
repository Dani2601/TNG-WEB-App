import React, { useEffect, useState } from 'react'
import Container from "../../components/Container";
import { Form, FormikProvider, useFormik, } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const validationSchema = Yup.object().shape({
  date: Yup.string().required().label('Event Date'),
  type: Yup.string().required().label('Package Type'),
  pax: Yup.string().required().label('Pax'),
  message: Yup.string().required().label('Message'),
});

let pack1 = "https://static.wixstatic.com/media/863433_eb040eb15cd64833bb2c416466a99a58~mv2.png/v1/fill/w_356,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863433_eb040eb15cd64833bb2c416466a99a58~mv2.png"
let pack2 = "https://static.wixstatic.com/media/863433_cd432f31a2184e5d9d9e1d12c29975d7~mv2.png/v1/fill/w_358,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863433_cd432f31a2184e5d9d9e1d12c29975d7~mv2.png"
let pack3 = "https://static.wixstatic.com/media/863433_d78275a50d70479bbafbe0494ef22105~mv2.png/v1/fill/w_358,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863433_d78275a50d70479bbafbe0494ef22105~mv2.png"
let pack4 = "https://static.wixstatic.com/media/863433_a29ab0fb06844ada83dde70336dc5484~mv2.png/v1/fill/w_358,h_754,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/863433_a29ab0fb06844ada83dde70336dc5484~mv2.png"
let pack5 = "https://static.wixstatic.com/media/863433_5e4859f946da45e7b3dd6083935769e4~mv2.jpg/v1/fill/w_358,h_754,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/863433_5e4859f946da45e7b3dd6083935769e4~mv2.jpg"

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY

export default function DessertPackages() {
  const [packages, setPackages] = useState([])
  const { user } = useSelector(state => state.record)
  const [packageImage, setPackageImage] = useState([]);

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_REST_API}ViewPublicBusinessPackage`, {
      BusinessUnitID: DESSERT_KEY,
    })
    .then((res) => {
      console.log(res.data)
      if(res.data.valid){
        setPackages(res.data.data)
      }
      else{
        setPackages([])
      }
    })
    .catch((error) => {
      setPackages([])
    })
  }, [])

    useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_REST_API}ViewSpecBusinessPackage`, {
        BusinessUnitID: DESSERT_KEY,
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
    axios.post(`${process.env.REACT_APP_REST_API}AddPackageBooking`, {
      BusinessUnitID: DESSERT_KEY, //dessert 
      CustomerID: user?.id,
      BookingDate: values?.date,
      Type: values?.type,
      Pax: parseInt(values?.pax),
      Message: values?.message
    })
    .then((result) => {
      console.log(result.data)
      if(result.data.valid){
        toast.success("Successfully submit")
        formik.handleReset()
      }
      else{
        toast.error(result?.data?.errorMsg)
      }
    })
    .catch((e) => {
      toast.error("Something went wrong")
    })
  }

  const formik = useFormik({
    initialValues: {
      date: "",
      type: "",
      pax: 1,
      message: ""
    },
    validationSchema,
    onSubmit,
  });
  
  return (
    <Container>
      <FormikProvider value={formik}>
        <Form>
          <div className='w-[70vw] md:w-[50vw] m-auto pb-10'>
            <div className='text-tdm-darkpink text-3xl text-center py-4'>The Dessert Museum's<br/> Event Packages</div>
            <div className='text-tdm-pink text-md text-center py-4'>Check out our awesome packages below! Have the sweetest and most unique birthday party or date plus a Prenup or the coolest photoshoot! This and more below:</div>
            <div className='text-tdm-pink text-md text-center py-4'>Email us at events@thedessertmuseum.com and we will get back to you within 24hrs!</div>
          </div>
       
          <div className="flex flex-col justify-center py-5">
                <div className="flex flex-col justify-center items-center ">
                  <div className="tablet:flex tablet:flex-row tablet:flex-wrap justify-center items-center tablet:gap-5 ">

                    {packageImage.map((item) => {
                      return (
                        <div>
                          <img
                            class="h-[500px] tablet:h-[500px] mb-5 hoverPackageEffects cursor-pointer"
                            src={item.Image}
                            alt="events"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

        
              </div>
          <div className='w-[70vw] md:w-[50vw] m-auto py-10'>
            <label className='text-4xl font-bold'>Booking Form</label>
            <div className='flex mt-4 gap-2'>
              <div className='w-full'>
                <label>Package Type</label>
                <select value={formik.values.type} name='type' onChange={formik.handleChange} className='w-full h-[43px] shadow-md py-2 px-4 border-2 border-gray-400'>
                  <option value={""}>Type of Package</option>
                  {
                    packages.map((item, index) => <option key={index} value={item.id}>{item?.Name}</option>)
                  }
                </select>
                {formik.touched.type && formik.errors.type ? (
                  <div className="text-red-500 text-sm">{formik.errors.type}</div>
                ) : null}
              </div>
            </div>
            <div className='flex mt-4 gap-2'>
              <div className='w-full'>
                <label>Event Date</label>
                <input name='date' value={formik.values.date} type='date' onChange={formik.handleChange} className='w-full shadow-md py-2 px-4 border-2 border-gray-400'/>
                {formik.touched.date && formik.errors.date ? (
                <div className="text-red-500 text-sm">{formik.errors.date}</div>
              ) : null}
              </div>
              <div className='w-full'>
                <label>Pax</label>
                <input  type='number' value={formik.values.pax} name='pax' 
                onChange={(e) => {
                  const newValue = Math.max(1, parseInt(e.target.value) || 0);
                  formik.setFieldValue('pax', newValue)
                }}
                className='w-full shadow-md py-2 px-4 border-2 border-gray-400'/>
                {formik.touched.pax && formik.errors.pax ? (
                <div className="text-red-500 text-sm">{formik.errors.pax}</div>
                ) : null}
              </div>
            </div>
            <div className='mt-4 gap-2'>
              <label>Message</label>
              <textarea placeholder='Type a message' onChange={formik.handleChange} value={formik.values.message} name='message' className='w-full shadow-md py-2 px-4 border-2 border-gray-400'/>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm">{formik.errors.message}</div>
              ) : null}
            </div>
            <div className='mt-4 flex items-center justify-center'>
            <button onClick={formik.handleSubmit} className='shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white'>Book Now</button>
            </div>
          </div>
        </Form>
      </FormikProvider>
      
    </Container>
  )
}
