// import ReactModal from "react-modal";
// import { useTheme } from "styled-components";
// import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
// import { GrEmoji } from "react-icons/gr";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { FaUser } from "react-icons/fa";
// import { format, parseISO } from "date-fns";
// import axios from "axios";
// import { Form, FormikProvider, useFormik } from "formik";
// import * as Yup from "yup";
// import { getDate } from "../../../helper/helper";
// import Status from "../../../components/Status/Status";
// import { addBusinessUnit, editBusinessUnit } from "../../../functions";
// import Compressor from "compressorjs";
// import { useRef } from "react";
// import { CiCamera, CiTrash } from "react-icons/ci";
// import { RiErrorWarningFill } from "react-icons/ri";

// const validationSchema = Yup.object().shape({
//   Name: Yup.string().required("Business Unit is required").label("Name"),
// });

// export default function EditBusinessUnitModal({
//   openEditBusinessUnitModal,
//   closeEditModal,
//   editData,
//   toAddData,
//   setDataAdded,
//   dataAdded,
// }) {
//   const customStyles = {
//     content: {
//       width: "100%",
//       height: "100%",
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       padding: "20px",
//       background: "rgb(120, 120, 120, 0.01)",
//       border: "none",
//       borderRadius: "21px",
//     },
//     overlay: {
//       position: "fixed",
//       height: "100%",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: "rgb(120, 120, 120,0.5)",
//       zIndex: 20,
//     },
//   };
//   const fileUserInputRef = useRef();
//   const [userImg, setUserImg] = useState(null);
//   const [blobUserImg, setBlobUserImg] = useState(null);
//   const [compressedUserImg, setCompressedUserImg] = useState(null);
//   const [userMaxAlert, setUserMaxAlert] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);

//   const handleFileInputChangeUser = (event) => {
//     setUserImg(event?.target?.files[0]);
//     const [file] = event?.target?.files;

//     if (file?.size < 4000001) {
//       new Compressor(file, {
//         quality: 0.4,
//         success: (compressedResult) => {
//           setCompressedUserImg(compressedResult);
//           setBlobUserImg(URL.createObjectURL(compressedResult));
//         },
//       });
//       setUserMaxAlert(false);
//       setCurrentImage(null);
//     } else {
//       if (file === undefined) {
//         setUserMaxAlert(false);
//       } else {
//         setUserMaxAlert(true);
//       }
//       setBlobUserImg(null);
//       setCompressedUserImg(null);
//       setUserImg(null);
//     }
//   };
//   const onSubmit = async (values) => {
//     let data = {
//       ...values,
//       Image: userImg,
//       ImageCompressed: compressedUserImg,
//     };

//     if (toAddData === true) {
//       const response = await addBusinessUnit(data);
//       if (response.valid) {
//         // state
//         setDataAdded(!dataAdded);
//         closeEditModal();
//       } else {
//         // toast
//       }
//       //console.log("values", values);
//       // handleUserUpdate(values);
//     } else {
//       const response = await editBusinessUnit(data);
//       if (response.valid) {
//         // state
//         setDataAdded(!dataAdded);
//         closeEditModal();
//       } else {
//         // toast
//       }
//       //console.log("values", values);
//       // handleUserUpdate(values);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       BusinessUnit: editData?.BusinessName ? editData?.BusinessName : "",
//       Image: editData?.Image ? editData?.Image : "",
//       ImageCompressed: editData?.ImageCompressed
//         ? editData?.ImageCompressed
//         : "",
//     },
//     validationSchema,
//     onSubmit,
//   });

//   useEffect(() => {
//     if (editData) {
//       Object.entries(editData).map(([key, value]) => {
//         formik.setFieldValue(key, value);
//       });
//     }
//   }, [editData]);

//   useEffect(() => {
//     if (editData?.Image) {
//       async function viewImage(container, filename, func) {
//         try {
//           const { data } = await axios.post(
//             `${process.env.REACT_APP_REST_API}generateSASToken`,
//             {
//               filename: filename,
//               container: container,
//             }
//           );

//           func(data);
//         } catch (e) {
//           console.log("Failed to view");
//         }
//       }
//       if (editData?.Image) {
//         viewImage("users", editData?.Image, setCurrentImage);
//       }
//     } else {
//     }
//   }, [editData, setCurrentImage]);

//   return (
//     <div>
//       <ReactModal
//         isOpen={openEditBusinessUnitModal}
//         onRequestClose={closeEditModal}
//         style={customStyles}
//       >
//         <FormikProvider value={formik}>
//           <Form>
//             <div className="flex justify-center items-center mt-[25px] ">
//               <div
//                 className={`flex flex-col max-w-[600px] w-[100%] mx-[5px]  rounded-[21px] pb-5  bg-white`}
//               >
//                 <div className="flex justify-between items-center my-3 ">
//                   <div>
//                     {" "}
//                     <p className={`text-xl ml-5`}>
//                       {toAddData === true ? "Add" : "Edit"} Business Unit
//                     </p>
//                   </div>
//                   <div>
//                     {" "}
//                     <button
//                       onClick={closeEditModal}
//                       className="w-[9px] h-[9px] mr-10 mt-1"
//                     >
//                       <AiOutlineCloseCircle
//                         className="text-red-500"
//                         size={30}
//                       />
//                     </button>
//                   </div>
//                 </div>
//                 <hr class="h-px  bg-gray-200 border-0" />

