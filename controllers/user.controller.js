import { users } from "../models/user.model.js";
import { v4 as uuidv4 } from "uuid";
import { userWithId } from "../middleware/find-user-id.middleware.js";

export const getUsers = (req, res, next) => {
    try {
        res.status(200).json({
             success: true,
             message: 'fetch all user data',
             users: users
             })
    } catch (error) {
        next(error)
    }
}

export const getUser = (req, res, next) => {
    try {
        const { id }= req.params;

        res.status(200).json({
            success: true,
            message: 'Found user data',
            data: userWithId
        })
    } catch (error) {
        next(error)
    }
}

export const createUser = (req, res, next) => {
    try {
        const user = req.body;
        const userData = { ...user, id: uuidv4()};

        users.push(userData);

        res.status(200).json({
            success: true,
            message: 'Succesfully create an account',
            data: userData
        })
    } catch (error) {
        next(error)
    }
}

export const deleteUser = (req, res, next) => {
    try {
        users.pop(userWithId)

        res.status(200).json({ 
            success: true,
            message: `Successfully delete user with username: ${userWithId.name}`
        })
    } catch (error) {
        next(error)
    }
}

export const updateUser = (req, res, next) => {
    try {
        const { name, email, age } = req.body

        if(name) userWithId.name = name
        if(email) userWithId.email = email
        if(age) userWithId.age = age

        res.status(200).json({
            success: true,
            message: 'Succesfully update user data',
            data: userWithId
        })
    } catch (error) {
        next(error)
    }
}