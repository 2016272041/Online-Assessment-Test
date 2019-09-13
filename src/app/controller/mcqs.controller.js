const db = require('../config/db.config.js');
const Mcqs = db.mcqs;

//post data form mcq//
exports.create = (req, res) => {
    //save to mysql database//
    let mcqs = req.body;
    Mcqs.create(mcqs).then(results => {
        //send created mcq to client//
        res.json(result);
    });
};

//Fetch all mcq data
exports.findAll = (req, res) => {
    Mcqs.findAll().then (mcqs => {
        //send all mcq to client//
    res.json(mcqs);
    });
};

//Find a Mcq by ID

exports.findById = (req, res) => {
    Mcq.findById(req.params.id).then(mcqs => {
        res.json(mcqs);
    });
};

