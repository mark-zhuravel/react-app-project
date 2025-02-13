import { observer } from "mobx-react-lite";
import conversionHistoryStore from "../store/conversionHistoryStore";
import arrow_right from "../assets/images/arrow_right.svg";

const ConversionHistory = observer(() => {
  return (
    <section className="bg-white py-20">
      <div className="w-[70.4%] mx-auto bg-[#F6F7FF]">
        <div className="w-[86.5%] mx-auto flex justify-between items-center pt-10 pb-8">
          <h3 className="text-[28px] text-[#1F1E3F] font-medium">Історія конвертації</h3>
          <button 
            className="bg-[#2C36F2] text-[#F6F7FF] font-medium leading-none py-5 w-[187px] rounded-sm cursor-pointer"
            onClick={() => conversionHistoryStore.clearHistory()}
          >
            Очистити історію
          </button>
        </div>
        <div className="w-[86.5%] mx-auto grid grid-cols-2 gap-x-12 gap-y-4 pb-[58px]">
          {conversionHistoryStore.history.map((conversion, index) => (
            <div key={index} className="bg-white rounded-md py-[14px] px-4 flex justify-between ">
              <span className="text-[#C1C2CA] text-lg leading-none">{conversion.date}</span>
              <span className="font-semibold text-[#707C87] text-lg leading-none">{conversion.fromAmount} {conversion.fromCurrency}</span>
              <img src={arrow_right} alt="arrow right" />
              <span className="font-semibold text-[#707C87] text-lg leading-none">{conversion.toAmount} {conversion.toCurrency}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ConversionHistory;