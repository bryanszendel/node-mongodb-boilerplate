const Item = require('./items-model.js');

// Create and Save a new item
exports.create = (req, res) => {
  // Validate request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Note content cannot be empty"
      });
  }

  // Create a Note
  const item = new Item({
      name: req.body.name || "Unnamed Item", 
      content: req.body.content
  });

  // Save Note in the database
  item.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Item."
      });
  });
};

// Retrieve and return all items from the database.
exports.findAll = (req, res) => {
  Item.find()
  .then(items => {
      res.send(items);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving items."
      });
  });
};


// Find a single item with a itemId
exports.findOne = (req, res) => {
  Item.findById(req.params.itemId)
  .then(item => {
      if(!item) {
          return res.status(404).send({
              message: "Item not found with id " + req.params.itemId
          });            
      }
      res.send(item);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Item not found with id " + req.params.itemId
          });                
      }
      return res.status(500).send({
          message: "Error retrieving item with id " + req.params.itemId
      });
  });
};


// Update a item identified by the itemId in the request
exports.update = (req, res) => {
  // Validate Request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Item content cannot be empty"
      });
  }

  // Find item and update it with the request body
  Item.findByIdAndUpdate(req.params.itemId, {
      name: req.body.name || "Unnamed Item",
      content: req.body.content
  }, {new: true})
  .then(item => {
      if(!item) {
          return res.status(404).send({
              message: "Item not found with id " + req.params.itemId
          });
      }
      res.send(item);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Item not found with id " + req.params.itemId
          });                
      }
      return res.status(500).send({
          message: "Error updating item with id " + req.params.itemId
      });
  });
};


// Delete a item with the specified noteId in the request
exports.delete = (req, res) => {
  Item.findByIdAndRemove(req.params.itemId)
  .then(item => {
      if(!item) {
          return res.status(404).send({
              message: "Item not found with id " + req.params.itemId
          });
      }
      res.send({message: "Item deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Item not found with id " + req.params.itemId
          });                
      }
      return res.status(500).send({
          message: "Could not delete item with id " + req.params.itemId
      });
  });
};
