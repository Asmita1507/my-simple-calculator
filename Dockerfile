FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (e.g., 3000 for a simple server, adjust if needed)
EXPOSE 3000

# Start the app (use a simple HTTP server or Node.js script)
CMD ["npx", "serve", "-s", "."]