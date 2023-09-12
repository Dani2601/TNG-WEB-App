import { useEffect, useRef, useState } from "react";
import { ModalContainer } from "../ModalContainer";
import CrazyGoldWaiverContent from "./CrazyGoldWaiverContent";
import BattlingCagesWaiverContent from "./BattlingCagesWaiverContent";
import GeneralWaiverContent from "./GeneralWaiverContent";
import TheThrowWaiverContent from "./TheThrowWaiverContent";

var content = {
  "CrazyGold": <CrazyGoldWaiverContent/>,
  "BattlingCages": <BattlingCagesWaiverContent/>,
  "General": <GeneralWaiverContent/>,
  "TheThrow": <TheThrowWaiverContent/>
};

var title = {
  "CrazyGold": "CRAZY GOLF: GUESTS WAIVER, RELEASE, and UNDERTAKING",
  "BattlingCages": "BATTING CAGES: GUESTS WAIVER, RELEASE, and UNDERTAKING",
  "General": "THE FUN ROOF GUESTS WAIVER, RELEASE, and UNDERTAKING",
  "TheThrow": "THE THROW: GUESTS WAIVER, RELEASE, and UNDERTAKING"
};

export default function WaiverModalContainer({
  showModal,
  handleCloseModal,
  business,
  handleProceed,
  loading
}) {

  const [scrolledDown, setScrolledDown] = useState(false);
  const [modalWidth, setModalWidth] = useState("60vw");
  
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const target = contentRef.current;
      const requiresScroll = target.scrollHeight > target.clientHeight;

      if (!requiresScroll) {
        // Content doesn't require scrolling, so enable the button
        setScrolledDown(true);
      }

      const handleScroll = () => {
        if (requiresScroll) {
          const reachedBottom =
            target.scrollHeight - target.scrollTop <= target.clientHeight ||
            (target.scrollHeight - target.scrollTop - 200) <= target.clientHeight;
          setScrolledDown(reachedBottom);
        }
      };

      target.addEventListener("scroll", handleScroll);

      return () => {
        target.removeEventListener("scroll", handleScroll);
      };
    }
  }, [contentRef.current]);

  useEffect(() => {
    const handleResize = () => {
      const newModalWidth = window.innerWidth > 768 ? "50vw" : "70vw"; // Adjust the breakpoint as needed
      setModalWidth(newModalWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function closeModal(){
    handleCloseModal()
  }

  return (
    <ModalContainer
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      modalWidth={modalWidth}
    >
      <div className="p-6 max-h-[80vh] flex flex-col font-poppins">
        <p className="text-3xl font-bold mt-4">Waiver</p>
        <p className="mb-4 text-gray-600 font-medium">{title[business]}</p>
        <div
          ref={contentRef}
          className="tc-content"
          style={{
            overflowY: "auto",
          }}
        >
          {content[business]}
        </div>
        <div className="text-xs py-4 font-semibold italic">I HAVE READ THIS WAIVER, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND SIGN IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT. I HAVE READ AND UNDERSTOOD IT, AND I AGREE TO BE BOUND BY ITS TERMS.</div>
        <div className="flex flex-col justify-center items-center gap-3">
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
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                </div>
                Agree
              </div>
            ) : (
              "Agree"
            )}
          </button>
          <p className="cursor-pointer" onClick={closeModal}>
            Cancel
          </p>
        </div>
      </div>
    </ModalContainer>
  );
}
