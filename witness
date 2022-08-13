FROM node:10 AS witness

COPY ./ /app 

WORKDIR /app

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "node", "index.js" ]