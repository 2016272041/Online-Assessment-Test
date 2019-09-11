const db = require('../config/db.config.js');
const Answers = db.answers;

//post a answers //
exports.create = (req, res) => {
    // Save to MySQL database
    let answers = req.body;
    Answers.cretae(answers).then(result => {
        //send created answers to client
        res.json(result);
    });
};

//Fetch all Answers
exports.findAll = (req, res) => {
    Answers.findAll().then(answers => {
        res.json(answers);
    });
};

// Find a Answers by Id
exports.findById = (req, res) => {
    Answers.findById(req.params.id).then(answers => {
        res.json(answers);
    });
};

//Update a Answers
exports.update = (req, res) => {
    let answers = req.body;
    let id = req.body.id;
    Answers.update(answers,
        { where: {id: id}}
        ).then(() => {
            res.status(200).json({msg:"updated successfully a answers with id = " + id});
        });
};

//Delete a Answers by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    Answers.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'deleted successfully a answers with id = ' + id});
    });
};

//Edit a Answers by Id
exports.edit = (req, res) => {
    const id = req.params.id;
    Answers.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a answers with id = ' + id});
    });
}