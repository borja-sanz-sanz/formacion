import { useEffect, useState } from "react";
import { User } from "./types";
import { UserCard } from "./UserCard";

export const Users = () => {
  const [userList, setUserList] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://randomuser.me/api/?results=10"
        );
        const data = await response.json();
        setUserList(data.results);
        setIsLoading(false);
      } catch (error) {
        setErrors(true);
        console.log("error", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {userList?.map((user, index) => (
            <UserCard
              user={user}
              key={`user-${index}`}
            />
          ))}
        </>
      )}

      {errors && "Se ha producido un error de conexion vuelva a intentarlo"}
    </>
  );
};
