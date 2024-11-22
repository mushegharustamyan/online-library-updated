import express from "express";

const router = express.Router();

import { create } from "../controllers/ratings/create.js";
import { verifyToken } from "../middlewares/auth/verifyToken.js";
import verifyRecord from "../middlewares/verifyRecord.js";
import Book from "../db/Models/book.js";

router.post("/:id/rate", [verifyToken, verifyRecord(Book)], create);

export default router;
