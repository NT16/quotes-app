const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../../src/models/user');
const Quote = require('../../src/models/quote');

const user1ID = new mongoose.Types.ObjectId();
const user1 = {
    _id : user1ID,
    username: 'test1',
    email: 'test1@g.com',
    password: 'test1234',
    tokens: [
        {
            token : jwt.sign({ _id: user1ID}, process.env.JWT_SECRET )
        }
    ]
};

const user2ID = new mongoose.Types.ObjectId();
const user2 = {
    _id : user2ID,
    username: 'test2',
    email: 'test2@g.com',
    password: 'test1234',
    tokens: [
        {
            token : jwt.sign({ _id: user2ID}, process.env.JWT_SECRET )
        }
    ]
};


const quote1 = {
    _id: new mongoose.Types.ObjectId(),
    text: 'user1 Quote1',
    private: true,
    owner: user1ID
};

const quote2 = {
    _id: new mongoose.Types.ObjectId(),
    text: 'user1 Quote2',
    by: 'xyz',
    private: false,
    owner: user1ID
};

const quote3 = {
    _id: new mongoose.Types.ObjectId(),
    text: 'user2 Quote1',
    by: 'asd',
    private: true,
    owner: user2ID
};

const setupDatabase = async () => {
    await User.deleteMany();
    await Quote.deleteMany();
    await new User( user1 ).save();
    await new User( user2 ).save();
    await new Quote( quote1 ).save();
    await new Quote( quote2 ).save();
    await new Quote( quote3 ).save();
}

module.exports = {
    user1,
    user1ID,
    user2,
    user2ID,
    quote1,
    setupDatabase
};