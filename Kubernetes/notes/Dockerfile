FROM node:19.2-alpine3.16
WORKDIR /app
COPY  package.json ./
RUN npm install
COPY . .
EXPOSE  3000
CMD npm run dev

