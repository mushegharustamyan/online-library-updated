import express from "express";

const router = express.Router();

import createMiddlewares from "../middlewares/books/create.js";

import { create } from "../controllers/books/create.js";
import showRecord from "../controllers/show.js";
import Book from "../db/Models/book.js";
import { verifyToken } from "../middlewares/auth/verifyToken.js";
import { verifyPermission } from "../middlewares/verifyPermission.js";

router.post(
  "/",
  verifyToken,
  verifyPermission("books", "create"),
  createMiddlewares.checkRequiredFields,
  create
);
router.get("/:id", showRecord(Book));

export default router;
