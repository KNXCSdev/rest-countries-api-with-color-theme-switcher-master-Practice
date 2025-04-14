import { useNavigate, useParams } from "react-router";
import CountryDetails from "../components/home/CountryDetails";
import useCountries from "../hooks/useCountries";

export default function Country() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [countries] = useCountries();

  const country = countries.find(
    (c: { name: { common: string } }) => c?.name?.common === id,
  );

  if (!country) return <p>Country not found</p>;

  return (
    <div className="flex flex-col gap-24">
      <button
        onClick={() => navigate(-1)}
        className="block w-1/6 cursor-pointer rounded-lg bg-white px-8 py-4 text-2xl text-gray-500 shadow-md"
      >
        Go Back
      </button>
      <CountryDetails country={country} />
    </div>
  );
}
