import { useNavigate } from "react-router";

interface CountryProps {
  country: {
    name: { common: string };
    population: number;
    region: string;
    capital: string;
    flags: { png: string; svg: string };
  };
}

export default function CountryItem({ country }: CountryProps) {
  const { name, population, region, capital, flags } = country;
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer flex-col gap-4 overflow-hidden rounded-md bg-white shadow-sm"
      onClick={() => navigate(`${name.common}`)}
    >
      <img src={flags.svg} alt="" className="h-66 w-full object-cover" />
      <div className="p-8 pb-16 text-gray-600">
        <h2 className="mb-6 text-2xl font-bold">{name.common}</h2>
        <p className="flex items-center gap-2 text-lg font-semibold">
          Population: <span className="font-light">{population}</span>
        </p>
        <p className="flex items-center gap-2 text-lg font-semibold">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="flex items-center gap-2 text-lg font-semibold">
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>
    </div>
  );
}
