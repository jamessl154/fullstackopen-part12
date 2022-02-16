FROM node:16

WORKDIR /usr/src/backend-dev

COPY . .

RUN npm install

# https://github.com/remy/nodemon#application-isnt-restarting
# nodemon listens for files changes on which it will restart the app, synched to the host through volumes in docker-compose.dev.yml
CMD ["npm", "run", "dev-docker"]