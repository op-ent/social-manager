import type { NextPage } from "next";
import React from "react";
import { client } from "~/lib/client";

const Home: NextPage = () => {
  const [data, setData] = React.useState<any>(undefined);
  const onClick = async () => {
    // const data = await client.twitter.tweet("Hello World!");
    const data = await client.twitter.timeline();
    setData(data);
  };
  return (
    <div>
      <button onClick={onClick}>Tweet</button>
      {data && (
        <pre>
          {JSON.stringify(
            (data._realData as any[]).map((x) => x.full_text),
            null,
            2
          )}
        </pre>
      )}
    </div>
  );
};

export default Home;
