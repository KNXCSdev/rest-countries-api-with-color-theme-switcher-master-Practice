import CountriesList from "../components/CountriesList";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Filters />
      <CountriesList />
    </div>
  );
}
