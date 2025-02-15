const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const { cloudinaryconnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

//database connect
database.connectDB();

//middlewares
app.use(express.json());
app.use(cookieParser());

const whitelist = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",") // Convert comma-separated string to an array
  : ["*"];

app.use(
  cors({
    origin: whitelist,
    credentials: true,
    maxAge: 14400,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//cloudinary connection
cloudinaryconnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);

app.use("/api/v1/contact", require("./routes/ContactUs"));

//def route

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
