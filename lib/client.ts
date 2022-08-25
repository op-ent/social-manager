import {
  UserTimelineV1Paginator,
  TweetV2PostTweetResult,
} from "twitter-api-v2";
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
    timeline: async () => {
      const res = await request("/api/providers/twitter/timeline", {});
      const data = await res.json();
      return data as UserTimelineV1Paginator;
    },
  },
};
