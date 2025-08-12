import mysql from "mysql2";

// Создаем подключение к базе данных MySQL
// Используем переменные окружения для конфиденциальной информации
const db = mysql.createConnection({
    host: 'db', // Имя сервиса из docker-compose.yml
    user: 'root', // Имя пользователя root
    password: process.env.MYSQL_ROOT_PASSWORD, // Пароль root пользователя из .env файла
    database: 'mydatabase', // Имя базы данных
});

db.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
    } else {
        console.log('Connected to the database');
    }
});

export default db; // Экспортируем подключение для использования в других файлах