FROM node:10
RUN mkdir -p /aws
WORKDIR /aws
COPY package.json /aws
COPY client /aws/client
COPY public /aws/public
COPY server /aws/server
COPY webpack.config.js /aws
COPY babel.config.js /aws
RUN npm install
EXPOSE 5001
CMD [ "npm", "start"]