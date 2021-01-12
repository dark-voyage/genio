import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    name: process.env.DATOCMS_READ_ONLY_API_TOKEN
  });
}
