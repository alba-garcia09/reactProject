const exchangeRates = {
  USD: 1,        // Dólar estadounidense (base)
  EUR: 0.85,     // Euro
  GBP: 0.75,     // Libra
  INR: 74,       // Rupia
  JPY: 110,      // Yen
  BTC: 0.000023  // Bitcoin (tasa ficticia)
};

const currencyIcons = {
  BTC: <i className="bi bi-currency-bitcoin"></i>,
  USD: <i className="bi bi-currency-dollar"></i>,
  EUR: <i className="bi bi-currency-euro"></i>,
  GBP: <i className="bi bi-currency-pound"></i>,
  INR: <i className="bi bi-currency-rupee"></i>,
  JPY: <i className="bi bi-currency-yen"></i>,
};

const convertPrice = (amount, fromCurrency, toCurrency) => {
  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];
  return (amount / fromRate) * toRate;
};

export { convertPrice };