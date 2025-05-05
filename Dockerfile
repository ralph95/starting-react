# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Expose port used by React dev server
EXPOSE 80

# Start the React app
CMD ["npm", "start"]
