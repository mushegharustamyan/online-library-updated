import express from "express";

const router = express.Router();

import { create } from "../controllers/ratings/create.js";

router.post("/", create);

export default router;
