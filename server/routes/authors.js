import express from "express";

const router = express.Router();

import createMiddlewares from "../middlewares/author.js/create.js";

import { create } from "../controllers/authors/create.js";
import { show } from "../controllers/authors/show.js";

router.post("/", createMiddlewares.checkRequiredFields, create);
router.get("/:id", show);

export default router;
