FROM node:16-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install -f

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=1024"

RUN npm run build; exit 0
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
