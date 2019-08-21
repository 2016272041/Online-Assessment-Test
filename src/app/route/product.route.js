module.exports = function(app) {
    const product = require('../controller/product.controller.js');

    //create a new Product
    app.post('/api/product', product.create);
    
    //Retrive all Product
    app.get('/api/product', product.findAll);

    //Retrive a single product by Id
    app.get('/api/product/:id', product.findById);

    //Update a Product with Id
    app.put('/api/product', product.update);

    //Delete a Product with Id
    app.delete('/api/product/:id', product.delete);
}