import { useRef } from "react";
import calendar from "../assets/images/calendar.svg";

const CustomDatePicker = ({ selectedDate, setSelectedDate }) => {
  const dateInputRef = useRef(null);

  const handleClick = () => {
    dateInputRef.current.showPicker(); 
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center justify-between w-40 px-[18px] py-[15px] min-w-full border rounded-sm border-[#C1C2CA] text-[#707C87] font-semibold text-xl text-center leading-none"
      >
        {selectedDate || "Оберіть дату"}
        <img src={calendar} alt="Calendar" className="w-[25px] h-7 ml-2" />
      </button>

      <input
        ref={dateInputRef}
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="absolute opacity-0 w-0 h-0"
      />
    </div>
    
  );
};

export default CustomDatePicker;