//                 <div className=" mb-6 mx-auto ">
//                   <div className="modalgradient mx-auto rounded-[10px] px-[88px] mt-10 object-cover">
//                     <div className="pb-2"> </div>
//                     <div
//                       className="bg-white bg-contain bg-center cursor-pointer rounded-lg h-[156px] w-[347px] flex justify-center items-center mt-4 mb-4"
//                       style={{
//                         backgroundImage: `url(${
//                           userImg ? blobUserImg : currentImage
//                         })`,
//                       }}
//                       onClick={() => {
//                         fileUserInputRef.current.click();
//                       }}
//                     >
//                       <input
//                         type="file"
//                         accept="image/*"
//                         ref={fileUserInputRef}
//                         onChange={handleFileInputChangeUser}
//                         style={{ display: "none" }}
//                       />

//                       {editData?.Image ? (
//                         <></>
//                       ) : userImg === null ? (
//                         <div className="border-[black] flex items-center justify-center cursor-pointer border-2 rounded-full h-[60px] w-[60px]">
//                           <CiCamera className="" size={40} />
//                         </div>
//                       ) : (
//                         <></>
//                       )}
//                       {/* <div className="border-[black] flex items-center justify-center cursor-pointer border-2 rounded-full h-[60px] w-[60px]">
//                           <CiCamera className="" size={40} />
//                         </div> */}
//                       {/* 
//                       {!currentImage && (
//                         <div className="border-[black] flex items-center justify-center cursor-pointer border-2 rounded-full h-[60px] w-[60px]">
//                           <CiCamera className="" size={40} />
//                         </div>
//                       )} */}
//                     </div>
//                     <div className="flex justify-center">
//                       {userMaxAlert == true ? (
//                         <div className="text-red-600 text-[10px] flex mb-3">
//                           <RiErrorWarningFill className="my-auto flex-shrink-0 w-[10px] h-[10px] mr-1 text-red-700 dark:text-red-800" />
//                           Selected Profile Pic size is greater than max limit of
//                           4mb
//                         </div>
//                       ) : (
//                         <></>
//                       )}
//                     </div>
//                   </div>

//                   <div className="modalgradient mx-auto rounded-[10px] px-10 mt-8 mb-6  ">
//                     <p className="text-1xl pt-6 -ml-5">
//                       {" "}
//                       Business Unit Information{" "}
//                     </p>

//                     <div className="flex flex-row  mt-5">
//                       <div className="self-start mt-1 ">
//                         {" "}
//                         <p className="text-1xl  w-36">
//                           Business Unit:
//                           <small style={{ color: "red" }}>*</small>{" "}
//                         </p>
//                       </div>

                   
//                         <div className="flex flex-col">
//                           <div className="flex-none ">
//                             {" "}
//                             <input
//                               type="text"
//                               name="Name"
//                               className="bg-white border rounded-[5px]  px-2 py-1 w-[300px]"
//                               value={formik?.values?.Name}
//                               onChange={formik.handleChange}
//                             />
//                           </div>

//                           {formik.touched.Name && formik.errors.Name ? (
//                             <div className="flex text-red-500 text-sm">
//                               {formik.errors.Name}
//                             </div>
//                           ) : null}
//                         </div>
//                     </div>

//                     <div className="flex flex-row  mt-5">
//                       <div className="self-start mt-1 ">
//                         {" "}
//                         <p className="text-1xl  w-36">Owner: </p>
//                       </div>

//                       <div className="flex flex-col">
//                         <div className="flex-none ">
//                           {" "}
//                           <input
//                             type="text"
//                             name="Owner"
//                             className="bg-white border rounded-[5px]  px-2 py-1 w-[300px]"
//                             value={formik?.values?.Owner}
//                             onChange={formik.handleChange}
//                           />
//                         </div>

//                         {formik.touched.Owner && formik.errors.Owner ? (
//                           <div className="flex text-red-500 text-sm">
//                             {formik.errors.Owner}
//                           </div>
//                         ) : null}
//                       </div>
//                     </div>

//                     <div className="flex flex-row  mt-5 pb-5">
//                       <div className="self-start mt-1 ">
//                         {" "}
//                         <p className="text-1xl  w-36">Details: </p>
//                       </div>

//                       <div className="flex flex-col">
//                         <div className="flex-none ">
//                           {" "}
//                           <input
//                             type="text"
//                             name="Details"
//                             className="bg-white border rounded-[5px]  px-2 py-1 w-[300px]"
//                             value={formik?.values?.Details}
//                             onChange={formik.handleChange}
//                           />
//                         </div>

//                         {formik.touched.Details && formik.errors.Details ? (
//                           <div className="flex text-red-500 text-sm">
//                             {formik.errors.Details}
//                           </div>
//                         ) : null}
//                       </div>
//                     </div>
//                   </div>
//                   {!toAddData && (
//                     <div className="modalgradient mx-auto rounded-[10px] px-10 mt-1 mb-6 py-4 ">
//                       <div className="flex flex-row mb-5">
//                         <div className="self-start mt-1">
//                           <p className="text-1xl  w-36">Created At:</p>
//                         </div>
//                         <div className="self-center">
//                           <input
//                             type="text"
//                             name="name"
//                             className="bg-white border rounded-[5px] self-center px-2 py-1 w-[300px]"
//                             value={getDate(editData?.CreatedTS)}
//                             disabled
//                           />
//                         </div>
//                       </div>

//                       <div className="flex flex-row">
//                         <div className="self-start mt-1">
//                           <p className="text-1xl  w-36">Status: </p>
//                         </div>
//                         <div className="self-center">
//                           <Status status={editData?.Status} />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-full flex justify-center">
//                   <button
//                     type="submit"
//                     onClick={formik.handleSubmit}
//                     className={`flex justify-evenly text-white bg-[#64BCBC] text-[15px] h-8 rounded-[5px] px-7 mt-2 mr-10`}
//                   >
//                     <div className="text-white self-center font-bold">
//                       Submit
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </Form>
//         </FormikProvider>
//       </ReactModal>
//     </div>
//   );
// }
