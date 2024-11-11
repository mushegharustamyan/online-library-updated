import express from "express";

const router = express.Router();

import { signUp } from "../controllers/auth/signUp.js";
import { signIn } from "../controllers/auth/signIn.js";

router.post("/signUp", signUp);
router.post("/signIn", signIn);

export default router;
