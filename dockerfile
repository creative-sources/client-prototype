FROM node:14-slim

WORKDIR /CLIENT-PROTOTYPE/src

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

