import { createContext, useContext, useState } from "react";

const CountriesContext = createContext<any>(null);

export function CountriesProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <CountriesContext.Provider value={{ search, setSearch, region, setRegion }}>
      {children}
    </CountriesContext.Provider>
  );
}

export function useCountriesFilter() {
  return useContext(CountriesContext);
}
