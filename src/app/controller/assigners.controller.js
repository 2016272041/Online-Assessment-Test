const db = require('../config/db.config.js');
const Assigners = db.assigners;
const Userregs = db.userregs;
const Questions = db.questions;
const Tests = db.tests;

//post a assigners//
exports.create = (req, res) => {
    //save to MySQL database
    let assigners = req.body;
    Assigners.create(assigners).then(result => {
        //send creates assigners to client
        res.json(result)
    });
};

//post a userregs//
exports.create = (req, res) => {
    let userregs = req.body;
    Userregs.create(userregs).then(result => {
        res.json(result)
    });
};

//post a questions//
exports.create = (req, res) => {
    let questions = req.body;
    Questions.create(questions).then(results => {
        res.json(result)
    });
};

//post a tests//
exports.create = (req, res) => {
    let tests = req.body;
    Tests.create(tests).then(results => {
        res.json(result)
    });
};

//Fetch all Assigners
exports.findAll = (req, res) => {
    Assigners.findAll().then(assigners => {
        res.json(assigners);
    });
};

//Fetch all userregs
exports.findAll = (req, res) => {
    Userregs.findAll().then(userregs => {
        res.json(userregs);
    });    
};

//Fetch all questions 
exports.findAll = (req, res) => {
    Questions.findAll().then(questions => {
        res.json(questions);
    });
};

//Fetch all tests
exports.findAll = (req, res) => {
    Tests.findAll().then(tests => {
        res.json(tests);
    });
};

// Find a Assigners by Id
exports.findById = (req, res) => {
    Assigners.findById(req.params.userid).then(assigners => {
        res.json(assigners);
    });
};

// Find a Userregs by Id
exports.findById = (req, res) => {
    Userregs.findById(req.params.userid).then(userregs => {
        res.json(userregs);
    });
};

// Find a Questions by Id
exports.findById = (req, res) => {
    Questions.findById(req.params.id).then(questions => {
        res.json(questions);
    });
};

// Find a Tests by Id
exports.findById = (req, res) => {
    Tests.findById(req.params.id).then(tests => {
        res.json(tests);
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

//update a userregs
exports.update = (req, res) => {
    let userregs = req.body;
    let userid = req.body.id;
    Userregs.update(userregs,
                    { where: {userid: userid}}
                    ).then(() => {
                        res.status(200).json({msg: "updated successfully a userregs id = " + id});
                    });
};

//update a questions
exports.update = (req, res) => {
    let questions = req.body;
    let id = req.body.id;
    Questions.update(questions,
                    { where: {id: id}}
                    ).then(() => {
                        res.status(200).json({msg: "updates successfully a questions id = " + id});
                    });
};

//update a tests
exports.update = (req, res) => {
    let tests = req.body;
    let id = req.body.id;
    Tests.update(tests, 
                { where: {id: id}}
                ).then(() => {
                    res.status(200).json({msg: "updates successfully a tests id = " + id});
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

//Delete a userregs by Id
exports.delete = (req, res) => {
    const userid = req.params.userid;
    userregs.destroy({
        where: { userid: userid }
    }).then(() => {
        res.status(200).json({msg: "deleted successfully userregs id = " + id});
    });
};

//Delete a questions by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    questions.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg: "deleted successfully questions id = " + id});
    });
};

//Delete a tests by Id
exports.delete = (req, res) => {
    const testsid = req.params.testsid;
    tests.destroy({
        where: { testsid: testsid }
    }).then(() => {
        res.status(200).json({msg: "deleted successfully tests id = " + id});
    });    
};

//Edit a Assigners by Id
exports.edit = (req, res) => {
    const id = req.params.assignersId;
    Assigners.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a assigners id =' + id});
    });
};

//Edit a userregs by Id
exports.edit = (req, res) => {
    const id = req.params.userid;
    Userregs.edit({
        wherer: { userid:userid }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a userregs id =' + id});
    });
};

//Edit a questions by Id
exports.edit = (req, res) => {
    const id = req.params.id;
    Questions.edit({
        wherer: { id:id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a questions id =' + id});
    });
};

//Edit a tests by Id
exports.edit = (req, res) => {
    const id = req.params.id;
    Tests.edit({
        wherer: { id:id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a tests id =' + id});
    });
};