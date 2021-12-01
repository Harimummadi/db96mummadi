const mongoose = require("mongoose")
const giraffeSchema = mongoose.Schema({
    brand:{
        type: String,
        minLength: 8
    }, 
    size:{
        type: String,
        minLength: 5
    },

cost: Number
})
module.exports = mongoose.model("giraffe", giraffeSchema)