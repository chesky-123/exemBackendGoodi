FROM node:22-alpine

WORKDIR  /app

COPY package*.json .

RUN nmp install

COPY . .

EXPOSE 3000

CMD [ "node","main.js" ]




