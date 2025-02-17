"use client";

type ClientComponentProps = {
  name: string;
  surname: string;
  address: string;
  email: string;
};

export const ClientComponent = ({
  name,
  surname,
  address,
  email,
}: ClientComponentProps) => {
  return (
    <div>
      client component:
      <p>{name}</p>
      <p>{surname}</p>
      <p>{address}</p>
      <p>{email}</p>
    </div>
  );
};
