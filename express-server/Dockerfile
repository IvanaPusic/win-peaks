# Specify the image of your engine
FROM node:18

# The working directory inside your container
WORKDIR /app

COPY package.json /app

# This will install those dependencies
RUN npm install

# Copy the rest of the app to the working directory
COPY . /app

# Run the container
CMD ["npm", "start"]
