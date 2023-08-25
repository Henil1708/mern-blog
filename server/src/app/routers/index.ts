import express, { Request } from "express";
import auth from "./auth-router";

const router = express();

router.get("/", (req: Request, res:any)=>{

    res.redirect("/v1/ping");

})

const commanPath = "/v1";

router.get(commanPath+"/ping", (req: Request, res: any) => {
    res.send("Welcome to Henil's Blog")
})

router.use(commanPath+"/auth", auth)

export default router; 