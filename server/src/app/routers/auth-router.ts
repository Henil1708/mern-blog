import express from "express";
import auth from "../controller/auth";
const router = express();


router.post("/register", auth.register);
router.post("/login", auth.login);

export default router;
