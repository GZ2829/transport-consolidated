const jwt = require('jsonwebtoken')

module.exports = (req,res, next)=>{
    try {
         jwt.verify(req.headers.authorization, 'superSecret', (err, token)=>{
             console.log(token)
            next()
         })
    } catch(error) {
        return res.status(401).json({
            message: "Authorization failed"
        })
    }
} 