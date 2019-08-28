const db = require('../config/db.config.js');
const Registrations = db.registrations;

//Post a Registration data
exports.create = (req, res) => {
    let registrations = req.body;
    Registrations.create(registrations).then(result => {
        // Send created registration to client
        res.json(result);
    });
};

//Fetch all Registrations
exports.findAll = (req, res) => {
    Registrations.findAll().then(registrations => {
        // Send all Registration to client
        res.json(registrations);
    });
};

//Find a Registration by Id
exports.findById = (req, res) => {
    Registrations.findById(req.params.registrationsId).then(registrations => {
        res.json(registrations);
    })
};

//Update a Registration by Id
exports.update = (req, res) => {
    let registrations = req.body;
    let regid = req.body.regid;
    Registrations.update(registrations,
            { where: {regid: regid} }
        ).then( () => {
            res.status(200).json({msg:"updated successfully a registration with regid = " + regid});
        });
};

// Delete a Registration by Id
exports.delete = (req, res) => {
	const regid = req.params.registrationsId;
	Registrations.destroy({
	  where: { regid: regid }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a registration with regid = ' + regid});
	});
};

//Edit a Registration by Id
exports.edit = (req, res) => {
	const regid = req.params.registrationsId;
	Registrations.edit({
		wherer: { regid: regid }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a registration with regid = ' + regid});
	});
};