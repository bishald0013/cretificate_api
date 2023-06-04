import express from "express";
import connectDB from './config/config.js';
import route from "./routes/routes.js"
import dotenv from "dotenv";
dotenv.config()

const app = express();
const port = 8000;

connectDB()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.json());

app.use('/api', route)

app.listen(port, () => {
    console.log('Server listening on port ' + process.env.PORT);
});