import express from "express";
import { Router } from "express";
import { checkEvenOdd } from "../controller/number.controller.js";

const numberRouter = Router();

// POST API
numberRouter.post("/check-number", checkEvenOdd);

export default numberRouter;