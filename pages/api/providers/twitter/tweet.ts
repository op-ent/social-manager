import { NextApiRequest, NextApiResponse } from "next";
import { object, string } from "yup";
import { createTwitterClient } from "~/utils/providers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const client = createTwitterClient();
  const schema = object({
    text: string().required(),
  });
  const { text } = await schema.validate(req.query);
  const { data } = await client.v2.tweet(text);
  res.status(200).json(data);
}

//   const data = await client.v1.tweet("Test tweet from Twitter API");
//   const { data } = await client.v2.userByUsername("LfbvrFlo");
//   const data = await client.v1.user({
//     screen_name: "LfbvrFlo",
//   });
//   const data = await client.v1.listDmEvents();
