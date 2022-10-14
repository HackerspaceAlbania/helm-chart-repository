FROM node:16-alpine as base

FROM base as builder

WORKDIR /app

# Install dependencies
COPY ./package*json ./
RUN npm ci

# Copy code to container
COPY ./src ./src
COPY tsconfig.json ./
COPY tslint.json ./

# Build code
RUN npm run build

# Move on to clean container
FROM base as final

WORKDIR /app

# Install dependencies again and omit devDependencies
COPY --from=builder /app/package*json ./
RUN npm install --omit=dev

# Copy built code from builder
COPY --from=builder /app/dist ./dist

CMD [ "npm", "run", "start" ]
