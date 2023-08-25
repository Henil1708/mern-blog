import jwt from "jsonwebtoken";

class JwtHelper {

    /*===========================
    || 😎 @author: Henil Mehta 
    || 🚩 @uses: generate token            
    || 🗓 @created: 25/08/2023 
    =============================*/
    async generateToken(payload:any) {
        try {
            return jwt.sign(payload, "thisismykeyprivateone");
        } catch (error) {
            throw error;
        }
    }

    /*===========================
    || 😎 @author: Henil Mehta 
    || 🚩 @uses: verify token            
    || 🗓 @created: 25/08/2023 
    =============================*/
    async verifyToken (token:string) {
        try {
            
             

        } catch (error) {
            throw error;
        }
    }

}

export default new JwtHelper();