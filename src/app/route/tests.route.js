module.exports = function(app) {
 
    const questions = require('../controller/tests.controller.js');
 
    // Create a new Tests
    app.post('/api/tests', tests.create);
 
    // Retrieve all Tests
    app.get('/api/tests', tests.findAll);
 
    // Retrieve a single Tests by Id
    app.get('/api/tests/:testsId', tests.findById);
 
    // Update a Tests with Id
    app.put('/api/tests', tests.update);
 
    // Delete a Tests with Id
    app.delete('/api/tests/:testsId', tests.delete);
}