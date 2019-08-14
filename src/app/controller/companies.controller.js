const db = require('../config/db.config.js');
const Companies = db.companies;

// Post a Companies
exports.create = (req, res) => {	
	// Save to MySQL database
	let companies = req.body;
	Companies.create(companies).then(result => {		
		// Send created companies to client
		res.json(result);
	});
};
 
// Fetch all companies
exports.findAll = (req, res) => {
	Companies.findAll().then(companies => {
	  // Send all companies to Client
	  res.json(companies);
	});
};

// Find a company by Id
exports.findById = (req, res) => {	
	Companies.findById(req.params.companiesId).then(companies => {
		res.json(companies);
	})
};
 
// Update a Companies
exports.update = (req, res) => {
	let companies = req.body;
	let id = req.body.id;
	Companies.update(companies, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a companies with id = " + id});
				   });	
};
 
// Delete a Companies by Id
exports.delete = (req, res) => {
	const id = req.params.companiesId;
	Companies.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a companies with id = ' + id});
	});
};

//Edit a Companies by Id
exports.edit = (req, res) => {
	const id = req.params.companiesId;
	Companies.edit({
		wherer: { id: id }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a company with id = ' + id});
	});
};