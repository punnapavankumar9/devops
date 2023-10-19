FROM node:slim

WORKDIR /usr/app/

COPY package*.json .

RUN npm install && npm cache clean --force \ 
    && npm install -g typescript

COPY . .

RUN tsc 

EXPOSE 80


CMD [ "node", "dist/app.js" ]