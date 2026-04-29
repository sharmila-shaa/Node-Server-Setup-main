import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

import reqLogger from "./config/logging/reqLogger.config.js";

import requestIdAssigner from "./middleware/requestID.middleware.js";
import setRequestContext from "./middleware/requestContext.middleware.js";

import { errorHandler, notFoundHandler } from "./handlers/errors.handler.js";

import indexRouter from "./routes/index.routes.js";

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(requestIdAssigner);
app.use(setRequestContext);
app.use(reqLogger);
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
