const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const quoteRouter = require('./routers/quote');

const app = express();

app.use( express.static('./build'));
app.use( express.json());


app.use('/users',userRouter);
app.use('/quotes',quoteRouter);

module.exports = app;