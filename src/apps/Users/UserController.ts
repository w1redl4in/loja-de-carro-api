import { Request, Response } from 'express';

export const create = (_: Request, res: Response) => {
  return res.json({ user: 'created' });

  // acessa banco
};

export const list = (_: Request, res: Response) => {
  return res.json({ user: 'created' });
};

export const update = (_: Request, res: Response) => {
  return res.json({ user: 'created' });
};

export const remove = (_: Request, res: Response) => {
  return res.json({ user: 'created' });
};
