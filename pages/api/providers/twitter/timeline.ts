import { NextApiRequest, NextApiResponse } from "next";
import { createTwitterClient } from "~/utils/providers";
import { privateEnv } from "~/lib/env";

const env = privateEnv();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const client = createTwitterClient();
  const data = await client.v1.userTimelineByUsername(
    env.NEXT_PUBLIC_TWITTER_USERNAME
  );
  res.status(200).json(data);
}

//   const data = await client.v1.tweet("Test tweet from Twitter API");
//   const { data } = await client.v2.userByUsername("LfbvrFlo");
//   const data = await client.v1.user({
//     screen_name: "LfbvrFlo",
//   });
//   const data = await client.v1.listDmEvents();
