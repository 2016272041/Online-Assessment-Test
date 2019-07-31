module.exports = function(app) {
 
    const questions = require('../controller/questions.controller.js');
 
    // Create a new Questions
    app.post('/api/questions', questions.create);
 
    // Retrieve all Questions
    app.get('/api/questions', questions.findAll);
 
    // Retrieve a single Questions by Id
    app.get('/api/questions/:questionsId', questions.findById);
 
    // Update a Questions with Id
    app.put('/api/questions', questions.update);
 
    // Delete a Questions with Id
    app.delete('/api/questions/:questionsId', questions.delete);
}