import SearchFilter from "../../ui/SearchFilter";
import SelectFilter from "../../ui/SelectFilter";

export default function Filters() {
  return (
    <div className="flex items-center justify-between">
      <SearchFilter />
      <SelectFilter />
    </div>
  );
}
