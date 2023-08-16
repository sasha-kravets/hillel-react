import { useCallback, useEffect, useMemo, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const abortController = useMemo(() => new AbortController(), []);

  const refetch = () => {
    getData();
  };

  const getData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, { signal: abortController.signal });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [url, abortController]);

  useEffect(() => {
    getData();

    return () => {
      abortController.abort();
    };
  }, [getData, abortController]);

  return [data, error, isLoading, refetch];
};

export default useFetch;
