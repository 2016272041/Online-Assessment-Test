const db = require('../config/db.config.js');
const Userregs = db.userregs;

//post a userregs
exports.create = (req, res) => {
    //Save to MySQL database
    let userregs = req.body;
    Userregs.create(userregs).then(result => {
        // Send created userreg to client
        res.json(result);
    });
};

//Fetch all Userregs 
exports.findAll = (req, res) => {
    Userregs.findAll().then(userregs => {
        // Send all userregs to client
        res.json(userregs);
    });
};

//Fetch a userregs by id
exports.findById = (req, res) => {
    Userregs.findById(req.params.userid).then(userregs => {
        res.json(userregs);
    });
};

//Delete a Userregs by Id
exports.delete = (req, res) => {
    let userid = req.body.userid;
    Userregs.destroy({
        where: { userid: userid }
    }).then(() => {
        res.status(200).json({msg: 'deleted successfully a userregs with userid = ' + userid});
    });
}

//update a userregs
exports.update = (req, res) => {
    let userregs = req.body;
    let userid = req.body.userid;
    Userregs.update(userregs,
                    { where: {userid: userid} }
                    ).then(() => {
                        res.status(200).json({msg:"updated successfully a with a userid = " + userid});
                    });
};

//Edit a userregs by userid
exports.edit = (req, res) => {
    const userid = req.params.userid;
    Userregs.edit({
        wherer: { userid: userid }
    }).then(() => {
        res.status(200).json({msg:"edited successfully a with a userid = " + userid});
    });
};