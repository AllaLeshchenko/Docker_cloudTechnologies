import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js"; // Import the database connection

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the public directory

app.get("/", (_req, res) => {
    res.send("Hello, World!");
});

app.post("/api/save", (req, res) => {
    db.query("INSERT INTO my_table (name) VALUES (?)", [req.body.name], (error, results) => {
        if (error) {
            console.error("Error inserting data: ", error);
            return res.status(500).send("Error inserting data");
        }
        res.status(200).send("Data inserted successfully");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});