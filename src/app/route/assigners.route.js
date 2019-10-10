module.exports = function(app) {
    const assigners = require('../controller/assigners.controller.js');
    const userregs = require('../controller/userregs.controller.js');
    const questions = require('../controller/questions.controller.js');
    const tests = require('../controller/tests.controller.js');

    //create a new assigners
    app.post('/api/assigners', assigners.create);
    //create a new userregs
    app.post('/api/userregs', userregs.create);
    //creaet a new questions
    app.post('/api/questions', questions.create);
    //create a new tests
    app.post('/api/tests', tests.create);
    
    //Retrive all assigners
    app.get('/api/assigners', assigners.findAll);
    //Retrive all userregs
    app.get('/api/userregs', userregs.findAll);
    //Retrive all questions
    app.get('/api/questions', questions.findAll);
    //Retrive all tests
    app.get('/api/tests', tests.findAll);

    //Retrive a single Assigners by Id
    app.get('/api/assigners/:userid', assigners.findById);
    //Retrive a single Userregs by Id
    app.get('/api/assigners/:id', userregs.findById);
    //Retrive a single questions by Id
    app.get('/api/questions/:id', questions.findById);
    //Retrive a single tests by Id
    app.get('/api/tests/:id', tests.findById);

    //Update a assigners with id
    app.put('/api/assigners', assigners.update);
    //Update a userregs with id
    app.put('/api/userregs', userregs.update);
    //Update a questions with id
    app.put('/api/questions', questions.update);
    //update a tests with id
    app
    
    //Delete a Assigners with Id
    app.delete('/api/assigners/"assignersId', assigners.delete);
}