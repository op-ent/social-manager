import { NextApiRequest, NextApiResponse } from "next";
import { privateEnv } from "~/lib/env";
import { TwitterApi } from "twitter-api-v2";

const env = privateEnv();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const client = new TwitterApi({
    appKey: env.TWITTER_API_KEY,
    appSecret: env.TWITTER_API_KEY_SECRET,
    accessToken: env.TWITTER_ACCESS_TOKEN,
    accessSecret: env.TWITTER_ACCESS_TOKEN_SECRET,
  });
  //   const data = await client.v1.tweet("Test tweet from Twitter API");
  const { data } = await client.v2.tweet("Test tweet from Twitter API");
  //   const { data } = await client.v2.userByUsername("LfbvrFlo");
  //   const data = await client.v1.user({
  //     screen_name: "LfbvrFlo",
  //   });
  //   const data = await client.v1.listDmEvents();
  res.status(200).json(data);
}
