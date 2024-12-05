const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.get('/', itemController.getItems);
router.post('/', itemController.addItem);
router.put('/:id', itemController.updateItem);
router.patch('/:id', itemController.partialUpdateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
