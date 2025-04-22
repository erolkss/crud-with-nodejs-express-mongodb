import {Router} from 'express';
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.get('/:id', authorize, getUser);
userRoutes.post('/', (req, res) =>
    res.send({title: 'Create new user'})
);
userRoutes.put('/:id', (req, res) =>
    res.send({title: 'UPDATE user by id'})
);
userRoutes.delete('/', (req, res) =>
    res.send({title: 'Delete user'})
);

export default userRoutes;
