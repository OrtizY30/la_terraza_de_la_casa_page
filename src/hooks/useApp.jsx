import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useApp = () => {
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }
  const context = useContext(AppContext);
  return context;
};

export default useApp;
