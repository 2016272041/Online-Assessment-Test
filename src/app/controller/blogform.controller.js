const db = require('../config/db.config.js');
const Blogform = db.blogform;

//post a Blogform
exports.create = (req, res) => {
    //Save to MySQL database
    let blogform = req.body;
    Blogform.create(blogform).then(result => {
        //send created blogform to client
        res.json(result);
    });
} ;

//fetch all blogform
exports.findAll = (req, res) => {
    Blogform.findAll().then(blogform => {
        // Send all blogform to client
        res.json(blogform);
    });
};

//Find a Blogform by Id
exports.findById = (req, res) => {
    Blogform.findById(req.params.blogformId).then(blogform => {
        res.json(blogform);
    });
};

// Update a Blogform
exports.update = (req, res) => {
	let blogform = req.body;
	let id = req.body.id;
	Blogform.update(blogform, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a blogform with id = " + id});
				   });	
};

// Delete a Blogform by Id
exports.delete = (req, res) => {
	const id = req.params.blogformId;
	Blogform.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a blogform with id = ' + id});
	});
};

//Edit a Blogform by Id
exports.edit = (req, res) => {
    const id = req.params.blogformId;
    Blogform.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a blogform with id = ' + id});
    });
};