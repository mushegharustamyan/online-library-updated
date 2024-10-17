import express from "express";

const router = express.Router();

import pingController from "../controllers/ping.js";

router.get("/ping", pingController);

export default router;
