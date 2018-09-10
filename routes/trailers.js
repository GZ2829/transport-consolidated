const express = require('express')

const trailerRouter = express.Router()

const mongoose = require('mongoose')

const Trailers = require('../models/trailers')



trailerRouter.get('/', (req,res)=>{

    Trailers.find((err, users) =>{

        if (err) return res.status(500).send(err)
        return res.status(200).send(users)

    })
    
})

trailerRouter.post('/', (req,res)=>{

    const rucks = Trailers(req.body);

    rucks.save((err, newTruck)=>{

        if (err) return res.status(500).send(err);
        return res.status(201).send(newTruck)

    })

})
trailerRouter.put('/:id', (req,res)=>{

Trailers.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updated)=>{
    
    if (err) return res.status(500).send(err);
    return res.status(201).send(updated)

})

})

trailerRouter.delete('/:id', (req, res) =>{

    Trailers.findByIdAndRemove(req.params.id, (err,deleted)=>{

        if(err) return res.status(500).send(err);
        return res.send({message: 'Its been deleted', item: deleted})

    })

})


module.exports =  trailerRouter;