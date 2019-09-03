var stream = require('stream');
const db = require('../config/db.config.js');
const Files = db.files;

exports.create = (req, res) => {
    //Save to MySQL database
    let files = req.body;
    Files.create(files).then(result => {
        //send uploaded files to client
        res.json(result);
    });
};

exports.findAll = (req, res) => {
    Files.findall().then(files => {
        res.json(files);
    });
};

exports.findById = (req, res) => {
    Files.findById(req.params.id).then(files => {
        res.json(files);
    });
};

exports.uploadFile = (req, res) => {
    Files.create({
        type: req.files.mimetype,
        name: req.files.originalname,
        data: req.files.buffer
    }).then(() => {
        res.json({msg:'File upload successfully! -> filename = ' + req.files.originalname});
    })
}

exports.listAllFiles = (req, res) => {
    Files.findAll({attributes: ['id', 'name']}).then(files => {
        res.json(files);
    });
}

exports.downloadFile = (req, res) => {
    Files.findById(req.params.id).then(files => {
        var fileContents = Buffer.from(files.data, "base64");
        var readStream = new stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-dispositiion', 'attachment; filename=' + files.name);
        res.set('Content-Type', files.type);

        readStream.pipe(res);
    })
}