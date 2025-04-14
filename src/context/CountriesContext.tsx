import { createContext, useContext, useState } from "react";

interface CountriesContextType {
  search: string;
  setSearch: (e: string) => void;
  region: string;
  setRegion: (e: string) => void;
}

const CountriesContext = createContext<CountriesContextType | undefined>(
  undefined,
);

function CountriesProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  return (
    <CountriesContext.Provider value={{ search, setSearch, region, setRegion }}>
      {children}
    </CountriesContext.Provider>
  );
}

function useCountriesFilter() {
  const context = useContext(CountriesContext);

  if (!context) {
    throw new Error(
      "useCountriesFilter must be used within a CountriesProvider",
    );
  }

  return context;
}

export { CountriesProvider, useCountriesFilter };
