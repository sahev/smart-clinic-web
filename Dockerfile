FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -f

RUN npm install -g serve

COPY . .

FROM nginx as production-stage
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir /app
CMD serve -s dist