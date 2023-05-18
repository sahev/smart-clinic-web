FROM node:18-alpine as build-stage

RUN npm install -g serve

WORKDIR /app

COPY package*.json ./

RUN npm install -f

COPY . .

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

CMD serve -s dist