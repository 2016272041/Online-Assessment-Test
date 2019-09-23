module.exports = function(app) {
    const assigners = require('../controller/assigners.controller.js');

    //create a new assigners
    app.post('/api/assigners', assigners.create);

    //Retrive all assigners
    app.get('/api/assigners', assigners.findAll);

    //Retrive a single Assigners by Id
    app.get('/api/assigners/:userid', assigners.findById);

    //Update a assigners with id
    app.put('/api/assigners', assigners.update);
    
    //Delete a Assigners with Id
    app.delete('/api/assigners/"assignersId', assigners.delete);
}