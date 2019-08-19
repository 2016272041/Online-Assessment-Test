module.exports = function(app) {
    const blogform = require('../controller/blogform.controller.js');

    //create a new blogform
    app.post('/api/blogform', blogform.create);

    //Retrieve all Blogform
    app.get('/api/blogform', blogform.findAll);

    //Retrieve a single Blogform by Id
    app.get('/api/blogform/:blogformId', blogform.findById);

    //Update a Blogform with Id
    app.put('/api/blogform', blogform.update);

    //Delete a Blogform with Id
    app.delete('/api/blogform/:blogformId', blogform.delete);
}