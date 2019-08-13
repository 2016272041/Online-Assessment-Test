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
	let companiesid = req.body.companiesid;
	Companies.update(companies, 
					 { where: {companiesid: companiesid} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a companies with id = " + companiesid});
				   });	
};
 
// Delete a Companies by Id
exports.delete = (req, res) => {
	const companiesid = req.params.companiesId;
	Companies.destroy({
	  where: { companiesid: companiesid }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a companies with id = ' + companiesid});
	});
};

//Edit a Companies by Id
exports.edit = (req, res) => {
	const companiesid = req.params.companiesId;
	Companies.edit({
		wherer: { companiesid: companiesid }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a company with id = ' + companiesid});
	});
};