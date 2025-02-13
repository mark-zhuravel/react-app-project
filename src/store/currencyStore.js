import { makeAutoObservable, runInAction } from "mobx";

class CurrencyStore {
  rates = {}; 
  loading = false; 
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };
  
  fetchRates = async (date = this.getTodayDate()) => {
    try {
      this.loading = true;
      this.error = null;

      const formattedDate = date.replace(/-/g, ""); // YYYY-MM-DD → YYYYMMDD
      const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${formattedDate}&json`;

      const response = await fetch(url);
      const data = await response.json();

      const ratesData = { UAH: 1 };
      data.forEach((item) => {
        ratesData[item.cc] = item.rate;
      });

      runInAction(() => {
        this.rates = ratesData;
        this.loading = false;
      });

      console.log(`Курсы валют на ${formattedDate} загружены:`, this.rates);
    } catch (error) {
      console.error("Ошибка загрузки курсов валют:", error);
      runInAction(() => {
        this.loading = false;
        this.error = "Ошибка загрузки курсов";
      });
    }
  };
}

const currencyStore = new CurrencyStore();
export default currencyStore;