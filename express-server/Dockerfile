# Specify node image
FROM node:18

# Working directory of docker container
WORKDIR /app

# Get the package.json first to install dependencies
COPY package.json /app

# This will install those dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . /app

# Run the container
CMD ["npm", "start"]