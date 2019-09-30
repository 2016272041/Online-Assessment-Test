module.exports = function(app) {
    const randomizers = require('../controller/randomizers.controller.js');

    //create a new Randomizers
    app.post('/api/randomizers', randomizers.create);

    //Retrive all Randomizers
    app.get('/api/randomizers', randomizers.findAll);

    //Retrive a single randomizers by Id
    app.get('/api/randomizers/:userid', randomizers.findById);

    //Update a Randomizers with Id
    app.put('/api/randomizers', randomizers.update);

    // Delete a Randomizers with Id
    app.delete('/api/randomizers/:userid', randomizers.delete);
}