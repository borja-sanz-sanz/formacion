import styles from "@/components/UsersList/UserList.module.css";

type UserListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any[] | undefined;
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <>
      {users &&
        users.map((user, index) => {
          return (
            <div key={`user-${index}`} className={styles.userItem}>
              <div>
                Nombre:{" "}
                {`${user.name.title} - ${user.name.first} ${user.name.last}`}
              </div>
              <div>Email: {user.email}</div>
              <div>Edad: {user.dob.age}</div>
              <div>Genero: {user.gender}</div>
            </div>
          );
        })}
    </>
  );
};
