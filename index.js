const express = require('express');
const cors = require('cors');
const productRoutes = require('./src/routes/routes');

const app = express();
const port = 4400;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Use the routes defined in routes.js
app.use('/users', productRoutes);
// Sync Sequelize models and start the server
const sequelize = require('./src/database/db');  // Import the Sequelize instance

sequelize.sync()  // This creates the table if it doesn't exist
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync the database:', err);
  });
