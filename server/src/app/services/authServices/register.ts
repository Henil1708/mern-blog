import { StatusCodes } from "http-status-codes";
import User from "../../models/User";
import hashHelper from "../../helpers/hashHelper";



const register = async (container:any) => {

    try {
        
        const {
            input:{
                body
            }
        } = container;

        const user =await User.findOne({email: body.email});

        if(user){
            const error:any = new Error("User exists with this email")
            error.status = StatusCodes.BAD_REQUEST;
            throw error;
        }

        // hash the password for security purpose
        const hashedPassword:string = await hashHelper.password(body.password);

        const userDetails = new User({
            email: body.email,
            password: hashedPassword,
            firstname: body.firstname,
            lastname: body.lastname ? body.lastname : ''
        });

        await userDetails.save();

        container.output.message = "User registered successfully"

    } catch (error) {
        
        throw error;

    }

}



export default register;