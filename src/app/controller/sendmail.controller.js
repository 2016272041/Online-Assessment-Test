const db = require('../config/db.config.js');
const Sendmail = db.sendmail;

//post a sendmail
exports.create = (req, res) => {
    //save to MySQL database
    let sendmail = req.body;
    Sendmail.create(sendmail).then(result => {
        // Send created Sendmail to client
        res.json(result);
    });
};

//Fetch all Sendmail
exports.findAll = (req, res) => {
    Sendmail.findAll().then(sendmail => {
        // Send all senmail to client
        res.json(sendmail)
    });
};

//Find a Sendmail by Id
exports.findById = (req, res) => {
    Sendmail.findById(req.params.id).then(sendmail => {
        res.json(sendmail);
    });
};

//Update a Sendmail
exports.update = (req, res) => {
    let sendmail = req.body;
    let id = req.body.id;
    Sendmail.update(sendmail,
                { where: {id: id} }
                ).then(() => {
                    res.status(200).json({msg:"updated successfully a sendmail with id = " + id});
                });    
};

//Delete a Sendmail by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Sendmail.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully a sendmail with id = ' + id});
    });
};

//Edit a Sendmail by Id
exports.edit = (req, res) => {
	const id = req.params.id;
	Sendmail.edit({
		wherer: { id: id }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a sendmail with id = ' + id});
	});
};