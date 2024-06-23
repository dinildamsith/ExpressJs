import express, { Request, Response } from 'express';
import UserController from "./controllers/UserController";
import mongoose from "./config/mongoose";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

mongoose.connect("mongodb://localhost:27017/partice-db");

app.use("/api",UserController);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
