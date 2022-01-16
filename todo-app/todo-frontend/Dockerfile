FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

# ENV scoped per build-stage https://github.com/moby/moby/issues/37345#issuecomment-400245466
# before the build step https://create-react-app.dev/docs/adding-custom-environment-variables/
# ENV is read during build and embedded into the build
ENV REACT_APP_BACKEND_URL=http://localhost:3000/
# on topic: https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/
RUN npm ci

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html