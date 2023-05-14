
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export function PromoBanner() {

  return (
    <div className='w-full py-10 mt-[-10px] bg-tdm-lightpink font-quicksand'>
        <div className='flex justify-center pb-3'>
            <span className='cursor-pointer text-center font-bold text-tdm-darkpink underline tracking-wider-custom text-[30px] leading-1'>FREE MARCH BABIES PROMO ENDS IN</span>
        </div>
        <div className='flex justify-center items-center'>
          <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            labelStyle={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase' }}
            digitBlockStyle={{ width: 30, height: 50, fontSize: 30 }}
            duration={0.5}
          />
        </div>
    </div>
  );
}