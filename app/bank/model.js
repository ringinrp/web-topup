const mongoose = require('mongoose');
let bankSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Nama pemilik harus diisi']
    },
    nameBank: {
        type: String,
        require: [true, 'Nama bank harus diisi']
    },
    noRekening: {
        type: String,
        require: [true, 'Nomer rekening bank harus diisi']
    },
})

module.exports = mongoose.model('Bank', bankSchema)