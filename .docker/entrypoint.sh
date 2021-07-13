#!/bin/bash

yarn install
yarn build
export NODE_ENV="docker"
node dist/server.js
