import express from 'express';

import {PORT} from './config/env.js';

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";

const app = express();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);

app.get('/', (req, res) => {
    res.send('Hello Changed dasdsasdas');
});

app.listen(PORT, () => {
    console.log(`Subscription Tracker is running on port http://localhost:${PORT}`);
});

export default app;