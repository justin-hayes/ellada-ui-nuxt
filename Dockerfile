ARG API_BASE_URL_ARG

FROM node:18-alpine AS base
ARG API_BASE_URL_ARG
ENV API_BASE_URL $API_BASE_URL_ARG

FROM base AS development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
USER node

FROM base AS build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build
ENV NODE_ENV production
USER node

FROM base AS production
COPY --chown=node:node --from=build /usr/src/app/.output ./.output
CMD ["node", ".output/server/index.mjs"]