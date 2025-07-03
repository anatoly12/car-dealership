# Use Node 18
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose port (use the port in your app.js, usually 5000)
EXPOSE 8888

# Start the app
CMD ["node", "app.js"]
