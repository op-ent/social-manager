import type { NextPage } from "next";
import React from "react";
import { client } from "~/lib/client";

const Home: NextPage = () => {
  const [data, setData] = React.useState<object | undefined>(undefined);
  const onClick = async () => {
    const tweet = await client.twitter.tweet("Hello World!");
    setData(tweet);
  };
  return (
    <div>
      <button onClick={onClick}>Tweet</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Home;
