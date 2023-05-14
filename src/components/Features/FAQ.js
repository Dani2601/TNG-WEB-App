import React from 'react'
import { Accordion } from '../../pages/Accordion/Accordion'

export default function FAQ({setRef}) {
  return (
    <div ref={setRef} className='flex justify-center py-4 lg:py-12 font-quicksand'>
        <div className='w-[90vw] lg:w-[70vw]'>
            <div className='py-5 font-bold text-tdm-darkpink tracking-widest text-center text-[1.2em]'>FREQUENTLY ASKED QUESTIONS</div>
            <div>
                <Accordion title="What's your Covid-19 Guidelines? Ages allowed?">
                    <span className='text-[#aab5c6] text-sm'>As per the latest IATF Guidelines, <span className='text-[#7d7775] font-bold'>GUESTS OF ALL AGES ARE NOW ALLOWED! Adults (18 yo and above)  
                        must be FULLY VAXXED and kids (below 18 years old) should be accompanied by a fully vaxxed adult.</span>We require masks 
                        at all times. Areas for sanitation has been provided all throughout the museum. We can only accommodate a limited 
                        number of pax per day. Booking in advance at book.thedessertmuseum.com is highly encouraged. Please bring your 
                        VACCINATION cards.<br/>Thank you and hope we can see you soon!
                    </span>
                </Accordion>
                
                <Accordion title="How to book?">
                    <span className='text-sm text-[#aab5c6]'>
                        You can book online to save up to Php100 off (Online Promo - Php699) at <a className='text-[#e7caf2]' href='http://bit.ly/BookTheDessertMuseum'>http://bit.ly/BookTheDessertMuseum</a>
                    </span>
                </Accordion>
                
                <Accordion title="What are the modes of payment available?">
                    <span className='text-sm text-[#aab5c6]'>
                        You can via PAYPAL or Credit Card (using paypal, even if you don’t have a PayPal account - no need to sign up), or PAYNAMICS which allows BPI, BDO (online banking and over the counter), LBC, Cebuana and etcetera! 
                    </span>
                </Accordion>
                
                <Accordion title="CANCELLATIONS AND RESCHEDULING OF RESERVATIONS">
                    <span className='text-sm text-[#aab5c6]'>
                    NO SHOWS can be rescheduled up to 7 days after the booked date, LATE RESCHEDULING CAN ONLY BE DONE ONCE and will be subjected to Php 200 rescheduling fee and slot availability. After more than 7 days of your booked date, attempts to reschedule will not be allowed and your slots will be forfeited.<br/>
                    INCLEMENT WEATHER POLICY - In the event of severe weather conditions, no refunds will be given but The Dessert Museum will provide FREE RESCHEDULING to all patrons within 1 month of the booked date.
                    </span>
                </Accordion>
                
                <Accordion title="Museum Layout and Changes">
                    <span className='text-sm text-[#aab5c6]'>
                        We will make every effort to guarantee that as many dessert themed rooms as possible are available for usage. However, we reserve the right, without prior notice, that some attractions may also be up for maintenance which would not be grounds for refunds.
                    </span>
                </Accordion>

                
                <Accordion title="How long would it take to experience The Dessert Museum?">
                    <span className='text-sm text-[#aab5c6]'>
                    We have allotted a maximum of  a two hour slot for each ticket, but it can be faster depending on your pace and the crowd. We would also like to emphasise that you can only go through the museum once and you can only move forward. Maximum stay in each room is 15 minutes or a total of 2 hours. 
                    </span>
                </Accordion>

                
                <Accordion title="How many desserts will be given away?">
                    <span className='text-sm text-[#aab5c6]'>
                    We will be giving away 3-4 tasty treats. You will NOT go home hungry sweet-tooths!
                    </span>
                </Accordion>

                
                <Accordion title="Where exactly is The Dessert Museum located?">
                    <span className='text-sm text-[#aab5c6]'>
                    We are located at S Maison, Manila's exclusive shopping address located under Hilton Worldwide's luxury hotel property - Conrad Manila and right next to SM Mall of Asia. You can find us easily next to Starbucks S Maison.<br/>
                    WAZE/GRAB: The Dessert Museum<br/>
                    Full Address: Unit 124, 126, 127a, S Maison, Coral Way, Conrad Hotel Manila, Mall of Asia Complex, Pasay City
                    </span>
                </Accordion>

                
                <Accordion title="Can I bring my pet?">
                    <span className='text-sm text-[#aab5c6]'>
                    The only animals allowed are our candy rabbits (Not real rabbits). Please leave your pets at home while you go on this delicious adventure.
                    </span>
                </Accordion>

                
                <Accordion title="I have a food allergy. Will I still be able to enjoy the samples?">
                    <span className='text-sm text-[#aab5c6]'>
                    Please notify us about any allergies you may have when filling out our waiver form. Our staff will advise you on how to be safe during this amazing experience!
                    </span>
                </Accordion>

                
                <Accordion title="Do you accept walk ins?">
                    <span className='text-sm text-[#aab5c6]'>
                    Yes, we accommodate walk ins, but slots are subject to availability. 
                    </span>
                </Accordion>

                
                <Accordion title="How early should I arrive?">
                    <span className='text-sm text-[#aab5c6]'>
                    Guests are required to come 15 MINUTES BEFORE THEIR SCHEDULED SLOT for processing of tickets.  LATE GOERS are subjected to a RESCHEDULING FEE OF PHP 100/head and can only be accommodated upon slot availability. 
                    </span>
                </Accordion>

                
                <Accordion title="What is your operating hours?">
                    <span className='text-sm text-[#aab5c6]'>
                    We're open by 10am until 10pm but last call of guest is just until 8pm. 
                    </span>
                </Accordion>

                
                <Accordion title="Can I bring food/drinks inside?">
                    <span className='text-sm text-[#aab5c6]'>
                    Outside food and drinks is not allowed. 
                    </span>
                </Accordion>

                
                <Accordion title="Can I use DSLR camera or change my outfit?">
                    <span className='text-sm text-[#aab5c6]'>
                    Usage of photoshoot equipment such as tripods, lighting materials, props, and changing of clothes are strictly prohibited unless availing our photoshoot package. You can use only your mobile phone in taking photos and videos.
                    </span>
                </Accordion>

                
                <Accordion title="Do you have baggage counter?">
                    <span className='text-sm text-[#aab5c6]'>
                    Lockers are now available at The Dessert Museum! <br/>
                    Rental rate: P 50 (first 3 hours), Deposit: P 100, Lost key: P 300, Succeeding hours: P50/ hr
                    </span>
                </Accordion>

                
                <Accordion title="How do we contact you?">
                    <span className='text-sm text-[#aab5c6]'>
                    You may reach us through this number: <br/>
                    Back Office Hours are from Monday to Friday, 9:00AM to 6:00PM<br/>
                    0966 210 6010<br/>
                    </span>
                </Accordion>

                
                <Accordion title="Terms and Conditions of Promos">
                    <span className='text-sm text-[#aab5c6]'>
                    Terms and Conditions of Promos<br/>
                    <span className='mr-10'>·</span>Valid on Weekdays and Weekends<br/>
                    <span className='mr-10'>·</span>Not applicable on Special and Official HOLIDAYS<br/>
                    <span className='mr-10'>·</span>Not applicable for walk-ins, for online booking/reservations only<br/>
                    <span className='mr-10'>·</span>Cannot be used in conjunction with any other promo or discounted rates we offer.
                    </span>
                </Accordion>
            </div>
        </div>
    </div>
  )
}
