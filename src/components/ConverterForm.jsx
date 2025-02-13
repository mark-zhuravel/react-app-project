import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import currencyStore from "../store/currencyStore";
import conversionHistoryStore from "../store/conversionHistoryStore";
import { z } from "zod";
import arrows from "../assets/images/arrows.svg";
import CurrencyDropdown from "./CurrencyDropdown.jsx";
import CustomDatePicker from "./CustomDatePicker.jsx";

const amountSchema = z
  .number({ invalid_type_error: "Введіть число" })
  .min(0, "Значення не може бути менше 0")
  .optional();

const ConverterForm = observer(() => {
  const [currency, setCurrency] = useState("UAH");
  const [convertedCurrency, setConvertedCurrency] = useState("USD");
  const [amount, setAmount] = useState(1000);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(currencyStore.getTodayDate());
  const [activeField, setActiveField] = useState("from");
  const [error, setError] = useState("");

  const { rates, loading } = currencyStore;

  useEffect(() => {
    currencyStore.fetchRates(selectedDate);
  }, [selectedDate]);

  const validateAmount = (value) => {
    const parsedValue = parseFloat(value);
    const result = amountSchema.safeParse(parsedValue);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return false;
    }
    setError("");
    return true;
  };

  const convertCurrency = (value, from, to) => {
    if (loading) return "Завантаження...";
    if (!rates[from] || !rates[to]) return "Помилка завантаження";
    return ((value * rates[from]) / rates[to]).toFixed(2);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!validateAmount(value)) return;
    setAmount(value);
    setActiveField("from");
    setConvertedAmount(convertCurrency(value, currency, convertedCurrency));
  };

  const handleConvertedAmountChange = (e) => {
    const value = e.target.value;
    if (!validateAmount(value)) return;
    setConvertedAmount(value);
    setActiveField("to");
    setAmount(convertCurrency(value, convertedCurrency, currency));
  };

  const handleSaveConversion = () => {
    if (!amount || !currency || !convertedCurrency) return;

    const correctConvertedAmount = convertCurrency(amount, currency, convertedCurrency);

    conversionHistoryStore.addConversion({
      date: selectedDate,
      fromAmount: amount, 
      fromCurrency: currency,
      toAmount: correctConvertedAmount, 
      toCurrency: convertedCurrency,
    });
  };

  return (
    <section className="bg-[#F6F7FF]">
      <div className="w-[70.4%] mx-auto my-20 bg-white">
        <h1 className="text-[#1F1E25] text-[40px] font-bold leading-none pt-[53px] pl-12 pb-[70px]">
          Конвертер валют
        </h1>
        <div className="w-[86.5%] mx-auto flex justify-between pb-[55px]">
          <div className="flex flex-col space-y-[30px]">
            <p className="text-[#707C87] text-xl font-medium leading-none">В мене є:</p>
            <div className="grid grid-cols-[220px_120px] gap-x-[15px] gap-y-[24px]">
              <input
                type="number"
                value={loading ? "" : activeField === "from" ? amount : convertCurrency(convertedAmount, convertedCurrency, currency)}
                onChange={handleAmountChange}
                className="border rounded-sm border-[#C1C2CA] text-[#707C87] font-semibold text-xl text-center leading-none py-4 h-[60px]"
              />
              <CurrencyDropdown selected={currency} setSelected={setCurrency} />
              <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </div>
          <img src={arrows} alt="arrows" className="w-6 h-6 mt-[65px]" />
          <div className="flex flex-col space-y-[30px]">
            <p className="text-[#707C87] text-xl font-medium leading-none">Хочу придбати:</p>
            <div className="grid grid-cols-[220px_120px] gap-x-[15px] gap-y-[24px]">
              <input
                type="number"
                value={loading ? "" : activeField === "to" ? convertedAmount : convertCurrency(amount, currency, convertedCurrency)}
                onChange={handleConvertedAmountChange}
                className="border rounded-sm border-[#C1C2CA] text-[#707C87] font-semibold text-xl text-center leading-none py-4 h-[60px]"
              />
              <CurrencyDropdown selected={convertedCurrency} setSelected={setConvertedCurrency} />
              <button 
                className="py-4 bg-[#2C36F2] text-[#F6F7FF] text-lg rounded-sm col-span-full ml-[135px] cursor-pointer"
                onClick={handleSaveConversion}
              >
                Зберегти результат
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ConverterForm;