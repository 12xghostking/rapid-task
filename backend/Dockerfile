FROM node:slim

# Install the file command
RUN apt-get update && apt-get install -y file

WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
