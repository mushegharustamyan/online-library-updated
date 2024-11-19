import express from "express";

const router = express.Router();

import createMiddlewares from "../middlewares/books.js/create.js"

import { create } from "../controllers/books/create.js";

router.post("/", createMiddlewares.checkRequiredFields , create);

export default router;
