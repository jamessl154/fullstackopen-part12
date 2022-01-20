FROM node:16 as install-deps-and-test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm test -- Todo.test.js

# https://docs.docker.com/develop/develop-images/multistage-build/#use-a-previous-stage-as-a-new-stage
FROM install-deps-and-test-stage AS build-stage

WORKDIR /usr/src/app

COPY . .

# ENV scoped per build-stage https://github.com/moby/moby/issues/37345#issuecomment-400245466
# before the build step https://create-react-app.dev/docs/adding-custom-environment-variables/
# ENV is read during build and embedded into the build
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
# on topic: https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/

RUN npm run build

FROM nginx:1.20.1

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html