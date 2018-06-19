let mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
}, {
        timestamps: true
    });

module.exports = mongoose.model('Users', userSchema);