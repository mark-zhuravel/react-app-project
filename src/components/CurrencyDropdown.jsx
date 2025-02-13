import { useState } from "react";
import arrow_down from "../assets/images/arrow_down.svg";

const currencies = ["UAH", "USD", "EUR", "GBP", "CNY"];

const CurrencyDropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Кнопка выбора валюты */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between min-w-full border rounded-sm border-[#C1C2CA] text-[#707C87] font-semibold text-xl text-center leading-none py-4 px-[18px] h-[60px]"
      >
        {selected}
        <span
          className={`transition-transform flex ml-7 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <img src={arrow_down} alt="arrow down" className="self-center w-4 h-2"/>
        </span>
      </button>

      {/* Выпадающий список */}
      {isOpen && (
        <div className="absolute left-0 w-[120px] border rounded-sm border-[#C1C2CA] text-[#707C87] font-semibold text-xl text-center leading-none bg-white shadow-lg">
          {currencies.map((currency) => (
            <button
              key={currency}
              onClick={() => {
                setSelected(currency);
                setIsOpen(false);
              }}
              className="block w-full px-3 py-2 text-left hover:bg-[#2C36F2] hover:text-white transition-colors"
            >
              {currency}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;