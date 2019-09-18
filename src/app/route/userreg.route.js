module.exports = function(app) {
 
    const userreg = require('../controller/userreg.controller.js');
 
    // Create a new Userreg
    app.post('/api/userreg', userreg.create);
 
    // Retrieve all Userreg
    app.get('/api/userreg', userreg.findAll);
 
    // Retrieve a single Userreg by userid
    app.get('/api/userreg/:userid', userreg.findById);
 
    // Update a Userreg with Id
    app.put('/api/userreg', userreg.update);
 
    // Delete a Userreg with Id
    app.delete('/api/userreg/:userid', userreg.delete);
}