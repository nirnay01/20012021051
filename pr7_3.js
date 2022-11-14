//Create express js program that employ middleware using next() function.
//
//Create express js program that employ middleware using next() function.
//

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/order', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
}
);

app.get('/order', function (req, res) {
    res.send('Order Page');
}
);

app.get('/order/update-details', function (req, res) {
    res.send('Order updated');
}
);

app.listen(3000);
console.log("http://127.0.0.1:3000/");
