import CountriesList from "../components/home/CountriesList";
import Filters from "../components/home/Filters";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Filters />
      <CountriesList />
    </div>
  );
}
