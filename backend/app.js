import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
const app = new express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.static(path.resolve("public")));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);

export default app;
