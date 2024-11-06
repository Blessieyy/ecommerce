import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();
app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Server Connected"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
