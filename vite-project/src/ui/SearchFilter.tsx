import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function SearchFilter() {
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
          placeholder="Search for a country..."
          required
        />
        <button
          type="submit"
          className="absolute end-2.5 bottom-2.5 rounded-lg bg-blue-700 px-8 py-4 text-2xl font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
