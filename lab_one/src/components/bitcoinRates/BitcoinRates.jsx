import React, { useState, useEffect } from "react";
import "./BitcoinRates.css"; // Add this line for custom styling

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        if (isMounted) {
          setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();

    // Cleanup function to avoid memory leaks
    return () => {
      isMounted = false;
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates container my-4 ">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Bitcoin Exchange Rate</h3>
        <label className="form-label">
          Choose currency:
          <select
            className="form-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {options}
          </select>
          <small className="form-text text-muted">
            The API might have some latency to get the amount :)
          </small>
        </label>
        <p className="text-center mt-4 display-6">
          {bitcoinPrice ? (
            <>
              <span className="fw-bold">Bitcoin Price: </span>
              <span className="text-primary">{bitcoinPrice}</span> {currency}
            </>
          ) : (
            "Loading..."
          )}
        </p>
      </div>
    </div>
  );
}

export default BitcoinRates;
