import express from "express";
import cors from "cors";
import { NODE_ENV, PORT } from "@config";

export class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor() {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = PORT || 3000;

        this.initializeMiddlewares();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`=================================`);
            console.log(`======= ENV: ${this.env} =======`);
            console.log(`App listening on the port ${this.port}`);
            console.log(`=================================`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
}
