FROM node:20

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
RUN npx prisma generate
# based on https://notiz.dev/blog/prisma-migrate-deploy-with-docker
CMD [  "npm", "run", "start:migrate:prod" ]
