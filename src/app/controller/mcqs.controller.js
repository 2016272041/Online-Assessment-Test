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

// Update a Mcq
exports.update = (req, res) => {
    let mcq = req.body;
    let id = req.body.id;
    Mcq.update(mcq,
                { where: {id: id} }
                ).then(() => {
                    res.status(200).json({msg:"updated successfully a mcqs with id = " + id});
                });
};

// Delete a Mcqs by Id
exports.delete = (req, res) => {
    const id = req.params.McqId;
    Mcq.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully a questions with id = ' + id});
    });
};

//Edit a Mcqs by Id
exports.edit = (req, res) => {
    const id = req.params.McqId;
    Mcq.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a mcq with id = ' + id});
    });
};
