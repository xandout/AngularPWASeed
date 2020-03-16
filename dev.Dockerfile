FROM node:10-buster

ARG BUILD_VERSION=local
ARG environment_name=dev
ENV BUILD_MODE=development
ENV DOCKER_MODE=true

WORKDIR /build
COPY ./package.json ./package-lock.json /build/

RUN npm install 