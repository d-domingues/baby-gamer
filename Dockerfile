## Create the node stage with the name "builder"
#FROM node:latest as builder
## Set the working directory
#WORKDIR /app
## Copy files from current directory to working directory
#COPY . .
## Run npm install and build all assets
#RUN npm i && npm run ng build
## Create the nginx stage for serving content
#FROM nginx:alpine
## Set the working directory to nginx asset directory
#WORKDIR /usr/share/nginx/html
## Remove default nginx static assets
#RUN rm -rf ./*
## Copy static assets from builder stage
#COPY --from=builder /app/dist/{assets-dir} .
## Containers run nginx with global directives and daemon off
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:13-alpine as builder
WORKDIR /app
COPY package*.json /app/
RUN npm install -g ionic
RUN npm install
COPY ./ /app/
RUN npm run-script build
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/www/ /usr/share/nginx/html/