import express from "express";
import { MainRoute } from "./routes/main.route";

export class App {
  app: express.Application;
  public route: any;

  constructor() {
    this.app = express();
    this.setupRoutes();
  }
  // Setup the Routes
  private setupRoutes() {
    this.route = new MainRoute();
    MainRoute.register(this.app);
  }
}
