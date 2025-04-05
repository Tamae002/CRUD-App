import express from 'express';

import { PORT } from './config/env.js';
import userRouter from './routes/user.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => {
    console.log('[TEST]');

    res.send('Welcome to CRUD App using nodejs and express');
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

export default app