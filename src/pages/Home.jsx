import cardInTheHand from '../assets/images/card_in_the_hand.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-w-full py-[120px] bg-white">
      <div className="w-[63.3%] mx-auto">
        <div className='flex justify-between items-center'>
          <div className='flex flex-col space-y-[25px]'>
            <h1 className='text-[#1F1E25] text-[40px] font-bold leading-none'>Конвертер валют</h1>
            <p className='text-[#707C87] text-xl font-normal'>Переважна діяльність банківської <br/> групи за останні чотири звітні квартали <br/> становить 50 і більше відсотків.</p>
            <Link to="/converter" className='text-lg text-[#F6F7FF] bg-[#2C36F2] font-medium py-6 w-[251px] text-center rounded-sm leading-4'>Конвертер валют</Link>
          </div>
            <img src={cardInTheHand} alt="card in the hand" />
        </div>
      </div>
    </section>
  );
}