import { TwitterApi } from "twitter-api-v2";
import { privateEnv } from "~/lib/env";

const env = privateEnv();

export const createTwitterClient = () =>
  new TwitterApi({
    appKey: env.TWITTER_API_KEY,
    appSecret: env.TWITTER_API_KEY_SECRET,
    accessToken: env.TWITTER_ACCESS_TOKEN,
    accessSecret: env.TWITTER_ACCESS_TOKEN_SECRET,
  });
