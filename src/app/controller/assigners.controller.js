const db = require('../config/db.config.js');
const Assigners = db.assigners;

//post a assigners//
exports.create = (req, res) => {
    //save to MySQL database
    let assigners = req.body;
    Assigners.create(assigners).then(result => {
        //send creates assigners to client
        res.json(result)
    });
};

//Fetch all Assigners
exports.findAll = (req, res) => {
    Assigners.findAll().then(assigners => {
        res.json(assigners);
    });
};

// Find a Assigners by Id
exports.findById = (req, res) => {
    Assigners.findById(req.params.userid).then(assigners => {
        res.json(assigners);
    });
};

//update a assigners
exports.update = (req, res) => {
    let assigners = req.body;
    let userid = req.body.id;
    Assigners.update(assigners,
                    { where: {userid:userid} }
                    ).then(() => {
                        res.status(200).json({msg: "updated successfully a assigners id = " + id});
                    });
};

//Delete a Assigners by Id
exports.delete = (req, res) => {
    const id = req.params.assignersId;
    Assigners.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg: "deleted successfully a assigners id = " + id});
    });
};

//Edit a Assigners by Id
exports.edit = (req, res) => {
    const id = req.params.assignersId;
    Assigners.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a assigner id =' + id});
    });
};