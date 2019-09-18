const db = require('../config/db.config');
const Userreg = db.userreg;

//post a userreg
exports.create = (req, res) => {
    //Save to MySQL database
    let userreg = req.body;
    Userreg.create(usereg).then(result => {
        // Send created userreg to client
        res.json(result);
    });
};

//Fetch all Userreg 
exports.findAll = (req, res) => {
    Userreg.findAll().then(userreg => {
        // Send all userreg to client
        res,json(usereg);
    });
};

//Fetch a userreg by id
exports.findById = (req, res) => {
    Userreg.findById(req.params.userid).then(Userreg => {
        res.json(userreg);
    });
};

//Delete a Userreg by Id
exports.delete = (req, res) => {
    let userid = req.body.userid;
    Userreg.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg: 'deleted successfully a userreg with userid = ' + userid});
    });
}

//update a userreg
exports.update = (req, res) => {
    let usereg = req.body;
    let userid = req.body.userid;
    Userreg.update(usereg,
                    { where: {userid: userid} }
                    ).then(() => {
                        res.status(200).json({msg:"updated successfully a with a userid = " + userid});
                    });
};

//Edit a userreg by userid
exports.edit = (req, res) => {
    const userid = req.params.userid;
    Userreg.edit({
        wherer: { id: id }
    }).then(() => {
        res.status(200).json({msg:"edited successfully a with a id = " + userid});
    });
};