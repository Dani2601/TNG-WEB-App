import React from "react";
export default function DessertTicketCard({ item, ticket, setTicket }) {
  return (
    <div
      onClick={() => setTicket(item)}
      className="cursor-pointer relative text-center my-4 leading-6 text-sm w-full  hoverEffects"
    >
      {item?.promo && (
        <div className="absolute top-10 z-10 right-[40px] px-12 bg-white transform rotate-45 translate-x-1/2 -translate-y-1/2">
          <span className="text-xs font-bold">{item?.promo}</span>
        </div>
      )}

      <div
        className={`${ticket?.id === item?.id ? "bg-[#FF98C3]" : "bg-[#F9DCED]"
          } p-6 relative`}
      >
        {item?.image && (
          <div className="w-full h-[100px] tablet:h-[200px] mb-2  flex justify-center mx-auto object-cover shadow-xl border-[1px] border-[#FF98C3] rounded-3xl ">
            <img src={item.image} alt={"Ticket"} className="w-full rounded-3xl object-cover" />
          </div>
        )}

        <p className="text-lg">{item.ticketName}</p>
        <p className="mb-4 mt-4">{item.description}</p>
        <p className="mt-10">
          FROM
          <br />
          <span className="text-lg font-bold">PHP {item?.price}</span>
        </p>
      </div>
    </div>
  );
}
