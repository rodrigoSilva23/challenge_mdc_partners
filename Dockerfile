FROM node:18.16-alpine

WORKDIR /home/node/app
COPY . .
RUN yarn install

USER node

CMD ["/home/node/app/.docker/command.sh"]




