FROM node:14.17.3

WORKDIR /backend

COPY . /backend

EXPOSE 3001

RUN npm install
RUN npm i express pg knex

CMD npm start