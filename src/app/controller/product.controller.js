const db = require('../config/db.config.js');
const Product = db.product;

// Post a Product
exports.create = (req, res) => {
    //Save to MySQL database
    let product = req.body;
    Product.create(product).then(result => {
        // Send created product to client
        res.json(result);
    });
};

//Fetch all product
exports.findAll = (req, res) => {
    Product.findAll(). then (product => {
        // Send all product to client
        res.json(product);
    });
};

//Find a Product by Id
exports.findById = (req, res) => {
    Product.findById(req.params.id).then(product => {
        res.json(product);
    });
};

// Update a Product
exports.update = (req, res) => {
    let product = req.body;
    let id = req.body.id;
    Product.update(product,
                    { where: {id: id} }
                    ).then(() => {
                        res.status(200).json({msg: "updated successfully a product with id = "+ id});
                    });
};

//Delete a Product by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Product.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'deleted successfully a product with id = ' + id});
    });
};

//Edit a Product by id 

exports.edit = (req, res) => {
    const id = req.params.id;
    Product.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a product with id = ' + id});
    });
};