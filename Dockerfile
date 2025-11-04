# Use Node.js LTS version
FROM node:18.20.0-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Build the app (for production)
RUN npm run build

# Expose Vite preview port
EXPOSE 5173

# Default command: start the preview server with --host
CMD ["npm", "run", "preview", "--", "--host"]
