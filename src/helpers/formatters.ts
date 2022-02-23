import currency from "currency.js";

export const formatMoney = (amount: string | number) => {
  return currency(amount, {
    decimal: ",",
    separator: ".",
    symbol: "",
  }).format();
};
