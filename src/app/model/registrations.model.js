module.exports = (sequelize, Sequelize) => {
    const Registrations = sequelize.define('registrations', {
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
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    });

    return Registrations;
} 