import { UserServer } from "./_components/UserServer";

export const revalidate = 30;

export default function PageIsr() {
  return <UserServer />;
}
