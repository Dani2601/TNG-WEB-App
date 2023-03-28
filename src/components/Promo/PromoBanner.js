import FlipCountdown from '@rumess/react-flip-countdown';
import "./FlipCard.css";

export function PromoBanner() {

  return (
    <div className='w-full py-10 bg-tdm-lightpink font-quicksand'>
        <div className='flex justify-center pb-3'>
            <span className='cursor-pointer text-center font-bold text-tdm-darkpink underline tracking-wider-custom text-[30px] leading-1'>FREE MARCH BABIES PROMO ENDS IN</span>
        </div>
        <FlipCountdown
            showLabel={false}
            hideYear
            hideMonth
            size={'medium'}
            endAt={'2023-12-12 01:26:58'} // Date/Time
            onTimeUp={() => console.log("Time's up ⏳")}
            theme={'light'}
        />
        <div className='w-full flex justify-center mt-4'>
            <div className='flex w-[480px] justify-center bg-white'>
                <div className='w-1/4 text-center font-bold text-[16px]'>Days</div>
                <div className='w-1/4 text-center font-bold text-[16px]'>Hours</div>
                <div className='w-1/4 text-center font-bold text-[16px]'>Mins</div>
                <div className='w-1/4 text-center font-bold text-[16px]'>Secs</div>
            </div>
        </div>
    </div>
  );
}