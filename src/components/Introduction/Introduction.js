import React from 'react'
import "../../fonts/inflatablefont.css";

export default function Introduction() {
  return (
    <div className='flex flex-col sm:flex-row w-full px-4 sm:px-60 py-10 bg-[#f8eddd] mt-[-10px]'>
        <div className='flex flex-col flex-1 px-10'>
            <div className='text-center text-[#EBACB3] font-bold'>INTRODUCING</div>
            <div className='flex justify-center place-items-center'>
                <img src={'https://static.wixstatic.com/media/00f21d_0691b71609cb4ac9a4b6f62227cb0c86~mv2.png/v1/crop/x_0,y_374,w_1080,h_329/fill/w_508,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/INF-BEACH_CLUB_COLORED-HORIZONTAL.png'
                } alt='logo' className='object-contain w-[400px]'/>
            </div>
            <div className='text-[#20442c] text-sm font-bold'>
                Escape to the Newest IG-Summer Nirvana! Host to the BIGGEST Inflatable 
                playground in Asia, the cutest tiki hut umbrellas & the coziest 
                pastel bean bags….Inflatable Island Beach Club is your perfect 
                sunrise to sunset hang!<br/><br/> Sip margaritas at our soon-to-be-unveiled Balinese 
                poolside haven, have some lechon weekends in our all new resto & take your next 
                pfp at our tiktok famous basket boats!<br/><br/> Our floating playground...just 
                got A LOT BIGGER! We are now over 4,500 sqm! It's as big as 11 basketball courts 
                put together side by side. It contains inflatables slides, towers, bridges, human 
                launchers, swings and so much more!<br/><br/> This is BEACH PLAY REIMAGINED.
            </div>
        </div>
        <div className='flex flex-1'>
            <iframe
              title="The Inflata"
              src={`https://www.youtube.com/embed/OdnILpAmpxk`}
              frameBorder="0"
              allowFullScreen
              className="carousel-video"
            />
        </div>
    </div>
  )
}
