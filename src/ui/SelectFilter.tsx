import { useCountriesFilter } from "../context/CountriesContext";

export default function SelectFilter() {
  const { region, setRegion } = useCountriesFilter();
  return (
    <form>
      <select
        id="countries"
        className="h-full w-full rounded-lg bg-white p-6 text-xl text-gray-600 shadow"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value={""} disabled={true}>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
}
