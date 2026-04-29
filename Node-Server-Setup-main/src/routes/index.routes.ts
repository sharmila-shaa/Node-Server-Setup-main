import { Router } from "express";
import { healthCheck, welcome } from "../controller/index.controller.js";

const indexRouter = Router();

indexRouter.get("/", welcome);

indexRouter.get("/health", healthCheck);

export default indexRouter;
