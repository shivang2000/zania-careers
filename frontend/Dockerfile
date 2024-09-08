FROM node:18.20.4-alpine3.20

WORKDIR /frontend

# copy content of packaage.json  to /frontend
COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

# install dependencies
RUN npm install

# 
RUN ls

RUN mkdir  node_modules/.cache && chmod -R 777 node_modules/.cache

# copy content of frontend folder to /frontend
COPY . /frontend

EXPOSE 3000

CMD [ "npm", "start" ]