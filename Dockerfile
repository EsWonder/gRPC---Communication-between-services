# Imagen base ligera
FROM node:lts-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos
COPY . .

# Instalar dependencias
RUN npm install

# Exponer puerto gRPC
EXPOSE 50051

# Ejecutar el servidor
CMD ["node", "server.js"]
