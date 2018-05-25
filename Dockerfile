FROM node:8.9-alpine
LABEL Maintainer="Vladimir Ovsyukov <vovansuper@mail.ru>"
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
# EXPOSE 3000 3306
CMD ["npm", "start"]