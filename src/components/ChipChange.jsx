import mastercard from '../assets/images/mastercard.png';
import { Link } from "react-router-dom";
import background from '../assets/images/background.png';

const ChipChange = () => {
  return (
    <section style={{backgroundImage: `url("${background}")`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
    }} 
    className="min-w-full py-[80px]">
      <div className='w-[63.3%] mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col space-y-[25px]'>
                <h1 className='text-[#F6F7FF] text-[54px] font-bold leading-none'>Чіп Чендж</h1>
                <p className='text-[#E0E1EA] text-xl leading-none'>Обмінник валют - навчальний</p>
                <Link to="/converter" className='text-lg text-[#707C87] font-medium bg-[#F6F7FF] py-5 w-[234px] text-center rounded-sm leading-4'>Конвертер валют</Link>
            </div>
            <img src={mastercard} alt="mastercard" />
        </div>
      </div>
    </section>
  );
};

export default ChipChange;