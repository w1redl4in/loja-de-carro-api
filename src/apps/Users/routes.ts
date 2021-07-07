import { Router } from 'express';

import * as controller from './UserController';

const route = Router();

// GET - Pegar/Ler recursos da API
// POST - Gravar/Enviar dados na API
// PUT - Alterar dados existentes
// PATCH - Alterar dados existentes
// DELETE - Apaga/Remove dados

route.get('/', controller.list);
route.post('/', controller.create);
route.delete('/:id', controller.apagar);
route.put('/:id', controller.alterar);
// route.get('/:id', controller.findOne);
// route.put('/', controller.update);
// route.delete('/', controller.deleteOne);

export default route;
