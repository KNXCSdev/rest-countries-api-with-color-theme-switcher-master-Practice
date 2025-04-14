import { HiOutlineMoon } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

export default function Navigation() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="border-b-2 border-b-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-[120rem] items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">
          Where in the world?
        </h1>
        <button
          className="flex cursor-pointer items-center gap-3 text-2xl text-gray-900"
          onClick={toggleDarkMode}
        >
          <HiOutlineMoon />
          {!isDarkMode ? <p>Dark Mode</p> : <p>Light Mode</p>}
        </button>
      </div>
    </div>
  );
}
