module.exports = function(app) {
 
    const companies = require('../controller/companies.controller.js');
 
    // Create a new companies
    app.post('/api/companies', companies.create);
 
    // Retrieve all companies
    app.get('/api/companies', companies.findAll);
 
    // Retrieve a single Companies by Id
    app.get('/api/companies/:companiesId', companies.findById);
 
    // Update a Companies with Id
    app.put('/api/companies', companies.update);
 
    // Delete a Companies with Id
    app.delete('/api/companies/:companiesId', companies.delete);
}