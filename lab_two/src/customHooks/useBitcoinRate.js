import { useState, useEffect } from "react";

const useBitcoinRate = (currency) => {
  const [bitcoinRate, setBitcoinRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchBitcoinRate = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (isMounted) {
          setBitcoinRate(data.bitcoin[currency.toLowerCase()]);
          console.log(data.bitcoin[currency.toLowerCase()]);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    };

    fetchBitcoinRate();

    // Cleanup function to avoid memory leaks
    return () => {
      isMounted = false;
    };
  }, [currency]); // Dependency array ensures this effect runs when 'currency' changes

  return { bitcoinRate, error };
};

export default useBitcoinRate;
