FROM node:current-slim

WORKDIR /src

COPY package.json .

RUN npm install

EXPOSE 30010

CMD node app.js

COPY . .