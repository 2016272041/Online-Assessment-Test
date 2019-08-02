const Sequelize = require('sequelize');
const sequelize = new Sequelize('connect', 'mysql', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    //MySQl only 
    storage: 'path/to/database.mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connection has been extablished successfully');
}).catch(err => {
    console.error('Unable to connect to the database: ', err);
});

const Questions = sequelize.define('questions', {
    questions1: {
        type: Sequelize.STRING
    },
    questions2: {
        type: Sequelize.STRING
    },
    questions3: {
        type: Sequelize.STRING
    },
});

//force: true will drop the connection true drop the table already //
Questions.sync({force: true}).then(() => {
    //Table created
    return Questions.create({
        questions1: 'What is Lambda Functions',
        questions2: 'Abbreviations of DTD',
        questions3: 'Shell scripting functions'
    });
});

questions.sync({force: true}).then(() => {
    //Table created
    return Questions.create({
        questions1: 'what is Incoterms',
        questions2: 'Abbreviations of ACID property',
        questions3: 'Database default connection port'
    });
});

