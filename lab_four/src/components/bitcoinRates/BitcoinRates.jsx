import React, { useReducer } from "react";
import "./BitcoinRates.css";
import useBitcoinRate from "../../customHooks/useBitcoinRate";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
};

function BitcoinRates() {
  const initialState = {
    currency: currencies[0],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { currency } = state;

  const { bitcoinRate, error } = useBitcoinRate(currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 BitcoinRates container ">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Bitcoin Exchange Rate</h3>
        <label className="form-label">
          Choose currency:
          <select
            className="form-select"
            value={currency}
            onChange={(e) =>
              dispatch({ type: "SET_CURRENCY", payload: e.target.value })
            }
          >
            {options}
          </select>
          <small className="form-text text-muted">
            The API might have some latency to get the amount :)
          </small>
        </label>
        <p className="text-center mt-4 display-6">
          {bitcoinRate ? (
            <>
              <span className="fw-bold">Bitcoin Price: </span>
              <span className="text-primary">{bitcoinRate}</span> {currency}
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
