import { DessertTCContent, TFRTCContent } from ".";
import { ModalContainer } from "../ModalContainer";
import BakebeTCContent from "./BakebeTCContent";
import GootopiaTCContent from "./GootopiaTCContent";
import TISTCContent from "./TISTCContent";


export default function TCModalContainer({
  showModal,
  handleCloseModal,
  business,
  handleProceed
}) {

    const content = {
        "BakeBe": <BakebeTCContent/>,
        "Gootopia": <GootopiaTCContent/>,
        "Inflatable": <TISTCContent/>,
        "TFR": <TFRTCContent/>,
        "undefined": <DessertTCContent/>
    }

    const title = {
        "BakeBe": "BakeBe PH",
        "Gootopia": "GOOTOPIA",
        "Inflatable": "INFLATABLE ISLAND BEACH CLUB",
        "TFR": "The Fun Roof",
        "undefined": "THE DESSERT MUSEUM"
    }

  return (
    <ModalContainer
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      modalWidth={"40vw"}
    >
      <div className="p-6 max-h-[80vh] flex flex-col font-poppins">
        <p className="text-3xl font-bold mt-4">Terms and Conditions</p>
        <p className="mb-4 text-gray-600 font-medium">{title[business]}</p>
        {content[business]}
        <div className="flex flex-col justify-center items-center mt-8 gap-3">
            <button
                onClick={handleProceed}
                className="bg-gradient-to-r from-[#57B3E8] to-[#50CDC4] shadow-md text-sm py-2 px-6 text-white rounded-full"
                >
                I have read and accept the terms and conditions.
            </button>
            <p className="cursor-pointer" onClick={handleCloseModal}>Cancel</p>
        </div>
      </div>
    </ModalContainer>
  );
}
