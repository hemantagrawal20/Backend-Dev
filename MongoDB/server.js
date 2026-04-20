import connectDb from "./config/db.js";
import dotenv from "dotenv";
import express from "express"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
connectDb();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());


app.use("/api", userRoutes);
app.use("/api/auth", authRoutes)


app.listen(port,()=>{
    console.log("Server is running on port ",port)
})