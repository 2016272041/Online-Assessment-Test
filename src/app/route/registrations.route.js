module.exports = function(app) {
 
    const registrations = require('../controller/registrations.controller.js');
 
    // Create a new Registration
    app.post('/api/registrations', registrations.create);
 
    // Retrieve all Registration
    app.get('/api/registrations', registrations.findAll);
 
    // Retrieve a single Registration by Id
    app.get('/api/registrations/:registrationsId', registrations.findById);
 
    // Update a Registration with Id
    app.put('/api/registrations', registrations.update);
 
    // Delete a Registration with Id
    app.delete('/api/registrations/:registrationsId', registrations.delete);
}