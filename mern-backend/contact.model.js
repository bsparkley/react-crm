const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
    
    contact_first: {
        type: String
    },
    contact_last: {
        type: String
    },
    contact_phone: {
        type: String
    },
    contact_email: {
        type: String
    },
    contact_department: {
        type: String
    },
   
});

module.exports = mongoose.model('Contact', Contact);