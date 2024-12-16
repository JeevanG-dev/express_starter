import express from "express";
import { PORT } from "./config/serverConfig.js";
import { connectDB } from "./config/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";
import authRoute from './routes/authRoute.js'
import cookieParser from "cookie-parser";
import { isLoggedIn } from "./validation/authValidation.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(cookieParser())


app.use("/users", userRoutes);
app.use('/auth', authRoute)



app.get("/ping", isLoggedIn, (req, res) => {
 console.log(req.cookies);
 
  return res.json({
    message: "pinged",
  });
});

// 98.5.12.6:5500 -> socket address
app.listen(PORT, async () => {
  await connectDB();
  console.log("Listerning to", PORT);


});
