import React from 'react'

export default function DessertTicketCard({item, ticket, setTicket}) {
  return (
    <div onClick={() => setTicket(item)} className='cursor-pointer relative text-center leading-6 text-sm w-full sm:w-1/3'>
        <div className={`${ticket?.id === item?.id ? 'bg-[#FF98C3]' : 'bg-[#F9DCED]'} p-6`}>
            {/* <div class="absolute top-5 px-8 right-[-26px] bg-white transform rotate-45">
                <span class="text-xs font-bold">SAVE P100!</span>
            </div> */}
            <p className='text-lg'>{item?.Name}</p>
            <p className='mb-4 mt-4'>{item?.Description}</p>
            <p className='mt-10'>
            FROM<br/>
            <span className='text-lg font-bold'>PHP {item?.Price}</span>
            </p>
        </div>
    </div>
  )
}
