import * as authController from "../controllers/authControllers.js";
import express from "express";

const authRoutes = express.Router();

authRoutes.post("/register", authController.registerStudent);

export default authRoutes;