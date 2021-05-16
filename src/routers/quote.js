const express = require('express');
const Quote = require('../models/quote');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req,res) => {
    const quote = new Quote({
        ...req.body,
        owner: req.user._id
    });

    try {
        await quote.save();
        res.status(201).send(quote);
    } catch(e){
        res.status(400).send(e);
    }
});

//get all my quotes
router.get('/me', auth, async (req,res) => {
    try{
        const quotes = await Quote.find( { owner: req.user._id});

        res.status(200).send(quotes);
    }catch(e){
        res.status(500).send();
    }
});

// get all public quotes
router.get('/', auth, async (req, res) => {
    try{
        const quotes = await Quote.find( { private: false});

        res.status(200).send(quotes);
    }catch(e){
        res.status(500).send();
    }
});

module.exports = router;