import { User } from "./useUsers";

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => (
  <div>
    <p>
      Nombre: {user.name.first} {user.name.last}
    </p>
    <p>Nombre: {user.email}</p>
  </div>
);
