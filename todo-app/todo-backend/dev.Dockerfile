FROM node:16

WORKDIR /usr/src/backend-dev

COPY . .

RUN npm install

# https://github.com/remy/nodemon#application-isnt-restarting
CMD ["npm", "run", "dev-docker"]