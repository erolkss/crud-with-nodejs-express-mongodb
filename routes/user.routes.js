import {Router} from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) =>
    res.send({title: 'GET all users'})
);
userRoutes.get('/:id', (req, res) =>
    res.send({title: 'GET user details'})
);
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
