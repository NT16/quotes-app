const mongoose = require('mongoose');

console.log('mongoose.mongo', process.env.MONGODB_URL)

mongoose.connect( process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=> console.log('MONGO DB up'))
.catch((e)=> console.log('MONGO failed to connect: ', e));