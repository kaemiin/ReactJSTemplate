FROM node:9

# Create app directory
WORKDIR /usr/src/app

RUN mkdir ./build

COPY package.json .
COPY ./build/ ./build/
COPY .env.production .
COPY server.js .

RUN npm install express
RUN npm install path

EXPOSE 3000

RUN echo "Start Web Server"

CMD [ "node", "server.js" ]
