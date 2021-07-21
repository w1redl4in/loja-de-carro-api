import { Request, Response } from 'express';
import CarService from './CarService';

export const create = async (req: Request, res: Response) => {
    const response = await CarService.create(req.body);
    return res.json(response);
  };

  export const list = async (_: Request, res: Response) => {
    const response = await CarService.findAll();
    return res.json(response);
  };

  export const alterar = async (req: Request, res: Response) => {
   const response = await CarService.alterar(req.params.id, req.body);
    return res.json(response);
 };
  
 export const apagar = async (req: Request, res: Response) => {
  const response = await CarService.apagar(req.params.id);
  return res.json(response);
};
