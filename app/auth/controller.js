const Player = require('../player/model')

module.exports = {
    signup: async (req, res, next) => {
        try {
            const payload = req.body

            if(req.file){

            }else{

            }
            
            res.status(201).json({
                message: payload
            })

        } catch (err) {
            if (err && err.name === "ValidationError") {
                return res.status(422).json({
                    error: 1,
                    message: err.message,
                    fields: err.errors
                })
            }
            next(err)
        }
    }
}