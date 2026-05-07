import { Router } from "express";
import { healthCheck, welcome } from "../controller/index.controller.js";
import numberRouter from "./number.routes.js";


const indexRouter = Router();

indexRouter.get("/", welcome);

indexRouter.get("/health", healthCheck);

indexRouter.use("/num" , numberRouter);

export default indexRouter;
