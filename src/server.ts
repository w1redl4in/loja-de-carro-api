/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from './app';

express.app.listen(3000, () => {
  console.log('Server running in port 3000');
});
