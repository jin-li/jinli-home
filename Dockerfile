# Use an official Node.js image to build the project
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the project for production
RUN yarn build

# Use a lightweight Node.js image to serve the static files
FROM node:18-slim

# Install a lightweight static file server
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/dist .

# Users can mount their runtime configuration here without rebuilding the image.
RUN mkdir -p /app/config

# Expose port 3000
EXPOSE 3000

# Start the static file server
CMD ["serve", "-s", ".", "-l", "3000"]
