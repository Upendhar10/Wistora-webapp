import { Router } from "express";
import { getSearchVideos } from "../controllers/search.controller.js";

const router = Router();

router.get('/', getSearchVideos);

export default router;