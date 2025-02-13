import { makeAutoObservable, action, runInAction, observable } from "mobx";

class ConversionHistoryStore {
  history = observable.array([]); 

  constructor() {
    makeAutoObservable(this, {
      addConversion: action,
      clearHistory: action,
      loadHistory: action,
    });
    this.loadHistory();
  }

  addConversion(conversion) {
    runInAction(() => {
      this.history.unshift(conversion);
      if (this.history.length > 8) this.history.pop();
      this.saveHistory();
    });
  }

  clearHistory() {
    runInAction(() => {
      this.history.clear(); 
      localStorage.removeItem("conversionHistory");
    });
  }

  saveHistory() {
    localStorage.setItem("conversionHistory", JSON.stringify(this.history.slice())); 
  }

  loadHistory() {
    const savedHistory = localStorage.getItem("conversionHistory");
    if (savedHistory) {
      runInAction(() => {
        this.history.replace(JSON.parse(savedHistory)); 
      });
    }
  }
}

const conversionHistoryStore = new ConversionHistoryStore();
export default conversionHistoryStore;