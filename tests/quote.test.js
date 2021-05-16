const request = require('supertest');
const Quote = require('../src/models/quote');
const app = require('../src/app');  
const { 
    user1, 
    setupDatabase, 
} = require('./fixtures/db');

beforeEach( setupDatabase );

test('Should create quote for user1', async ()=> {
    const response = await request(app)
    .post('/quotes')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .send({
        text: 'quote3 user1',
        by: 'ty',
        private: false
    }).expect( 201);

    const quote = await Quote.findById( response.body._id);
    expect(quote).not.toBeNull();
    expect(quote.by).toBe('ty'.toUpperCase());
});

test('Should not create invalid quote', async ()=> {
    await request(app)
    .post('/quotes')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .send({
        text: 'shit',
        private: false
    }).expect( 400);
});

test('Should get all public quotes for user1', async ()=> {
    const response = await request(app)
    .get('/quotes')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .expect( 200);

    expect(response.body.length).toBe(1);
});

test('Should get all quotes of user1', async ()=> {
    const response = await request(app)
    .get('/quotes/me')
    .set('Authorization', `Bearer ${user1.tokens[0].token}`)
    .expect( 200);

    expect(response.body.length).toBe(2);
});

test('Should not get quotes if inauthenticated', async ()=> {
    await request(app)
    .get('/quotes/me')
    .expect( 401);
});