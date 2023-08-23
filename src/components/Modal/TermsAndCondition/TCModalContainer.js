import { useEffect, useState } from "react";
import { DessertTCContent, TFRTCContent } from ".";
import { ModalContainer } from "../ModalContainer";
import BakebeTCContent from "./BakebeTCContent";
import GootopiaTCContent from "./GootopiaTCContent";
import TISTCContent from "./TISTCContent";

export default function TCModalContainer({
  showModal,
  handleCloseModal,
  business,
  handleProceed,
  loading
}) {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [modalWidth, setModalWidth] = useState("60vw");


  const handleScroll = (e) => {
    const target = e.target;
    const reachedBottom = ((target.scrollHeight - target.scrollTop <= target.clientHeight) || (((target.scrollHeight - target.scrollTop) - 200) <= target.clientHeight));
    console.log(target.scrollHeight - target.scrollTop, target.clientHeight )
    setScrolledDown(reachedBottom);
  };

  useEffect(() => {
    const modalContentElement = document.querySelector(".modal-content");

    if (modalContentElement) {
      modalContentElement.addEventListener("scroll", handleScroll);

      return () => {
        modalContentElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newModalWidth = window.innerWidth > 768 ? "40vw" : "70vw"; // Adjust the breakpoint as needed
      setModalWidth(newModalWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = {
    "BakeBe": <BakebeTCContent/>,
    "Gootopia": <GootopiaTCContent/>,
    "Inflatable": <TISTCContent/>,
    "TFR": <TFRTCContent/>,
    "undefined": <DessertTCContent/>
  };

  const title = {
    "BakeBe": "BakeBe PH",
    "Gootopia": "GOOTOPIA",
    "Inflatable": "INFLATABLE ISLAND BEACH CLUB",
    "TFR": "The Fun Roof",
    "undefined": "THE DESSERT MUSEUM"
  };

  return (
    <ModalContainer
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      modalWidth={modalWidth}
    >
      <div className="p-6 max-h-[80vh] flex flex-col font-poppins">
        <p className="text-3xl font-bold mt-4">Terms and Conditions</p>
        <p className="mb-4 text-gray-600 font-medium">{title[business]}</p>
        <div
          className="modal-content"
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          {content[business]}
        </div>
        <div className="flex flex-col justify-center items-center mt-8 gap-3">
        <button
            onClick={handleProceed}
            className={`shadow-md text-sm py-2 px-6 text-white rounded-full ${
              !scrolledDown || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#57B3E8] to-[#50CDC4] hover:from-[#4A9BCD] hover:to-[#46B2A7]"
            }`}
            disabled={!scrolledDown || loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                {/* Loading indicator */}
              </div>
            ) : (
              "I have read and accept the terms and conditions."
            )}
          </button>
          <p className="cursor-pointer" onClick={handleCloseModal}>
            Cancel
          </p>
        </div>
      </div>
    </ModalContainer>
  );
}
