FROM node:12-alpine

WORKDIR /app
RUN apk add --no-cache bash
RUN apk --no-cache add --virtual builds-deps build-base python

ENV NODE_ENV=docker

COPY . /app

RUN yarn global add pm2

EXPOSE 3333
