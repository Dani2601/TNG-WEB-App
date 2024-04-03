import { ModalContainer } from './ModalContainer';
import { RiErrorWarningLine } from 'react-icons/ri';

export function TDMModalBooking({ showModal, handleCloseModal, handleProceed, ticketInfo }) {
    console.log("ticketInfo:", ticketInfo);
    const ticket = ticketInfo && ticketInfo.length > 0 ? ticketInfo[0] : null;

    return (
        <ModalContainer
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            modalWidth={'350px'}
        >
            <div className='p-4 text-center flex flex-col items-center'>
                <RiErrorWarningLine color={'#FACEA8'} size={70} />
                {ticket && (
                    <>
                        <p className='font-bold'>{ticket.ticketName}</p>
                        <p className='font-bold'>P{ticket.price}</p>
                    </>
                )}
                <p className='text-[10px] mt-3'>Are you sure you want to add this ticket?</p>
                <div className='flex gap-2 mt-6'>
                    <button onClick={handleCloseModal} className='shadow-md text-sm py-2 px-6 border-[#FF98C3] border-2 text-[#FF98C3]'>No</button>
                    <button onClick={handleProceed} className='shadow-md text-sm py-2 px-6 bg-[#FF98C3] text-white'>Yes</button>
                </div>
            </div>
        </ModalContainer>
    );
}
