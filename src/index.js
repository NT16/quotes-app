const port = process.env.PORT;
console.log('port', port);

const app = require('./app');

app.listen( port, () => {
    console.log(`Server up on ${port}`);
});