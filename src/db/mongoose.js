const mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex : true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=> console.log('MONGO DB up'))
.catch((e)=> console.log('MONGO failed to connect: ', e));