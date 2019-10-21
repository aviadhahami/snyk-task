FROM node:10-alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json package-lock.json ./
CMD npm install

COPY . ./

EXPOSE 3000

CMD npm run prod
