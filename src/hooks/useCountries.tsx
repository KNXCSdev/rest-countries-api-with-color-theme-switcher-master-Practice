import { useEffect, useState } from "react";

export default function useCountries(searchField?: string) {
  const [countries, setCountries] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/${searchField ? `name/${searchField}` : "all"}`,
          );
          const data = await res.json();

          setCountries(data);
        } catch (err) {
          console.error(err);
        }
      }

      fetchData();
    },
    [searchField],
  );

  return [countries];
}
