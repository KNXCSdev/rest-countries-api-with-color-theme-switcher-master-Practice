import { useCountriesFilter } from "../../context/CountriesContext";
import SearchFilter from "../../ui/SearchFilter";
import SelectFilter from "../../ui/SelectFilter";

export default function Filters() {
  const { search, setSearch, region, setRegion } = useCountriesFilter();

  return (
    <div className="flex items-center justify-between">
      <SearchFilter search={search} setSearch={setSearch} />
      <SelectFilter region={region} setRegion={setRegion} />
    </div>
  );
}
