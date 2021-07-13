#!/bin/bash

# Baixa todas as dependências do projeto
yarn install

# Gera o build da API (transpila tudo para .js)
yarn build

# Seto a variável com docker
export NODE_ENV="docker"

# Rodo a API apartir do build gerado, deveria usar pm2?
node dist/server.js
