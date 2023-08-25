import bcrypt from 'bcryptjs';

class HashHelper {

    /*===========================
    || 😎 @author: Henil Mehta 
    || 🚩 @uses: Hash password            
    || 🗓 @created: 25/08/2023 
    =============================*/
    async password(text:string) {

        try {
            
            const hashedText = await bcrypt.hashSync(text, 10);

            return hashedText;

        } catch (error) {
            
            throw error;

        }

    }

    /*===========================
    || 😎 @author: Henil Mehta 
    || 🚩 @uses: verify hased password            
    || 🗓 @created: 25/08/2023 
    =============================*/
    async verifyPassword(password:string, hashedPassword:string) {

        try {
            
            return bcrypt.compareSync(password, hashedPassword)
            
        } catch (error) {
            throw error;
        }

    }

}

export default new HashHelper();