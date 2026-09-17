FROM node:20-alpine 

WORKDIR /app 

COPY . . 

RUN npm install 

RUN npm run build --workspace=server

EXPOSE 3000 

CMD ["node", "server/dist/index.js"]

