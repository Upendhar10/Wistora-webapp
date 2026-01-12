import express from "express";
import { getVideoDataById } from "../controllers/watch.controller.js";

const router = express.Router();

router.get("/", getVideoDataById);

export default router;
