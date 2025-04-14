import { useCountriesFilter } from "../context/CountriesContext";
import useCountries from "../hooks/useCountries";
import CountryItem from "./CountryItem";

export default function CountriesList() {
  const { search, region } = useCountriesFilter();
  const { countries, loading, error } = useCountries(search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!countries.length) return <p>No countries could be found</p>;

  const filteredCountries = region
    ? countries.filter(
        (country: { region: string }) =>
          country.region.toLowerCase() === region,
      )
    : countries;

  return (
    <div className="grid grid-cols-4 gap-24">
      {filteredCountries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </div>
  );
}
