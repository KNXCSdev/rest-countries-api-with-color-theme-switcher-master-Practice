import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function SearchFilter({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (v: string) => void;
}) {
  return (
    <form>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-2xl">
          <HiOutlineMagnifyingGlass className="h-[2rem] w-[2rem] text-gray-500" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-[45rem] rounded-lg bg-white p-6 ps-15 text-2xl text-gray-500 shadow focus:border-blue-500 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
          required
        />
      </div>
    </form>
  );
}
