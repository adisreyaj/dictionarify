import express from "express";
import { MainController } from "../controllers/main.controller";
export class MainRoute {
  public static register(app: express.Application) {
    app.route("/api/v1/health/").get(MainController.getHealthInfo);
    app.route("/api/v1/entries/:word").get(MainController.getEntries);
    app.route("/api/v1/search/:word").get(MainController.searchWord);
  }
}
