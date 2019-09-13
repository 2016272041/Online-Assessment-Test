module.exports = function(app) {
    const mcqs = require('../controller/mcqs.controller.js');

    //create a new Mcq
    app.post('/api/mcqs', mcqs.create);

    //retrival all Mcq
    app.get('/api/mcqs', mcqs.findAll);

    //retrival a single mcq by id
    app.get('/api/mcqs/:id', mcqs.findById);
}