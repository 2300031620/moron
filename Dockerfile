# ---- Step 1: Build the React app ----
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the production-ready static files
RUN npm run build


# ---- Step 2: Serve with a lightweight web server ----
FROM nginx:alpine

# Copy the React build output to Nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
