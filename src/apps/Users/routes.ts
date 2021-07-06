import { Router } from 'express';

import * as controller from './UserController';

const route = Router();

// GET - Pegar/Ler recursos da API
// POST - Gravar/Enviar dados na API
// PUT - Alterar dados existentes
// PATCH - Alterar dados existentes
// DELETE - Apaga/Remove dados

// route.get('/', controller.list);
// route.get('/:id', controller.findOne);
route.get('/', controller.create);
// route.put('/', controller.update);
// route.delete('/', controller.deleteOne);

export default route;
