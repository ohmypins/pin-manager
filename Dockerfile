# Define Node.js version
ARG NODE_VERSION=16

# Define base image
FROM node:${NODE_VERSION}-alpine AS base

# Build stage
FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Runner stage
FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production

COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN chown -R node:node /app/node_modules

COPY --chown=node:node --from=builder /app/build .
COPY --chown=node:node --from=builder /app/public ./public

USER node
EXPOSE ${PORT}

CMD [ "yarn", "start" ]
