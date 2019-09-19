module.exports = function(app) {
 
    const userregs = require('../controller/userregs.controller.js');
 
    // Create a new Userregs
    app.post('/api/userregs', userregs.create);
 
    // Retrieve all Userregs
    app.get('/api/userregs', userregs.findAll);
 
    // Retrieve a single Userregs by userid
    app.get('/api/userregs/:userid', userregs.findById);
 
    // Update a Userregs with Id
    app.put('/api/userregs', userregs.update);
 
    // Delete a Userregs with Id
    app.delete('/api/userregs/:userid', userregs.delete);
}