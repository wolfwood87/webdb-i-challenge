const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.router();

router.get('/', async (req, res) => {
    try{
        const accounts = await db('accounts');
        console.log(accounts);
        req.status(200).json(accounts)
    }
    catch(err) {
        res.status(500).json({message: "Failed to retrieve accounts"})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const account = await db('acounts').where('id', id);
        console.log(account);
        res.status(200).json(account);
    }
    catch(err){
        res.status(500).json({message: "failed to retrieve account"})
    }
})

router.post('/', async (req, res) => {

})

router.put('/:id', async (req, res) => {

})

router.delete('/:id' async (req, res) => {

})