import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});

const MONGO_URL =
  "mongourl";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use('/', router);
