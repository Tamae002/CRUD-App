import { Router } from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/user.controller.js";
import findUserId from "../middleware/find-user-id.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', findUserId, getUser);

userRouter.post('/', createUser);

userRouter.delete('/:id', findUserId, deleteUser);

userRouter.patch('/:id', findUserId, updateUser);

export default userRouter