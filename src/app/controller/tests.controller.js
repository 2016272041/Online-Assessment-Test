const db = require('../config/db.config.js');
const Tests = db.tests;

//post data form tests//
exports.create = (req, res) => {
    //save to Mysql database
    let tests = req.body;
    Tests.create(tests).then(result => {
        //send created tests to client
        res.json(result);
    });
};

//Fetch all tests data
exports.findAll = (req, res) => {
    Tests.findAll().then (tests => {
        //send all tests to client
        res.json(tests); 
    });
};

//Find a Tests bt ID
exports.findById = (req, res) => {
    Tests.findById(req.params.id).then(tests => {
        res.json(tests);
    })
};

//Update a questions
exports.update = (req, res) => {
    let tests = req.body;
    let id = req.body.id;
    Tests.update(tests, 
        { where: {id: id} }
        ).then ( () => {
            res.status(200).json({msg: "updated successfully a tests with id = " + id});
        });
};

//Delete a tests by ID 
exports.delete = (req, res) => {
    const id = req.params.id;
    Tests.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'deleted successfully a tests with id = ' + id});
    });
};

//Edit a tests by Id
exports.edit = (req, res) => {
    const id = req.params.testsId;
    Tests.edit({
        wherer: { id: id }
    }).then (() => {
        res.status(200).json({msg: 'edited successfully a tests with id = ' + id});
    });    
};