# Define Node.js version
ARG NODE_VERSION=16

# Define base image
FROM node:${NODE_VERSION}-alpine AS base

# Build stage
FROM base AS builder

WORKDIR /app

COPY package.json yarn.lock ./

# ENV NODE=production
RUN yarn install --production

COPY . .

# Runner stage
FROM base AS runner

WORKDIR /app

COPY --chown=node:node --from=builder /app .

EXPOSE ${PORT}
CMD [ "yarn", "start" ]
