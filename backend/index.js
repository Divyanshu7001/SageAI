import express, { Router } from "express";
import "dotenv/config";
import http from "http";
import { Socket, Server } from "socket.io";
import app from "./app.js";
import { upload } from "./middlewares/multer.middleware.js";
import { dbConnection } from "./db/dbConnection.js";
import { verifyUser, verifyAdmin } from "./utils/auth.js";
import {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserDetails,
  logoutUser,
} from "./controllers/user.controller.js";
import {
  createAdmin,
  loginAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminDetails,
  logoutAdmin,
  getAllUsers,
  getAllNotifications,
} from "./controllers/admin.controller.js";
import { initializeSocket } from "./socket.js";
import cloudinary from "cloudinary";

const PORT = process.env.PORT;
const server = http.createServer(app);
const mainRouter = new Router();
const userRouter = new Router();
const adminRouter = new Router();

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
//Socket
const io = initializeSocket(server);

//Home Route
mainRouter.get("/", (req, res) => {
  console.log("Welcome to the App");
  res.sendFile("/public/index.html");
});

mainRouter.get("/testUpload", (req, res) => {
  res.sendFile("/public/fileupload.html");
});


//USER ROUTES
userRouter.post("/createUser", createUser);
userRouter.post("/loginUser", loginUser);
userRouter.post("/getUserDetails", verifyUser, getUserDetails);
userRouter.post("/logoutUser", verifyUser, logoutUser);
userRouter.post("/updateUser", verifyUser, updateUser);
userRouter.post("/deleteUser", verifyUser, deleteUser);

//ADMIN ROUTES
adminRouter.post("/createAdmin", createAdmin);
adminRouter.post("/loginAdmin", loginAdmin);
adminRouter.post("/getAdminDetails", verifyAdmin, getAdminDetails);
adminRouter.post("/logoutAdmin", verifyAdmin, logoutAdmin);
adminRouter.post("/updateAdmin", verifyAdmin, updateAdmin);
adminRouter.post("/deleteAdmin", verifyAdmin, deleteAdmin);
adminRouter.post("/getAllUsers", verifyAdmin, getAllUsers);
adminRouter.post("/getAllNotifications", verifyAdmin, getAllNotifications);

app.use("/v1/api/user", userRouter);
app.use("/v1/api/admin", adminRouter);

app.use(mainRouter);

server.listen(PORT, () => {
  console.log("Server connected to PORT:", PORT);
});

dbConnection();
export { io };
