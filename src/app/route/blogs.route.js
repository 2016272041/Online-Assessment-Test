module.exports = function(app) {
    const blogs = require('../controller/blogs.controller.js');

    //create a new Blogs
    app.post('/api/blogs', blogs.create);

    //retrive all Blogs
    app.get('/api/blogs', blogs.findAll);

    //Retrive a single Blogs by ID
    app.get('/api/blogs/:blogsId', blogs.findById);

    //Update a Blogs with Id
    app.put('/api/blogs', blogs.update);

    //Delete a Blogs with Id
    app.delete('/api/blogs/:blogsId', blogs.delete);
}