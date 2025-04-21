import express from 'express';
import {PORT} from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Changed dasdsasdas');
});

app.listen(PORT, () => {
    console.log(`Subscription Tracker is running on port http://localhost:${PORT}` );
});

export default app;