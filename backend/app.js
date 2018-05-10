var cors = require('cors');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Product = require('./restapi/models/productModel'),
    User = require('./restapi/models/userModel'),
    Role = require('./restapi/models/roleModel'),
    Group = require('./restapi/models/groupModel'),
    bodyParser = require('body-parser');
app.use(cors())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/onlinestore', { useMongoClient: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var productRoute = require('./restapi/routes/productRoutes');
productRoute(app);

var userRoute = require('./restapi/routes/userRoutes');
userRoute(app);

var roleRoute = require('./restapi/routes/roleRoutes');
roleRoute(app);

var groupRoute = require('./restapi/routes/groupRoutes');
groupRoute(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Online Store -  RESTful web services with Nodejs started on: ' + port);