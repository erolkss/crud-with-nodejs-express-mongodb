import express from 'express';

import {PORT} from './config/env.js';

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import connectToDataBase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Hello Changed dasdsasdas');
});

app.listen(PORT, async () => {
    console.log(`Subscription Tracker is running on port http://localhost:${PORT}`);

    await connectToDataBase();
});

export default app;