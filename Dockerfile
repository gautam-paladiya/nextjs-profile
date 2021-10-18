FROM node:alpine

RUN mkdir -p /my-project

ENV PORT 3000

WORKDIR /my-project

COPY . /my-project
# COPY package.json /my-project

RUN npm install --production

RUN npm install --global pm2

RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
