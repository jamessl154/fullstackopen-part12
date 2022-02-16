## part11 
https://fullstackopen.com/en/part12

### Containers

Learned about and how to work with containers using [Docker](https://www.docker.com/). Learned to use and applied [Docker-compose](https://docs.docker.com/compose/) to run multiple containers at the same time. ```todo-app``` and ```phonebook``` are web apps that I made containerized development and production environments for, using docker-compose and applying [best practices](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/) where possible. This included using [volumes](https://docs.docker.com/storage/volumes/), setting up and configuring [MongoDB](https://www.mongodb.com/) and [Redis](https://redis.io/) database services and an nginx [reverse proxy](https://www.nginx.com/resources/glossary/reverse-proxy-server/) server. Used the [multi-stage build](https://docs.docker.com/develop/develop-images/multistage-build/) functionality to add a testing step before building and serving the frontend as found in ```todo-app/todo-frontend/Dockerfile```.

- hello-front
   - Basic [CRA](https://create-react-app.dev/) hello world app. The Dockerfile creates an image that, when run, creates a container that serves the built app [using nginx](https://hub.docker.com/_/nginx).
- phonebook/todo-app
  - Phone directory/Todo app. Both frontends are built with CRA and the backends are built in Node with Express.