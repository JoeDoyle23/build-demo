FROM nodesource/nsolid:boron-alpine-latest

ENTRYPOINT ["node", "server"]

ENV NODE_ENV production
ENV PORT 5000
WORKDIR /app

EXPOSE $PORT

ADD package.json /app
RUN npm install --production

ADD . /app
