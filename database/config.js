/** 
 * database connection using sequelize 
 * intilize the sequelize function 
 * sequlize configuration for localhost
*/
const sequelize = require('sequelize');

// model require for sequlize table operations//
const Model = sequlize.Model;

// passing parameters //

const sequelize = new sequelize('onlineass', 'root', 'Sqladmin_1', {
    host: 'localhost',
    dialect: mysql
});

//option 2: passing a connection URI
const sequelize = new sequelize('mysql://user:root/onlineass');

//sqlite settings//
const sequelize = new sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
})

//pool threading connection //
const sequelize = new sequelize(/*....*/{
    //pool declaration//
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Test the connection //
sequelize.authenticate()
            .then(() => {
                console.log('Connection has been Sucessfully Established');
            })
            .catch(err => {
                console.error('unable to connect server: ', err);
            });

// Modeling a table //

class user extends Model { }
user.init({
    firstName: {
        type:sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize.STRING,
    }, 
    user: {
        sequelize,
        ModelName: 'user'
    }
});

//changing the default model options //

const sequelize = new sequelize(ConnectionURI,
    {
        define: {
            //declare the timestamp function//
            timestamp: false

        }
    });
    
// extends the model //

class Foo extends Model{ }
    Bar.init({/*.....*/}, {
        sequelize,
        timestamp: true
    });