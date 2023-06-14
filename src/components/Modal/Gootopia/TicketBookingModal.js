import { ModalContainer } from "../ModalContainer";
import { RiErrorWarningLine } from "react-icons/ri";

export function TicketBookingModal({
  showModal,
  handleCloseModal,
  handleProceed,
  ticket
}) {

  return (
    <ModalContainer
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      modalWidth={"50vw"}
    >
      <div className="p-4 text-center flex flex-col items-center font-poppins">
        <RiErrorWarningLine color={"#FACEA8"} size={70} />
        <p className="font-bold">{ticket?.Name}</p>
        <div className="flex flex-row">
          <div className="font-bold line-through mr-1">PHP{ticket?.OldPrice}</div>
          <div className=" mr-1">PHP{ticket?.Price}</div>
          <div >{ticket?.Notes}% OFF</div>
  
        </div>
        <div className="text-[10px] mt-3">
            Are you sure you want to add this ticket to cart?
          </div>
        <div className="flex gap-2 mt-6">
          <button
            onClick={handleCloseModal}
            className="shadow-md text-sm py-2 px-6 border-gootopia-green border-2 text-gootopia-green"
          >
            No
          </button>
          <button
            onClick={handleProceed}
            className="shadow-md text-sm py-2 px-6 bg-gootopia-green text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}
