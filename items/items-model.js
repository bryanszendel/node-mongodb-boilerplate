// const db = require('../database/db-config.js');

// const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const ItemSchema = mongoose.Schema({
    name: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', ItemSchema);


// module.exports = {
//   find,
//   findById,
//   add,
//   edit,
//   remove
// }

// function find() {
//   return db('items')
// }

// function findById(id) {
//   return db('items').where('id', id).first()
// }

// function add(item) {
//   return db('items').insert(item)
// }

// function edit(id, item) {
//   return db('items').update(item).where('id', id)
// }

// function remove(id) {
//   return db('items').del().where('id', id)
// }