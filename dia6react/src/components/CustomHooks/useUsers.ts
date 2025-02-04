import { useEffect, useState } from "react";

export type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
};

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [usersList, setUsersList] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setUsersList(data.results);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUsers();
  }, []);

  return { isLoading, usersList };
};
