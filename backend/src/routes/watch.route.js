import express from "express";
import { getVideoById } from "../controllers/watch.controller.js";

const router = express.Router();

router.get("/", getVideoById);

export default router;
