module.exports = function(app) {
 
    const company = require('../controller/company.controller.js');
 
    // Create a new company
    app.post('/api/company', company.create);
 
    // Retrieve all company
    app.get('/api/company', company.findAll);
 
    // Retrieve a single Company by Id
    app.get('/api/company/:companyId', company.findById);
 
    // Update a Company with Id
    app.put('/api/company', company.update);
 
    // Delete a Company with Id
    app.delete('/api/company/:companyId', company.delete);
}