import express from "express";

const router = express.Router();

import { create } from "../controllers/ratings/create.js";
import { verifyToken } from "../middlewares/auth/verifyToken.js";

router.post("/:id/rate", verifyToken , create);

export default router;
