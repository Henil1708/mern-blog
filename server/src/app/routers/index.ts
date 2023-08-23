import express, { Request } from "express";
import auth from "./auth-router";

const router = express();

router.get("/", (req: Request, res:any)=>{

    res.redirect("/v1/ping");

})

router.get("/v1/ping", (req: Request, res: any) => {
    res.send("Welcome to Henil's Blog")
})

router.use("/auth", auth)

export default router; 