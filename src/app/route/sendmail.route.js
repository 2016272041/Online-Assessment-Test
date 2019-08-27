module.exports = function(app) {
    const sendmail = require('../controller/sendmail.controller.js');

    //create a new Sendmail
    app.post('/api/sendmail', sendmail.create);

    //retieve all Sendmail
    app.get('/api/sendmail', sendmail.findAll);

    //retrive a single sendmail by id
    app.get('/api/sendmail/:sendmailId', sendmail.findById);

    //Update a Sendmail with Id
    app.put('/api/sendmail',sendmail.update);

    //Delete a Sendmail with Id
    app.delete('/api/sendmail/:sendmailId', sendmail.delete);
}