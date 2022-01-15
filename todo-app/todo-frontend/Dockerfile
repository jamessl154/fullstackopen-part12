FROM node:16 AS build-stage

WORKDIR /usr/src/app

ENV REACT_BACKEND_URL=3000

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html