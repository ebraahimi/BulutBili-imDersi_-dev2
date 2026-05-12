# Aşama 1: React Uygulamasını Derleme (Build Stage)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Aşama 2: Nginx ile Yayınlama (Production Stage)
FROM nginx:alpine
# Derlenen (build) dosyaları Nginx'in otomatik yayın klasörüne kopyala
COPY --from=build /app/dist /usr/share/nginx/html
# Nginx varsayılan olarak 80 portunda çalışır
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
