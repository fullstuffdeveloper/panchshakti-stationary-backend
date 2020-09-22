const
    mongoose = require('mongoose'),
    productModel = require('../models/Products'),
    app = require('../app')

app.get('/', (req, res) => {
    res.status(200).send({
        message: `Hello PanchShakti`
    })
});

app.post('/new/product', (req, res) => {
    const { productName, productBrand, productActualPrice, productQuantity, productSellingPriceMin, productSellingPriceMax, productExpiry } = req.body;
    const newProduct = new productModel({
        productName,
        productBrand,
        productActualPrice,
        productQuantity,
        productSellingPriceMin,
        productSellingPriceMax,
        productExpiry
    });
    newProduct.save()
        .then((doc) => {
            console.log('%c:doc after save-', 'background: #ff00dd; color: #00ff00', doc);
            res.status(200).send({
                message: 'Record saved successfully'
            })
        })
        .catch((err) => {
            console.log('%c:err on save-', 'background: #ff00dd; color: #00ff00', err);
        })
});

app.get('/get/products', (req, res) => {
    productModel.find()
        .then((doc) => {
            res.status(200).send(doc);
            console.log('%c:Got all doc-', 'background: #ff00dd; color: #00ff00', doc);
        })
        .catch((err) => {
            console.log('%c:Got error while finding doc-', 'background: #ff00dd; color: #00ff00', err);
        })
});

app.post('/get/product', (req, res) => {
    const { productName } = req.body;
    productModel.findOne({ productName: productName })
        .then((doc) => {
            res.send(200).send(doc);
        })
        .catch((err) => {
            res.status(400).send({
                message: `Could not find item`
            })
        })
});
const routes = {};
module.exports = routes