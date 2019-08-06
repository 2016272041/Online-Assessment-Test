const db = require('../config/db.config.js');
const Company = db.company;

// Post a Company
exports.create = (req, res) => {	
	// Save to MySQL database
	let company = req.body;
	Company.create(company).then(result => {		
		// Send created company to client
		res.json(result);
	});
};
 
// Fetch all company
exports.findAll = (req, res) => {
	Company.findAll().then(company => {
	  // Send all company to Client
	  res.json(company);
	});
};

// Find a company by Id
exports.findById = (req, res) => {	
	Company.findById(req.params.companyId).then(company => {
		res.json(company);
	})
};
 
// Update a Company
exports.update = (req, res) => {
	let company = req.body;
	let id = req.body.id;
	Company.update(company, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a company with id = " + id});
				   });	
};
 
// Delete a Company by Id
exports.delete = (req, res) => {
	const id = req.params.companyId;
	Company.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a company with id = ' + id});
	});
};

//Edit a Company by Id
exports.edit = (req, res) => {
	const id = req.params.companyId;
	Company.edit({
		wherer: { id: id }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a company with id = ' + id});
	});
};