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
require('./src/app/route/registrations.route.js')(app);
require('./src/app/route/blogs.route.js')(app);
require('./src/app/route/answers.route.js')(app);
require('./src/app/route/mcqs.route.js')(app);
require('./src/app/route/userregs.route.js')(app);
require('./src/app/route/assigners.route.js')(app);

let router = require ('./src/app/route/file.route.js');
app.use('/', router);

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
      option1: "Dennis Ritchie",
      option2: "James Goseling",
      option3: "Martin Roderigus",
      option4: "Kevin Peterson",
      createdAt: "30-JUN-19",
      updatedAt: "02-Jul-19"
    },
    {
      id: 2,
      questions2: "Abbreviation of XHTML",
      option1: "Extensible Markup Language",
      option2: "Hypertext Markup Language",
      option3: "Document Type Definition",
      option4: "Extensible Hypertext Markup Language",
      createdAt: "30-JUN-19",
      updatedAt: "02-Jul-19"
    },
    {
      id: 3,
      questions3: "What is diffrent between 'let' and 'var'",
      option1: "Scoping Rules",
      option2: "Enclosing Blocks",
      option3: "Function Scope",
      option4: "Hoisted",
      createdAt: "09-SEP-19",
      updatedAt: "09-SEP-19",
    },
    {
      id: 4,
      questions1: "Data Structure Page Segmaentation",
      option1: "Memory Allocation",
      option2: "Data Hierarchy",
      option3: "Data Inheritence",
      option4: "Data Instances",
      createdAt: "09-SEP-19",
      updatedAt: "09-SEP-19",
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

    let registrations = [
      {
        id: 1,
        regid: 12,
        username: 2016272041,
        password: "Si7373198816",
        firstname: "Shiva",
        lastname: "Balachandran",
        createdAt: 09-08-19,
        updatedAt: 09-08-19
      }
    ]

    let file = [
      {
        id: 1,
        type: "pdf",
        name: "Sample Document",
        data: 6439345234,
        createdAt: 29-08-19,
        updatedAt: 29-08-19
      }
    ]

    let blogs = [
      {
        id: 1,
        title: "Sample Document",
        is_featured: "yes",
        is_active: "yes",
        image: 897235828523001,
        description: "Long Data Type"
      }
    ]

    let answers = [
      {
        id: 5,
        answers: "Data Inheritence"
      }
    ]

    let mcqs = [
      {
        id: 1,
        answers: "James Goesling"
      }
    ]

    let userregs = [
      {
        userid: 1,
        name: "Shiva",
        username: "SHIVA5374",
        email: "sivakumar@venzoconsulting.com",
        password: "Si7373198816",
        createdAt: 19-09-19,
        updatedAt: 19-09-19
      },
      {
        userid: 2,
        name: "Sakthi",
        username: "Sakthi2041",
        email: "balachandarsivakumar@gmail.com",
        password: "si7373198816",
        createdAt: 19-09-19,
        updatedAt: 19-09-19
      }
    ]

    let assigners = [
      {
        userid: 1,
        username: "Shiva",
        testid: 2,
        testname: "Network Analyse",
        testdate: 29-09-19,
        createdAt: 23-09-19,
        updatedAt: 21-09-19
      }
    ]

        

  // Init data -> save to MySQL
  const Questions = db.questions;
  console.log(db);
  console.log(db.questions);
  console.log(Questions);
  for (let i = 0; i < questions.length; i++) { 
    Questions.create(questions[i]);  
  }

  // Init data -> save to MySQL
  const Tests = db.tests;
  console.log(db);
  console.log(db.tests);
  console.log(Tests);
  for (let i = 0; i < tests.length; i++)  {
    Tests.create(tests[i])
  }

  //Init data -> save to MySQL
  const Companies = db.companies;
  console.log(db);
  console.log(db.companies);
  console.log(Companies);
  for (let i = 0; i < companies.length; i++) {
    Companies.create(companies[i]);
  }

  //Init data -> save to MySQL
  const Registrations = db.registrations;
  console.log(db);
  console.log(db.registrations);
  console.log(Registrations);
  for (let i = 0; i < registrations.length; i++) {
    Registrations.create(registrations[i]);
  }

  //Init data -> save to MySQL
  const File = db.file;
  console.log(db);
  console.log(db.file);
  console.log(File);
  for (let i = 0; i < file.length; i++) {
    File.create(file[i]);
  }

  //Init data -> save to MySQL
  const Blogs = db.blogs;
  console.log(db);
  console.log(db.blogs);
  console.log(blogs);
  for (let i = 0; i < file.length; i++) {
    Blogs.create(blogs[i]);
  }

  //Init data -> save to MySQL
  const Answers = db.answers;
  console.log(db);
  console.log(db.answers);
  console.log(answers);
  for (let i = 0; i < answers.length; i++) {
    Answers.create(answers[i]);
  }

  //Init data -> save to MySQL
  const Mcqs = db.mcqs;
  console.log(db);
  console.log(db.mcqs);
  console.log(mcqs);
  for (let i = 0; i < mcq.length; i++) {
    Mcqs.create(mcqs[i]);
  }

  //Init data -> save to MySQL
  const Userregs = db.userregs;
  console.log(db);
  console.log(db.userregs);
  console.log(userregs);
  for (let i = 0; i < userregs.length; i++) {
    Userregs.create(userregs[i]);
  }

  //Init data -> save to MySQL
  const Assigners = db.assigners;
  console.log(db);
  console.log(db.assigners);
  console.log(assigners);
  for (let i = 0; i < assigners.length; i++) {
    Assigners.create(assigners[i]);
  }
} 