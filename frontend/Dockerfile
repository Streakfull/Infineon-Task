FROM node:16 AS build

WORKDIR /app

ARG VITE_BASE_URL
ENV VITE_BASE_URL=${VITE_BASE_URL}

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]