import useCountries from "../../hooks/useCountries";
import { useCountriesFilter } from "../../context/CountriesContext";
import CountryItem from "./CountryItem";

export default function CountriesList() {
  const { search, region } = useCountriesFilter();
  const [countries] = useCountries(search);

  if (!countries.length) return "No countires could be found";

  const filteredCountry = region
    ? countries.filter((country: { region: string }) => {
        return country.region.toLowerCase() === region;
      })
    : countries;

  return (
    <div className="grid grid-cols-4 gap-24">
      {filteredCountry?.map((country, index) => {
        return <CountryItem country={country} key={index} />;
      })}
    </div>
  );
}
