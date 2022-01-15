FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

# ENV scoped per build-stage https://github.com/moby/moby/issues/37345#issuecomment-400245466
FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

ENV REACT_APP_BACKEND_URL=http://localhost:3000/