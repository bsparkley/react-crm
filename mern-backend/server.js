const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = express.Router();
const PORT = 4000;

let Contact = require('./contact.model.js');

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/contacts', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
contactRoutes.route('/').get(function(req, res) {
    Contact.find(function(err, contact) {
        if (err) {
            console.log(err);
        } else {
            res.json(contact);
        }
    });
});
contactRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Contact.findById(id, function(err, contact) {
        res.json(contact);
    });
});
contactRoutes.route('/update/:id').post(function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
        if (!contact)
            res.status(404).send("data is not found");
        else
            contact.contact_first_name = req.body.contact_first_name;
            contact.contact_last_name = req.body.contact_last_name;
            contact.contact_phone = req.body.contact_phone;
            contact.contact_email = req.body.contact_email;
            contact.contact_department = req.body.contact_department;
            contact.save().then(contact => {
                res.json('Contact updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
contactRoutes.route('/add').post(function(req, res) {
    let contact = new Contact(req.body);
    contact.save()
        .then(contact => {
            res.status(200).json({'contact': 'contact added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new contact failed');
        });
});
app.use('/contacts', contactRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});