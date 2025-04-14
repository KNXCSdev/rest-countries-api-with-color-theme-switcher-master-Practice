import { useEffect, useState } from "react";
import Country from "./Country";

export default function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setCountries(data);
    }

    fetchData();
  }, []);

  console.log(countries);

  return (
    <div className="grid grid-cols-4 gap-24">
      {countries.map((country, index) => {
        return <Country country={country} key={index} />;
      })}
    </div>
  );
}
