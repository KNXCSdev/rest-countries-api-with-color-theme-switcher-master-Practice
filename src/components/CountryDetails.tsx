import { useParams } from "react-router";
import useCountries from "../hooks/useCountries";

type CountryType = {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flags: {
    svg: string;
  };
  tld: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[] | undefined;
};

export default function CountryDetails() {
  const { id } = useParams();
  const { data: countries = [], isLoading, error } = useCountries();

  const country = countries?.find(
    (c: { name: { common: string } }) => c?.name?.common === id,
  ) as CountryType | undefined;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>No countries could be found</p>;

  const {
    name,
    population,
    region,
    capital,
    flags,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const currency = currencies ? Object.values(currencies)[0].name : null;

  const nativeName = name.nativeName
    ? Object.values(name.nativeName)[0].common
    : null;

  const languagess = languages ? Object.values(languages).join(", ") : null;

  console.log(country);

  return (
    <div className="flex items-center gap-24">
      <img src={flags.svg} alt="" className="h-[40rem] w-1/2 object-cover" />
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-bold text-gray-900">{name.common}</h1>
        <div className="flex gap-48 text-gray-900">
          <ul>
            <li className="text-xl font-bold">
              Native Name: <span className="font-light">{nativeName}</span>
            </li>
            <li className="text-xl font-bold">
              Population: <span className="font-light">{population}</span>
            </li>
            <li className="text-xl font-bold">
              Region: <span className="font-light">{region}</span>
            </li>
            <li className="text-xl font-bold">
              Sub Region: <span className="font-light">{subregion}</span>
            </li>
            <li className="text-xl font-bold">
              Capital: <span className="font-light">{capital}</span>
            </li>
          </ul>
          <ul>
            <li className="text-xl font-bold">
              Top Level Domain: <span className="font-light">{tld}</span>
            </li>
            <li className="text-xl font-bold">
              Currencies: <span className="font-light">{currency}</span>
            </li>
            <li className="text-xl font-bold">
              Languages: <span className="font-light">{languagess}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-gray-900">
          <span className="text-xl text-gray-600">Border Countries:</span>
          {borders
            ? borders?.map((name: string) => (
                <div
                  className="rounded-md bg-white px-8 py-2 shadow"
                  key={name}
                >
                  {name}
                </div>
              ))
            : "None"}
        </div>
      </div>
    </div>
  );
}
