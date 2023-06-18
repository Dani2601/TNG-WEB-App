import React from 'react'

export default function Attractions({setRef}) {
  return (
    <div ref={setRef}>
        <div className='w-full h-6 bg-[#EBACB3]'/>
        <div className='text-[#EBACB3] bg-[#21422B] text-center text-7xl py-6 font-inflatable'>
            Attractions
        </div>
        <div className='flex flex-col sm:flex-row h-72 gap-4 px-4 pt-4'>
          <div className='flex justify-center place-items-end p-10 flex-1 bg-[url(https://static.wixstatic.com/media/00f21d_858dacc19cae4a6e95bc0a7c3b8c3831~mv2.jpg/v1/fill/w_600,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/00f21d_858dacc19cae4a6e95bc0a7c3b8c3831~mv2.jpg)] bg-cover bg-center'>
            <button
                className="shadow-md text-sm py-2 px-6 bg-[#EBACB3] text-white"
              >
                Read More
              </button>
          </div>
          <div className='flex justify-center place-items-end p-10 flex-1 bg-[url(https://static.wixstatic.com/media/00f21d_e8ced06326914e2ca8942bcb71ff7835~mv2.png/v1/fill/w_586,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00f21d_e8ced06326914e2ca8942bcb71ff7835~mv2.png)] bg-cover bg-center'>
            <button
                className="shadow-md text-sm py-2 px-6 bg-[#EBACB3] text-white"
              >
                Read More
              </button>
          </div>
          <div className='flex justify-center place-items-end p-10 flex-1 bg-[url(https://static.wixstatic.com/media/00f21d_71c56c50c2304ea78848074886d7f0e6~mv2.jpg/v1/fill/w_586,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/00f21d_71c56c50c2304ea78848074886d7f0e6~mv2.jpg)] bg-cover bg-center'>
            <button
                className="shadow-md text-sm py-2 px-6 bg-[#EBACB3] text-white"
              >
                Read More
              </button>
          </div>
        </div>
        <img src='https://static.wixstatic.com/media/00f21d_d4f279182a2f4d4b88e01de4bfba2c37~mv2.jpg/v1/fill/w_1831,h_731,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00f21d_d4f279182a2f4d4b88e01de4bfba2c37~mv2.jpg'
        className='object-cover w-full h-full'
        alt=''
        />
    </div>
  )
}
