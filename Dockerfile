FROM node:latest

RUN npm install -g yarn

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build
