import { Request, Response } from 'express';

import {
  signupService,
  loginService,
} from '../services/auth.service';

export const signup = async (
  req: Request,
  res: Response
) => {

  try {

    const { username, email, password } = req.body;

    const user = await signupService(
      username,
      email,
      password
    );

    res.json(user);

  } catch (error: any) {

    res.status(500).json({
      error: error.message,
    });

  }
};

export const login = async (
  req: Request,
  res: Response
) => {

  try {

    const { email, password } = req.body;

    const data = await loginService(
      email,
      password
    );

    res.json(data);

  } catch (error: any) {

    res.status(500).json({
      error: error.message,
    });

  }
};