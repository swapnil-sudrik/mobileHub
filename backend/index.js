const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');
const productData = require('./productData');


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());




const createTable = async () => {
  try {
    const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    price INT,
    category VARCHAR(255),
    os VARCHAR(255),
    description TEXT,
    processor VARCHAR(255),
    storage INT,
    RAM INT,
    battery VARCHAR(255),
    camera VARCHAR(255),
    display VARCHAR(255),
    inventoryStatus VARCHAR(255),
    rating FLOAT,
    inTheBox TEXT,
    modelNumber VARCHAR(255),
    modelName VARCHAR(255),
    SIMType VARCHAR(255),
    quantity INT,
    image VARCHAR(255)
  )
`;
    await pool.query(createTableQuery);
    console.log(`Table 'products' created or already exists.`);
  } catch (error) {
    console.error('Error creating table:', error);
  }

}


const createCartTable = async () => {
  try {
    const createCartTableQuery = `
CREATE TABLE IF NOT EXISTS cart (
  id INT,
  name VARCHAR(255),
  price INT,
  category VARCHAR(255),
  os VARCHAR(255),
  description TEXT,
  processor VARCHAR(255),
  storage INT,
  RAM INT,
  battery VARCHAR(255),
  camera VARCHAR(255),
  display VARCHAR(255),
  inventoryStatus VARCHAR(255),
  rating FLOAT,
  inTheBox TEXT,
  modelNumber VARCHAR(255),
  modelName VARCHAR(255),
  SIMType VARCHAR(255),
  quantity INT,
  image VARCHAR(255)
)
`;
    await pool.query(createCartTableQuery);
    console.log(`Table 'cart' created or already exists.`);
  } catch (error) {
    console.error('Error creating table:', error);
  }

}



const insertdefaultdata = (products) => {
  const sql = 'INSERT INTO products (id, name, price, category, os, description, processor, storage, RAM, battery, camera, display, inventoryStatus, rating, inTheBox, modelNumber, modelName, SIMType, quantity, image) VALUES ?';

  // Map the product data to a format suitable for bulk insertion
  const values = products.map((product) => [
    product.id,
    product.name,
    product.price,
    product.category,
    product.os,
    product.description,
    product.processor,
    product.storage,
    product.RAM,
    product.battery,
    product.camera,
    product.display,
    product.inventoryStatus,
    product.rating,
    product.inTheBox,
    product.modelNumber,
    product.modelName,
    product.SIMType,
    product.quantity,
    product.image,
  ]);

  // Execute the query with the mapped values
  pool.query(sql, [values], (err, results) => {
    if (err) {
      console.error('Error inserting products into MySQL:', err);
      throw err;
    }
    console.log('Products inserted into MySQL:', results);
  });
};

createTable();
createCartTable();
insertdefaultdata(productData.getProductsData());


app.get('/api/all-iphones', async (req, res) => {
  try {
    // Use the connection pool to get a connection
    const connection = await pool.getConnection();

    // Execute the query
    const query = "SELECT * FROM products WHERE os='iphone'";
    const [results, fields] = await connection.query(query);

    // Release the connection back to the pool
    connection.release();

    // Send the results as JSON response
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/top-deals', async (req, res) => {
  try {

    const connection = await pool.getConnection();

    const query = "SELECT * FROM products ORDER BY price DESC LIMIT 15";
    const [results, fields] = await connection.query(query);

    connection.release();
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/budget-phones', async (req, res) => {
  try {

    const connection = await pool.getConnection();

    const query = "SELECT * FROM products WHERE price BETWEEN 25000 AND 30000 ORDER BY price DESC LIMIT 15";
    const [results, fields] = await connection.query(query);

    connection.release();
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/midrange-phones', async (req, res) => {
  try {

    const connection = await pool.getConnection();

    const query = "SELECT * FROM products WHERE price BETWEEN 35000 AND 55000 ORDER BY price DESC LIMIT 15";
    const [results, fields] = await connection.query(query);

    connection.release();
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/allPhones', async (req, res) => {
  try {

    const connection = await pool.getConnection();

    const query = "SELECT * FROM products";
    const [results, fields] = await connection.query(query);

    connection.release();
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  const productId = parseInt(req.params.id);
  try {

    const connection = await pool.getConnection();

    const query = `SELECT * FROM products where id=${productId} `;
    const [results, fields] = await connection.query(query);

    connection.release();
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/api/cart/:id', async (req, res) => {
  const productId = parseInt(req.params.id);
  try {

    const connection = await pool.getConnection();

    const query = `SELECT * FROM products where id=${productId} `;
    const [results, fields] = await connection.query(query);

    connection.release();
    const pData = results[0];
    // Create an object and set data from the database
    var ProductData = {
      getProducts() {
        let pObject = {
          id: pData.id,
          name: pData.name,
          price: pData.price,
          category: pData.category,
          os: pData.os,
          description: pData.description,
          processor: pData.processor,
          storage: pData.storage,
          RAM: pData.RAM,
          battery: pData.battery,
          camera: pData.camera,
          display: pData.display,
          inventoryStatus: pData.inventoryStatus,
          rating: pData.rating,
          inTheBox: pData.inTheBox,
          modelNumber: pData.modelNumber,
          modelName: pData.modelName,
          SIMType: pData.SIMType,
          quantity: pData.quantity,
          image: pData.image,
        };
        return pObject;
      }
    }
    insertdata(ProductData.getProducts());

  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const insertdata = (product) => {

  const sql = 'INSERT INTO cart (id, name, price, category, os, description, processor, storage, RAM, battery, camera, display, inventoryStatus, rating, inTheBox, modelNumber, modelName, SIMType, quantity, image) VALUES (?)';

  // Map the product data to a format suitable for bulk insertion
  const values =  [
    product.id,
    product.name,
    product.price,
    product.category,
    product.os,
    product.description,
    product.processor,
    product.storage,
    product.RAM,
    product.battery,
    product.camera,
    product.display,
    product.inventoryStatus,
    product.rating,
    product.inTheBox,
    product.modelNumber,
    product.modelName,
    product.SIMType,
    product.quantity,
    product.image,
  ];


  // Execute the query with the mapped values
  pool.query(sql, [values], (err, results) => {
    if (err) {
      console.error('Error inserting cart into MySQL:', err);
      throw err;
    }
    console.log('cart inserted into MySQL:', results);
  });
};




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
