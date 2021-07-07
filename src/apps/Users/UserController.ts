import { Request, Response } from 'express';
import UserService from './UserService';

export const create = async (req: Request, res: Response) => {
  const response = await UserService.create(req.body);
  return res.json(response);
};

export const list = async (_: Request, res: Response) => {
  const response = await UserService.findAll();
  return res.json(response);
};

export const update = (_: Request, res: Response) => {
  return res.json({ user: 'created' });
};

export const remove = (_: Request, res: Response) => {
  return res.json({ user: 'created' });
};
