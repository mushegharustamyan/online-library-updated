import express from "express";

const router = express.Router();

import createMiddlewares from "../middlewares/author.js/create.js";

import { create } from "../controllers/authors/create.js";
import showRecord from "../controllers/show.js";
import Author from "../db/Models/author.js";

router.post("/", createMiddlewares.checkRequiredFields, create);
router.get("/:id", showRecord(Author));

export default router;
