import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import connectDB from "./utils/db.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js";



dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/users", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

