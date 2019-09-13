const db = require('../config/db.config.js');
const Admin = db.admin;

//post a Admin 
exports.create = (req, res) => {
    // Save to MySQL database
    let admin = req.body;
    Admin.create(admin).then(result => {
        //Send created admin to client
        res.json(result);
    });
};

//Fetch all admin
exports.findAll = (req, res) => {
    Admin.findAll().then(admin => {
        // Send all admin to client
        res.json(admin);
    });
};

//Find a admin by id 
exports.findbyId = (req, res) => {
    Admin.findById(req.params.id).then(admin =>{
        res.json(admin);
    })
}

// Update a admin
exports.update = (req, res) => {
    let admin = req.body;
    let id = req.body.id;
    Admin.update(admin,
                    { where: {id: id} }
                    ).then(() => {
                        res.status(200).json({msg:"updated successfully a admin with id = " + id});
                    });
};

//Delete a admin by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    Admin.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully a admin with id = '+ id});
    });
};

//Edit a admin by Id
exports.edit = (req, res) => {
    const id = req.params.id;
    Admin.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'edited successfully a admin with id = ' + id});
    });
};

