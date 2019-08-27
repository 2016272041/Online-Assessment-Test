const db = require('../config/db.config.js');
const Sendmail = db.sendmail;

//post a Sendmail
exports.create = (req, res) => {
    let sendmail = req.body;
    Sendmail.create(sendmail).then(result => {
        res.json(result);
    });
};

//Fetch all Sendmail
exports.findAll = (req, res) => {
    Sendmail.findAll().then(sendmail => {
        res.json(sendmail);
    });
};

//Find a Sendmail by Id
exports.findById = (req, res) => {
    Sendmail.findById(req.params.id).then(sendmail => {
        res.json(sendmail);
    });
};

//Update a sendmail by ID
exports.update = (req, res) => {
    let sendmail = req.body;
    let id = req.body.id;
    Sendmail.update(sendmail, 
        { where: {id: id} }
        ).then ( () => {
            res.status(200).json({msg:"updated successfully a sendmail with id = " + id});
        });
};

//Delete a sendmail by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    Sendmail.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully a sendmail with id = ' + id});
    });
};

//Edit a Registration by Id
exports.edit = (req, res) => {
	const id = req.params.id;
	Sendmail.edit({
		wherer: { id: id }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a sendmail with id = ' + id});
	});
};