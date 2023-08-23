import {Request, NextFunction} from "express";

class AuthController {
   
    async login (req: Response, res: any, next: NextFunction){

        try {
            
            res.send("Hello there")

        } catch (error) {
            
            throw error;

        }

    }
    
}

export default new AuthController();