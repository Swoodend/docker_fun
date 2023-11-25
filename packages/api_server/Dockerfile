FROM node:lts-alpine
WORKDIR /usr/api_server

COPY server.ts ./
COPY tsconfig.json ./
COPY package.json ./

RUN yarn install --frozen-lockfile
RUN yarn build

CMD ["yarn", "start"]
