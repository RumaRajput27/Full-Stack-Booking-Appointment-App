const express = require('express');
const router = express.Router();
const TableData = require('../models/users');  // Import the TableData model

// Route to get all tableData
router.get('/', async (req, res) => {
  try {
    const tableData = await TableData.findAll();  // Use Sequelize to fetch all tableData
    res.json(tableData);
  } catch (error) {
    console.error('Error retrieving tableData:', error);
    res.status(500).send('Error retrieving tableData from the database');
  }
});

// Route to insert a new product
router.post('/', async (req, res) => {
  const {  name,  email, phone } = req.body;
  
  try {
    const newData = await TableData.create({ name,  email, phone});  // Use Sequelize to create a new product
    res.json({ message: 'TableData added successfully', product: newData });
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).send('Error inserting product into the database');
  }
});

// Route to update an existing product
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {  name,  email, phone  } = req.body;

  try {
    const product = await TableData.findByPk(id);  // Find product by its primary key (ID)

    if (!product) {
      return res.status(404).send('TableData not found');
    }

    // Update the product's details
    product. name =  name;
    product. email =  email;
    product.phone = phone;
    await product.save();  // Save the updated product

    res.json({ message: 'TableData updated successfully', product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).send('Error updating product in the database');
  }
});



// Route to delete a record by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await TableData.destroy({ where: { id } });

    if (deletedUser) {
      res.json({ message: 'Record deleted successfully' });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).send('Error deleting record from the database');
  }
});








module.exports = router;
