import React, { useReducer } from "react";
import {
  Card,
  MenuItem,
  Select,
  Typography,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
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
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      className="BitcoinRates"
    >
      <Card elevation={3} sx={{ padding: 4, maxWidth: 400 }}>
        <Typography variant="h5" component="h3" align="center" gutterBottom>
          Bitcoin Exchange Rate
        </Typography>

        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 3 }}>
          <InputLabel>Choose currency</InputLabel>
          <Select
            value={currency}
            onChange={(e) =>
              dispatch({ type: "SET_CURRENCY", payload: e.target.value })
            }
            label="Choose currency"
          >
            {options}
          </Select>
          <Typography variant="body2" color="textSecondary">
            The API might have some latency to get the amount :)
          </Typography>
        </FormControl>

        <Typography variant="h6" align="center">
          {bitcoinRate ? (
            <>
              <span className="fw-bold">Bitcoin Price: </span>
              <Typography component="span" color="primary" variant="h5">
                {bitcoinRate} {currency}
              </Typography>
            </>
          ) : (
            "Loading..."
          )}
        </Typography>
      </Card>
    </Box>
  );
}

export default BitcoinRates;
