FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

# https://github.com/remy/nodemon#application-isnt-restarting
CMD ["npm", "run", "dev-docker"]