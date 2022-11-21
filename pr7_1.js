//Assume that products are available on products object. Product properties are product_id, product_name, product_size, product_brand, product_color.
// 2.	Build a simple express js program to add, update, delete and display all products available in list of e-commerce application using get, put, post and delete methods.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.urlencoded({extended:false}))
app.use(express.json())
var products = [
    { id: 1, name: 'Laptop', size: '15.6', brand: 'Dell', color: 'Black' },
    { id: 2, name: 'Mobile', size: '5.5', brand: 'Samsung', color: 'White' },
    { id: 3, name: 'Tablet', size: '10.1', brand: 'Apple', color: 'Silver' },
    { id: 4, name: 'Watch', size: '1.5', brand: 'Fossil', color: 'Black' },
    { id: 5, name: 'Camera', size: '2.5', brand: 'Canon', color: 'Black' }
];

app.get('/products', function (req, res) {
    res.send(products);
}
);

app.get('/products/:id', function (req, res) {
    var id = req.params.id;
    var product = products.find(p => p.id == id);
    res.send(product);
}
);

app.post('/products', urlencodedParser, function (req, res) {
    var product = req.body;
    products.push(product);
    res.send(products);
}
);

app.put('/products/:id', urlencodedParser, function (req, res) {
    var id = req.params.id;
    var product = req.body;
    var index = products.findIndex(p => p.id == id);
    products[index] = product;
    res.send(products);
}
);

app.delete('/products/:id', function (req, res) {
    var id = req.params.id;
    var index = products.findIndex(p => p.id == id);
    products.splice(index, 1);
    res.send(products);
}
);

app.listen(3000, function () {
    console.log("http://127.0.0.1:3000/");
}
);
