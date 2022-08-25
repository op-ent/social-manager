import { TweetV2PostTweetResult } from "twitter-api-v2";
import { request } from "~/utils/request";

export const client = {
  twitter: {
    tweet: async (text: string) => {
      const res = await request("/api/providers/twitter/tweet", {
        text,
      });
      const data = await res.json();
      return data as TweetV2PostTweetResult;
    },
  },
};
