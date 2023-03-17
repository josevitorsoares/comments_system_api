import express from 'express';
const routes = require('../src/routes/comments.routes.ts')

const app = express();
app.use(express.json());

require('../database/db.ts')

app.use(routes)


app.listen(3333, () => {
    console.log('🚀 Server started!')
})
