import {Schema, model} from "mongoose";

const userSchema  = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

export default model('User', userSchema);