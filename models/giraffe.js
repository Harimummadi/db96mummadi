const mongoose = require("mongoose")
const giraffeSchema = mongoose.Schema({
brand: String,
size: String,
cost: Number
})
module.exports = mongoose.model("giraffe", giraffeSchema)