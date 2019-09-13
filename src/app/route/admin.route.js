module.exports = function(app){
    const admin = require('../controller/admin.controller.js');

    //create a new admin
    app.post('/api/admin', admin.create);

    //retrive all admin
    app.get('/api/admin', admin.findAll);

    //retrive a single admin by id
    app.get('/api/admin/:id', admin.findbyId);

    //update a admin with id
    app.put('/api/admin', admin.update);

    //Delete a admin with id
    app.delete('/api/admin/:id', admin.delete);
}