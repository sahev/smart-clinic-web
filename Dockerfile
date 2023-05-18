FROM node:18-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf