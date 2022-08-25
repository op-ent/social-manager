import { cleanEnv, str } from "envalid";

export const publicEnv = cleanEnv(process.env, {});

export const privateEnv = () =>
  cleanEnv(process.env, {
    PASSWORD: str(),
    TWITTER_API_KEY: str(),
    TWITTER_API_KEY_SECRET: str(),
    TWITTER_ACCESS_TOKEN: str(),
    TWITTER_ACCESS_TOKEN_SECRET: str(),
  });
