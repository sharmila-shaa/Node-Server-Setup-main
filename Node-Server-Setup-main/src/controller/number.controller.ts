import { Request, Response } from "express";

export const checkEvenOdd = (req: Request, res: Response) => {

  // safe fallback
  const number = req.body.number;

  // validation
  if (number === undefined) {
    return res.status(400).json({
      success: false,
      message: "Number is required"
    });
  }

  // even or odd logic
  if (number % 2 === 0) {
    return res.json({
      success: true,
      number,
      result: "Even"
    });
  }

  return res.json({
    success: true,
    number,
    result: "Odd"
  });
};