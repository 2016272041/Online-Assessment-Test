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

const db = require('./src/app/config/db.config.js');

//force : true will executing the table 
db.sequelize.sync({force: true}).then(() => {
  console.log('Execute and Resync with {force: false }');
  initial();
});

require('./src/app/route/questions.route.js')(app);
require('./src/app/route/tests.route.js')(app);
require('./src/app/route/company.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

function initial(){

  var questions = [
    {
      id: 1,
      questions1: "Who is father of JAVA",
      questions2: "Abbreviation of XHTML",
      questions3: "What is diffrent between 'let' and 'var'",
      createdAt: "30-JUN-19",
      updatedAt: "02-Jul-19"
    },
    {
      id: 2,
      questions1: "What is Typescript",
      questions2: "Which is following right syntax for arrow function",
      questions3: "Which HTML tag do we use to put the Javascript",
      createdAt: "03-JUL-19",
      updatedAt: "04-JUL-19"
    },
    {
      id: 3,
      questions1: "What is the diffrent between == and ===",
      questions2: "Which is the following NOT method of an Array",
      questions3: "Which HTML tag used to highlights the fonts",
      createdAt: "04-JUL-19",
      updatedAt: "03-JUL-19"
    }
  ]

    let tests = [
      {
        testid: 1,
        testname: "Multiple Choice Questions",
        testcreator: "Johnson"
      },
      {
        testid: 2,
        testname: "Fill in the Blanks",
        testcreator: "Mark"
      }
    ]

    let company = [
      {
        companyid: 1024,
        companyname: "Venzo",
        testname: "Multiple Choice Questions",
        testdate: 06-06-19
      },
      {
        companyid: 1026,
        companyname: "Ant Works",
        testname: "Multiple Choice Questions",
        testdate: 07-06-19
      }
    ]

  // Init data -> save to MySQL
  const Questions = db.questions;
  for (let i = 0; i < questions.length; i++) { 
    Questions.create(questions[i]);  
  }

  // Init data -> save to MySQL
  const Tests = db.Tests;
  console.log
  for (let i = 0; i < tests.length; i++)  {
    Tests.create(tests[i])
  }

  //Init data -> save to MySQL
  const Company = db.Company;
  console.log
  for (let i = 0; i < company.length; i++) {
    Company.create(company[i]);
  }
}