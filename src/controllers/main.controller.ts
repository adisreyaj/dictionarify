import { Request, Response } from "express";
import * as fetch from "request";
const OXFORD_URL = `https://od-api.oxforddictionaries.com/api/v2`;
const headers = {
  app_id: "1808f678",
  app_key: "2e40afe53c085594f31193bee648ed12"
};
export class MainController {
  public static getHealthInfo(_req: Request, res: Response) {
    res.status(200).json({ status: "up" });
  }
  public static async getEntries(req: Request, res: Response) {
    const word = req.params.word;
    await fetch.get(
      `${OXFORD_URL}/entries/en-gb/${word}`,
      {
        headers: headers
      },
      (err: any, data: any) => {
        res.status(200).json(JSON.parse(data.body));
      }
    );
  }
}
