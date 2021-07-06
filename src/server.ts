/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from './app';
import connection from './config/index';

connection.then((conn) => {
  express.app.listen(3000, () => {
    console.log('Server running in port 3000');
  });
});
