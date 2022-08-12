FROM node:10 AS witness

COPY ./ /app 

WORKDIR /app

ENTRYPOINT [ "sh", "-c", "'npm install && node index.js'" ]