import { cleanEnv, str } from "envalid";

export const publicEnv = cleanEnv(process.env, {});

export const privateEnv = () =>
  cleanEnv(process.env, {
    PASSWORD: str(),
    TWITTER_ACCESS_TOKEN: str(),
  });
