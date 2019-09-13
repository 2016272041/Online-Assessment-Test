module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define('admin', {
        id: {
            type: Sequelize.NUMBER
        },
        questionname: {
            type: Sequelize.STRING
        },
        firstset:{
            type: Sequelize.STRING
        },
        secondset:{
            type: Sequelize.STRING
        },
        thirdset:{
            type: Sequelize.STRING
        },
        fourthset:{
            type: Sequelize.STRING
        },
        setfirstopts:{
            type: Sequelize.STRING
        },
        setsecondopts:{
            type: Sequelize.STRING
        },
        setthirdopts:{
            type: Sequelize.STRING
        },
        setfourthopts:{
            type: Sequelize.STRING
        },
        createdAt:{
            type: Sequelize.DATE
        },
        updatedAt:{
            type: Sequelize.DATE
        }
    });
    return Admin;
}