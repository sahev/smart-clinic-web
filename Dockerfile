FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY . .

CMD  npm run serve