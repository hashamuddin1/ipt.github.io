//DATABASE CONNECTION
require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hasham:hasham147@cluster0.uut9ssj.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true //FALTU KI WARNING SE BACHNE K LIYE
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
})