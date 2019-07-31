var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const db = require('./config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});

require('./route/questions.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

function initial(){

  let questions = [
    {
      id: 1,
      questions1: "Who is father of JAVA",
      questions2: "Abbreviation of XHTML",
      questions3: "What is diffrent between 'let' and 'var'"
    },
    {
      id: 2,
      questions1: "What is Typescript",
      questions2: "Which is following right syntax for arrow function",
      questions3: "Which HTML tag do we use to put the Javascript"
    },
    {
      id: 3,
      questions1: "What is the diffrent between == and ===",
      questions2: "Which is the following NOT method of an Array",
      questions3: "Which HTML tag used to highlights the fonts"
    }
  ]

  // Init data -> save to MySQL
  const Questions = db.Questions;
  for (let i = 0; i < questions.length; i++) { 
    Questions.create(questions[i]);  
  }
}