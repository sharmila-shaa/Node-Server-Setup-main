import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../types/AppError.js";

export const validateInput =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      throw new AppError(e.message, 400);
    }
  };
