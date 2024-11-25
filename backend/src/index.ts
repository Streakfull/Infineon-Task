// src/index.ts
import express, { Express } from "express";
import mongooseConnect from "./db";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import companies from "./routes/companies";
import handleDBError from "./middleware/errorHandler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
mongooseConnect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/companies", companies);

//@ts-ignore
app.use(handleDBError);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
