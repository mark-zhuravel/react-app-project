import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import currencyStore from "../store/currencyStore";
import ConverterForm from "../components/ConverterForm.jsx";
import ConversionHistory from "../components/ConversionHistory.jsx";

const Converter = observer(() => {
  useEffect(() => {
    currencyStore.fetchRates(); 
  }, []);

  return (
    <>
      <ConverterForm />
      <ConversionHistory />
    </>
  );
});

export default Converter;