FROM node:16.13.0
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
ENTRYPOINT [ "node", "app.js"]