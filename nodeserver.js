// Heroku declaration process //
const express = require('express');
const app = express();
const path = require('path');

// Directory Name dist file folder //
app.use(express.static(__dirname + '/dist'));

// Listening Process Function //
app.listen(process.env.PORT || 8080);

//Get Function for sendfile strategy//
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

//Heroku Port listening //
console.log('console listening!');