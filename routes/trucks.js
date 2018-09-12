const express = require('express')
const truckRouter = express.Router()
const Trucks = require('../models/trucks')
const checkAuth = require('../middleware/check-auth')


truckRouter.get('/', checkAuth, (req,res)=>{
    Trucks.find((err, trucks) =>{
        if (err) return res.status(500).send(err)
        return res.status(200).send(trucks)
    })
})

truckRouter.get('/:id', checkAuth, (req,res)=>{
    Trucks.findById(req.params.id, (err, load)=>{
        if(err) return res.status(500).send(err)
        return res.status(201).send(load)
    })
})

truckRouter.post('/', checkAuth, (req,res)=>{
    const rucks = Trucks(req.body);
    console.log(req.body)
    rucks.save((err, newTruck)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTruck)
    })
})

truckRouter.put('/:id', checkAuth, (req,res)=>{
    Trucks.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updated)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(updated)
    })
})

truckRouter.delete('/:id', checkAuth, (req, res) =>{
    Trucks.findByIdAndRemove(req.params.id, (err,deleted)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})
    })
})


module.exports =  truckRouter;