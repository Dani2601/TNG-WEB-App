import React from 'react'
import { desertlogo, email, fb, insta, marker, phone, twitter } from '../../assets'

export function DessertFooter() {
  return (
    <div className='flex flex-col sm:flex-row py-5 items-center'>
        <div className='w-full md:w-1/4 px-10 lg:px-14'>
            <img
                className="w-86 object-contain"
                src={desertlogo}
            />
            <div className='text-justify text-sm'>
            The Dessert Museum is an interactive eat as you play and learn experience where the sights are just as delicious as the sweets. You will gobble your way through 8 mouthwatering rooms of sugar-filled happiness. There are only two things on the menu - sugar and selfies. Welcome to the Dessert Museum. Please don't eat the furniture.
            </div>
        </div>
        <div className='w-full lg:w-1/2 px-10 lg:px-20'>
            <div className='text-[#FF98C3] text-2xl'>Contact Us!</div>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='flex flex-col gap-2'>
                    <input type='text' placeholder='Name' className='border-2 border-[#F2F5BE] p-2'/>
                    <input type='text' placeholder='Email' className='border-2 border-[#F2F5BE] p-2'/>
                    <input type='text' placeholder='Subject' className='border-2 border-[#F2F5BE] p-2'/>
                </div>
                <div className='w-full'>
                    <textarea placeholder='Message' className='border-2 border-[#F2F5BE] p-2 w-full h-full'></textarea>
                </div>
            </div>
            <div className='flex justify-end mt-2'>
                <button className='px-4 py-1 border-2 border-[#FF98C3] text-[#FF98C3]'>Submit</button>
            </div>
        </div>
        <div className='flex flex-col justify-center w-full lg:w-1/4 px-10 lg:px-4 gap-3'>
            <div className='flex items-center'>
                <img src={phone} className="object-contain h-7 w-7 mr-10"/>
                <span className='text-sm'>(+63) 966 210 6010</span>
            </div>
            <div className='flex items-center'>
                <img src={email} className="object-contain h-7 w-7 mr-10"/>
                <span className='text-sm'>hello@thedessertmuseum.com</span>
            </div>
            <div className='flex items-center'>
                <img src={marker} className="object-contain h-7 w-7 mr-10"/>
                <span className='text-sm'>Unit 124, 126, 127a, Coral Way,<br/>S Maison Mall, Conrad Hotel<br/>Manila, Mall of Asia Complex,<br/>Pasay City</span>
            </div>
            <div className='flex gap-4'>
                <img src={fb} />
                <img src={insta} />
                <img src={twitter} />
            </div>
        </div>
    </div>
  )
}
