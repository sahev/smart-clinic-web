FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -f

COPY . .

FROM nginx as production-stage
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir /app

RUN npm install -g serve

CMD serve -s dist