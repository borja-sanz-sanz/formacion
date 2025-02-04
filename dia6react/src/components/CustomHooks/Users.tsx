import { UserCard } from "./UserCard";
import { useUsers } from "./useUsers";
import { useWindowWith } from "./useWindowWidth";

export const Users = () => {
  const { isLoading, usersList } = useUsers();

  const windowWidth = useWindowWith()

  return (
    <>
      <h1>Users list</h1>
      <p>{windowWidth}</p>
      {isLoading
        ? "Loading..."
        : usersList?.map((user, index) => (
            <UserCard key={`user-${index}`} user={user} />
          ))}
    </>
  );
};
