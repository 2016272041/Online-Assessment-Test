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
      questions1: "What is your home network",
      questions2: "What is the diffrence between vulnerability and risk",
      questions3: "How do you go about securing server",
      questions4: "Why is DNS monitoring important",
      questions5: "What port is ping work over",
      questions6: "what is diffrence between decoding, encypting and hashing",
      questions7: "What is SSL",
      questions8: "What are the diffrence between HTTP.HTTPS,SSL and SSH",
      questions9: "What sorts of anamolyse would you idendify comparisoned systems",
      questions10: "How would you strengthen user authentication",
      createdAt: 15-10-19,
      updatedAt: 15-10-19,
      option1: "LAN",
      option2: "WAN",
      option3: "TELNET",
      option4: "MS-DOS",
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
        questions: "What is Runtime Environment",
        questionstypeid: 1,
        mcqoption: "Java Runtime Environment",
        answered: "option2",
        answers: "James Goesling"
      }
    ]

    let userregs = [
      {
        userid: 1,
        name: "Shiva",
        username: "Shiva2016272041",
        email: "sivakumar@venzoconsulting.com",
        password: "Si4@si7373198816",
        createdAt: 14-10-19,
        updatedAt: 14-10-19        
      }
    ]

    let assigners = [
      {
        id:1,
        userid: 1,
        name: "Sivakumar",
        username: "Shiva",
        email: "sivakumar@venzoconsulting.com",
        testid: 2,
        testname: "Network Analyse",
        testdate: 29-09-19,
        questions1: "Five core functions of efffective cybersecurity",
        option1: "idendity and protect",
        option2: "respond",
        option3: "request",
        option4: "detect and recover"
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

