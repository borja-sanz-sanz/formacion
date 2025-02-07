export const UserServer = async () => {
  const response = await fetch("https://randomuser.me/api/?results=5");
  const data = await response.json();

  return <>{JSON.stringify(data)}</>;
};
