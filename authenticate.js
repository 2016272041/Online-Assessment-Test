//connection establish to sequlize mysql functions //
//sequelize initilizations//
//connect via mysql server functions using sequelize database//
const Sequelize = require('sequelize');

//sequelize path setup//
const path = 'mysql://root:root@localhost:3306/testdb';
const sequelize = new Sequelize(path, { operatorsAliases: false });

//authenticate sequelize functions//
sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
}).catch(err => {
    console.error('unable to connect to the databse:', err);
}).finally(() => {
    sequelize.close();
});

//sequelize path setup operator alias files function true//
const sequelize = new Sequelize(path, { operatorsAliases: true });

//authenticate sequelize function with operatoralias true //
sequelize.authenticate().then(() => {
    console.log('Connection established successfully');
}).catch(err => {
    console.error('unable to connect to the database:', err);
}).finally(() => {
    sequelize.close();
});
