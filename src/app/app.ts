import express from "express";
import cors from "cors";
import routes from "./Routes";
import "reflect-metadata";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


export default app;
