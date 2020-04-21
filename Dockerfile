FROM node:alpine

WORKDIR /erp

COPY package*.json ./erp/
RUN yarn install
RUN npm install

COPY . /erp/


CMD ["yarn",  "start"]
