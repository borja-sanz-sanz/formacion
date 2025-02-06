"use client";

import { useEffect, useState } from "react";

export const ClientComponent = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://dragonball-api.com/api/characters"
        );
        const data = await response.json();
        console.log("client component");
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return <>{!isLoading ? JSON.stringify(data) : null}</>;
};
