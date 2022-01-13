FROM node:lts-alpine@sha256:2f50f4a428f8b5280817c9d4d896dbee03f072e93f4e0c70b90cc84bd1fcfe0d

# principle of least privelege
USER node

WORKDIR /usr/src/app

# transfer, using chown that changes ownership of files, files that belong to root to node
COPY --chown=node:node . .
# . . copy all in base directory (of Dockerfile) into into WORKDIR in container
RUN npm ci --only-production
# ci builds from the package.json.lockfile for a determinstic install, dont need devDependecies
ENV DEBUG=directory:* NODE_ENV=production
# some packages/frameworks/libraries only optimize config when NODE_ENV is production like expressJS
CMD npm start

# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/