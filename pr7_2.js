//	Create express js program using router for e-commerce application. This application has 4 modules: order, user, product and category. Each module has 4 methods, namely get, put, post and delete and has path ‘/’, ‘/update-details’, ‘create-details’, and ‘delete-details respectively.
//
//	For example, for order module, the path is /order, /order/update-details, /order/create-details, and /order/delete-details respectively.
//
//	For user module, the path is /user, /user/update-details, /user/create-details, and /user/delete-details respectively.
//
//	For product module, the path is /product, /product/update-details, /product/create-details, and /product/delete-details respectively.
//
//	For category module, the path is /category, /category/update-details, /category/create-details, and /category/delete-details respectively.
//
//	For example, for order module, the path is /order, /order/update-details, /order/create-details, and /order/delete-details respectively.
//

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var order = [
    { id: 1, name: 'Laptop', size: '15.6', brand: 'Dell', color: 'Black' }
];

var user = [
    { id: 1, name: 'Laptop', size: '15.6', brand: 'Dell', color: 'Black' },
    { id: 2, name: 'Mobile', size: '5.5', brand: 'Samsung', color: 'White' }
];

var product = [
    { id: 1, name: 'Laptop', size: '15.6', brand: 'Dell', color: 'Black' },
    { id: 2, name: 'Mobile', size: '5.5', brand: 'Samsung', color: 'White' },
    { id: 3, name: 'Tablet', size: '10.1', brand: 'Apple', color: 'Silver' },
    { id: 4, name: 'Watch', size: '1.5', brand: 'Fossil', color: 'Black' },
    { id: 5, name: 'Camera', size: '2.5', brand: 'Canon', color: 'Black' }
];

var category = [
    { id: 1, name: 'Laptop', size: '15.6', brand: 'Dell', color: 'Black' },
    { id: 2, name: 'Mobile', size: '5.5', brand: 'Samsung', color: 'White' },
    { id: 3, name: 'Tablet', size: '10.1', brand: 'Apple', color: 'Silver' },
    { id: 4, name: 'Watch', size: '1.5', brand: 'Fossil', color: 'Black' }
];

app.get('/order', function (req, res) {
    res.send(order);
}
);

app.get('/user', function (req, res) {
    res.send(user);
}
);

app.get('/product', function (req, res) {
    res.send(product);
}
);

app.get('/category', function (req, res) {
    res.send(category);
}
);

app.get('/order/update-details', function (req, res) {
    res.send('Order updated');
}
);

app.get('/user/update-details', function (req, res) {
    res.send('User updated');
}
);

app.get('/product/update-details', function (req, res) {
    res.send('Product updated');
}
);

app.get('/category/update-details', function (req, res) {
    res.send('Category updated');
}
);

app.get('/order/create-details', function (req, res) {
    res.send('Order created');
}
);

app.get('/user/create-details', function (req, res) {
    res.send('User created');
}
);

app.get('/product/create-details', function (req, res) {
    res.send('Product created');
}
);

app.get('/category/create-details', function (req, res) {
    res.send('Category created');
}
);

app.get('/order/delete-details', function (req, res) {
    res.send('Order deleted');
}
);

app.get('/user/delete-details', function (req, res) {
    res.send('User deleted');
}
);

app.get('/product/delete-details', function (req, res) {
    res.send('Product deleted');
}
);

app.get('/category/delete-details', function (req, res) {
    res.send('Category deleted');
}
);

app.listen(3000);
console.log("http://127.0.0.1:3000/");
