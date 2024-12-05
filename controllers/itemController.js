const itemModel = require('../models/itemModel');

exports.getItems = (req, res) => {
  itemModel.getAllItems((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

exports.addItem = (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).send('Name is required.');
  itemModel.addItem({ name, description }, function (err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Item added successfully.');
  });
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  if (!name) return res.status(400).send('Name is required.');
  itemModel.updateItem(id, { name, description }, function (err) {
    if (err) return res.status(500).send(err.message);
    res.send('Item updated successfully.');
  });
};

exports.partialUpdateItem = (req, res) => {
  const { id } = req.params;
  itemModel.partialUpdateItem(id, req.body, function (err) {
    if (err) return res.status(500).send(err.message);
    res.send('Item partially updated.');
  });
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  itemModel.deleteItem(id, function (err) {
    if (err) return res.status(500).send(err.message);
    res.send('Item deleted successfully.');
  });
};
