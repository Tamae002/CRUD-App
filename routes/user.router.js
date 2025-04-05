import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {res.send({ message: 'GET all user data' })})

export default userRouter