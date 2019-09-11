module.exports = function(app) {
    const answers = require('../controller/answers.controller.js');

    //create a new Answers
    app.post('/api/answers', answers.create);

    //retrival all Answers
    app.get('/api/answers', answers.findAll);

    //retrival a single answers by id
    app.get('/api/answers/:id', answers.findById);

    //update a answers with id
    app.put('/api/answers', answers.update);

    //delete a answers with id
    app.delete('/api/answers/:id', answers.delete);
}