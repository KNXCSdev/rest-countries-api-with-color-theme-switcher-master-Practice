import { useQuery } from "@tanstack/react-query";

async function fetchCountries(searchField?: string) {
  const url = `https://restcountries.com/v3.1/${searchField ? `name/${searchField}` : "all"}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}

export default function useCountries(searchField?: string) {
  return useQuery({
    queryKey: ["countries", searchField],
    queryFn: () => fetchCountries(searchField),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
