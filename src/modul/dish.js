const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    dname: String,
    dtype: String,
    dprice: Number,
    dtime: String,
    photo: Buffer,  // Change to Buffer to store image directly
    photoType: String,  // Store the image MIME type
    discription: String,
    ddiscount: Number,
    dserve: Number
});

module.exports = mongoose.model("dish", dishSchema);
