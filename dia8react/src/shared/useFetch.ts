import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>(url: string, list = true) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(list ? (data.items as T) : (data as T) );
      setIsLoading(false)
    } catch (e) {
      console.error(e);
      setHasErrors(true);
    }
  }, [url, list]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, hasErrors };
};
