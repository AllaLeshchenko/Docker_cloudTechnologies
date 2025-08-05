# Используем официальный Node.js образ версии 18 slim
FROM node:18-slim

# Создаём рабочую директорию в контейнере
WORKDIR /usr/src/app

# Копируем package.json (и package-lock.json если есть) в рабочую директорию
COPY package*.json ./

# Устанавливаем только production зависимости (без devDependencies)
RUN npm install --only=production

# Копируем исходный код приложения
COPY app.js ./

# Указываем команду запуска приложения
CMD ["npm", "start"]