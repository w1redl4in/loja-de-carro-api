/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import connection from './config/index';

connection.then(() => {
  require('./app').default.app.listen(3000, () => console.log('Conectou'));
});
