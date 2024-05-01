import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import db from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();


db();


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
// const PORT = process.env.PORT || 8080;

//run listen
app.listen(5000, () => {
  console.log("Server Running on 5000");
});
