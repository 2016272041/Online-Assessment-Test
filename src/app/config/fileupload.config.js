const multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, __basedir + '/resources/static/assets/uploads/')
	},
	filename: (req, file, cb) => {
	  cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
	}
});

var fileupload = multer({storage: storage});

module.exports = fileupload;