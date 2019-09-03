const db = require('../config/db.config.js');
const Blogs = db.blogs;

// Post a Blogs //
exports.create = (req, res) => {
    //Save to MYSQL database
    let blogs = req.body;
    Blogs.create(blogs).then(result => {
        //send created blogs to client
        res.json(result);
    });
};

//Fetch all Blogs
exports.findAll = (req, res) => {
    Blogs.findAll().then(blogs => {
        //send all blogs to client
        res.json(blogs);
    });
};

//Find a blogs by Id
exports.findById = (req, res) => {
    Blogs.findById(req.params.blogsId).then(blogs => {
        res.json(blogs);
    });
};

//Update a Blogs
exports.update = (req, res) => {
    let blogs = req.body;
    let id = req.body.id;
    Blogs.update(blogs,
                { where: {id: id} }
                ).then (() => {
                    res.status(200).json({msg: "updated successfully a blogs with id = " + id});
                });
};

//Delete a blogs by Id
exports.delete = (req, res) => {
    const id = req.params.blogsId;
    Blogs.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg: "Deleted Successfully a blog with id = " + id});
    });
};

//Edit a Blog by Id
exports.edit = (req, res) => {
    const id = req.params.blogsId;
    Blogs.edit({
            wherer: { id: id }
        }).then(() => {
            res.status(200).json({msg: 'edited successfully a company with id = ' + id});
    });
};