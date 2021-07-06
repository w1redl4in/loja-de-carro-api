import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

import routes from './routes';

import { ErrorHandler } from 'express-handler-errors';

import 'reflect-metadata';

class App {
  public readonly app: Application;

  constructor() {
    this.app = express();
    this.errorHandle();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private errorHandle(): void {
    this.app.use(
      (err: Error, _: Request, res: Response, next: NextFunction) => {
        new ErrorHandler().handle(err, res, next);
      }
    );
  }

  private routes(): void {
    this.app.use('/carshop', routes);
  }
}

export default new App();
