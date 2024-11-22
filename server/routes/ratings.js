import express from "express";

const router = express.Router();

import { create } from "../controllers/ratings/create.js";
import { verifyToken } from "../middlewares/auth/verifyToken.js";
import verifyRecord from "../middlewares/verifyRecord.js";
import showRecord from "../controllers/show.js";
import Book from "../db/Models/book.js";
import Rating from "../db/Models/rating.js";

router.post("/:id/rate", [verifyToken, verifyRecord(Book)], create);
router.get("/rate/:id", showRecord(Rating));

export default router;
