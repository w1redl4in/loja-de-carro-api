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

export const alterar = async (req: Request, res: Response) => {
  const response = await UserService.alterar(req.params.id, req.body);
  return res.json(response);
};

export const apagar = async (req: Request, res: Response) => {
  const response = await UserService.apagar(req.params.id);
  return res.json(response);
};
