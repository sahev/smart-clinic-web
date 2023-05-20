FROM node:16-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install popper.js@1.16.1 -g

RUN npm install core-js@2.5.7 -g

RUN npm install -f

COPY ./ .

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
