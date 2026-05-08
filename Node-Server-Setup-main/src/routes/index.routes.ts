import { Router } from "express";
import { healthCheck, welcome } from "../controller/index.controller";
import numberRouter from "./number.routes";


const indexRouter = Router();

indexRouter.get("/", welcome);

indexRouter.get("/health", healthCheck);

indexRouter.use("/num" , numberRouter);


export default indexRouter;
