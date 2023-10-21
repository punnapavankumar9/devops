FROM node:slim

WORKDIR /usr/app/

COPY package*.json .

RUN npm install && npm cache clean --force 

COPY . .
ENTRYPOINT [ "node", "src/app.js"]

EXPOSE 80

CMD [ "--color=green" ]