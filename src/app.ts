import express from "express";
import {Routes} from "@interfaces/routes.interface";
import {logger} from "@utils/logger";
import {NODE_ENV, PORT} from "@config";
import {DataSource} from "typeorm";
import {dbConnection} from "@/database";
import errorMiddleware from "@/middlewares/error.middleware";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 5000;

    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public async listen () {
    console.log(PORT);
    this.env !== 'test' && await App.connectToDatabase();
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.get(route.path, route.router);
    });
  }

  private static async connectToDatabase() {
    const dataSource = new DataSource(dbConnection);
    try {
      await dataSource.initialize();
      console.log(dataSource)
      console.log('Successfully Connected to DB');
    } catch (error: any) {
      throw new Error(`Couldn't connect to the DB: ${error}`);
    }
  }

  private initializeErrorHandling () {
    this.app.use(errorMiddleware);
  }
}

export default App;
