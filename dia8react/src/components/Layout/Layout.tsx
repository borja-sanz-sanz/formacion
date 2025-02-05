import { Link, Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/characters-list"}>Characters List</Link>
        </li>
        <li>
          <Link to={"/planets-list"}>Planets list</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
