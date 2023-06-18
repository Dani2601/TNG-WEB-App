import { ModalContainer } from "../ModalContainer";
import { RiErrorWarningLine } from "react-icons/ri";

export function TicketBookingModal({
  showModal,
  handleCloseModal,
  handleProceed,
  ticket,
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
          <div className=" mr-1">PHP {ticket?.Price}</div>
        </div>
        <div className="text-[10px] mt-3">
          Are you sure you want to add this ticket?
        </div>
        <div className="flex gap-2 mt-6">
          <button
            onClick={handleCloseModal}
            className="shadow-md text-sm py-2 px-6 border-bakebe-pink border-2 text-bakebe-pink"
          >
            No
          </button>
          <button
            onClick={handleProceed}
            className="shadow-md text-sm py-2 px-6 bg-bakebe-pink text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}
