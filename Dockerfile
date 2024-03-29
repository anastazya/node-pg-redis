FROM node:10 AS witness

COPY ./ /app 

WORKDIR /app

RUN npm install

EXPOSE 8080
CMD [ "node", "index.js" ]