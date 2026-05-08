import { Request, Response } from "express";

import CONFIG from "../config/index.config";

export const welcome = (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: `Welcome to the ${CONFIG.SERVICE_NAME || "Node"} server`
  });
};

export const healthCheck = (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Server is healthy"
  });
};
