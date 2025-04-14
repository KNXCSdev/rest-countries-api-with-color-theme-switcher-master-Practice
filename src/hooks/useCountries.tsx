import { useEffect, useState } from "react";

export default function useCountries(searchField?: string) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/${searchField ? `name/${searchField}` : "all"}`,
        );
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        setCountries(data);
      } catch (err: unknown) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchField]);

  return { countries, loading, error };
}
