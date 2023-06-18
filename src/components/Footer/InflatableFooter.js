import React from 'react'

export default function InflatableFooter() {
  return (
    <div className='bg-[#21422B] px-4 py-6 w-full text-white flex flex-col place-items-center'>
        <div className='flex flex-col sm:flex-row w-full sm:w-[70vw] gap-4'>
            <div className='flex flex-col flex-1'>
                <div className='text-center text-sm mb-6'> ABOUT THE INFLATABLE ISLAND</div>
                <div className='text-xs'>
                    The Inflatable Island is the biggest floating playground in Asia. At 4,500 sqm, 
                    it's as big as 11 basketball courts put together side by side. It contains inflatables slides, 
                    towers, bridges, human launchers, swings and so much more!
                </div>
            </div>
            <div className='flex flex-col flex-1'> 
                <div className='text-center text-sm mb-6'>CONTACT US</div>
                <div className="flex flex-1 flex-row gap-2">
                <div className="flex w-250px flex-col gap-2">
                    <input
                    type="text"
                    placeholder="Name"
                    className="border-2 border-[#F2F5BE] p-1"
                    />
                    <input
                    type="text"
                    placeholder="Email"
                    className="border-2 border-[#F2F5BE] p-1"
                    />
                    <input
                    type="text"
                    placeholder="Subject"
                    className="border-2 border-[#F2F5BE] p-1"
                    />
                </div>
                <div className="flex flex-1 w-[250px]">
                    <textarea
                    placeholder="Message"
                    className="border-2 border-[#F2F5BE] p-1 w-full h-[122px]"
                    ></textarea>
                </div>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='text-xs mt-10'>
                    OPENING HOURS:<br/>
                    7:30 AM to 6:00 PM<br/>
                    +63945-733-4256<br/>
                    +63956-369-7170<br/>
                    play@theinflatableisland.com<br/>
                    R7W9+M57, Olongapo - Bugallon Rd<br/>
                    Olongapo City, Zambales, Philippines<br/>
                </div>
            </div>
        </div>
    </div>
  )
}
