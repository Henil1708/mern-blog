import {Request, NextFunction, Response} from "express";
import register from "../services/authServices/register";
import login from "../services/authServices/login";

class AuthController {
   
    /*===========================
    || 😎 @author: Henil Mehta 
    || 🚩 @uses: controller for user login            
    || 🗓 @created: 24/08/2023 
    =============================*/
    async login(req:Request, res:any, next:NextFunction){

        try {
            
            const container = {
                input:{
                    body: req.body
                },
                derived: {},
                output: {
                    message: ""
                }
            }

            await login(container);

            res.status(200).json(container.output);

        } catch (error:any) {
            console.log(JSON.stringify(error));
            
            res.status(error.status).json({...error, message: error.message});

        }

    }

    /*===========================
    || 😎 @author: Henil Mehta 
    || 🚩 @uses: User registeration             
    || 🗓 @created: 24/08/2023 
    =============================*/
    async register(req: Request, res: any, next: NextFunction){

        try {
            
            const container = {
                input:{
                    body: req.body
                },
                derived: {},
                output: {
                    message: ""
                }
            }

            await register(container);

            res.status(200).json(container.output);

        } catch (error:any) {

            res.status(error.status).json({...error, message: error.message});

        }

    }
    
}

export default new AuthController();