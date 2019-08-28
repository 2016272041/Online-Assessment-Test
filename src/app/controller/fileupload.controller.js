const fs = require('fs');
const db = require('../config/db.config.js');
const Fileupload = db.fileupload;
 
// Upload a Multipart-File then saving it to MySQL database
exports.upload = (req, res) => {	
	Fileupload.create({
		type: req.file.mimetype,
		name: req.file.originalname,
		data: fs.readFileSync(__basedir + '/resources/static/assets/uploads/' + req.file.filename)
	}).then(fileupload => {
		try{
			fs.writeFileSync(__basedir + '/resources/static/assets/tmp/' + fileupload.name, fileupload.data);		
			
			// exit node.js app
			res.json({'msg': 'File uploaded successfully!', 'file': req.file});
		}catch(e){
			console.log(e);
			res.json({'err': e});
		}
	})
};