import { HiOutlineMoon } from "react-icons/hi2";

export default function Navigation() {
  return (
    <div className="border-b-2 border-b-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-[120rem] items-center justify-between">
        <h1 className="text-4xl font-bold text-black">Where in the world?</h1>
        <button className="flex cursor-pointer items-center gap-3 text-2xl">
          <HiOutlineMoon />
          <p>Dark Mode</p>
        </button>
      </div>
    </div>
  );
}
