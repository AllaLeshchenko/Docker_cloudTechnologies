import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (_, res) => {
    res.send('Main Page');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});