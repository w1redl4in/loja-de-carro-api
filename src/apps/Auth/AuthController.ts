import { Request, Response } from 'express';
import AuthService from './AuthService';

export const auth = async (req: Request, res: Response) => {
  const response = await AuthService.auth(req.body);
  return res.json(response);
};

export const verifyToken = async (req: Request, res: Response) => {
  const response = await AuthService.verifyToken(req.body);
  return res.json(response);
};
