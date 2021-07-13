# Gera uma imagem do node:12-alpine para o container
FROM node:12-alpine

# Define nosso ambiente de trabalho, onde comandos RUN, CMD e COPY
# são executados
WORKDIR /app

# Roda os comandos abaixos para baixar pacotes necessários
RUN apk add --no-cache bash
RUN apk --no-cache add --virtual builds-deps build-base python

# Seto a variável de ambiente NODE_ENV como docker
# ENV NODE_ENV=docker

# Copia tudo que está no . para nosso WORKDIR
COPY . /app

# Expõe a porta 3333
EXPOSE 3333
