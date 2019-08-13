module.exports = function(app) {
 
    const registration = require('../controller/registration.controller.js');
 
    // Create a new Registration
    app.post('/api/registration', registration.create);
 
    // Retrieve all Registration
    app.get('/api/registration', registration.findAll);
 
    // Retrieve a single Registration by Id
    app.get('/api/registration/:registrationId', registration.findById);
 
    // Update a Registration with Id
    app.put('/api/registration', registration.update);
 
    // Delete a Registration with Id
    app.delete('/api/registration/:registrationId', registration.delete);
}