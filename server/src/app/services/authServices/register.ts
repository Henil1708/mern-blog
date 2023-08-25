import { StatusCodes } from "http-status-codes";
import User from "../../models/User";



const register = async (container:any) => {

    try {
        
        const {
            input:{
                body: {
                    email,
                    password,
                    name
                }
            }
        } = container;

        const user =await User.findOne({email});

        if(user){

            const error:any = new Error("User exists with this email")
            error.status = StatusCodes.BAD_REQUEST;
            throw error;

        }

        const userDetails = new User({
            email,
            password,
            name
        });

        await userDetails.save();

        container.output.message = "User registered successfully"

    } catch (error) {
        
        throw error;

    }

}



export default register;