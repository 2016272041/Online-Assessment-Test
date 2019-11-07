// Heroku declaration process //
const express = require('express');
const app = express();
const path = require('path');

// Directory Name dist file folder //
app.use(express.static(__dirname + '/dist/ng6-quiz'));

// Listening Process Function //
app.listen(process.env.PORT || 8081);

//Get Function for sendfile strategy//
app.get('/*', function(req, res) {

//Get Application for directory name access//
    res.sendFile(path.join(__dirname + '/dist/ng6-quiz/index.html'));
})

//Heroku Port listening //
console.log('console listening!');

// After function listening for Heroku master