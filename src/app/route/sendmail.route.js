module.exports = function(app) {
    
    const sendmail = require('../controller/sendmail.controller.js');

    //Create a new Sendmail
    app.post('/api/sendmail', sendmail.create);

    //Retrive all Sendmail
    app.get('/api/sendmail', sendmail.findAll);

    //Retrieve a Sendmail with Id
    app.put('/api/sendmail', sendmail.update);

    //Delete a Sendmail with Id
    app.delete('/api/sendmail/:id', sendmail.delete);
}