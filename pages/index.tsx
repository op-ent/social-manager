import { Button } from "flowbite-react";
import type { NextPage } from "next";
import React from "react";
import LoginButton from "~/components/LoginButton";

const Home: NextPage = () => {
  const [data, setData] = React.useState<object | undefined>(undefined);
  const onClick = async () => {
    const res = await fetch("/api/providers/twitter");
    const data = await res.json();
    setData(data);
  };
  return (
    <div>
      <LoginButton />
      <Button onClick={onClick}>Tweet</Button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Home;
