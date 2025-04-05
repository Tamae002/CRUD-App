import { users } from "../models/user.model.js";

const findUserId = (req, res, next) => {
    try {
        const { id } = req.params;
        
        const foundUser = users.find((user) => user.id === id)
        userWithId = foundUser
    
        if(!foundUser){
            const error = new Error('User not found')
            error.statusCode = 404
            throw error
        }
        
        next()
    } catch (error) {
        next(error)
    }
}

export let userWithId = {};
export default findUserId;