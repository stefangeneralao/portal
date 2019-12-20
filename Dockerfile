FROM node:13-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 3006
CMD ["node", "server"]