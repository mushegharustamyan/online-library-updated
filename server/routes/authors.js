import express from "express";

const router = express.Router();

import createMiddlewares from "../middlewares/author.js/create.js"

import { create } from "../controllers/authors/create.js";

router.post("/", createMiddlewares.checkRequiredFields ,create);

export default router;
