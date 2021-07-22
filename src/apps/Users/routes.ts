import { Router } from 'express';

import 'express-async-errors';

import * as controller from './UserController';
import { validateCreate } from './validator';

const route = Router();

// GET - Pegar/Ler recursos da API
// POST - Gravar/Enviar dados na API
// PUT - Alterar dados existentes
// PATCH - Alterar dados existentes
// DELETE - Apaga/Remove dados

route.get('/', controller.list);
route.post('/', validateCreate, controller.create);
route.delete('/:id', controller.apagar);
route.put('/:id', controller.alterar);

export default route;
