FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


ENV NODE_ENV=production

EXPOSE 8000


CMD ["npm", "run", "start"]