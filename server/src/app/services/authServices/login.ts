import { StatusCodes } from "http-status-codes";
import User from "../../models/User";
import hashHelper from "../../helpers/hashHelper";
import jwt from 'jsonwebtoken';

const login = async (container:any) => {

    try {

        const {
            input:{
                body
            }
        } = container;
        
        const user = await User.findOne({email: body.email});
        
        if(!user){
            const error:any = new Error("Invalid email or password");
            error.status = StatusCodes.BAD_REQUEST;
            throw error;
        }

        const isPasswordMatched = await hashHelper.verifyPassword(body.password, user.password);
        
        if(!isPasswordMatched){
            const error:any = new Error("Invalid email or password");
            error.status = StatusCodes.BAD_REQUEST;
            throw error;
        }

        container.output.data = {token:jwt.sign({
            id: user._id
        }, "thisismykeyprivateone")}

        container.output.message = "User Signed in successfully"

    } catch (error:any) {
        if(!error.status){
            error.status = StatusCodes.INTERNAL_SERVER_ERROR;
        }
        throw error;
    }

}

export default login;