FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

# multi-stage build
FROM nginx:1.20-alpine

# copies build/ directory in /usr/src (from build-stage) to /usr/share/nginx/html
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
# New stage strips everything except what is in COPY