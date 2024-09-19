import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;
const AUTH_ROUTES = "/api/auth";

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 ,
  methods:['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://localhost:3001");
//   res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-type",'Authorization');
//   res.header("Access-Control-Max-Age", "86400");
//   next();
// });

app.options('*',cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 ,
  methods:['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}
) );
app.use(cookieParser());

app.use(express.json());

app.use(AUTH_ROUTES, authRoutes);

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(databaseURL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.log(err.message));
