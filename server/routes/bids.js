const express = require('express')
const bidRouter = express.Router()
const mongoose = require('mongoose')
const Bids = require('../models/bids')
const bcrypt = require('bcrypt')

bidRouter.get('/', (req,res)=>{
    Bids.find((err, users) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(users)
    })
})

bidRouter.post('/', (req,res)=>{
    const rucks = Bids(req.body);
    rucks.save((err, newTruck)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTruck)
    })
})

bidRouter.delete('/:id', (req, res) =>{
    Bids.findByIdAndRemove(req.params.id, (err,deleted)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})
    })
})


module.exports =  bidRouter;