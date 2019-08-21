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
  console.log('Drop with Resync with {force: true }');
  initial();
});

require('./src/app/route/questions.route.js')(app);
require('./src/app/route/tests.route.js')(app);
require('./src/app/route/companies.route.js')(app);
require('./src/app/route/registration.route.js')(app);
require('./src/app/route/blogform.route.js')(app);
require('./src/app/route/sendmail.route.js')(app);
require('./src/app/route/product.route.js')(app);
 
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
    },
    {
      id: 4,
      questions1: "What is Design and Patterns",
      questions2: " In SOLID principles 'S' stands",
      questions3: "In SOLID principle, O stands",
      createdAt: "13-AUG-19",
      updatedAt: "13-AUG-19"
    }
  ]

    let tests = [
      {
        id: 1,
        testname: "Multiple Choice Questions",
        testcreator: "Johnson",
        createdAt: 20-08-19,
        updatedAt: 20-08-19
      },
      {
        id: 2,
        testname: "Fill in the Blanks",
        testcreator: "Mark",
        createdAt: 20-08-19,
        updatedAt: 20-08-19
      },
      {
        id: 3,
        testname: "Match The Following",
        testcreator: "Williams",
        createdAt: 20-08-19,
        updatedAt: 20-08-19
      },
      {
        id: 7,
        testname: "Split the Words",
        testcreator: "Joel",
        createdAt: 09-08-19,
        updatedAt: 09-08-19
      }
    ]

    let companies = [
      {
        id: 1024,
        companiesname: "Venzo",
        testname: "Multiple Choice Questions",
        testdate: 06-06-19
      },
      {
        id: 1026,
        companiesname: "Ant Works",
        testname: "Multiple Choice Questions",
        testdate: 07-06-19
      },
      {
        id: 1023,
        companiesname: "Surecomp",
        testname: "Tickets Debugging",
        testdate: 05-08-19
      },
      {
        id: 1024,
        companiesname: "Verizon",
        testname: "Network Bandwidth Test",
        testdate: 12-08-19
      }
    ]

    let registration = [
      {
        regid: 1,
        username: 2016272041,
        password: "Si7373198816",
        firstname: "Shiva",
        lastname: "Balachandran"
      }
    ]

    let blogform = [
      {
        id: 1,
        title: "Angular Core",
        description: "Angular App Development",
        is_featured: "Yes",
        is_active: "Yes",
        image: "Angular ICON"
      }
    ]

    let sendmail = [
      {
        id: 1,
        name: "shiva",
        email: "sivakumar@venzoconsulting.com",
        phone: +917373198816,
        messsage: "Send Updated Information",
        createdat: 20-08-19,
        updatedat: 20-08-19
      }
    ]

    let product = [
      {
        id: 1,
        name: "shiva",
        size: 782.895,
        progress: 75,
        status: "complete",
        action: "complete"
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
  const Companies = db.Companies;
  console.log
  for (let i = 0; i < companies.length; i++) {
    Companies.create(companies[i]);
  }

  //Init data -> save to MySQL
  const Registration = db.Registration;
  console.log
  for (let i = 0; i < registration.length; i++) {
    Registration.create(registration[i]);
  }

  //Init data -> save to MySQL
  const Blogform = db.Blogform;
  console.log
  for (let i = 0; i < blogform.length; i++){
    Blogform.create(blogform[i]);
  }

  //Init data -> save to MySQL
  const Sendmail = db.Sendmail;
  console.log
  for(let i = 0; i < sendmail.length; i++){
    Sendmail.create(sendmail[i]);
  }

  //Init data -> save to MySQL
  const Product = db.Product;
  console.log
  for(let i = 0; i < product.length; i++){
    Product.create(product[i]);
  }
 } 