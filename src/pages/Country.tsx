import { useNavigate } from "react-router";
import CountryDetails from "../components/CountryDetails";

export default function Country() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-24">
      <button
        onClick={() => navigate(-1)}
        className="block w-1/6 cursor-pointer rounded-lg bg-white px-8 py-4 text-2xl text-gray-500 shadow-md"
      >
        Go Back
      </button>
      <CountryDetails />
    </div>
  );
}
