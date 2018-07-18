const jwt = require('jsonwebtoken')

module.exports = (req,res, next)=>{
    try {
        const decoded = jwt.verify(localStorage.password, 'superSecret')
           req.userData = decoded
        next()
    } catch(error) {
        return res.status(401).json({
            message: "Authorization failed"
        })
    }
} 