const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { user1, user1ID, setupDatabase } = require('./fixtures/db');

beforeEach( setupDatabase );

test("Sign up new user", async()=>{
    const response = await request(app)
    .post('/users')
    .send({
        email : 'test3@g.com',
        username: 'test3',
        password: 'test1234'
    }).expect(201)

    const user = await User.findById( response.body.user._id);
    expect( user).not.toBeNull();

    expect( response.body).toMatchObject({
        user:{
            username: 'test3',
            email: 'test3@g.com'
        },
        token : user.tokens[0].token
    });

    expect( user.password ).not.toBe('test1234');
});

test("Sign up fail for invalid username/email/password", async()=>{
    const response = await request(app)
    .post('/users')
    .send({
        email : 'test4@g.com',
        username: 'test4',
        password: 'test'
    }).expect(400);
});

test("Login user", async()=>{
    const response = await request(app)
    .post('/users/login')
    .send({
        email : user1.email,
        password: user1.password
    }).expect(200)

    const user = await User.findById( user1ID );
    
    expect( response.body.token).toBe( user.tokens[1].token);
});

test( 'Should not login non existent user', async ()=>{
    await request(app).post('/users/login').send( {
        email: 'non@g.com',
        password: 'qwerty'
    }).expect(400)
});

test( 'Should logout user', async ()=> {
    await request(app)
    .post('/users/logout')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200);

    const user = await User.findById(user1ID);
    expect(user.tokens.length).toBe(0);
});

test( 'Should not logout unauthorised user', async ()=> {
    await request(app)
    .post('/users/logout')
    .send()
    .expect(401);

    const user = await User.findById(user1ID);
    expect(user.tokens.length).not.toBe(0);
});

test( 'Should logout all', async ()=> {
    await request(app)
    .post('/users/login')
    .send({
        email : user1.email,
        password: user1.password
    }).expect(200);

    const user = await User.findById( user1ID);
    expect(user.tokens.length).toBe(2);

    await request(app)
    .post('/users/logoutAll')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200);

    const userAfterLogout = await User.findById(user1ID);
    expect(userAfterLogout.tokens.length).toBe(0);
});