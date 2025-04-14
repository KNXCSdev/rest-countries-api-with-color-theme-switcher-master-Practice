export default function SelectFilter() {
  return (
    <form>
      <select
        id="countries"
        className="h-full w-full rounded-lg bg-white p-6 text-xl text-gray-600 shadow"
      >
        <option defaultValue={"Filter by Region"}>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
}
