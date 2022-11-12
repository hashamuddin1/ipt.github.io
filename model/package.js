const mongoose = require('mongoose');

//creating schema of product
const package_schema = new mongoose.Schema({
    package_description: [String],
    price: {
        type: Number,
        allowNull: false
    },
    category: {
        type: String,
        allowNull: false
    }
})

//creating collection
const package = new mongoose.model('package', package_schema)

//export collection
module.exports = { package };