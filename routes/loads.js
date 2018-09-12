const express = require('express')

const loadRouter = express.Router()

const Loads = require('../models/loads')

const checkAuth = require('../middleware/check-auth')

loadRouter.get('/',  (req,res)=>{
    Loads.find((err, load) =>{
        if (err) return res.status(500).send(err)
        console.log(load)
        return res.status(200).send(load)
    })
})

loadRouter.get('/:id', (req,res)=>{
    Loads.findById(req.params.id, (err, load)=>{
        if(err) return res.status(500).send(err)
        return res.status(201).send(load)
    })
})

loadRouter.post('/', checkAuth, (req,res)=>{
    const rucks = Loads(req.body);
    rucks.save((err, newTruck)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTruck)
    })
})

loadRouter.put('/:id', checkAuth, (req,res)=>{
    Loads.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updated)=>{
        if (err) return res.status(500).send(err);
        return res.status(201).send(updated)
    })
})


loadRouter.delete('/:id', checkAuth, (req, res) =>{
    Loads.findByIdAndRemove(req.params.id, (err,deleted)=>{
        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})
    })
})


module.exports =  loadRouter;