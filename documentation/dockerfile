FROM node:10.16.0-alpine as client-build
WORKDIR /app
COPY  /documentation .

# Install Git
RUN apk update
RUN apk add git

RUN rm -rf node_modules package-lock.json yarn.lock
RUN npm install --no-optional
RUN npm run build

