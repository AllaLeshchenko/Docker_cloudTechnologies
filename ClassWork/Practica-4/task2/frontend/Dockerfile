# Используем официальный образ node.js
FROM node:23-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package*.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .
# Собираем проект
RUN npm run build
# Открываем порт для backend сервиса
EXPOSE 5173
# Запускаем приложение с ожиданием базы данных
CMD ["npm", "run", "preview" ]