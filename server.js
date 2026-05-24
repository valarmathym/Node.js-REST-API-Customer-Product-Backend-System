const express = require('express');
const bodyParser = require('body-parser');
//const db = require('./localdbconnect.js');
const db = require('./db.js');
const Product = require('./product');
const Customer = require('./customer'); // Import the Customer model
const app = express();

app.use(bodyParser.json());

// Route to get all products
app.get('/products', (req, res) => {
  Product.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Route to create a new product
app.post('/products', (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(() => {
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});



// DELETE a product by ID
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// UPDATE
app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const update = req.body;
  Product.findByIdAndUpdate(id, update, { new: true })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.json(product);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Route to get all customers
app.get('/customers', (req, res) => {
  Customer.find({})
    .then((customer) => {
      console.log(JSON.stringify(customer));
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Route to create a new customer
app.post('/customers', (req, res) => {
  const customer = new Customer(req.body);
  customer.save()
    .then(() => {
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// DELETE a customer by ID
app.delete('/customers/:id', (req, res) => {
  const id = req.params.id;
  Customer.findByIdAndDelete(id)
    .then((customer) => {
      if (!customer) {
        return res.status(404).send();
      }
      res.json(customer);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Start the server and listen on port 3003
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
