const express = require('express')

const bidRouter = express.Router()

const mongoose = require('mongoose')

const Bids = require('../models/bids')

const bcrypt = require('bcrypt')

const checkAuth = require('../middleware/check-auth')

bidRouter.get('/', checkAuth,  (req,res)=>{

    Bids.find((err, users) =>{

        if (err) return res.status(500).send(err)
        return res.status(200).send(users)

    })

})

bidRouter.get('/:id', (req,res)=>{

    Bids.findById(req.params.id, (err,bid) =>{

        if (err) return res.status(500).send(err)
        return res.status(200).send(bid)

    })

})

bidRouter.post('/', checkAuth, (req,res)=>{

    const bid = Bids(req.body);

    bid.save((err, newTruck)=>{

        if (err) return res.status(500).send(err);
        return res.status(201).send(newTruck)
    })
})

bidRouter.put('/:id', (req,res)=>{

    Bids.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updated)=>{

        if (err) return res.status(500).send(err);
        return res.status(201).send(updated)

    })

    })

bidRouter.delete('/:id', (req, res) =>{

    Bids.findByIdAndRemove(req.params.id, (err,deleted)=>{

        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})

    })

})


module.exports =  bidRouter;