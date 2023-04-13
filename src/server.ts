import express from 'express';
import { router } from './routes/index';

const app = express();
app.use(express.json());

require('../database/db.ts')

app.use(router)


app.listen(3333, () => {
    console.log('🚀 Server started!')
})
