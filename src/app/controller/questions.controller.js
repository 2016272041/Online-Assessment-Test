const db = require('../config/db.config.js');
const Questions = db.questions;

// Post a Questions
exports.create = (req, res) => {	
	// Save to MySQL database
	let questions = req.body;
	Questions.create(questions).then(result => {		
		// Send created questions to client
		res.json(result);
	});
};
 
// Fetch all Questions
exports.findAll = (_req, res) => {
	Questions.findAll().then(questions => {
	  // Send all questions to Client
	  res.json(questions);
	});
};

// Find a Questions by Id
exports.findById = (req, res) => {	
	Questions.findById(req.params.questionsId).then(questions => {
		res.json(questions);
	})
};
 
// Update a Questions
exports.update = (req, res) => {
	let questions = req.body;
	let id = req.body.id;
	Questions.update(questions, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a questions with id = " + id});
				   });	
};
 
// Delete a Questions by Id
exports.delete = (req, res) => {
	const id = req.params.questionsId;
	Questions.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a questions with id = ' + id});
	});
};

//Edit a Questions by Id
exports.edit = (req, res) => {
	const id = req.params.questionsId;
	Questions.edit({
		wherer: { id: id }
	}).then(() => {
		res.status(200).json({msg: 'edited successfully a questions with id = ' + id});
	});
};