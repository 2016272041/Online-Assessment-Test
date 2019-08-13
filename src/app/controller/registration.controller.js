const db = require('../config/db.config.js');
const Registration = db.registration;

//Post a Registration data
exports.create = (req, res) => {
    //save to MYSQL DATABASE
    let registration = req.body;
    Registration.create(registration).then(result => {
        // Send created registration to client
        res.json(result);
    });
};

//Fetch all Registrations
exports.findAll = (req, res) => {
    Registration.findAll().then(registration => {
        // Send all Registration to client
        res.json(registration);
    });
};

//Find a Registration by Id
exports.findById = (req, res) => {
    Registration.findById(req.params.registrationId).then(registration => {
        res.json(registration);
    })
};

//Update a Registration by Id
exports.update = (req, res) => {
    let registration = req.body;
    let regid = req.body.regid;
    Registration.update(registration,
            { where: {regid: regid} }
        ).then( () => {
            res.status(200).json({msg:"updated successfully a registration with regid = " + regid});
        });
};

// Delete a Registration by Id
exports.delete = (req, res) => {
	const regid = req.params.registrationId;
	Registration.destroy({
	  where: { regid: regid }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a registration with regid = ' + regid});
	});
};

//Edit a Registration by Id
exports.edit = (req, res) => {
	const regid = req.params.registrationId;
	Registration.edit({
		wherer: { regid: regid }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a registration with regid = ' + regid});
	});
};