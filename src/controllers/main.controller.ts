import { Request, Response } from "express";
import * as fetch from "request";
const OXFORD_URL = `https://od-api.oxforddictionaries.com:443/api/v2`;
const headers = {
  app_id: "c2e7b1fe",
  // app_id: "1808f678",
  // app_key: "2e40afe53c085594f31193bee648ed12",
  app_key: "c36dcd311d964bfd7041f090522ec733",
  Accept: "application/json"
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
        let result;
        try {
          result = JSON.parse(data.body);
        } catch (e) {
          res.status(500).json({ err: e });
        }
        res.status(200).json(result);
      }
    );
  }

  public static async searchWord(req: Request, res: Response) {
    const word = req.params.word;
    console.log(word);
    await fetch.get(
      `${OXFORD_URL}/search/en-gb/?q=${word}`,
      {
        headers: headers
      },
      (err: any, data: any) => {
        if (err) {
          res.status(500).json({ err: "Something Went Wrong" });
        }
        let result;
        try {
          result = JSON.parse(data.body);
        } catch (e) {
          res.status(500).json({ err: "Something Went Wrong" });
        }
        res.status(200).json(result);
      }
    );
  }
}
