FROM node:16

WORKDIR /usr/src/frontend-dev

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm start is the command to start the CRA app in development mode,
# it will start a webpack-dev-server and listen for file changes that we are syncing
# to the host through volumes in docker-compose.dev.yml, i.e. files open in our code editor, and trigger hot reloads.
CMD ["npm", "start"]