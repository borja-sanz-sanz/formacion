import { NavBar } from "@/components/NavBar";
import { UserList } from "@/components/UsersList/UserList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UsersSSGPage({ data }: { data: any[] }) {
  return (
    <>
      <NavBar />
      <UserList users={data} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  const users = data.results;

  return {
    props: {
      data: users,
    },
  };
}
