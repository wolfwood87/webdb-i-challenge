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
    const accountData = req.body;
    try{
        const account = await db('accounts').insert(accountData);
        console.log(account)
        res.status(201).json(account)
    }
    catch(err) {
        res.status(500).json({message: "Failed to create account"})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const updateData = await db('accounts').where('id', id).update(req.body);
        res.status(200).json({updated: updateData})
    }
    catch(err){
        res.status(500).json({message: "Failed to update account"})
    }
})

router.delete('/:id' async (req, res) => {
    const {id} = req.params;
    try{
        const deleteAccount = await db('accounts').where('id', id).del();
        res.status(204).end();
    }
    catch(err) {
        res.status(500).json({message: "Failed to delete account"})
    }
})

module.exports = router;