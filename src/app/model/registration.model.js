module.exports = (sequelize, Sequelize) => {
    const Registration = sequelize.define('registration', {
        regid: {
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        }
    });

    return Registration;
} 